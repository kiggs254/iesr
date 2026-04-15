import AnimateOnScroll from "./AnimateOnScroll";
import {
  GraduationCap,
  BadgeCheck,
  Layers,
  Network,
  Building2,
  Globe,
} from "lucide-react";
import styles from "./StrategicSection.module.css";

const themes = [
  {
    number: "01",
    icon: <GraduationCap size={30} />,
    title: "Capacity Building",
    text: "Competency-based programmes for utilities and industry professionals across East Africa.",
  },
  {
    number: "02",
    icon: <BadgeCheck size={30} />,
    title: "Quality Assurance",
    text: "Accredited labs and rigorous training governance that uphold the highest standards.",
  },
  {
    number: "03",
    icon: <Layers size={30} />,
    title: "Product Diversification",
    text: "Specialized courses in smart grids, data analytics, and e-mobility for the future grid.",
  },
  {
    number: "04",
    icon: <Network size={30} />,
    title: "Networking",
    text: "Strategic partnerships with OEMs, universities, and all NCIP member states.",
  },
  {
    number: "05",
    icon: <Building2 size={30} />,
    title: "Institutional Culture",
    text: "Embedding excellence, accountability, and innovation in every aspect of IESR.",
  },
  {
    number: "06",
    icon: <Globe size={30} />,
    title: "Regional Impact",
    text: "Serving the Northern Corridor and COMESA energy agenda as a continental hub.",
  },
];

export default function StrategicSection() {
  return (
    <section id="strategic" className={styles.section}>
      {/* Decorative diagonal lines */}
      <div className={styles.diagonalDecor} aria-hidden="true" />

      <div className="container">
        <AnimateOnScroll animation="fadeUp" threshold={0.1}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Strategic Direction</span>
            <h2 className={styles.sectionTitle}>
              Objectives Powering{" "}
              <span className={styles.titleAccent}>Vision 2030</span>
            </h2>
            <p className={styles.sectionSub}>
              The modernized IESR campus brings together industrial labs,
              fibre backbone infrastructure and digital learning spaces
              to support national and regional energy ambitions.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {themes.map((theme, i) => (
            <AnimateOnScroll
              key={theme.number}
              animation="fadeUp"
              delay={i * 0.1}
              threshold={0.05}
            >
              <div className={styles.card}>
                <span className={styles.cardBgNumber} aria-hidden="true">
                  {theme.number}
                </span>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>{theme.icon}</div>
                  <span className={styles.cardNum}>{theme.number}</span>
                </div>
                <h3 className={styles.cardTitle}>{theme.title}</h3>
                <p className={styles.cardText}>{theme.text}</p>
                <div className={styles.cardBar} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
