"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, FlaskConical, Lightbulb } from "lucide-react";
import styles from "./AboutSection.module.css";

const tabData = [
  {
    id: "academic",
    label: "Academic",
    icon: <GraduationCap size={18} />,
    title: "Academic Excellence in Energy Studies",
    description:
      "The Institute of Energy Studies & Research (IESR) was established in 1957 to develop technical and engineering skills for the power sector. Today, IESR offers capacity building, urban, and distance learning programmes and has evolved as a regional centre of excellence in energy studies, research and innovation.",
    points: [
      "Certificate & Diploma programmes accredited by KNEC",
      "Flexible learning: full-time, part-time, and distance options",
      "Industry-aligned curriculum developed with sector experts",
      "State-of-the-art laboratories and training facilities",
    ],
    image: "/images/about-academic.png",
    cta: "View Academic Programs",
  },
  {
    id: "research",
    label: "Research",
    icon: <FlaskConical size={18} />,
    title: "Pioneering Energy Research",
    description:
      "The Research and Innovation department is responsible for undertaking research and innovation activities that are geared towards solving critical challenges in Africa's energy sector. Our research partnerships span both local and international institutions.",
    points: [
      "Applied research in power systems & renewable energy",
      "Collaboration with global energy research institutions",
      "Published research in peer-reviewed journals",
      "Student research programmes and mentorship",
    ],
    image: "/images/about-research.png",
    cta: "Explore Research",
  },
  {
    id: "innovation",
    label: "Innovation",
    icon: <Lightbulb size={18} />,
    title: "Driving Energy Innovation",
    description:
      "IESR is at the forefront of driving innovation in the energy sector across Africa. Our innovation lab provides a platform for students, researchers, and industry partners to develop and test new technologies and solutions for the continent's energy challenges.",
    points: [
      "Smart grid technology development",
      "Renewable energy integration solutions",
      "Energy efficiency and sustainability programmes",
      "Industry partnerships and technology transfer",
    ],
    image: "/images/about-innovation.png",
    cta: "Learn About Innovation",
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabData[activeTab];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">About IESR</span>
          <h2 className="section-title">
            Centre of Excellence in Energy Education
          </h2>
          <p>
            IESR has been at the forefront of energy education in East Africa for
            over six decades, building capacity for the power sector through
            world-class training and research programmes.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {tabData.map((tab, i) => (
            <button
              key={tab.id}
              className={
                i === activeTab ? styles.tabBtnActive : styles.tabBtn
              }
              onClick={() => setActiveTab(i)}
            >
              <span className={styles.tabBtnIcon}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent} key={current.id}>
          <div className={styles.tabImage}>
            <Image
              src={current.image}
              alt={current.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.tabImageDecor} />
          </div>
          <div className={styles.tabText}>
            <h3>{current.title}</h3>
            <p>{current.description}</p>
            <ul>
              {current.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link href="#programs" className="btn btn--primary">
              {current.cta} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
