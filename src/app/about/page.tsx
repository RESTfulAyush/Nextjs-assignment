import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import JoinUsSection from "@/components/about/JoinUsSection";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <JoinUsSection />
    </main>
  );
}
