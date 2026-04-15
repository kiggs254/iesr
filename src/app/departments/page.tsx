import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Users,
  FlaskConical,
  ShieldCheck,
  LayoutGrid,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PageHero from "@/components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Departments — IESR",
  description:
    "Explore the six departments at the Institute of Energy Studies & Research — Academics, Capacity Building, Research, Standards, Support Services, and UMC.",
};

const DEPARTMENTS = [
  {
    id: "academics",
    icon: GraduationCap,
    color: "navy",
    title: "Academics Department",
    image: "/images/about-academic.png",
    imagePosition: "center 25%",
    description:
      "This department undertakes training of certificate and diploma students in Kenya National Examinations Council (KNEC) programs as well as the new Technical and Vocational Education and Training Curriculum Development, Assessment and Certification Council (TVET CDACC). The Institute is registered with and affiliated with the following bodies and institutions to offer various academic and capacity building programs:",
    listLabel: "Regulatory & Accreditation Bodies",
    items: [
      { label: "TVETA", detail: "Technical and Vocational Education Training Authority (TVET Act No. 29 of 2013)" },
      { label: "NITA", detail: "National Industrial Training Authority — Industrial Training Act (Cap 237 of 1959 and Amendment Act of 2011)" },
      { label: "KNEC", detail: "Kenya National Examinations Council — KNEC Act No. 29 of 2012" },
      { label: "KUCCPS", detail: "Kenya Universities and Colleges Central Placement Service — Universities Act No. 42 of 2012" },
      { label: "DOSHS", detail: "Directorate of Occupational Safety and Health Services — OSHA 2007" },
    ],
    cta: { label: "View Programmes", href: "/programmes" },
  },
  {
    id: "capacity-building",
    icon: Users,
    color: "gold",
    title: "Capacity Building Department",
    image: "/images/feature_training.jpg",
    imagePosition: "center 40%",
    description:
      "This department is responsible for offering training for KPLC staff and other corporate organisations and individuals. The programmes are aimed at building the professional capacity and skills of the trainees. Training is delivered face-to-face at IESR, online, or as a blended approach — and can be conducted at the client's venue of choice upon request.",
    listLabel: "Delivery Modes",
    items: [
      { label: "Face-to-Face", detail: "Instructor-led sessions at the IESR campus in Nairobi" },
      { label: "Online", detail: "Virtual instructor-led training via the IESR e-learning portal" },
      { label: "Blended", detail: "Combination of online self-study and in-person sessions" },
      { label: "On-Site", detail: "Training conducted at the client's preferred venue on request" },
    ],
    cta: { label: "View Professional Courses", href: "/professional-courses" },
  },
  {
    id: "research",
    icon: FlaskConical,
    color: "teal",
    title: "Research Department",
    image: "/images/dept_research.jpg",
    imagePosition: "center 30%",
    description:
      "The Research and Innovation department is responsible for undertaking research and innovation activities aimed at addressing various challenges facing both KPLC and the energy sector at large, as well as coming up with innovative ideas and products that drive Kenya's energy future.",
    listLabel: "Focus Areas",
    items: [
      { label: "Energy Access", detail: "Expanding reliable electricity to underserved communities" },
      { label: "Grid Modernisation", detail: "Smart grid technologies and SCADA systems research" },
      { label: "Renewable Energy", detail: "Solar, wind, and geothermal integration studies" },
      { label: "Energy Efficiency", detail: "Reducing technical and commercial losses in the network" },
    ],
    cta: { label: "View Research Areas", href: "#research-areas" },
  },
  {
    id: "standards",
    icon: ShieldCheck,
    color: "navy",
    title: "Standards Department",
    image: "/images/dept_standards.jpg",
    imagePosition: "center",
    description:
      "This department is responsible for the development of standards for KPLC, the enforcement of those standards (both KPLC-developed standards and relevant ISO/IEC standards), and Quality Management Systems (QMS) Compliance across the organisation.",
    listLabel: "Key Functions",
    items: [
      { label: "Standards Development", detail: "Drafting technical standards for Kenya Power operations" },
      { label: "Standards Enforcement", detail: "Ensuring compliance with internal and international standards" },
      { label: "ISO/IEC Compliance", detail: "Alignment with relevant international standards bodies" },
      { label: "QMS", detail: "Quality Management Systems implementation and audit support" },
    ],
    cta: null,
  },
  {
    id: "support-services",
    icon: LayoutGrid,
    color: "gold",
    title: "Support Services Department",
    image: "/images/dept_support.jpg",
    imagePosition: "center",
    description:
      "The Support Services department provides the operational backbone of IESR, ensuring seamless day-to-day running of the institute across all functional areas.",
    listLabel: "Functions & Sections",
    items: [
      { label: "Human Resources & Administration", detail: "Recruitment, welfare, payroll, and general admin" },
      { label: "Supply Chain & Logistics", detail: "Procurement, stores management, and distribution" },
      { label: "Security", detail: "Campus security operations and asset protection" },
      { label: "ICT", detail: "Infrastructure, systems, and digital support services" },
      { label: "Finance", detail: "Budgeting, accounting, and financial reporting" },
    ],
    cta: null,
  },
  {
    id: "umc",
    icon: Globe,
    color: "teal",
    title: "Utility Management & Consultancy",
    image: "/images/dept_consultancy.jpg",
    imagePosition: "center 35%",
    description:
      "The UMC department conducts consultancy services to utility companies across the African continent and beyond, leveraging IESR's deep technical expertise to support infrastructure projects and capacity development.",
    listLabel: "Key Projects & Services",
    items: [
      { label: "Pole Leasing", detail: "Structured leasing of electricity poles to telecommunications operators" },
      { label: "Fibre Optic", detail: "Deployment and management of fibre infrastructure along power lines" },
      { label: "Super ESCO", detail: "Super Energy Service Company — energy efficiency financing solutions" },
      { label: "Utility Consultancy", detail: "Technical advisory services for African power utilities" },
    ],
    cta: { label: "Contact UMC", href: "#cta" },
  },
];

