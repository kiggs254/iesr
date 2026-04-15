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
const PLACEHOLDER = `${CMS_BASE}images/placeholders/deputy-silhouette.svg`;

const FALLBACK_TEAM: TeamMember[] = [
  // Director
  {
    id: 1,
    name: "Dr. Jeremiah Kiplagat",
    title: "Director",
    photo_url: `${CMS_BASE}images/organogram/1771761005_director.jpg`,
    parent_id: null,
    sort_order: 1,
  },
  // L2 — direct reports to Director
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
  // Under Dr. Patrick Karimi
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
  {
    id: 7,
    name: "Head, Capacity Building",
    title: "Vacant Position",
    photo_url: PLACEHOLDER,
    parent_id: 2,
    sort_order: 3,
  },
  {
    id: 8,
    name: "Head, Engineering & Prof. Dev.",
    title: "Vacant Position",
    photo_url: PLACEHOLDER,
    parent_id: 2,
    sort_order: 4,
  },
  // Under Mercy Njeri
  {
    id: 9,
    name: "Head, Human Resources",
    title: "Vacant Position",
    photo_url: PLACEHOLDER,
    parent_id: 4,
    sort_order: 1,
  },
  {
    id: 10,
    name: "Head, Finance",
    title: "Vacant Position",
    photo_url: PLACEHOLDER,
    parent_id: 4,
    sort_order: 2,
  },
  {
    id: 11,
    name: "Head, ICT",
    title: "Vacant Position",
    photo_url: PLACEHOLDER,
    parent_id: 4,
    sort_order: 3,
  },
  {
    id: 12,
    name: "Head, Procurement",
    title: "Vacant Position",
    photo_url: PLACEHOLDER,
    parent_id: 4,
    sort_order: 4,
  },
  {
    id: 13,
    name: "Head, Marketing",
    title: "Vacant Position",
    photo_url: PLACEHOLDER,
    parent_id: 4,
    sort_order: 5,
  },
  {
    id: 14,
    name: "Head, Legal & Risk Mgmt.",
    title: "Vacant Position",
    photo_url: PLACEHOLDER,
    parent_id: 4,
    sort_order: 6,
  },
];

async function fetchTeam(): Promise<TeamMember[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return FALLBACK_TEAM;

  try {
    const res = await fetch(`${apiUrl}/api/organogram`, { cache: "force-cache" });
    if (!res.ok) throw new Error(`API returned ${res.status}`);
    const json = await res.json();
    const nodes = json.data as TeamMember[];
    return nodes?.length > 0 ? nodes : FALLBACK_TEAM;
  } catch {
    return FALLBACK_TEAM;
  }
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export default async function TeamSection() {
  const allMembers = await fetchTeam();

  const director = allMembers.find((m) => m.parent_id === null);
  const l2 = director
    ? allMembers
        .filter((m) => m.parent_id === director.id)
        .sort((a, b) => a.sort_order - b.sort_order)
    : [];

  const childrenOf = (id: number) =>
    allMembers
      .filter((m) => m.parent_id === id)
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

        {/* ── Org chart ── */}
        <div className={styles.orgChart}>

          {/* ── Director ── */}
          <AnimateOnScroll animation="fadeUp" threshold={0.1}>
            <div className={styles.directorWrap}>
              <div className={styles.directorCard}>
                {/* Photo */}
                <div className={styles.dirPhotoRing}>
                  {director.photo_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={director.photo_url}
                      alt={director.name}
                      className={styles.dirPhoto}
                    />
                  ) : (
                    <span className={styles.dirInitials}>
                      {getInitials(director.name)}
                    </span>
                  )}
                </div>

                {/* Info */}
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

          {/* ── Tree connector director → L2 ── */}
          {l2.length > 0 && (
            <div className={styles.treeJoin} aria-hidden="true">
              <span className={styles.joinV} />
              <span className={styles.joinH} />
            </div>
          )}

          {/* ── L2 Row ── */}
          {l2.length > 0 && (
            <div className={styles.l2Row}>
              {l2.map((member, i) => {
                const subs = childrenOf(member.id);
                return (
                  <div key={member.id} className={styles.l2Branch}>

                    {/* L2 card */}
                    <AnimateOnScroll animation="fadeUp" delay={i * 0.13} threshold={0.05}>
                      <div className={styles.l2Card}>
                        <div className={styles.l2PhotoWrap}>
                          {member.photo_url ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={member.photo_url}
                              alt={member.name}
                              className={styles.l2Photo}
                            />
                          ) : (
                            <span className={styles.l2Initials}>
                              {getInitials(member.name)}
                            </span>
                          )}
                        </div>
                        <h3 className={styles.l2Name}>{member.name}</h3>
                        <p className={styles.l2Title}>{member.title}</p>
                      </div>
                    </AnimateOnScroll>

                    {/* Sub-reports */}
                    {subs.length > 0 && (
                      <>
                        <div className={styles.subConnV} aria-hidden="true" />
                        <div className={styles.subGrid}>
                          {subs.map((sub, j) => {
                            const isVacant = sub.title === "Vacant Position";
                            return (
                              <AnimateOnScroll
                                key={sub.id}
                                animation="fadeUp"
                                delay={i * 0.1 + j * 0.06}
                                threshold={0.03}
                              >
                                <div
                                  className={`${styles.subCard} ${
                                    isVacant ? styles.subCardVacant : ""
                                  }`}
                                >
                                  <div className={styles.subPhotoWrap}>
                                    {sub.photo_url ? (
                                      // eslint-disable-next-line @next/next/no-img-element
                                      <img
                                        src={sub.photo_url}
                                        alt={isVacant ? "Vacant" : sub.name}
                                        className={styles.subPhoto}
                                      />
                                    ) : (
                                      <span className={styles.subInitials}>
                                        {getInitials(sub.name)}
                                      </span>
                                    )}
                                  </div>
                                  <div className={styles.subInfo}>
                                    <p className={styles.subName}>{sub.name}</p>
                                    {isVacant && (
                                      <span className={styles.vacantBadge}>
                                        Vacant
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </AnimateOnScroll>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
