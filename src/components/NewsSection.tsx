import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";
import { Zap, Globe, FlaskConical, Trophy } from "lucide-react";
import styles from "./NewsSection.module.css";

const newsItems = [
  {
    badge: "News",
    title:
      "Kenya Power Goes Digital for Electricity Connection Applications to Speed Up Revenue Recovery",
    excerpt:
      "In a bold move to modernise and streamline operations, Kenya Power has launched a digital platform for electricity connection applications nationwide.",
    date: "February 18, 2026",
    icon: <Zap size={40} strokeWidth={1.5} />,
    image: "/images/news-digital.png",
  },
  {
    badge: "News",
    title:
      "BRAAfrica & Partners Launch Micro-Grid Academy to Train Young Power Innovators",
    excerpt:
      "The IESR and Academy Alliance would offer cutting-edge courses on renewable energy, smart grids, and sustainable power systems for emerging African talent.",
    date: "January 15, 2026",
    icon: <Globe size={40} strokeWidth={1.5} />,
    image: "/images/power-grid.png",
  },
  {
    badge: "Events",
    title:
      "Capacity Building in East Africa to Foster Innovation in Power Sector Research",
    excerpt:
      "For the first time, the institute has announced a pan-African collaboration with multiple regional bodies to foster research and innovation.",
    date: "December 5, 2025",
    icon: <FlaskConical size={40} strokeWidth={1.5} />,
    image: "/images/about-research.png",
  },
  {
    badge: "News",
    title:
      "IESR Receives New Century Energy Innovation Award at KPLC Annual Ceremony",
    excerpt:
      "The Institute was recognized for its outstanding contribution to energy education and workforce development across the African continent.",
    date: "November 20, 2025",
    icon: <Trophy size={40} strokeWidth={1.5} />,
    image: "/images/about-innovation.png",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <span className="section-label">News &amp; Events</span>
            <h2 className="section-title">From our Newsroom</h2>
          </div>
          <Link href="#" className={styles.viewAll}>
            View All →
          </Link>
        </div>

        <div className={styles.grid}>
          {newsItems.map((item, index) => (
            <AnimateOnScroll
              key={item.title}
              animation="fadeUp"
              delay={index * 0.15}
              style={{ height: "100%" }}
            >
              <article className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.cardImg}
                  />
                  <span className={styles.cardBadge}>{item.badge}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardExcerpt}>{item.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardDate}>{item.date}</span>
                    <Link href="#" className={styles.cardReadMore}>
                      Read More <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
