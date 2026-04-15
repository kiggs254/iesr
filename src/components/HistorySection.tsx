import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import { Calendar, Users, Award, Globe } from "lucide-react";
import styles from "./HistorySection.module.css";

const milestones = [
  {
    year: "1957",
    icon: <Calendar size={20} />,
    title: "Establishment",
    text: "Founded to develop technical and supervisory skills for the East African Power and Lighting Company.",
  },
  {
    year: "2000",
    icon: <Users size={20} />,
    title: "Opened to Public",
    text: "Growing demand led IESR to expand access — offering capacity-building programmes beyond Kenya Power.",
  },
  {
    year: "2013",
    icon: <Award size={20} />,
    title: "TVET Registered",
    text: "Formally registered under the TVET Act 2013 and Industrial Training Act Cap 237 of 2011.",
  },
  {
    year: "2014",
    icon: <Globe size={20} />,
    title: "Regional Centre",
    text: "Designated by Regional Heads of State as the NCIP centre of excellence for the Northern Corridor.",
  },
];

export default function HistorySection() {
  return (
    <section id="history" className={styles.section}>
      <div className="container">
        {/* Section header */}
        <AnimateOnScroll animation="fadeUp" threshold={0.1}>
          <div className={styles.sectionHeader}>
            <span className="section-label">Our Background</span>
            <h2 className="section-title">
              Building Kenya&apos;s Energy Workforce{" "}
              <span className={styles.titleAccent}>Since 1957</span>
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Two-column story grid */}
        <div className={styles.mainGrid}>
          {/* Left: Story text */}
          <AnimateOnScroll animation="slideRight" delay={0.1} threshold={0.1}>
            <div className={styles.storyCol}>
              <div className={styles.bigYear}>1957</div>
              <div className={styles.storyBody}>
                <p className={styles.storyLead}>
                  The Institute of Energy Studies and Research was established in 1957
                  to develop technical and supervisory skills for the then East African
                  Power and Lighting Company employees.
                </p>
                <p>
                  Training initially concentrated on power line distribution, later
                  expanding to include electrical fitters, plant operators, motor vehicle
                  mechanics, electricians, and electronic mechanics. Most employees in
                  Kenya&apos;s Electrical Energy Sub Sector were either trained or completed
                  their internship at this Institute.
                </p>
                <p>
                  In 2000, due to growing demand, IESR opened its doors to the public.
                  Today, the Institute offers capacity building courses, artisan, craft
                  and diploma programs — occupying a niche market position in energy
                  education, research and innovation.
                </p>

                <div className={styles.storyStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>65+</span>
                    <span className={styles.statLabel}>Years of Excellence</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.stat}>
                    <span className={styles.statNum}>6</span>
                    <span className={styles.statLabel}>NCIP Member States</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.stat}>
                    <span className={styles.statNum}>1000s</span>
                    <span className={styles.statLabel}>Graduates Annually</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Image column */}
          <AnimateOnScroll animation="slideLeft" delay={0.2} threshold={0.1}>
            <div className={styles.imageCol}>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/feature_training.jpg"
                  alt="IESR practical training session"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className={styles.imageInnerOverlay} />
              </div>

              {/* Floating badge */}
              <div className={styles.floatingBadge}>
                <div className={styles.badgeIcon}>
                  <Award size={22} />
                </div>
                <div>
                  <div className={styles.badgeTitle}>TVET Registered</div>
                  <div className={styles.badgeSub}>Act 2013 &amp; Industrial Training Act Cap 237</div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className={styles.cornerAccent} />
            </div>
          </AnimateOnScroll>
        </div>

        {/* Milestone timeline */}
        <div className={styles.milestoneRow}>
          {milestones.map((m, i) => (
            <AnimateOnScroll
              key={m.year}
              animation="fadeUp"
              delay={i * 0.1}
              threshold={0.05}
            >
              <div className={styles.milestoneCard}>
                <div className={styles.milestoneYear}>{m.year}</div>
                <div className={styles.milestoneIconWrap}>{m.icon}</div>
                <h3 className={styles.milestoneTitle}>{m.title}</h3>
                <p className={styles.milestoneText}>{m.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
