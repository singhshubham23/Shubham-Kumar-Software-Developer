import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, profile } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-28 md:px-10">
      <Link
        href="/#work"
        className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition hover:scale-[1.03]"
      >
        <span aria-hidden>←</span> Back
      </Link>

      <header className="mt-14 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-ink-soft">
            /{project.category} · {project.year}
          </p>
          <h1 className="section-title text-[clamp(2.6rem,7vw,5.5rem)]">{project.title}</h1>
        </div>
        <p className="text-lg leading-relaxed text-ink-soft">{project.description}</p>
      </header>

      <div className="card-shadow relative mt-14 aspect-[16/9] overflow-hidden rounded-[2.25rem] bg-white">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover object-top"
          />
        ) : (
          <div className="grid h-full place-items-center bg-gradient-to-br from-[#1b1b20] to-[#3a3d47] p-10 text-center text-white">
            <span className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-none tracking-tightest">
              {project.title}
            </span>
          </div>
        )}
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <section>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-ink-soft">What I did</p>
          <ul className="space-y-5">
            {project.points.map((p) => (
              <li key={p} className="flex gap-4 text-lg leading-relaxed">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                {p}
              </li>
            ))}
          </ul>
        </section>

        <aside className="space-y-8">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-ink-soft">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="rounded-full border hairline bg-white/60 px-3 py-1.5 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-full bg-ink px-6 py-4 text-sm font-medium text-white transition hover:scale-[1.02]"
              >
                View live <span aria-hidden>↗</span>
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center justify-between rounded-full px-6 py-4 text-sm font-medium transition hover:scale-[1.02]"
            >
              View source <span aria-hidden>↗</span>
            </a>
          </div>
        </aside>
      </div>

      {others.length > 0 && (
        <section className="mt-28 border-t hairline pt-14">
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-ink-soft">Next projects</p>
          <div className="grid gap-8 md:grid-cols-2">
            {others.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="group">
                <div className="card-shadow relative aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-white">
                  {p.image ? (
                    <Image src={p.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top transition duration-[900ms] group-hover:scale-[1.04]" />
                  ) : (
                    <div className="grid h-full place-items-center bg-gradient-to-br from-[#1b1b20] to-[#3a3d47] text-white">
                      <span className="text-2xl font-extrabold uppercase">{p.title}</span>
                    </div>
                  )}
                </div>
                <p className="mt-4 text-xl font-semibold">{p.title} <span className="inline-block transition group-hover:translate-x-1">→</span></p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="mt-20 text-sm text-ink-soft">
        Interested in working together? <a className="link-underline font-medium text-ink" href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
    </main>
  );
}
