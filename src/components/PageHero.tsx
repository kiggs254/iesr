import Image from "next/image";
import Link from "next/link";
import styles from "./PageHero.module.css";

export interface PageHeroCrumb {
  label: string;
  href?: string;
}

export interface PageHeroAction {
  label: string;
  href: string;
}

export interface PageHeroProps {
  image: string;
  imageAlt?: string;
  imagePosition?: string;
  tag?: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  breadcrumb: PageHeroCrumb[];
  actions?: PageHeroAction[];
}

export default function PageHero({
  image,
  imageAlt = "IESR",
  imagePosition = "center",
  tag,
  titleLine1,
  titleLine2,
  description,
  breadcrumb,
  actions = [],
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover", objectPosition: imagePosition }}
          priority
        />
      </div>
      <div className={styles.heroOverlay} />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        {breadcrumb.map((crumb, i) => (
          <span key={crumb.label} className={styles.crumbItem}>
            {i > 0 && <span className={styles.crumbSep}>›</span>}
            {crumb.href ? (
              <Link href={crumb.href} className={styles.crumbLink}>
                {crumb.label}
              </Link>
            ) : (
              <span className={styles.crumbCurrent}>{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          {tag && (
            <span className={styles.heroTag}>
              <span className={styles.heroTagDot} />
              {tag}
            </span>
          )}
          <h1 className={styles.heroTitle}>
            {titleLine1}{" "}
            <span className={styles.heroTitleAccent}>{titleLine2}</span>
          </h1>
          <p className={styles.heroDescription}>{description}</p>
          {actions.length > 0 && (
            <div className={styles.heroActions}>
              {actions.map((action) => (
                <Link key={action.href} href={action.href} className={styles.heroCta}>
                  {action.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
