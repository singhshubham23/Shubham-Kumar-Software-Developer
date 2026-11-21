import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="flex flex-col gap-8 border-t hairline pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[clamp(2.5rem,7vw,5rem)] font-extrabold uppercase leading-none tracking-tightest">
            <span className="outline-text">Shubham</span> Kumar
          </p>
          <p className="mt-4 text-sm text-ink-soft">{profile.role}, {profile.tagline.toLowerCase()}.</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
          <li><a className="link-underline" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="link-underline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="link-underline" href={profile.website} target="_blank" rel="noopener noreferrer">Portfolio</a></li>
          <li><a className="link-underline" href={profile.resumePath} target="_blank" rel="noopener noreferrer">Résumé</a></li>
          <li><a className="link-underline" href={`mailto:${profile.email}`}>Email</a></li>
        </ul>
      </div>
      <p className="mt-10 text-xs text-ink-soft">© {year} {profile.fullName}. Built with Next.js.</p>
    </footer>
  );
}
