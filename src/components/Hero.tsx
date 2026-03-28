"use client";

import Link from "next/link";
import {
  Landmark,
  GraduationCap,
  Building2,
  ClipboardList,
  FlaskConical,
  FileEdit,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const tabs = [
    { label: "About IESR", icon: <Landmark size={16} />, href: "#about", active: true },
    { label: "Academic Programs", icon: <GraduationCap size={16} />, href: "#programs", active: false },
    { label: "Departments", icon: <Building2 size={16} />, href: "#departments", active: false },
    { label: "Professional Courses", icon: <ClipboardList size={16} />, href: "#programs", active: false },
    { label: "Research", icon: <FlaskConical size={16} />, href: "#research", active: false },
    { label: "Admissions", icon: <FileEdit size={16} />, href: "#cta", active: false },
  ];

  return (
    <section className={styles.hero}>
      {/* Video Background */}
      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/power-grid.png"
      >
        <source
          src="https://kplc.co.ke/storage/01J419DSXPQYKBYPN91WY6G01N.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.heroVideoOverlay} />

      {/* Content — left side only */}
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Powering Africa&apos;s{" "}
            <span className={styles.heroTitleAccent}>Energy Future</span>
          </h1>
          <p className={styles.heroDescription}>
            Discover how IESR is transforming the energy sector through
            world-class skills training, cutting-edge research, and innovation
            — building capacity across the continent since 1957.
          </p>
          <div className={styles.heroActions}>
            <Link href="#programs" className={styles.heroCta}>
              Academic Programs &nbsp;›
            </Link>
            <Link href="#cta" className={styles.heroCta}>
              Apply Now &nbsp;›
            </Link>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className={styles.heroDots}>
        <button className={styles.dotActive} aria-label="Slide 1" />
        <button className={styles.dot} aria-label="Slide 2" />
        <button className={styles.dot} aria-label="Slide 3" />
      </div>

      {/* Tab Navigation */}
      <div className={styles.tabBar}>
        <div className={styles.tabBarInner}>
          <button className={styles.tabScrollBtn} aria-label="Scroll left">
            <ChevronLeft size={20} />
          </button>
          <div className={styles.tabList}>
            {tabs.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                className={tab.active ? styles.tabActive : styles.tab}
              >
                <span className={styles.tabIcon}>{tab.icon}</span>
                {tab.label}
              </Link>
            ))}
          </div>
          <button className={styles.tabScrollBtn} aria-label="Scroll right">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
