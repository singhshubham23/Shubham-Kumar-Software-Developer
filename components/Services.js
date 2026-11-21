"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import Reveal from "./Reveal";
import { services } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1];

export default function Services() {
  const [active, setActive] = useState(services[0].id);

  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-6 py-28 md:px-10">
      <Reveal>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-ink-soft">/Service</p>
        <h2 className="section-title text-[clamp(2.6rem,8vw,6rem)]">What I build</h2>
      </Reveal>

      <div className="mt-14 border-t hairline">
        {services.map((s, i) => {
          const isActive = active === s.id;
          return (
            <Reveal key={s.id} delay={i * 0.08} className="border-b hairline">
              <button
                type="button"
                onMouseEnter={() => setActive(s.id)}
                onFocus={() => setActive(s.id)}
                onClick={() => setActive(s.id)}
                aria-expanded={isActive}
                className="group flex w-full items-center justify-between gap-6 py-7 text-left md:py-9"
              >
                <span
                  className={`text-[clamp(1.5rem,4.5vw,3.25rem)] font-medium tracking-tight transition-colors duration-500 ${
                    isActive ? "text-ink" : "text-ink/70"
                  }`}
                >
                  {s.title}
                </span>
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border hairline text-lg transition-all duration-500 ${
                    isActive ? "rotate-45 bg-ink text-white" : "group-hover:bg-black/5"
                  }`}
                  aria-hidden
                >
                  ↗
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <m.div
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="overflow-hidden"
                  >
                    <div className="mb-8 grid gap-8 rounded-[2rem] bg-panel p-6 text-white md:grid-cols-[1fr_1.1fr] md:p-10">
                      <div className="flex flex-col justify-between gap-8">
                        <p className="max-w-md text-base leading-relaxed text-white/75 md:text-lg">{s.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {s.tags.map((t) => (
                            <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-panel-soft">
                        <Image
                          src={s.image}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 45vw"
                          className="object-cover object-top opacity-90 transition duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
