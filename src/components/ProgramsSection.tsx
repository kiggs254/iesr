import Link from "next/link";
import { GraduationCap, ClipboardList, CircleDot } from "lucide-react";
import styles from "./ProgramsSection.module.css";

const academicPrograms = [
  "Craft Certificate in Electrical & Electronic Engineering (Power Option)",
  "Diploma in Electrical and Electronic Engineering (Power Option)",
  "Craft Certificate in Automotive Engineering",
  "Diploma in Mechanical Engineering (Production Option)",
  "Craft Certificate in Information and Communication Technology",
  "Diploma in Mechanical Engineering (Plant Option)",
];

const professionalCourses = [
  "Safety Competency in Power Systems (Electrical)",
  "Customer Service Excellence and Workplace Best Practices",
  "Switchgear Maintenance, Operations and Workplace Safety",
  "Customised Corporate Training Programmes",
  "Professional Competency in Power System Utilities",
  "Advanced Metering and Commissioning of Four Transformer Meters",
];

export default function ProgramsSection() {
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
              {academicPrograms.map((program) => (
                <div key={program} className={styles.programItem}>
                  <CircleDot size={16} strokeWidth={1.5} className={styles.programItemIcon} />
                  <span>{program}</span>
                </div>
              ))}
            </div>
            <div className={styles.programFooter}>
              <Link href="#" className={styles.viewAllPrograms}>
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
              {professionalCourses.map((course) => (
                <div key={course} className={styles.programItem}>
                  <CircleDot size={16} strokeWidth={1.5} className={styles.programItemIcon} />
                  <span>{course}</span>
                </div>
              ))}
            </div>
            <div className={styles.programFooter}>
              <Link href="#" className={styles.viewAllPrograms}>
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
