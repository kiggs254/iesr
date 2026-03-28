import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Social Bar */}
      <div className={styles.socialBar}>
        {[
          {
            label: "Facebook",
            icon: (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            ),
          },
          {
            label: "Twitter",
            icon: (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            ),
          },
          {
            label: "LinkedIn",
            icon: (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            ),
          },
          {
            label: "YouTube",
            icon: (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            ),
          },
        ].map((social) => (
          <a
            key={social.label}
            href="#"
            className={styles.socialLink}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Footer Grid */}
      <div className={styles.footerGrid}>
        <div className={styles.footerColumn}>
          <h4>Institute</h4>
          <ul>
            <li><Link href="#">About IESR</Link></li>
            <li><Link href="#">Board of Directors</Link></li>
            <li><Link href="#">Quality Management</Link></li>
            <li><Link href="#">Staff Directory</Link></li>
            <li><Link href="#">Campus Facilities</Link></li>
            <li><Link href="#">Corporate Policy</Link></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Academics</h4>
          <ul>
            <li><Link href="#">Academic Programs</Link></li>
            <li><Link href="#">Professional Courses</Link></li>
            <li><Link href="#">Admissions</Link></li>
            <li><Link href="#">Fee Structure</Link></li>
            <li><Link href="#">Academic Calendar</Link></li>
            <li><Link href="#">Timetables</Link></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="#">Student Portal</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Research Grants</Link></li>
            <li><Link href="#">Career Opportunities</Link></li>
            <li><Link href="#">Library Resources</Link></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Support</h4>
          <ul>
            <li><Link href="#">New Students</Link></li>
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Technical Support</Link></li>
            <li><Link href="#">Feedback & Complaints</Link></li>
            <li><Link href="#">Sitemap</Link></li>
          </ul>
        </div>
      </div>

      {/* Contact Bar */}
      <div className={styles.contactBar}>
        <div className={styles.contactBarInner}>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.99-.27c1.12.37 2.33.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.28.2 2.49.57 3.6a1 1 0 01-.27.99l-2.18 2.2z" />
              </svg>
            </div>
            <div>
              <div className={styles.contactLabel}>Call</div>
              <div className={styles.contactValue}>0721 888 400</div>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
            </div>
            <div>
              <div className={styles.contactLabel}>Location</div>
              <div className={styles.contactValue}>Nairobi, Kenya</div>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div>
              <div className={styles.contactLabel}>Support Email</div>
              <div className={styles.contactValue}>iesr@iesr.ac.ke</div>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
            </div>
            <div>
              <div className={styles.contactLabel}>Headquarters</div>
              <div className={styles.contactValue}>Stima Plaza</div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Institute of Energy Studies &amp; Research (IESR). All rights reserved.
      </div>
    </footer>
  );
}
