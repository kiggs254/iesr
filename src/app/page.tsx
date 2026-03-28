import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import AboutSection from "@/components/AboutSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import FeatureHighlight from "@/components/FeatureHighlight";
import ProgramsSection from "@/components/ProgramsSection";
import NewsSection from "@/components/NewsSection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <AboutSection />
      <DepartmentsSection />
      <FeatureHighlight />
      <ProgramsSection />
      <NewsSection />
      <CTABanner />
    </>
  );
}
