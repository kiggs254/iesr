import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import AboutSection from "@/components/AboutSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import FeatureHighlight from "@/components/FeatureHighlight";
import ProgramsSection from "@/components/ProgramsSection";
import NewsSection from "@/components/NewsSection";
import CTABanner from "@/components/CTABanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <Hero />
      <AnimateOnScroll animation="fadeUp" duration={0.8} threshold={0.1}>
        <ServiceCards />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeUp" duration={0.8} threshold={0.15}>
        <AboutSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeUp" duration={0.8} threshold={0.15}>
        <DepartmentsSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeUp" duration={0.8} threshold={0.15}>
        <FeatureHighlight />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeUp" duration={0.8} threshold={0.15}>
        <ProgramsSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeUp" duration={0.8} threshold={0.15}>
        <NewsSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeIn" duration={1} threshold={0.15}>
        <CTABanner />
      </AnimateOnScroll>
    </>
  );
}
