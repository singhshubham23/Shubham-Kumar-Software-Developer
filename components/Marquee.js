const words = [
  "Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "JWT & RBAC",
  "Socket.io", "React.js", "Query Optimization", "Secure by Design",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y hairline bg-white/40 py-6 backdrop-blur">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-12 text-3xl font-extrabold uppercase tracking-tightest text-ink/80 md:text-5xl">
            {w}
            <span className="text-ink/30" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
