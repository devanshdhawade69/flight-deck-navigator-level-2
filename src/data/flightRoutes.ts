export interface FlightRoute {
  id: string;
  from: {
    code: string;
    name: string;
    lat: number;
    lng: number;
  };
  to: {
    code: string;
    name: string;
    lat: number;
    lng: number;
  };
  aircraft: string;
  dateRange: string;
  flights: number;
}

export const flightRoutes: FlightRoute[] = [
  {
    id: "jfk-lhr",
    from: { code: "JFK", name: "New York", lat: 40.6413, lng: -73.7781 },
    to: { code: "LHR", name: "London", lat: 51.47, lng: -0.4543 },
    aircraft: "Boeing 777-300ER",
    dateRange: "2020 - Present",
    flights: 245,
  },
  {
    id: "jfk-nrt",
    from: { code: "JFK", name: "New York", lat: 40.6413, lng: -73.7781 },
    to: { code: "NRT", name: "Tokyo", lat: 35.7647, lng: 140.3864 },
    aircraft: "Boeing 787-9",
    dateRange: "2019 - Present",
    flights: 128,
  },
  {
    id: "lax-syd",
    from: { code: "LAX", name: "Los Angeles", lat: 33.9425, lng: -118.408 },
    to: { code: "SYD", name: "Sydney", lat: -33.9399, lng: 151.175 },
    aircraft: "Airbus A380",
    dateRange: "2018 - 2022",
    flights: 86,
  },
  {
    id: "dxb-sin",
    from: { code: "DXB", name: "Dubai", lat: 25.2532, lng: 55.3657 },
    to: { code: "SIN", name: "Singapore", lat: 1.3644, lng: 103.9915 },
    aircraft: "Boeing 777-200LR",
    dateRange: "2021 - Present",
    flights: 156,
  },
  {
    id: "fra-jfk",
    from: { code: "FRA", name: "Frankfurt", lat: 50.0379, lng: 8.5622 },
    to: { code: "JFK", name: "New York", lat: 40.6413, lng: -73.7781 },
    aircraft: "Airbus A340-600",
    dateRange: "2017 - 2020",
    flights: 312,
  },
  {
    id: "cdg-hkg",
    from: { code: "CDG", name: "Paris", lat: 49.0097, lng: 2.5479 },
    to: { code: "HKG", name: "Hong Kong", lat: 22.308, lng: 113.9185 },
    aircraft: "Boeing 777-300",
    dateRange: "2019 - 2023",
    flights: 94,
  },
];
