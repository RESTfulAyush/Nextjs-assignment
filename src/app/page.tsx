import HeroSection from "@/components/home/HeroSection";
import NetworkSection from "@/components/home/NetworkSection";
import StatsSection from "@/components/home/StatsSection";
import ChargingSteps from "@/components/home/ChargingSteps";
import ChargingSpeed from "@/components/home/ChargingSpeed";
import RoutePlanner from "@/components/home/RoutePlanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NetworkSection />
      <StatsSection />
      <ChargingSteps />
      <ChargingSpeed />
      <RoutePlanner />
    </>
  );
}
