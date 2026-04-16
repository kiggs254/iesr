import AnimateOnScroll from "./AnimateOnScroll";
import styles from "./TeamSection.module.css";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  photo_url: string | null;
  parent_id: number | null;
  sort_order: number;
}

const CMS_BASE = "https://stagingiesr.jiles.co.ke/";

const FALLBACK_TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Jeremiah Kiplagat",
    title: "Director",
    photo_url: `${CMS_BASE}images/organogram/1771761005_director.jpg`,
    parent_id: null,
    sort_order: 1,
  },
  {
    id: 2,
    name: "Dr. Patrick Karimi",
    title: "Deputy Director, IESR",
    photo_url: `${CMS_BASE}storage/organogram/1772972618_pk.jpg`,
    parent_id: 1,
    sort_order: 1,
  },
  {
    id: 3,
    name: "David Mburu",
    title: "Head, Academic",
    photo_url: `${CMS_BASE}storage/organogram/1772973919_dm.jpg`,
    parent_id: 1,
    sort_order: 2,
  },
  {
    id: 4,
    name: "Mercy Njeri",
    title: "Deputy Director, Support Services",
    photo_url: `${CMS_BASE}storage/organogram/1772972846_mn.jpg`,
    parent_id: 1,
    sort_order: 3,
  },
  {
    id: 5,
    name: "Henry Pwani",
    title: "Head, Research & Innovation",
    photo_url: `${CMS_BASE}storage/organogram/1772973372_hp.jpg`,
    parent_id: 2,
    sort_order: 1,
  },
  {
    id: 6,
    name: "Sarah Wepukhulu",
    title: "Deputy Director, Consultancy Services",
    photo_url: `${CMS_BASE}storage/organogram/1772972686_sw.jpg`,
    parent_id: 2,
    sort_order: 2,
  },
];

function hasRealPhoto(m: TeamMember): boolean {
  return !!m.photo_url && !m.photo_url.includes("placeholder") && !m.photo_url.includes("silhouette");
}

async function fetchTeam(): Promise<TeamMember[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return FALLBACK_TEAM;

  try {
    const res = await fetch(`${apiUrl}/api/organogram`, { cache: "force-cache" });
    if (!res.ok) throw new Error(`API returned ${res.status}`);
    const json = await res.json();
    const nodes = json.data as TeamMember[];
    if (!nodes?.length) return FALLBACK_TEAM;
    // Only keep members who have a real photo
    return nodes.filter(hasRealPhoto);
  } catch {
    return FALLBACK_TEAM;
  }
}

export default async function TeamSection() {
  const members = await fetchTeam();

  const director = members.find((m) => m.parent_id === null);
  const staff = members
    .filter((m) => m.parent_id !== null)
    .sort((a, b) => a.sort_order - b.sort_order);

  if (!director) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Section header */}
        <AnimateOnScroll animation="fadeUp" threshold={0.1}>
          <div className={styles.sectionHeader}>
            <span className="section-label">Leadership</span>
            <h2 className="section-title">IESR Management Structure</h2>
            <p className={styles.subtitle}>
              Experienced professionals guiding IESR&apos;s mission to deliver
              world-class energy education and research across the region.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── Director ── */}
        <AnimateOnScroll animation="fadeUp" threshold={0.1}>
          <div className={styles.directorWrap}>
            <div className={styles.directorCard}>
              <div className={styles.dirPhotoRing}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={director.photo_url!}
                  alt={director.name}
                  className={styles.dirPhoto}
                />
              </div>
              <div className={styles.dirInfo}>
                <span className={styles.dirBadge}>Director General</span>
                <h3 className={styles.dirName}>{director.name}</h3>
                <p className={styles.dirTitle}>{director.title}</p>
                <p className={styles.dirOrg}>
                  Institute of Energy Studies &amp; Research · Kenya Power
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* ── Team grid ── */}
        {staff.length > 0 && (
          <div className={styles.teamGrid}>
            {staff.map((member, i) => (
              <AnimateOnScroll
                key={member.id}
                animation="fadeUp"
                delay={i * 0.1}
                threshold={0.05}
              >
                <div className={styles.memberCard}>
                  <div className={styles.memberPhotoWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.photo_url!}
                      alt={member.name}
                      className={styles.memberPhoto}
                    />
                  </div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberTitle}>{member.title}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
