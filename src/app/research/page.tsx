import type { Metadata } from "next";
import Link from "next/link";
import {
  Sun,
  Car,
  Zap,
  Wifi,
  Cpu,
  Cog,
  BarChart2,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PageHero from "@/components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Research Department — IESR",
  description:
    "Explore IESR's research areas: Renewable Energy, Smart Grid, High Voltage, Data Analytics, Energy in Transport, and more.",
};

const LABS = [
  {
    id: "res",
    icon: Sun,
    color: "gold",
    title: "Renewable Energy Systems",
    abbr: "RES",
    items: [
      "Solar PV Systems",
      "Wind Energy Systems",
      "Hybrid Systems",
      "Geothermal Based Research",
      "Power Storage Systems",
    ],
  },
  {
    id: "eit",
    icon: Car,
    color: "navy",
    title: "Energy in Transport",
    abbr: "EIT",
    items: [
      "Efficient Combustion Engines",
      "Electric Vehicles (Cars, E-Buses, Trams)",
      "Electric Cycles",
      "Charging Systems",
    ],
  },
  {
    id: "hvl",
    icon: Zap,
    color: "amber",
    title: "High Voltage Laboratory",
    abbr: "HVL",
    items: [
      "High Voltage Testing & Measurements",
      "High Voltage Insulation Systems",
      "Electromagnetic Fields",
      "Transients in Power Systems",
      "Grounding Systems",
      "Power & Industrial Applications",
    ],
  },
  {
    id: "sgl",
    icon: Wifi,
    color: "teal",
    title: "Smart Grid Laboratory",
    abbr: "SGL",
    items: [
      "SCADA Systems & Data Acquisition",
      "Transmission & Distribution Automation",
      "Smart Metering",
      "Distribution Management Systems",
      "GIS Planning for Utilities",
      "GSM Technology for Utilities",
      "Mobile Applications",
      "Internet of Things (IoT) Solutions",
    ],
  },
  {
    id: "ped",
    icon: Cpu,
    color: "navy",
    title: "Power Electronics & Devices",
    abbr: "PED",
    items: ["Power Systems Devices"],
  },
  {
    id: "eml",
    icon: Cog,
    color: "gold",
    title: "Electric Machines Laboratory",
    abbr: "EML",
    items: ["Performance of Power Systems Machines"],
  },
  {
    id: "dal",
    icon: BarChart2,
    color: "teal",
    title: "Data Analytics Laboratory",
    abbr: "DAL",
    groups: [
      {
        label: "Business Analytics",
        items: [
          "Energy Tariffs",
          "Energy Economics",
          "Customer Satisfaction",
          "Revenue Loss",
        ],
      },
      {
        label: "Technical Analytics",
        items: [
          "Power Quality Analysis",
          "Capacity & Demand Analysis",
          "System Reliability",
          "Power System Simulation",
          "Connectivity",
          "SAIDI / SAIFI",
          "Technical Losses",
        ],
      },
    ],
  },
  {
    id: "msr",
    icon: FlaskConical,
    color: "amber",
    title: "Material Science Research",
    abbr: "MSR Laboratory",
    groups: [
      {
        label: "Characterization Techniques",
        items: [
          "XRF Analysis",
          "Stress / Strain Measurements",
          "Thickness Measurements",
          "Insulation Testing",
        ],
      },
    ],
  },
];

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        image="/images/dept_research.jpg"
        imageAlt="IESR Research Department"
        imagePosition="center 35%"
        tag="Research & Innovation · IESR · Kenya Power"
        titleLine1="Research"
        titleLine2="Department"
        description="The Research and Innovation department undertakes cutting-edge research to address challenges facing KPLC and Kenya's energy sector — driving innovative ideas and products for the future."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Research" },
        ]}
        actions={[
          { label: "Explore Research Areas ↓", href: "#research-areas" },
          { label: "Contact Department →", href: "/contact" },
        ]}
      />

      {/* ── Intro ── */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introGrid}>
            <AnimateOnScroll animation="slideRight">
              <div className={styles.introContent}>
                <span className="section-label">Our Mission</span>
                <h2 className="section-title">Powering Innovation in Kenya's Energy Sector</h2>
                <p className={styles.introText}>
                  The Research and Innovation department is responsible for undertaking research
                  and innovation activities aimed at addressing various challenges facing both
                  KPLC and the energy sector at large, as well as coming up with innovative
                  ideas and products.
                </p>
                <p className={styles.introText}>
                  Operating across eight specialised laboratories, our researchers collaborate
                  with industry partners, academic institutions, and government bodies to deliver
                  practical solutions — from smart grid automation and renewable energy integration
                  to high voltage testing and data-driven energy analytics.
                </p>
                <div className={styles.introCtas}>
                  <Link href="#research-areas" className={styles.introBtn}>
                    View Research Areas <ArrowRight size={15} />
                  </Link>
                  <Link href="/contact" className={styles.introLink}>
                    Partner with us →
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slideLeft">
              <div className={styles.introStats}>
                {[
                  { num: "8", label: "Active Research Laboratories" },
                  { num: "50+", label: "Research Projects Completed" },
                  { num: "Pan-African", label: "Research Partnerships" },
                  { num: "KPLC", label: "Primary Research Partner" },
                ].map((item) => (
                  <div key={item.num} className={styles.introStat}>
                    <span className={styles.introStatNum}>{item.num}</span>
                    <span className={styles.introStatLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Research Areas ── */}
      <section id="research-areas" className={styles.areasSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeUp">
            <div className={styles.sectionHeader}>
              <span className="section-label">Research Areas</span>
              <h2 className="section-title">Our Laboratories & Focus Areas</h2>
              <p className={styles.sectionSub}>
                Eight specialised research labs covering the full spectrum of modern energy
                challenges — from renewable sources and smart grids to materials science and
                data analytics.
              </p>
            </div>
          </AnimateOnScroll>

          <div className={styles.labsList}>
            {LABS.map((lab, i) => {
              const Icon = lab.icon;
              const index = String(i + 1).padStart(2, "0");
              return (
                <AnimateOnScroll key={lab.id} animation="fadeUp" delay={i * 0.05}>
                  <article id={lab.id} className={`${styles.labRow} ${styles[`labRow--${lab.color}`]}`}>
                    {/* Left — identity */}
                    <div className={styles.labMeta}>
                      <span className={styles.labIndex}>{index}</span>
                      <div className={`${styles.labIconWrap} ${styles[`labIconWrap--${lab.color}`]}`}>
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <div className={styles.labInfo}>
                        <p className={styles.labAbbr}>{lab.abbr}</p>
                        <h3 className={styles.labTitle}>{lab.title}</h3>
                      </div>
                    </div>

                    {/* Right — research items */}
                    <div className={styles.labContent}>
                      {"items" in lab && lab.items && (
                        <div className={styles.labTags}>
                          {lab.items.map((item) => (
                            <span key={item} className={`${styles.labTag} ${styles[`labTag--${lab.color}`]}`}>
                              {item}
                            </span>
                          ))}
                        </div>
                      )}

                      {"groups" in lab && lab.groups && (
                        <div className={styles.labGroupsWrap}>
                          {lab.groups.map((group) => (
                            <div key={group.label} className={styles.labGroupBlock}>
                              <p className={styles.labGroupLabel}>{group.label}</p>
                              <div className={styles.labTags}>
                                {group.items.map((item) => (
                                  <span key={item} className={`${styles.labTag} ${styles[`labTag--${lab.color}`]}`}>
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeUp">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Partner with IESR on Research</h2>
              <p className={styles.ctaSub}>
                We welcome collaborations with universities, government bodies, and industry
                partners. Get in touch with our Research Department to explore opportunities.
              </p>
              <div className={styles.ctaBtns}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Contact Research Department <ArrowRight size={16} />
                </Link>
                <Link href="/departments#research" className={styles.ctaOutline}>
                  About the Department
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
