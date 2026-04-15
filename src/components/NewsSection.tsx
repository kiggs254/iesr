import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";
import styles from "./NewsSection.module.css";

interface NewsItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  image: string | null;
  published_at: string | null;
}

// Fallback items shown when the API is unreachable at build time
const FALLBACK_NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Kenya Power Goes Digital for Electricity Connection Applications",
    slug: "kenya-power-goes-digital",
    category: "News",
    excerpt:
      "In a bold move to modernise and streamline operations, Kenya Power has launched a digital platform for electricity connection applications nationwide.",
    image: "/images/news-digital.png",
    published_at: "2026-02-18",
  },
  {
    id: 2,
    title: "BRAAfrica & Partners Launch Micro-Grid Academy to Train Young Power Innovators",
    slug: "brafrica-micro-grid-academy",
    category: "News",
    excerpt:
      "The IESR and Academy Alliance would offer cutting-edge courses on renewable energy, smart grids, and sustainable power systems for emerging African talent.",
    image: "/images/power-grid.png",
    published_at: "2026-01-15",
  },
  {
    id: 3,
    title: "Capacity Building in East Africa to Foster Innovation in Power Sector Research",
    slug: "capacity-building-east-africa",
    category: "Events",
    excerpt:
      "For the first time, the institute has announced a pan-African collaboration with multiple regional bodies to foster research and innovation.",
    image: "/images/about-research.png",
    published_at: "2025-12-05",
  },
  {
    id: 4,
    title: "IESR Receives New Century Energy Innovation Award at KPLC Annual Ceremony",
    slug: "iesr-energy-innovation-award",
    category: "News",
    excerpt:
      "The Institute was recognized for its outstanding contribution to energy education and workforce development across the African continent.",
    image: "/images/about-innovation.png",
    published_at: "2025-11-20",
  },
];

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

async function fetchNews(): Promise<NewsItem[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return FALLBACK_NEWS;

  try {
    const res = await fetch(`${apiUrl}/api/news`, { cache: "force-cache" });
    if (!res.ok) throw new Error(`API returned ${res.status}`);
    const json = await res.json();
    return (json.data as NewsItem[]).length > 0 ? json.data : FALLBACK_NEWS;
  } catch {
    return FALLBACK_NEWS;
  }
}

export default async function NewsSection() {
  const newsItems = await fetchNews();

  return (
    <section id="news" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <span className="section-label">News &amp; Events</span>
            <h2 className="section-title">From our Newsroom</h2>
          </div>
          <Link href="/news" className={styles.viewAll}>
            View All →
          </Link>
        </div>

        <div className={styles.grid}>
          {newsItems.map((item, index) => (
            <AnimateOnScroll
              key={item.id}
              animation="fadeUp"
              delay={index * 0.15}
              style={{ height: "100%" }}
            >
              <article className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={item.image ?? "/images/news-digital.png"}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.cardImg}
                  />
                  <span className={styles.cardBadge}>{item.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardExcerpt}>{item.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardDate}>{formatDate(item.published_at)}</span>
                    <Link href={`/news/${item.slug}`} className={styles.cardReadMore}>
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
