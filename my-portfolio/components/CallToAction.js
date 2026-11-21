import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

export default function CallToAction() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-28 text-center md:px-10">
      <Reveal>
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-ink-soft">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {profile.availability}
        </span>
        <h2 className="section-title mx-auto mt-8 max-w-4xl text-[clamp(2.6rem,8vw,6.5rem)]">
          Have a role in mind?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          I&apos;m looking for a Software Development Engineer role where I can build scalable backend systems and ship
          full-stack products. Let&apos;s talk about what you&apos;re building.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-white transition hover:scale-[1.03]"
          >
            Email me
            <span aria-hidden>→</span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium transition hover:scale-[1.03]"
          >
            {profile.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
