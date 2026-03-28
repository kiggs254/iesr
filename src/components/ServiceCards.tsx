import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  ClipboardList,
  FlaskConical,
  FileEdit,
} from "lucide-react";
import styles from "./ServiceCards.module.css";

const services = [
  {
    label: "Explore",
    title: "Academic Programs",
    icon: <GraduationCap size={28} strokeWidth={1.5} />,
    href: "#programs",
    variant: "cardNavy",
    image: "/images/about-academic.png",
  },
  {
    label: "Quick Links",
    title: "Professional Courses",
    icon: <ClipboardList size={28} strokeWidth={1.5} />,
    href: "#programs",
    variant: "cardGold",
    image: "/images/about-research.png",
  },
  {
    label: "Discover",
    title: "Research & Innovation",
    icon: <FlaskConical size={28} strokeWidth={1.5} />,
    href: "#research",
    variant: "cardDark",
    image: "/images/about-innovation.png",
  },
  {
    label: "Get Started",
    title: "Admissions",
    icon: <FileEdit size={28} strokeWidth={1.5} />,
    href: "#cta",
    variant: "cardTeal",
    image: "/images/hero-student.png",
  },
];

export default function ServiceCards() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className={`${styles.card} ${styles[service.variant]}`}
          >
            <div className={styles.cardBg}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>{service.icon}</div>
              <div className={styles.cardLabel}>{service.label}</div>
              <div className={styles.cardTitle}>{service.title}</div>
              <span className={styles.cardLink}>
                Learn more <span>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
