"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { profile, heroRoles } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1];

function RotatingRole() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroRoles.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-grid h-[1.4em] overflow-hidden align-bottom">
      {heroRoles.map((role, i) => (
        <motion.span
          key={role}
          className="col-start-1 row-start-1 whitespace-nowrap font-semibold"
          initial={false}
          animate={{ y: i === index ? "0%" : i < index ? "-110%" : "110%", opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.7, ease }}
        >
          {role}
        </motion.span>
      ))}
    </span>
  );
}

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col px-6 pb-16 pt-32 md:px-10">
      {/* Availability pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        className="glass mb-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-ink-soft"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        {profile.availability}
      </motion.div>

      <div className="relative grid flex-1 items-center gap-10 md:grid-cols-[1fr_auto]">
        <div className="relative z-10">
          {/* Outline first name, solid last name: same rhythm as the reference */}
          <h1 className="display text-[clamp(3.4rem,16vw,9.5rem)]">
            <span className="block overflow-hidden">
              <motion.span
                className="outline-text block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.3, ease }}
              >
                {profile.firstName}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.45, ease }}
              >
                {profile.lastName}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease }}
            className="mt-8 text-lg text-ink md:text-2xl"
          >
            <span className="font-medium">{profile.role}</span>
            <span className="mx-2 text-ink-soft">/</span>
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.03]"
            >
              Let&apos;s collaborate
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition hover:scale-[1.03]"
            >
              Download résumé
              <span aria-hidden>↓</span>
            </a>
          </motion.div>
        </div>

        {/* Portrait card with side social links */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease }}
          className="relative mx-auto flex items-end gap-6 md:mx-0"
        >
          <div className="card-shadow relative h-[360px] w-[280px] overflow-hidden rounded-[2rem] bg-white md:h-[480px] md:w-[360px]">
            <Image
              src="/images/hero.jpeg"
              alt={`${profile.fullName}, ${profile.role}`}
              fill
              priority
              sizes="(max-width: 768px) 280px, 360px"
              className="object-cover grayscale transition duration-700 hover:grayscale-0"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl glass px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-ink-soft">Highlight</p>
              <p className="text-sm font-semibold">{profile.highlight}</p>
            </div>
          </div>

          <ul className="hidden flex-col gap-3 pb-2 text-sm md:flex">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2 font-medium text-ink-soft hover:text-ink"
                >
                  {s.label} <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="mt-12 hidden w-fit items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink-soft md:flex"
      >
        <span className="h-px w-10 bg-ink/40" /> Scroll to explore
      </motion.a>
    </section>
  );
}
