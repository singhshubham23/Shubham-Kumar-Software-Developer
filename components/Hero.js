"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { profile, heroRoles } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1];

// Kept for the rotating-role variant of the hero. Not rendered by default.
function RotatingRole() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroRoles.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-grid h-[1.4em] overflow-hidden align-bottom">
      {heroRoles.map((role, i) => (
        <m.span
          key={role}
          className="col-start-1 row-start-1 whitespace-nowrap font-semibold"
          initial={false}
          animate={{ y: i === index ? "0%" : i < index ? "-110%" : "110%", opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.7, ease }}
        >
          {role}
        </m.span>
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
    <section id="top" className="relative mx-auto flex min-h-[100svh] w-full flex-col px-4 pb-10 pt-28 sm:px-6 md:px-10">
      <h1 className="display relative z-20 mt-8 w-full whitespace-nowrap text-[clamp(3.2rem,10.5vw,10.5rem)]">
        <span className="block w-full overflow-hidden text-center">
          <span className="hero-mask block">
            <span className="outline-text">{profile.firstName}</span>{" "}
            <span>{profile.lastName}</span>
          </span>
        </span>
      </h1>

      <div className="relative mt-2 flex flex-1 items-end justify-center md:mt-4">
        <div className="absolute bottom-24 left-0 z-20 max-w-sm md:bottom-28">
          <p className="hero-fade text-xl font-semibold md:text-2xl" style={{ animationDelay: "0.8s" }}>
            {profile.role}
          </p>

          <p
            className="hero-fade mt-3 max-w-xs text-sm leading-relaxed text-ink-soft md:text-base"
            style={{ animationDelay: "0.95s" }}
          >
            {profile.tagline}. Building secure, scalable systems.
          </p>

          <div className="hero-fade mt-6" style={{ animationDelay: "1.1s" }}>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.03]"
            >
              Let&apos;s collaborate
              <span className="transition group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </div>

        <div
          className="hero-rise relative h-[420px] w-[330px] translate-y-6 md:h-[520px] md:w-[430px] md:translate-y-8"
          style={{ animationDelay: "0.2s" }}
        >
          <Image
            src="/images/hero.png"
            alt={`${profile.fullName}, ${profile.role}`}
            fill
            priority
            quality={80}
            sizes="(max-width: 768px) 330px, 430px"
            className="object-contain object-bottom"
          />
        </div>

        <ul className="absolute bottom-24 right-0 z-20 hidden w-32 flex-col gap-3 md:flex">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass flex items-center justify-between rounded-full px-4 py-3 text-sm font-medium transition hover:translate-x-1"
              >
                {s.label}
                <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
