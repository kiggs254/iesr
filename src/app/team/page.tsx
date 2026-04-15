import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamSection from "@/components/TeamSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Team | IESR — Institute of Energy Studies & Research",
  description:
    "Meet the leadership driving IESR's mission of world-class energy education, research, and innovation across East Africa.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        image="/images/dept_support.jpg"
        imageAlt="IESR Management Team"
        imagePosition="center 40%"
        tag="Leadership · IESR · Kenya Power"
        titleLine1="Meet Our"
        titleLine2="Leadership Team"
        description="Experienced professionals at the helm, guiding IESR's mission to deliver world-class energy education and research across East Africa and beyond."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Team" },
        ]}
      />

      <TeamSection />

      <CTABanner />
    </>
  );
}
