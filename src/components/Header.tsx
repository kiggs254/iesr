"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Accessibility, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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

          <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
            <div className={styles.drawerHeader}>
              <span className={styles.drawerLogo}>IESR Navigation</span>
              <button 
                className={styles.closeDrawerBtn} 
                onClick={toggleMenu} 
                aria-label="Close Menu"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            <div className={styles.navLinksGroup}>
              <Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`} onClick={toggleMenu}>Home</Link>
              <Link href="#about" className={styles.navLink} onClick={toggleMenu}>About IESR</Link>
              <Link href="#departments" className={styles.navLink} onClick={toggleMenu}>Departments</Link>
              <Link href="#programs" className={styles.navLink} onClick={toggleMenu}>Academic Courses</Link>
              <Link href="#programs" className={styles.navLink} onClick={toggleMenu}>Professional Courses</Link>
              <Link href="#research" className={styles.navLink} onClick={toggleMenu}>Research</Link>
              <Link href="#news" className={styles.navLink} onClick={toggleMenu}>News</Link>
              <Link href="#cta" className={styles.navLink} onClick={toggleMenu}>Contact Us</Link>
            </div>
            
            {/* Mobile Utility Links (Only visible when open on mobile) */}
            <div className={styles.mobileUtilities}>
              <Link href="#news" className={styles.mobileUtilLink} onClick={toggleMenu}>Newsroom</Link>
              <Link href="#" className={styles.mobileUtilLink} onClick={toggleMenu}>Student Portal</Link>
              <Link href="#" className={styles.mobileUtilLink} onClick={toggleMenu}>Careers</Link>
            </div>
          </nav>

          {/* Only show hamburger icon when menu is closed */}
          {!isOpen && (
            <button 
              className={styles.menuBtn} 
              onClick={toggleMenu}
              aria-label="Open Menu"
              aria-expanded={isOpen}
            >
              <span /><span /><span />
            </button>
          )}

          <button className={`${styles.searchBtn} ${scrolled ? styles.searchBtnHidden : ""}`} aria-label="Search">
            <Search size={18} strokeWidth={2.5} />
          </button>
        </div>
        
        {/* Backdrop for closing menu when clicking outside on mobile */}
        {isOpen && <div className={styles.backdrop} onClick={toggleMenu} />}
      </div>
    </div>
  );
}
