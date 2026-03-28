import Link from "next/link";
import {
  Zap,
  HardHat,
  FlaskConical,
  Ruler,
  Building2,
  Globe,
} from "lucide-react";
import styles from "./DepartmentsSection.module.css";

const departments = [
  {
    icon: <Zap size={24} strokeWidth={1.5} />,
    title: "Electrical & Electronic Engineering Department",
    description:
      "This department undertakes training of certificate and diploma students in Kenya National Examinations Council (KNEC) programmes spanning power systems, electronics, and instrumentation.",
    image: "/images/dept_electrical.jpg",
  },
  {
    icon: <HardHat size={24} strokeWidth={1.5} />,
    title: "Corporate Building & Civil Department",
    description:
      "This department is responsible for offering training for KPLC staff and other Corporate Organizations and individuals. It covers structural engineering, building services, and civil works.",
    image: "/images/dept_civil.jpg",
  },
  {
    icon: <FlaskConical size={24} strokeWidth={1.5} />,
    title: "Research Department",
    description:
      "The Research and Innovation department is responsible for undertaking research and innovation activities that attract grants and contribute to solving Africa's energy challenges.",
    image: "/images/dept_research.jpg",
  },
  {
    icon: <Ruler size={24} strokeWidth={1.5} />,
    title: "Standards Department",
    description:
      "This department is responsible for development of standards for KPLC, enforcement of the standards under KPLC codes, and ensuring compliance with international best practices.",
    image: "/images/dept_standards.jpg",
  },
  {
    icon: <Building2 size={24} strokeWidth={1.5} />,
    title: "Support Services Department",
    description:
      "The support services department oversees the following functions: Administration, Human Resources, Finance, and Supply Chain management across all IESR operations.",
    image: "/images/dept_support.jpg",
  },
  {
    icon: <Globe size={24} strokeWidth={1.5} />,
    title: "Utility Management & Consultancy Department",
    description:
      "This department conducts consultancy services for utilities in the African Continent and beyond, providing capacity building and technical advisory services.",
    image: "/images/dept_consultancy.jpg",
  },
];

export default function DepartmentsSection() {
  return (
    <section id="departments" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <span className="section-label">Our Departments</span>
            <h2 className="section-title section-title--white">IESR Departments</h2>
            <p>
              Our six specialized departments cover the full spectrum of energy
              education, research, and professional development.
            </p>
          </div>
          <Link href="#" className={styles.viewAll}>
            View All →
          </Link>
        </div>

        <div className={styles.grid}>
          {departments.map((dept) => (
            <article key={dept.title} className={styles.card}>
              <div 
                className={styles.cardBg}
                style={{ backgroundImage: `url(${dept.image})` }}
              >
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>{dept.icon}</div>
                <h3 className={styles.cardTitle}>{dept.title}</h3>
                <p className={styles.cardDescription}>{dept.description}</p>
                <Link href="#" className={styles.cardLink}>
                  Learn More <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
