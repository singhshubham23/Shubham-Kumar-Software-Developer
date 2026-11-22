"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import Reveal from "./Reveal";
import { experiences, education, achievements } from "@/data/portfolio";

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="px-3 py-10 md:px-6">
      <div className="on-dark mx-auto w-full max-w-6xl overflow-hidden rounded-[2.5rem] bg-panel px-6 py-20 text-white md:px-12">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="section-title text-[clamp(2.6rem,8vw,6rem)]">Experience</h2>
            <p className="text-sm text-white/60">Hands-on experience</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t hairline">
          {experiences.map((e, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={e.role + e.company} delay={i * 0.1} className="border-b hairline">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="grid w-full gap-3 py-7 text-left md:grid-cols-[1.4fr_1fr_auto] md:items-center md:gap-8"
                >
                  <div>
                    <p className={`text-xl font-semibold transition md:text-3xl ${isOpen ? "text-white" : "text-white/80"}`}>
                      {e.role}
                    </p>
                    <p className="mt-1 text-sm text-white/55">{e.company}</p>
                  </div>
                  <p className="text-sm text-white/55">{e.location}</p>
                  <div className="flex items-center justify-between gap-4 md:justify-end">
                    <span className="text-sm text-white/55">{e.date}</span>
                    <span className={`grid h-9 w-9 place-items-center rounded-full border border-white/20 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.ul
                      key="points"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-3 overflow-hidden pb-8 md:max-w-3xl"
                    >
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-3 text-white/75 leading-relaxed">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/60" />
                          {p}
                        </li>
                      ))}
                    </m.ul>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>

        {/* Education */}
        <div className="mt-24 grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/50">Education</p>
            <ul className="space-y-8">
              {education.map((ed) => (
                <li key={ed.school} className="flex items-center gap-5">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-white p-2">
                    <Image src={ed.image} alt="" fill sizes="64px" className="object-contain p-1" />
                  </div>
                  <div>
                    <p className="font-semibold">{ed.school}</p>
                    <p className="text-sm text-white/65">{ed.degree}</p>
                    <p className="text-xs text-white/45">{ed.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/50">Certifications & recognition</p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {achievements.map((a) => (
                <li key={a.title} className="rounded-2xl border hairline p-5">
                  <p className="font-semibold">{a.title}</p>
                  <p className="mt-1 text-sm text-white/60">{a.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
