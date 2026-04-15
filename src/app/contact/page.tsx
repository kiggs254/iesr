import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  GraduationCap,
  Users,
  FlaskConical,
  Globe,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us — IESR",
  description:
    "Get in touch with the Institute of Energy Studies & Research. Reach our admissions, training, research, or consultancy teams.",
};

const INFO_CARDS = [
  {
    icon: MapPin,
    label: "Our Location",
    lines: ["Stima Plaza, Kolobot Road", "Parklands, Nairobi, Kenya", "P.O. Box 21055 – 00100"],
    accent: "navy",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+254 20 328 6000", "+254 720 893 868", "Toll Free: 0800 723 252"],
    accent: "gold",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@iesr.co.ke", "admissions@iesr.co.ke", "training@iesr.co.ke"],
    accent: "teal",
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Monday – Friday", "8:00 AM – 5:00 PM EAT", "Closed on Public Holidays"],
    accent: "navy",
  },
];

const QUICK_CONTACTS = [
  {
    icon: GraduationCap,
    title: "Admissions",
    desc: "Certificate & diploma programme enquiries",
    email: "admissions@iesr.co.ke",
    href: "/programmes",
    linkLabel: "View Programmes",
  },
  {
    icon: Users,
    title: "Capacity Building",
    desc: "Professional training & corporate programmes",
    email: "training@iesr.co.ke",
    href: "/professional-courses",
    linkLabel: "View Courses",
  },
  {
    icon: FlaskConical,
    title: "Research",
    desc: "Research partnerships & collaboration",
    email: "research@iesr.co.ke",
    href: "/departments#research",
    linkLabel: "Our Research",
  },
  {
    icon: Globe,
    title: "UMC Consultancy",
    desc: "Utility management & consultancy services",
    email: "umc@iesr.co.ke",
    href: "/departments#umc",
    linkLabel: "Learn More",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        image="/images/cta_campus.jpg"
        imageAlt="IESR Campus"
        imagePosition="center 40%"
        tag="Nairobi, Kenya · Est. 1975"
        titleLine1="Get in"
        titleLine2="Touch"
        description="Whether you're enquiring about admissions, professional training, research collaboration, or consultancy — our team is ready to help."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        actions={[{ label: "Send a Message ↓", href: "#contact-form" }]}
      />

      {/* ── Info cards ── */}
      <section className={styles.infoSection}>
        <div className="container">
          <div className={styles.infoGrid}>
            {INFO_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <AnimateOnScroll key={card.label} animation="fadeUp" delay={i * 0.07}>
                  <div className={`${styles.infoCard} ${styles[`infoCard--${card.accent}`]}`}>
                    <div className={`${styles.infoIcon} ${styles[`infoIcon--${card.accent}`]}`}>
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className={styles.infoBody}>
                      <p className={styles.infoLabel}>{card.label}</p>
                      {card.lines.map((line) => (
                        <p key={line} className={styles.infoLine}>{line}</p>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main content: form + sidebar ── */}
      <section id="contact-form" className={styles.mainSection}>
        <div className="container">
          <div className={styles.mainGrid}>

            {/* ── Form column ── */}
            <AnimateOnScroll animation="slideRight">
              <div className={styles.formPanel}>
                <div className={styles.formPanelHeader}>
                  <span className="section-label">Send a Message</span>
                  <h2 className={styles.formPanelTitle}>We'd love to hear from you</h2>
                  <p className={styles.formPanelSub}>
                    Fill in the form below and one of our team members will respond within 1–2 business days.
                  </p>
                </div>
                <ContactForm />
              </div>
            </AnimateOnScroll>

            {/* ── Sidebar column ── */}
            <div className={styles.sidebar}>
              {/* Quick contacts */}
              <AnimateOnScroll animation="slideLeft">
                <div className={styles.sideCard}>
                  <h3 className={styles.sideCardTitle}>Department Contacts</h3>
                  <p className={styles.sideCardSub}>
                    Reach the right team directly for faster assistance.
                  </p>
                  <div className={styles.quickList}>
                    {QUICK_CONTACTS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className={styles.quickItem}>
                          <div className={styles.quickIcon}>
                            <Icon size={16} strokeWidth={1.5} />
                          </div>
                          <div className={styles.quickBody}>
                            <p className={styles.quickTitle}>{item.title}</p>
                            <p className={styles.quickDesc}>{item.desc}</p>
                            <a href={`mailto:${item.email}`} className={styles.quickEmail}>
                              {item.email}
                            </a>
                            <Link href={item.href} className={styles.quickLink}>
                              {item.linkLabel} →
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Social / external links */}
              <AnimateOnScroll animation="slideLeft" delay={0.1}>
                <div className={`${styles.sideCard} ${styles.sideCardDark}`}>
                  <h3 className={styles.sideCardTitle}>Find Us Online</h3>
                  <p className={styles.sideCardSub}>
                    Connect with IESR on official channels.
                  </p>
                  <div className={styles.externalLinks}>
                    <a
                      href="https://www.kplc.co.ke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.externalLink}
                    >
                      <ExternalLink size={13} />
                      Kenya Power (KPLC)
                    </a>
                    <a
                      href={process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://learn.iesr.co.ke"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.externalLink}
                    >
                      <ExternalLink size={13} />
                      Student E-Learning Portal
                    </a>
                    <a
                      href="https://www.tveta.go.ke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.externalLink}
                    >
                      <ExternalLink size={13} />
                      TVETA — Accreditation Body
                    </a>
                    <a
                      href="https://www.knec.ac.ke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.externalLink}
                    >
                      <ExternalLink size={13} />
                      KNEC — Examinations Council
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className={styles.mapSection}>
        <div className={styles.mapInner}>
          <iframe
            title="IESR Location — Stima Plaza, Parklands, Nairobi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8101609043946!2d36.8178!3d-1.2756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173d0e0c18fb%3A0x0!2sStima%20Plaza%2C%20Kolobot%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1699999999999"
            className={styles.mapFrame}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className={styles.mapOverlayCard}>
            <div className={styles.mapOverlayIcon}>
              <MapPin size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className={styles.mapOverlayTitle}>IESR Campus</p>
              <p className={styles.mapOverlayAddr}>Stima Plaza, Kolobot Road</p>
              <p className={styles.mapOverlayAddr}>Parklands, Nairobi</p>
              <a
                href="https://maps.google.com/?q=Stima+Plaza+Kolobot+Road+Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapOverlayLink}
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
