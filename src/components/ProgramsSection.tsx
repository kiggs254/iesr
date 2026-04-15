import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { GraduationCap, ClipboardList, CircleDot } from "lucide-react";
import styles from "./ProgramsSection.module.css";

interface Programme {
  id: number;
  name: string;
  category: string; // "Diploma" | "Craft Certificate"
  mode: string;
  duration: string;
}

// Fallback data shown when the API is unreachable at build time
const FALLBACK_ACADEMIC: string[] = [
  "Craft Certificate in Electrical & Electronic Engineering (Power Option)",
  "Diploma in Electrical and Electronic Engineering (Power Option)",
  "Craft Certificate in Automotive Engineering",
  "Diploma in Mechanical Engineering (Production Option)",
  "Craft Certificate in Information and Communication Technology",
  "Diploma in Mechanical Engineering (Plant Option)",
];

const FALLBACK_PROFESSIONAL: string[] = [
  "Safety Competency in Power Systems (Electrical)",
  "Customer Service Excellence and Workplace Best Practices",
  "Switchgear Maintenance, Operations and Workplace Safety",
  "Customised Corporate Training Programmes",
  "Professional Competency in Power System Utilities",
  "Advanced Metering and Commissioning of Four Transformer Meters",
];

async function fetchProgrammes(): Promise<{ academic: string[]; professional: string[] }> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return { academic: FALLBACK_ACADEMIC, professional: FALLBACK_PROFESSIONAL };

  try {
    const res = await fetch(`${apiUrl}/api/programmes`, { cache: "force-cache" });
    if (!res.ok) throw new Error(`API returned ${res.status}`);
    const json = await res.json();
    const all = json.data as Programme[];

    if (!all.length) return { academic: FALLBACK_ACADEMIC, professional: FALLBACK_PROFESSIONAL };

    const academic = all
      .filter((p) => p.category === "Diploma" || p.category === "Craft Certificate")
      .map((p) => p.name);

    // ProfessionalCourse is managed separately via /api/professional-courses.
    // This endpoint is for academic programmes only, so fall back for pro column.
    return {
      academic: academic.length > 0 ? academic : FALLBACK_ACADEMIC,
      professional: FALLBACK_PROFESSIONAL,
    };
  } catch {
    return { academic: FALLBACK_ACADEMIC, professional: FALLBACK_PROFESSIONAL };
  }
}

export default async function ProgramsSection() {
  const { academic: academicPrograms, professional: professionalCourses } =
    await fetchProgrammes();

  return (
    <section id="programs" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Studies &amp; Training</span>
          <h2 className="section-title">
            Empowering the Energy Workforce of Tomorrow
          </h2>
          <p>
            Choose from a wide range of accredited academic programmes and
            industry-focused professional courses.
          </p>
        </div>

        <div className={styles.columns}>
          {/* Academic Programs */}
          <div className={styles.academic}>
            <div className={styles.programHeader}>
              <div className={styles.programIcon}>
                <GraduationCap size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className={styles.programTitle}>Academic Programs</h3>
              </div>
            </div>
            <p className={styles.programSubtitle}>
              Accredited qualifications for the energy sector
            </p>
            <div className={styles.programList}>
              {academicPrograms.map((program, index) => (
                <AnimateOnScroll
                  key={program}
                  animation="slideLeft"
                  delay={index * 0.08}
                >
                  <div className={styles.programItem}>
                    <CircleDot size={16} strokeWidth={1.5} className={styles.programItemIcon} />
                    <span>{program}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <div className={styles.programFooter}>
              <Link href="/programmes" className={styles.viewAllPrograms}>
                View all academic programmes →
              </Link>
              <Link href="#cta" className={styles.applyBtn}>
                Apply Now
              </Link>
            </div>
          </div>

          {/* Professional Courses */}
          <div className={styles.professional}>
            <div className={styles.programHeader}>
              <div className={styles.programIcon}>
                <ClipboardList size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className={styles.programTitle}>Professional Courses</h3>
              </div>
            </div>
            <p className={styles.programSubtitle}>
              Industry-focused training for professionals
            </p>
            <div className={styles.programList}>
              {professionalCourses.map((course, index) => (
                <AnimateOnScroll
                  key={course}
                  animation="slideLeft"
                  delay={index * 0.08}
                >
                  <div className={styles.programItem}>
                    <CircleDot size={16} strokeWidth={1.5} className={styles.programItemIcon} />
                    <span>{course}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <div className={styles.programFooter}>
              <Link href="/professional-courses" className={styles.viewAllPrograms}>
                View all professional courses →
              </Link>
              <Link href="#cta" className={styles.applyBtn}>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
