import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CourseCatalog from "@/components/CourseCatalog";
import CTABanner from "@/components/CTABanner";
import { SCHEDULE, type MonthSchedule } from "@/data/professionalCourses";

export const metadata: Metadata = {
  title: "Professional Training Courses | IESR — Institute of Energy Studies & Research",
  description:
    "Explore IESR's 2026 professional training schedule — short courses in electrical safety, power systems, renewable energy, ICT, leadership and more. Enroll today.",
};

interface ApiCoursesResponse {
  schedule: MonthSchedule[];
}

async function fetchCourses(): Promise<ApiCoursesResponse> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return { schedule: SCHEDULE };

  try {
    const res = await fetch(`${apiUrl}/api/professional-courses`, {
      cache: "force-cache",
    });
    if (!res.ok) throw new Error(`API returned ${res.status}`);
    const data: ApiCoursesResponse = await res.json();
    return data.schedule?.length ? data : { schedule: SCHEDULE };
  } catch {
    return { schedule: SCHEDULE };
  }
}

export default async function ProfessionalCoursesPage() {
  const { schedule } = await fetchCourses();

  return (
    <>
      <PageHero
        image="/images/dept_electrical.jpg"
        imageAlt="IESR Professional Training"
        imagePosition="center 40%"
        tag="2026 Training Schedule · CPD Accredited · Industry-Led"
        titleLine1="Professional"
        titleLine2="Training Courses"
        description="Short, intensive courses designed for working professionals in the energy sector. Gain practical skills, earn CPD points, and stay ahead of industry developments."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Professional Courses" },
        ]}
        actions={[
          { label: "Browse Schedule ›", href: "#catalog" },
          { label: "Register Interest ›", href: "#cta" },
        ]}
      />

      <CourseCatalog initialSchedule={schedule} />

      <CTABanner />
    </>
  );
}
