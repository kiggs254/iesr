import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PageHero from "@/components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Newsroom — IESR",
  description: "Latest news, events, and updates from the Institute of Energy Studies & Research.",
};

export interface NewsItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content?: string;
  image: string | null;
  published_at: string | null;
}

export const FALLBACK_NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Kenya Power Goes Digital for Electricity Connection Applications",
    slug: "kenya-power-goes-digital",
    category: "News",
    excerpt: "In a bold move to modernise and streamline operations, Kenya Power has launched a digital platform for electricity connection applications nationwide.",
    content: "<p>In a bold move to modernise and streamline operations, Kenya Power has launched a digital platform for electricity connection applications nationwide. The initiative, backed by IESR research, is expected to cut processing times by up to 60%.</p><p>The new system allows customers to submit applications, track progress, and receive approvals without visiting physical offices — a significant shift in how utility services are delivered in Kenya.</p>",
    image: "/images/news-digital.png",
    published_at: "2026-02-18",
  },
  {
    id: 2,
    title: "BRAAfrica & Partners Launch Micro-Grid Academy to Train Young Power Innovators",
    slug: "brafrica-micro-grid-academy",
    category: "Events",
    excerpt: "The IESR and Academy Alliance would offer cutting-edge courses on renewable energy, smart grids, and sustainable power systems for emerging African talent.",
    content: "<p>The IESR and Academy Alliance would offer cutting-edge courses on renewable energy, smart grids, and sustainable power systems for emerging African talent. The programme is scheduled to enrol its first cohort in Q3 2026.</p>",
    image: "/images/power-grid.png",
    published_at: "2026-01-15",
  },
  {
    id: 3,
    title: "Capacity Building in East Africa to Foster Innovation in Power Sector Research",
    slug: "capacity-building-east-africa",
    category: "Events",
    excerpt: "For the first time, the institute has announced a pan-African collaboration with multiple regional bodies to foster research and innovation.",
    content: "<p>For the first time, the institute has announced a pan-African collaboration with multiple regional bodies to foster research and innovation in the power sector. Partners from Uganda, Tanzania, Rwanda, and Ethiopia are participating in the initiative.</p>",
    image: "/images/about-research.png",
    published_at: "2025-12-05",
  },
  {
    id: 4,
    title: "IESR Receives New Century Energy Innovation Award at KPLC Annual Ceremony",
    slug: "iesr-energy-innovation-award",
    category: "Press Release",
    excerpt: "The Institute was recognized for its outstanding contribution to energy education and workforce development across the African continent.",
    content: "<p>The Institute was recognized for its outstanding contribution to energy education and workforce development across the African continent. The award was presented at Kenya Power's annual gala held in Nairobi.</p>",
    image: "/images/about-innovation.png",
    published_at: "2025-11-20",
  },
];

export async function fetchAllNews(): Promise<NewsItem[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return FALLBACK_NEWS;
  try {
    const res = await fetch(`${apiUrl}/api/news`, { cache: "force-cache" });
    if (!res.ok) throw new Error();
    const json = await res.json();
    return (json.data as NewsItem[]).length ? json.data : FALLBACK_NEWS;
  } catch {
    return FALLBACK_NEWS;
  }
}

export function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric", month: "long", year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default async function NewsPage() {
  const news = await fetchAllNews();

  return (
    <main>
      <PageHero
        image="/images/about-research.png"
        imageAlt="IESR Newsroom"
        imagePosition="center 40%"
        tag="News · Events · Press Releases"
        titleLine1="From our"
        titleLine2="Newsroom"
        description="Stay up to date with the latest happenings at IESR and across Kenya's energy sector — research breakthroughs, industry events, and institutional milestones."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Newsroom" },
        ]}
        actions={[{ label: "Browse Articles ↓", href: "#articles" }]}
      />

      <section id="articles" className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {news.map((item, i) => (
              <AnimateOnScroll key={item.id} animation="fadeUp" delay={i * 0.08} style={{ height: "100%" }}>
                <article className={styles.card}>
                  <Link href={`/news/${item.slug}`} className={styles.cardLink}>
                    <div className={styles.cardImage}>
                      <Image
                        src={item.image ?? "/images/news-digital.png"}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={styles.cardImg}
                      />
                      <span className={styles.cardBadge}>{item.category}</span>
                    </div>
                    <div className={styles.cardBody}>
                      <time className={styles.cardDate}>{formatDate(item.published_at)}</time>
                      <h2 className={styles.cardTitle}>{item.title}</h2>
                      <p className={styles.cardExcerpt}>{item.excerpt}</p>
                      <span className={styles.readMore}>Read Article →</span>
                    </div>
                  </Link>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
