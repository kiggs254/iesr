import Link from "next/link";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Admissions Now Open</div>
        <h2 className={styles.title}>Ready to Join IESR?</h2>
        <p className={styles.description}>
          Power your future with enabling courses and opportunities in research
          and innovation. Take the first step towards a career in Africa&apos;s
          energy sector.
        </p>
        <div className={styles.actions}>
          <Link href="#" className="btn btn--primary">
            Apply Now →
          </Link>
          <Link href="#" className="btn btn--outline-gold">
            Talk to Admissions
          </Link>
        </div>
      </div>
    </section>
  );
}
