export default function SectionHeader({ eyebrow, title, subtitle, align = "center", light = false }) {
  const cls = align === "left" ? "text-left" : "text-center mx-auto";
  return (
    <div className={`max-w-2xl mb-10 ${cls}`}>
      {eyebrow && (
        <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] mb-3"
          style={{ color: light ? "var(--color-gold-400)" : "var(--color-blue)" }}>
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-[2.25rem] font-bold leading-[1.18] mb-3"
        style={{ color: light ? "#fff" : "var(--color-ink)", letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed"
          style={{ color: light ? "rgba(255,255,255,0.7)" : "var(--color-muted)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
