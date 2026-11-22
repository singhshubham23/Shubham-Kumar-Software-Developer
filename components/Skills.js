import Reveal from "./Reveal";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-28 md:px-10">
      <Reveal>
        <h2 className="section-title text-[clamp(2.6rem,8vw,6rem)]">Toolkit</h2>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <div className="card-shadow h-full rounded-[1.75rem] bg-white/80 p-7 backdrop-blur">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">{g.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="rounded-full bg-ink/5 px-3.5 py-1.5 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
