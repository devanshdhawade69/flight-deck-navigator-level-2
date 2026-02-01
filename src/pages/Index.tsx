import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import GlobeSection from "@/components/home/GlobeSection";
import BioTeaser from "@/components/home/BioTeaser";
import TrustSignals from "@/components/home/TrustSignals";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BioTeaser />
      <GlobeSection />
      <TrustSignals />
    </Layout>
  );
};

export default Index;
