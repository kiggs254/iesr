"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Accessibility, X, ChevronDown, Landmark, Users } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      if (prev) setAboutOpen(false); // reset sub-menu when closing drawer
      return !prev;
    });
  };

  const closeAll = () => {
    setIsOpen(false);
    setAboutOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On mobile drawer, clicking "About" toggles sub-menu instead of navigating
  const handleAboutClick = (e: React.MouseEvent) => {
    if (isOpen) {
      e.preventDefault();
      setAboutOpen((prev) => !prev);
    }
  };

  return (
    <div className={`${styles.wrapper} ${scrolled ? styles.wrapperSticky : ""}`}>
      <div className={styles.card}>
        {/* ── Top Row ── */}
        <div className={styles.topRow}>
          <div className={styles.topLinks}>
            <Link href="/news" className={styles.topLink}>Newsroom</Link>
            <Link href="#" className={styles.topLink}>Careers</Link>
            <Link href="#" className={styles.topLink}>IESR Foundation</Link>
            <Link href="#" className={styles.topLink}>FAQs</Link>
          </div>
          <div className={styles.topRight}>
            <button className={styles.accessBtn} aria-label="Accessibility">
              <Accessibility size={14} />
            </button>
            <a
              href={process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://learn.iesr.co.ke"}
              className={styles.enquiryBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Portal ↗
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        {/* ── Bottom Row ── */}
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
              <button className={styles.closeDrawerBtn} onClick={toggleMenu} aria-label="Close Menu">
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            <div className={styles.navLinksGroup}>
              <Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`} onClick={closeAll}>
                Home
              </Link>

              {/* ── About dropdown ── */}
              <div className={`${styles.navItem} ${aboutOpen ? styles.navItemOpen : ""}`}>
                <Link
                  href="/about"
                  className={`${styles.navLink} ${styles.navLinkHasDropdown}`}
                  onClick={handleAboutClick}
                  aria-haspopup="true"
                  aria-expanded={aboutOpen}
                >
                  About IESR
                  <ChevronDown
                    size={13}
                    className={`${styles.chevronIcon} ${aboutOpen ? styles.chevronOpen : ""}`}
                    aria-hidden="true"
                  />
                </Link>

                {/* Desktop: shown on hover via CSS | Mobile: shown when aboutOpen */}
                <div className={`${styles.dropdown} ${aboutOpen ? styles.dropdownMobileOpen : ""}`}>
                  <Link href="/about" className={styles.dropdownLink} onClick={closeAll}>
                    <Landmark size={14} className={styles.dropdownLinkIcon} />
                    About IESR
                  </Link>
                  <Link href="/team" className={styles.dropdownLink} onClick={closeAll}>
                    <Users size={14} className={styles.dropdownLinkIcon} />
                    Our Team
                  </Link>
                </div>
              </div>

              <Link href="/departments" className={styles.navLink} onClick={closeAll}>Departments</Link>
              <Link href="/programmes" className={styles.navLink} onClick={closeAll}>Academic Courses</Link>
              <Link href="/professional-courses" className={styles.navLink} onClick={closeAll}>Professional Courses</Link>
              <Link href="/research" className={styles.navLink} onClick={closeAll}>Research</Link>
              <Link href="/news" className={styles.navLink} onClick={closeAll}>News</Link>
              <Link href="/contact" className={styles.navLink} onClick={closeAll}>Contact Us</Link>
            </div>

            <div className={styles.mobileUtilities}>
              <Link href="/news" className={styles.mobileUtilLink} onClick={closeAll}>Newsroom</Link>
              <a href={process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://learn.iesr.co.ke"} className={`${styles.mobileUtilLink} ${styles.mobileUtilPortal}`} target="_blank" rel="noopener noreferrer">Student Portal ↗</a>
              <Link href="/contact" className={styles.mobileUtilLink} onClick={closeAll}>Contact Us</Link>
              <Link href="#" className={styles.mobileUtilLink} onClick={closeAll}>Careers</Link>
            </div>
          </nav>

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

          <button
            className={`${styles.searchBtn} ${scrolled ? styles.searchBtnHidden : ""}`}
            aria-label="Search"
          >
            <Search size={18} strokeWidth={2.5} />
          </button>
        </div>

        {isOpen && <div className={styles.backdrop} onClick={closeAll} />}
      </div>
    </div>
  );
}
