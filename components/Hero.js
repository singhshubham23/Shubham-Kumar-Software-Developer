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
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] w-full flex-col justify-between px-4 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-10 lg:pb-0 lg:pt-24 xl:pt-28"
    >
      <h1 className="display relative z-10 mt-2 w-full select-none text-center sm:mt-4 lg:mt-2">
        <span className="block w-full overflow-hidden">
          <span className="hero-mask inline-flex flex-col items-center justify-center text-[clamp(2.75rem,8.5vw,9.5rem)] leading-[0.95] tracking-tightest sm:flex-row sm:leading-[0.88] sm:gap-x-4 md:gap-x-6 lg:gap-x-8">
            <span className="outline-text block sm:inline">{profile.firstName}</span>{" "}
            <span className="block sm:inline">{profile.lastName}</span>
          </span>
        </span>
      </h1>

      <div className="relative z-20 mt-4 flex flex-1 flex-col justify-end w-full sm:mt-6 lg:mt-auto lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-end">
        {/* Left Column: Role, Tagline, CTA */}
        <div className="relative z-30 order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left lg:pb-16 xl:pb-20 w-full max-w-md mx-auto lg:mx-0 lg:max-w-[300px] xl:max-w-sm">
          <p
            className="hero-fade text-xl font-semibold sm:text-2xl"
            style={{ animationDelay: "0.8s" }}
          >
            {profile.role}
          </p>

          <p
            className="hero-fade mt-3 max-w-xs text-sm leading-relaxed text-ink-soft sm:text-base"
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

          {/* Socials on mobile & tablet */}
          <ul
            className="hero-fade mt-6 flex flex-wrap items-center justify-center gap-2.5 lg:hidden"
            style={{ animationDelay: "1.2s" }}
          >
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition hover:scale-[1.03]"
                >
                  {s.label}
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Column: Hero Image */}
        <div className="relative z-20 order-1 flex justify-center items-end lg:order-2 lg:-mt-12 xl:-mt-16 2xl:-mt-20">
          <div
            className="hero-rise relative mx-auto w-[240px] h-[300px] sm:w-[290px] sm:h-[365px] md:w-[330px] md:h-[415px] lg:w-[370px] lg:h-[465px] xl:w-[420px] xl:h-[525px] 2xl:w-[450px] 2xl:h-[560px]"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/images/hero.png"
              alt={`${profile.fullName}, ${profile.role}`}
              fill
              priority
              quality={75}
              sizes="(max-width: 640px) 240px, (max-width: 768px) 290px, (max-width: 1024px) 330px, (max-width: 1280px) 370px, 420px"
              className="object-contain object-bottom pointer-events-none select-none"
            />
          </div>
        </div>

        {/* Right Column: Desktop Social Links */}
        <div className="order-3 hidden lg:flex flex-col items-end justify-end pb-16 xl:pb-20">
          <ul className="flex flex-col gap-3 w-32">
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
      </div>
    </section>
  );
}
