"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Accessibility } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Stick after scrolling down a bit
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.wrapper} ${scrolled ? styles.wrapperSticky : ""}`}>
      <div className={styles.card}>
        {/* ── Top Row: utility links ── */}
        <div className={styles.topRow}>
          <div className={styles.topLinks}>
            <Link href="#news" className={styles.topLink}>Newsroom</Link>
            <Link href="#" className={styles.topLink}>Student Portal</Link>
            <Link href="#" className={styles.topLink}>Careers</Link>
            <Link href="#" className={styles.topLink}>IESR Foundation</Link>
            <Link href="#" className={styles.topLink}>FAQs</Link>
          </div>
          <div className={styles.topRight}>
            <button className={styles.accessBtn} aria-label="Accessibility">
              <Accessibility size={14} />
            </button>
            <button className={styles.enquiryBtn}>
              Admission Enquiry →
            </button>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className={styles.divider} />

        {/* ── Bottom Row: logo + nav ── */}
        <div className={styles.bottomRow}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/images/logo.png" 
              alt="IESR Logo" 
              width={180} 
              height={54} 
              className={styles.logoImage}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            <Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`}>Home</Link>
            <Link href="#about" className={styles.navLink}>About IESR</Link>
            <Link href="#departments" className={styles.navLink}>Departments</Link>
            <Link href="#programs" className={styles.navLink}>Academic Courses</Link>
            <Link href="#programs" className={styles.navLink}>Professional Courses</Link>
            <Link href="#research" className={styles.navLink}>Research</Link>
            <Link href="#news" className={styles.navLink}>News</Link>
            <Link href="#cta" className={styles.navLink}>Contact Us</Link>
          </nav>

          <button className={styles.menuBtn} aria-label="Menu">
            <span /><span /><span />
          </button>

          <button className={`${styles.searchBtn} ${scrolled ? styles.searchBtnHidden : ""}`} aria-label="Search">
            <Search size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
