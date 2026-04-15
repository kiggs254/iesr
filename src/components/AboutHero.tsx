import PageHero from "./PageHero";

export default function AboutHero() {
  return (
    <PageHero
      image="/images/cta_campus.jpg"
      imageAlt="IESR Campus"
      imagePosition="center 30%"
      tag="Est. 1957 · TVET Registered · Regional Centre of Excellence"
      titleLine1="Pioneering Energy"
      titleLine2="Education & Research"
      description="For over six decades, IESR has been at the heart of Kenya's energy sector — building the technical workforce that powers the nation and the wider East African region."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]}
      actions={[
        { label: "Our Story ›", href: "#history" },
        { label: "Vision & Mission ›", href: "#vision" },
      ]}
    />
  );
}
