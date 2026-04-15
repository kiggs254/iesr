import AnimateOnScroll from "./AnimateOnScroll";
import { Eye, Compass, Target } from "lucide-react";
import styles from "./VisionMissionSection.module.css";

const objectives = [
  { num: "01", text: "Capacity Building for utilities & industry" },
  { num: "02", text: "Quality Assurance with accredited governance" },
  { num: "03", text: "Product Diversification in smart grids & e-mobility" },
  { num: "04", text: "Networking with OEMs, universities & NCIP states" },
  { num: "05", text: "Institutional Culture of excellence & accountability" },
];

export default function VisionMissionSection() {
  return (
    <section id="vision" className={styles.section}>
      <div className="container">
        <AnimateOnScroll animation="fadeUp" threshold={0.1}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Purpose</span>
            <h2 className={styles.sectionTitle}>
              Vision, Mission &amp; Objectives
            </h2>
            <p className={styles.sectionSub}>
              The guiding principles behind every programme, partnership,
              and pursuit of excellence at IESR.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Vision + Mission side by side */}
        <div className={styles.vmRow}>
          <AnimateOnScroll animation="slideRight" threshold={0.1}>
            <div className={`${styles.card} ${styles.cardVision}`}>
              <div className={styles.cardIconWrap}>
                <Eye size={26} strokeWidth={1.5} />
              </div>
              <div className={styles.cardLabel}>Vision</div>
              <blockquote className={styles.cardQuote}>
                To be an energy centre of excellence in education,
                research and innovation.
              </blockquote>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slideLeft" threshold={0.1}>
            <div className={`${styles.card} ${styles.cardMission}`}>
              <div className={styles.cardIconWrap}>
                <Compass size={26} strokeWidth={1.5} />
              </div>
              <div className={styles.cardLabel}>Mission</div>
              <blockquote className={styles.cardQuote}>
                To provide world-class energy education, research and
                innovation using cutting-edge scientific technology.
              </blockquote>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Objectives — full-width navy card */}
        <AnimateOnScroll animation="fadeUp" delay={0.1} threshold={0.1}>
          <div className={styles.objCard}>
            <div className={styles.objHeader}>
              <div className={styles.objIconWrap}>
                <Target size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className={styles.objTitle}>Strategic Objectives</p>
                <p className={styles.objSubtitle}>
                  Five themes driving IESR's transformation into a modern centre of excellence
                </p>
              </div>
            </div>

            <div className={styles.objGrid}>
              {objectives.map((obj) => (
                <div key={obj.num} className={styles.objItem}>
                  <span className={styles.objNum}>{obj.num}</span>
                  <span className={styles.objText}>{obj.text}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
