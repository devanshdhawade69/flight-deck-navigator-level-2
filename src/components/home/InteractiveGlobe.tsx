import { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Line, Html } from "@react-three/drei";
import * as THREE from "three";
import { FlightRoute, flightRoutes } from "@/data/flightRoutes";

// Convert lat/lng to 3D position on sphere
const latLngToVector3 = (lat: number, lng: number, radius: number): THREE.Vector3 => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
};

// Create arc curve between two points
const createArcCurve = (start: THREE.Vector3, end: THREE.Vector3, radius: number): THREE.Vector3[] => {
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const distance = start.distanceTo(end);
  mid.normalize().multiplyScalar(radius + distance * 0.15);
  
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  return curve.getPoints(50);
};

interface FlightArcProps {
  route: FlightRoute;
  radius: number;
  isSelected: boolean;
  onSelect: (route: FlightRoute | null) => void;
}

const FlightArc = ({ route, radius, isSelected, onSelect }: FlightArcProps) => {
  const startPos = latLngToVector3(route.from.lat, route.from.lng, radius);
  const endPos = latLngToVector3(route.to.lat, route.to.lng, radius);
  const arcPoints = useMemo(() => createArcCurve(startPos, endPos, radius), [startPos, endPos, radius]);

  return (
    <group>
      <Line
        points={arcPoints}
        color={isSelected ? "#D4AF37" : "#87CEEB"}
        lineWidth={isSelected ? 3 : 1.5}
        transparent
        opacity={isSelected ? 0.9 : 0.6}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(isSelected ? null : route);
        }}
      />
      {/* Airport markers */}
      <mesh position={startPos}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color={isSelected ? "#D4AF37" : "#FFFFFF"} />
      </mesh>
      <mesh position={endPos}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color={isSelected ? "#D4AF37" : "#FFFFFF"} />
      </mesh>
    </group>
  );
};

interface GlobeProps {
  selectedRoute: FlightRoute | null;
  onSelectRoute: (route: FlightRoute | null) => void;
}

const Globe = ({ selectedRoute, onSelectRoute }: GlobeProps) => {
  const globeRef = useRef<THREE.Mesh>(null);
  const radius = 2;

  useFrame(({ clock }) => {
    if (globeRef.current && !selectedRoute) {
      globeRef.current.rotation.y = clock.elapsedTime * 0.05;
    }
  });

  return (
    <group>
      {/* Globe sphere */}
      <Sphere ref={globeRef} args={[radius, 64, 64]}>
        <meshStandardMaterial
          color="#1E3A5F"
          transparent
          opacity={0.9}
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Wireframe overlay */}
      <Sphere args={[radius + 0.01, 32, 32]}>
        <meshBasicMaterial
          color="#87CEEB"
          transparent
          opacity={0.15}
          wireframe
        />
      </Sphere>

      {/* Flight routes */}
      <group rotation={[0, globeRef.current?.rotation.y || 0, 0]}>
        {flightRoutes.map((route) => (
          <FlightArc
            key={route.id}
            route={route}
            radius={radius}
            isSelected={selectedRoute?.id === route.id}
            onSelect={onSelectRoute}
          />
        ))}
      </group>

      {/* Selected route info */}
      {selectedRoute && (
        <Html
          position={[2.5, 1, 0]}
          style={{
            width: "200px",
            padding: "12px",
            background: "rgba(30, 58, 95, 0.95)",
            borderRadius: "8px",
            border: "1px solid #D4AF37",
            color: "white",
            fontSize: "12px",
            fontFamily: "Lato, sans-serif",
          }}
        >
          <div>
            <div style={{ color: "#D4AF37", fontWeight: "bold", marginBottom: "8px", fontFamily: "Montserrat, sans-serif" }}>
              {selectedRoute.from.code} → {selectedRoute.to.code}
            </div>
            <div style={{ marginBottom: "4px" }}>
              <span style={{ color: "#87CEEB" }}>{selectedRoute.from.name}</span>
              {" to "}
              <span style={{ color: "#87CEEB" }}>{selectedRoute.to.name}</span>
            </div>
            <div style={{ marginBottom: "4px" }}>Aircraft: {selectedRoute.aircraft}</div>
            <div style={{ marginBottom: "4px" }}>Period: {selectedRoute.dateRange}</div>
            <div style={{ color: "#D4AF37" }}>{selectedRoute.flights} flights</div>
          </div>
        </Html>
      )}
    </group>
  );
};

interface InteractiveGlobeProps {
  className?: string;
}

const InteractiveGlobe = ({ className }: InteractiveGlobeProps) => {
  const [selectedRoute, setSelectedRoute] = useState<FlightRoute | null>(null);

  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        <Suspense fallback={null}>
          <Globe selectedRoute={selectedRoute} onSelectRoute={setSelectedRoute} />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={3.5}
          maxDistance={8}
          autoRotate={!selectedRoute}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <p className="text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
          Click on a route to view flight details • Drag to rotate
        </p>
      </div>
    </div>
  );
};

export default InteractiveGlobe;
