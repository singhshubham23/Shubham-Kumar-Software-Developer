import { profile, projects } from "@/data/portfolio";

export default function sitemap() {
  const base = profile.website;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    })),
  ];
}
