import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ClipboardList, ArrowRight, CircleDot, CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PageHero from "@/components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Academic Programmes — IESR",
  description: "Explore Diploma and Craft Certificate academic programmes at the Institute of Energy Studies & Research.",
};

interface Programme {
  id: number;
  name: string;
  category: string;
  mode: string;
  duration: string;
}

const FALLBACK_DIPLOMA: Programme[] = [
  { id: 1, name: "Diploma in Electrical and Electronic Engineering (Power Option)", category: "Diploma", mode: "Full-time", duration: "3 years" },
  { id: 2, name: "Diploma in Mechanical Engineering (Production Option)", category: "Diploma", mode: "Full-time", duration: "3 years" },
  { id: 3, name: "Diploma in Mechanical Engineering (Plant Option)", category: "Diploma", mode: "Full-time", duration: "3 years" },
  { id: 4, name: "Diploma in Information and Communication Technology", category: "Diploma", mode: "Full-time", duration: "3 years" },
];

const FALLBACK_CRAFT: Programme[] = [
  { id: 5, name: "Craft Certificate in Electrical & Electronic Engineering (Power Option)", category: "Craft Certificate", mode: "Full-time", duration: "2 years" },
  { id: 6, name: "Craft Certificate in Automotive Engineering", category: "Craft Certificate", mode: "Full-time", duration: "2 years" },
  { id: 7, name: "Craft Certificate in Information and Communication Technology", category: "Craft Certificate", mode: "Full-time", duration: "2 years" },
];

async function fetchProgrammes(): Promise<{ diplomas: Programme[]; craft: Programme[] }> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return { diplomas: FALLBACK_DIPLOMA, craft: FALLBACK_CRAFT };
  try {
    const res = await fetch(`${apiUrl}/api/programmes`, { cache: "force-cache" });
    if (!res.ok) throw new Error();
    const json = await res.json();
    const all = json.data as Programme[];
    if (!all.length) return { diplomas: FALLBACK_DIPLOMA, craft: FALLBACK_CRAFT };
    return {
      diplomas: all.filter((p) => p.category === "Diploma"),
      craft:    all.filter((p) => p.category === "Craft Certificate"),
    };
  } catch {
    return { diplomas: FALLBACK_DIPLOMA, craft: FALLBACK_CRAFT };
  }
}

export default async function ProgrammesPage() {
  const { diplomas, craft } = await fetchProgrammes();

  return (
    <main>
      <PageHero
        image="/images/about-academic.png"
        imageAlt="IESR Students"
        imagePosition="center 25%"
        tag="TVET Registered · EBK Accredited · 50+ Years"
        titleLine1="Academic"
        titleLine2="Programmes"
        description="Nationally accredited Diploma and Craft Certificate programmes in electrical engineering, mechanical engineering, and ICT — designed to produce Kenya's technical energy workforce."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Academic Programmes" },
        ]}
        actions={[
          { label: "View Programmes ↓", href: "#programmes" },
          { label: "Apply Now ›", href: "#apply" },
        ]}
      />

      {/* ── Stats bar ── */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { stat: "50+",    label: "Years of Training Excellence" },
              { stat: "10,000+",label: "Graduates in the Energy Sector" },
              { stat: "100%",   label: "Government Recognised" },
              { stat: "EBK",    label: "Engineers Board of Kenya Accredited" },
            ].map((item) => (
              <div key={item.stat} className={styles.statItem}>
                <span className={styles.statNum}>{item.stat}</span>
                <span className={styles.statLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programme listings ── */}
      <section id="programmes" className={styles.section}>
        <div className="container">
          <AnimateOnScroll animation="fadeUp">
            <div className={styles.sectionHeader}>
              <span className="section-label">Our Programmes</span>
              <h2 className="section-title">Choose Your Path</h2>
              <p className={styles.sectionSub}>
                All programmes are accredited by KNEC and recognised by the Engineers Board of Kenya.
              </p>
            </div>
          </AnimateOnScroll>

          <div className={styles.programmeGrid}>
            {/* Diploma */}
            <AnimateOnScroll animation="slideRight">
              <div className={styles.programmeCol}>
                <div className={styles.colHeader}>
                  <div className={styles.colIcon}>
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <h2 className={styles.colTitle}>Diploma Programmes</h2>
                    <p className={styles.colMeta}>3 years · Full-time</p>
                  </div>
                </div>
                <ul className={styles.programmeList}>
                  {diplomas.map((p) => (
                    <li key={p.id} className={styles.programmeItem}>
                      <CircleDot size={13} className={styles.programmeIcon} />
                      <span className={styles.programmeName}>{p.name}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about#admissions" className={styles.colCta}>
                  Entry Requirements →
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Craft Certificate */}
            <AnimateOnScroll animation="slideLeft">
              <div className={`${styles.programmeCol} ${styles.programmeColDark}`}>
                <div className={styles.colHeader}>
                  <div className={`${styles.colIcon} ${styles.colIconGold}`}>
                    <ClipboardList size={26} />
                  </div>
                  <div>
                    <h2 className={styles.colTitle}>Craft Certificate</h2>
                    <p className={styles.colMeta}>2 years · Full-time</p>
                  </div>
                </div>
                <ul className={styles.programmeList}>
                  {craft.map((p) => (
                    <li key={p.id} className={styles.programmeItem}>
                      <CircleDot size={13} className={styles.programmeIcon} />
                      <span className={styles.programmeName}>{p.name}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about#admissions" className={styles.colCta}>
                  Entry Requirements →
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Professional Development ── */}
      <section className={styles.proSection}>
        <div className="container">
          <div className={styles.proGrid}>
            <AnimateOnScroll animation="slideRight">
              <div className={styles.proContent}>
                <span className="section-label">Also at IESR</span>
                <h2 className="section-title">Professional Development</h2>
                <p className={styles.proDesc}>
                  Beyond academic programmes, IESR runs an extensive calendar of short
                  courses and professional training — from electrical safety and SCADA
                  to leadership and renewable energy. All are CPD accredited.
                </p>
                <ul className={styles.proList}>
                  {["Electrical Safety & Arc Flash", "Power Line Design & Construction", "Renewable Energy Systems", "ICT & SCADA Training", "Leadership & Management"].map((item) => (
                    <li key={item} className={styles.proListItem}>
                      <CheckCircle2 size={15} className={styles.proIcon} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={styles.proCtas}>
                  <Link href="/professional-courses" className={styles.proBtn}>
                    View Training Calendar <ArrowRight size={15} />
                  </Link>
                  <a
                    href={process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://learn.iesr.co.ke"}
                    className={styles.proLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Online Learning Portal →
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slideLeft">
              <div className={styles.proImageWrap}>
                <div className={styles.proImage} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Apply CTA ── */}
      <section id="apply" className={styles.ctaSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeUp">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Ready to enrol?</h2>
              <p className={styles.ctaSub}>
                Applications for the September 2026 intake are now open.
                Join thousands of engineers trained at IESR.
              </p>
              <div className={styles.ctaBtns}>
                <Link href="#" className={styles.ctaPrimary}>
                  Apply Now <ArrowRight size={16} />
                </Link>
                <Link href="/about" className={styles.ctaOutline}>
                  Learn About IESR
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
