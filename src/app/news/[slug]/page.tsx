import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { fetchAllNews, formatDate, FALLBACK_NEWS, type NewsItem } from "../page";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

// ── Static params for full export ────────────────────────────────────────────

export async function generateStaticParams() {
  const news = await fetchAllNews();
  return news.map((n) => ({ slug: n.slug }));
}

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticle(slug);
  return {
    title: article ? `${article.title} — IESR` : "Article — IESR",
    description: article?.excerpt ?? "",
  };
}

// ── Data fetching ─────────────────────────────────────────────────────────────

async function fetchArticle(slug: string): Promise<NewsItem | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (apiUrl) {
    try {
      const res = await fetch(`${apiUrl}/api/news/${slug}`, { cache: "force-cache" });
      if (res.ok) {
        const json = await res.json();
        return json.data as NewsItem;
      }
    } catch {
      // fall through to fallback
    }
  }

  // Fallback: find from local fallback list
  return FALLBACK_NEWS.find((n) => n.slug === slug) ?? FALLBACK_NEWS[0];
}

async function fetchRelated(currentSlug: string): Promise<NewsItem[]> {
  const all = await fetchAllNews();
  return all.filter((n) => n.slug !== currentSlug).slice(0, 3);
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const [article, related] = await Promise.all([
    fetchArticle(slug),
    fetchRelated(slug),
  ]);

  if (!article) return null;

  return (
    <main>
      {/* ── Article hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={article.image ?? "/images/about-research.png"}
            alt={article.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
          />
        </div>
        <div className={styles.heroOverlay} />

        {/* Breadcrumb — absolute, clears fixed header */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" className={styles.crumbLink}>Home</Link>
          <span className={styles.crumbSep}>›</span>
          <Link href="/news" className={styles.crumbLink}>Newsroom</Link>
          <span className={styles.crumbSep}>›</span>
          <span className={styles.crumbCurrent}>{article.category}</span>
        </nav>

        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.meta}>
              <span className={styles.badge}>
                <Tag size={11} /> {article.category}
              </span>
              <span className={styles.date}>
                <Calendar size={11} /> {formatDate(article.published_at)}
              </span>
            </div>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.excerpt}>{article.excerpt}</p>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className={styles.body}>
        <div className="container">
          <div className={styles.layout}>
            <article className={styles.content}>
              {article.content ? (
                <div
                  className={styles.prose}
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              ) : (
                <p className={styles.prose}>{article.excerpt}</p>
              )}

              <div className={styles.backRow}>
                <Link href="/news" className={styles.backBtn}>
                  <ArrowLeft size={15} /> Back to Newsroom
                </Link>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>More from IESR</h3>
              <div className={styles.sidebarList}>
                {related.map((item) => (
                  <Link key={item.id} href={`/news/${item.slug}`} className={styles.sidebarCard}>
                    <div className={styles.sidebarImage}>
                      <Image
                        src={item.image ?? "/images/news-digital.png"}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="80px"
                      />
                    </div>
                    <div className={styles.sidebarInfo}>
                      <p className={styles.sidebarItemDate}>{formatDate(item.published_at)}</p>
                      <p className={styles.sidebarItemTitle}>{item.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