export default function DepartmentsPage() {
  return (
    <main>
      <PageHero
        image="/images/power-grid.png"
        imageAlt="IESR Departments"
        imagePosition="center 55%"
        tag="6 Departments · Kenya Power · IESR"
        titleLine1="Departments"
        titleLine2="at IESR"
        description="Six specialised departments drive IESR's mission — from academic training and professional development to research, standards, consultancy, and operational excellence."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Departments" },
        ]}
        actions={[{ label: "Explore Departments ↓", href: "#departments" }]}
      />

      {/* ── Overview strip ── */}
      <section className={styles.overviewBar}>
        <div className="container">
          <div className={styles.overviewGrid}>
            {[
              { num: "6",    label: "Specialised Departments" },
              { num: "50+",  label: "Years of Institutional Excellence" },
              { num: "10k+", label: "Professionals Trained" },
              { num: "Pan-African", label: "Consultancy Reach" },
            ].map((item) => (
              <div key={item.num} className={styles.overviewItem}>
                <span className={styles.overviewNum}>{item.num}</span>
                <span className={styles.overviewLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Department cards ── */}
      <section id="departments" className={styles.section}>
        <div className="container">
          <AnimateOnScroll animation="fadeUp">
            <div className={styles.sectionHeader}>
              <span className="section-label">Our Structure</span>
              <h2 className="section-title">Meet the Departments</h2>
              <p className={styles.sectionSub}>
                Each department plays a distinct role in delivering IESR's mandate to train, research, and innovate for Kenya's energy sector.
              </p>
            </div>
          </AnimateOnScroll>

          <div className={styles.deptGrid}>
            {DEPARTMENTS.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <AnimateOnScroll
                  key={dept.id}
                  animation={i % 2 === 0 ? "slideRight" : "slideLeft"}
                  delay={0.05}
                >
                  <article id={dept.id} className={`${styles.deptCard} ${styles[`deptCard--${dept.color}`]}`}>
                    {/* Image panel */}
                    <div className={styles.deptImage}>
                      <Image
                        src={dept.image}
                        alt={dept.title}
                        fill
                        style={{ objectFit: "cover", objectPosition: dept.imagePosition }}
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <div className={styles.deptImageOverlay} />
                      <div className={styles.deptImageBadge}>
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content panel */}
                    <div className={styles.deptContent}>
                      <div className={styles.deptMeta}>
                        <span className={`${styles.deptTag} ${styles[`deptTag--${dept.color}`]}`}>
                          <Icon size={12} />
                          {dept.color === "teal" ? "Research & Innovation" : dept.color === "gold" ? "Training & Development" : "Operations"}
                        </span>
                      </div>

                      <h2 className={styles.deptTitle}>{dept.title}</h2>
                      <p className={styles.deptDesc}>{dept.description}</p>

                      {dept.items.length > 0 && (
                        <div className={styles.deptItems}>
                          <p className={styles.deptItemsLabel}>{dept.listLabel}</p>
                          <ul className={styles.deptList}>
                            {dept.items.map((item) => (
                              <li key={item.label} className={styles.deptListItem}>
                                <CheckCircle2 size={14} className={styles.deptListIcon} />
                                <span>
                                  <strong className={styles.deptListStrong}>{item.label}</strong>
                                  {" — "}
                                  <span className={styles.deptListDetail}>{item.detail}</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {dept.cta && (
                        <Link href={dept.cta.href} className={`${styles.deptCta} ${styles[`deptCta--${dept.color}`]}`}>
                          {dept.cta.label} <ArrowRight size={14} />
                        </Link>
                      )}
                    </div>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeUp">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Get in touch with a department</h2>
              <p className={styles.ctaSub}>
                Whether you need academic admissions, professional training, consultancy, or research collaboration — we're here to help.
              </p>
              <div className={styles.ctaBtns}>
                <Link href="#cta" className={styles.ctaPrimary}>
                  Contact Us <ArrowRight size={16} />
                </Link>
                <Link href="/about" className={styles.ctaOutline}>
                  About IESR
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
