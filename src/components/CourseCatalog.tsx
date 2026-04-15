"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, Clock, Tag, ChevronRight, Flame, BookOpen } from "lucide-react";
import {
  CATEGORIES,
  CATEGORY_CONFIG,
  ON_DEMAND_COURSES,
  type CourseCategory,
  type Course,
  type MonthSchedule,
} from "@/data/professionalCourses";
import styles from "./CourseCatalog.module.css";

const ALL_MONTHS = "All Months";
type MonthFilter = string;

function formatPrice(n: number) {
  return `KES ${n.toLocaleString("en-KE")}`;
}

function getCategoryStyle(category: string) {
  return CATEGORY_CONFIG[category] ?? {
    color: "#002B5C",
    bg: "#e8f0fe",
    gradient: "linear-gradient(135deg, #001A3A 0%, #003D7A 100%)",
  };
}

function CourseCard({ course }: { course: Course }) {
  const cfg = getCategoryStyle(course.category);
  const isPopular = course.feeKES >= 80000;

  return (
    <article className={styles.card}>
      {/* Gradient thumbnail banner */}
      <div className={styles.cardBanner} style={{ background: cfg.gradient }}>
        <span className={styles.cardCode}>{course.code}</span>
        {isPopular && (
          <span className={styles.popularBadge}>
            <Flame size={11} />
            Popular
          </span>
        )}
        <div className={styles.cardBannerDecor} />
      </div>

      <div className={styles.cardBody}>
        {/* Category chip */}
        <span
          className={styles.categoryChip}
          style={{ color: cfg.color, background: cfg.bg }}
        >
          <span
            className={styles.categoryDot}
            style={{ background: cfg.color }}
          />
          {course.category}
        </span>

        {/* Title */}
        <h3 className={styles.cardTitle}>{course.title}</h3>

        {/* Meta row */}
        <div className={styles.cardMeta}>
          <span className={styles.metaItem}>
            <Calendar size={13} className={styles.metaIcon} />
            {course.dates}
          </span>
          <span className={styles.metaItem}>
            <Clock size={13} className={styles.metaIcon} />
            {course.duration}
          </span>
        </div>

        {/* Footer */}
        <div className={styles.cardFooter}>
          <div className={styles.priceBlock}>
            <span className={styles.priceLabel}>Fee</span>
            <span className={styles.price}>{formatPrice(course.feeKES)}</span>
          </div>
          <Link href="#cta" className={styles.applyBtn}>
            Apply
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}

interface CourseCatalogProps {
  initialSchedule?: MonthSchedule[];
  onDemandCourses?: string[];
}

export default function CourseCatalog({
  initialSchedule = [],
  onDemandCourses = ON_DEMAND_COURSES,
}: CourseCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("All Courses");
  const [activeMonth, setActiveMonth] = useState<MonthFilter>(ALL_MONTHS);

  const allMonths = useMemo(
    () => [ALL_MONTHS, ...initialSchedule.map((s) => s.month)],
    [initialSchedule]
  );

  // Reset month when category changes (and vice-versa) so the combo always makes sense
  const handleCategoryChange = (cat: CourseCategory) => {
    setActiveCategory(cat);
    setActiveMonth(ALL_MONTHS);
  };

  const handleMonthChange = (month: MonthFilter) => {
    setActiveMonth(month);
    setActiveCategory("All Courses");
  };

  const filteredSchedule = useMemo(() => {
    let base = initialSchedule;

    // Apply month filter first
    if (activeMonth !== ALL_MONTHS) {
      base = base.filter((m) => m.month === activeMonth);
    }

    // Then apply category filter
    if (activeCategory !== "All Courses") {
      base = base
        .map((m) => ({
          ...m,
          courses: m.courses.filter((c) => c.category === activeCategory),
        }))
        .filter((m) => m.courses.length > 0);
    }

    return base;
  }, [activeCategory, activeMonth]);

  const totalCourses = useMemo(
    () => filteredSchedule.reduce((sum, m) => sum + m.courses.length, 0),
    [filteredSchedule]
  );

  return (
    <section id="catalog" className={styles.section}>
      <div className="container">
        {/* ── Filter Panel ── */}
        <div className={styles.filterPanel}>
          {/* Row 1: Category filter */}
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Category</span>
            <div className={styles.filterScroll}>
              {CATEGORIES.map((cat) => {
                const cfg = cat === "All Courses" ? null : getCategoryStyle(cat);
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    className={`${styles.filterTab} ${isActive ? styles.filterTabActive : ""}`}
                    onClick={() => handleCategoryChange(cat)}
                    style={
                      isActive && cfg
                        ? { borderColor: cfg.color, color: cfg.color }
                        : undefined
                    }
                  >
                    {cfg && (
                      <span
                        className={styles.filterDot}
                        style={{ background: cfg.color }}
                      />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 2: Month filter */}
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Month</span>
            <div className={styles.filterScroll}>
              {allMonths.map((month) => {
                const isActive = activeMonth === month;
                // Short label: "Jan 2026" instead of "January 2026"
                const label =
                  month === ALL_MONTHS
                    ? month
                    : month.replace(/^(\w{3})\w+/, "$1");
                return (
                  <button
                    key={month}
                    className={`${styles.filterTab} ${styles.filterTabMonth} ${isActive ? styles.filterTabMonthActive : ""}`}
                    onClick={() => handleMonthChange(month)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result count */}
          <div className={styles.filterMeta}>
            <span className={styles.resultCount}>
              {totalCourses} course{totalCourses !== 1 ? "s" : ""}
            </span>
            {(activeCategory !== "All Courses" || activeMonth !== ALL_MONTHS) && (
              <button
                className={styles.clearFilters}
                onClick={() => { handleCategoryChange("All Courses"); setActiveMonth(ALL_MONTHS); }}
              >
                Clear filters ×
              </button>
            )}
          </div>
        </div>

        {/* ── Monthly Schedule ── */}
        {filteredSchedule.length > 0 ? (
          <div className={styles.schedule}>
            {filteredSchedule.map((month) => (
              <div key={month.month} className={styles.monthBlock}>
                <div className={styles.monthHeader}>
                  <h2 className={styles.monthTitle}>{month.month}</h2>
                  <span className={styles.monthCount}>
                    {month.courses.length} course{month.courses.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className={styles.grid}>
                  {month.courses.map((course, idx) => (
                    <CourseCard key={`${course.code}-${idx}`} course={course} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <BookOpen size={40} className={styles.emptyIcon} />
            <p>No scheduled courses match the selected filters. Check on-demand options below.</p>
          </div>
        )}

        {/* ── On-Demand Courses ── */}
        <div className={styles.onDemand}>
          <div className={styles.onDemandHeader}>
            <div>
              <span className={styles.onDemandLabel}>
                <Tag size={14} />
                Available On Request
              </span>
              <h2 className={styles.onDemandTitle}>On-Demand Courses</h2>
              <p className={styles.onDemandSub}>
                These courses run when demand is sufficient. Contact us to schedule a cohort or
                arrange dedicated in-house training for your organisation.
              </p>
            </div>
            <Link href="#cta" className={styles.onDemandCta}>
              Enquire Now
              <ChevronRight size={16} />
            </Link>
          </div>

          <ul className={styles.onDemandGrid}>
            {onDemandCourses.map((title) => (
              <li key={title} className={styles.onDemandItem}>
                <span className={styles.onDemandBullet} />
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
