"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { projects, otherProjects } from "@/data/portfolio";

const filters = ["All", "Backend", "Full Stack", "Exploration"];

// Layout animations (filter pill, card reflow) need the larger feature set.
// It is loaded on demand so it does not sit in the initial bundle.
const loadLayoutFeatures = () => import("framer-motion").then((mod) => mod.domMax);

function ProjectCard({ project, index }) {
  return (
    <m.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="card-shadow relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-white">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition duration-[900ms] group-hover:scale-[1.04]"
            />
          ) : (
            <div className="grid h-full place-items-center bg-gradient-to-br from-[#1b1b20] to-[#3a3d47] p-8 text-center text-white">
              <span className="text-3xl font-extrabold uppercase leading-none tracking-tightest">
                {project.title}
              </span>
            </div>
          )}
          <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-ink opacity-0 shadow transition duration-500 group-hover:opacity-100">
            ↗
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{project.title}</h3>
            <p className="mt-2 line-clamp-2 max-w-md text-sm leading-relaxed text-ink-soft">{project.description}</p>
          </div>
          <span className="shrink-0 rounded-full glass px-3 py-1 text-xs font-medium text-ink-soft">{project.year}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((t) => (
            <span key={t} className="rounded-full border hairline px-3 py-1 text-xs text-ink-soft">
              {t}
            </span>
          ))}
        </div>
      </Link>
    </m.article>
  );
}

export default function SelectedWork() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : filter === "Exploration"
      ? projects.filter((p) => p.category === "Frontend")
      : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <LazyMotion features={loadLayoutFeatures} strict>
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-28 md:px-10">
      <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="section-title text-[clamp(2.6rem,8vw,5.5rem)]">Projects</h2>
        </div>
        <div className="glass flex w-fit gap-1 rounded-full p-1">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-2 text-sm transition ${
                filter === f ? "text-white" : "text-ink-soft hover:text-ink"
              }`}
            >
              {filter === f && (
                <m.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <m.div layout className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </AnimatePresence>
      </m.div>

      <Reveal className="mt-20">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-ink-soft">More on GitHub</p>
        <ul className="grid gap-px overflow-hidden rounded-[1.75rem] bg-black/10 md:grid-cols-2">
          {otherProjects.map((p) => (
            <li key={p.title} className="bg-paper/90 backdrop-blur">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 px-6 py-6 transition hover:bg-white"
              >
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{p.detail}</p>
                </div>
                <span className="text-lg transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
    </LazyMotion>
  );
}
