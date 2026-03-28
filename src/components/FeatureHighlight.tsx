import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  ClipboardList,
  Users,
  Globe,
} from "lucide-react";
import styles from "./FeatureHighlight.module.css";

export default function FeatureHighlight() {
  return (
    <section id="research" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardLabel}>
              Studies &amp; Training at IESR
            </div>
            <h2 className={styles.cardTitle}>
              Empowering the Energy{" "}
              <span className={styles.cardTitleAccent}>
                Workforce of Tomorrow
              </span>
            </h2>
            <p className={styles.cardDescription}>
              IESR provides cutting-edge training programmes that equip students
              with practical skills and theoretical knowledge needed to excel in
              the rapidly evolving energy sector across Africa and beyond.
            </p>
            
            <div className={styles.visualGrid}>
              <div className={styles.visualItem}>
                <div className={styles.visualIcon}>
                  <GraduationCap size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={styles.visualNumber}>15+</div>
                  <div className={styles.visualLabel}>Academic Programs</div>
                </div>
              </div>
              <div className={styles.visualItem}>
                <div className={styles.visualIcon}>
                  <ClipboardList size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={styles.visualNumber}>20+</div>
                  <div className={styles.visualLabel}>Professional Courses</div>
                </div>
              </div>
              <div className={styles.visualItem}>
                <div className={styles.visualIcon}>
                  <Users size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={styles.visualNumber}>50+</div>
                  <div className={styles.visualLabel}>Expert Faculty</div>
                </div>
              </div>
              <div className={styles.visualItem}>
                <div className={styles.visualIcon}>
                  <Globe size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={styles.visualNumber}>10K+</div>
                  <div className={styles.visualLabel}>Alumni Network</div>
                </div>
              </div>
            </div>

            <div className={styles.actionWrap}>
              <Link href="#programs" className="btn btn--primary">
                Learn more →
              </Link>
            </div>
          </div>

          <div className={styles.cardImageWrap}>
            <Image
              src="/images/feature_training.jpg"
              alt="Engineering training lab"
              fill
              className={styles.cardImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
