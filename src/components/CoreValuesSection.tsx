import AnimateOnScroll from "./AnimateOnScroll";
import {
  SmilePlus,
  Star,
  ShieldCheck,
  Users,
  Lightbulb,
  Leaf,
  HeartHandshake,
} from "lucide-react";
import styles from "./CoreValuesSection.module.css";

const values = [
  {
    icon: <SmilePlus size={26} />,
    title: "Client Satisfaction",
    color: "blue",
  },
  {
    icon: <Star size={26} />,
    title: "Service Excellence",
    color: "gold",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Integrity &\nProfessionalism",
    color: "green",
  },
  {
    icon: <Users size={26} />,
    title: "Teamwork",
    color: "blue",
  },
  {
    icon: <Lightbulb size={26} />,
    title: "Creativity &\nInnovation",
    color: "amber",
  },
  {
    icon: <Leaf size={26} />,
    title: "Sustainable\nDevelopment",
    color: "green",
  },
  {
    icon: <HeartHandshake size={26} />,
    title: "Gender Equity",
    color: "pink",
  },
];

export default function CoreValuesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <AnimateOnScroll animation="fadeUp" threshold={0.1}>
          <div className={styles.sectionHeader}>
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className={styles.subtitle}>
              These values form the institutional DNA that guides every
              decision, interaction, and pursuit of excellence at IESR.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {values.map((v, i) => (
            <AnimateOnScroll
              key={v.title}
              animation="fadeUp"
              delay={i * 0.08}
              threshold={0.05}
            >
              <div className={`${styles.card} ${styles[`accent-${v.color}`]}`}>
                <div className={styles.iconRing}>{v.icon}</div>
                <h3 className={styles.valueTitle}>
                  {v.title.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < v.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <div className={styles.cardUnderline} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
