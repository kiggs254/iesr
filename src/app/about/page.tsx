import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import HistorySection from "@/components/HistorySection";
import VisionMissionSection from "@/components/VisionMissionSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import StrategicSection from "@/components/StrategicSection";
import CTABanner from "@/components/CTABanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About Us | IESR — Institute of Energy Studies & Research",
  description:
    "Learn about IESR's history, vision, mission, and strategic direction as East Africa's premier energy education and research institution since 1957.",
  keywords: [
    "IESR about",
    "energy institute Kenya",
    "TVET",
    "Northern Corridor",
    "Kenya Power training",
    "energy research Africa",
  ],
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <AnimateOnScroll animation="fadeUp" duration={0.8} threshold={0.1}>
        <HistorySection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeIn" duration={0.9} threshold={0.05}>
        <VisionMissionSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeUp" duration={0.8} threshold={0.1}>
        <CoreValuesSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeUp" duration={0.8} threshold={0.1}>
        <StrategicSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeIn" duration={1} threshold={0.15}>
        <CTABanner />
      </AnimateOnScroll>
    </>
  );
}
