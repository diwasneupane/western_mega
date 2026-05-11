import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import data from "@/lib/data";

const { events } = data;

export const metadata = {
  title: "Events – Western Mega College",
  description: "Stay updated on WMC events — academic workshops, annual festivals, career fairs, and cultural programs.",
};

function EventCard({ ev }) {
  return (
    <div className="card overflow-hidden bg-white">
      {ev.thumbnail
        ? <div className="relative aspect-[16/9]"><Image src={ev.thumbnail} alt={ev.title} fill className="object-cover" unoptimized /></div>
        : <ImagePlaceholder type="landscape" label="Event Photo" />}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="badge badge-gold"><Tag className="w-3 h-3" />{ev.type}</span>
          <span className={`badge ${ev.status === "upcoming" ? "badge-blue" : "badge-green"}`}>
            {ev.status === "upcoming" ? "Upcoming" : "Completed"}
          </span>
        </div>
        <h3 className="font-serif font-bold text-base mb-1.5 leading-snug" style={{ color:"var(--color-ink)" }}>{ev.title}</h3>
        <div className="flex items-center gap-2 text-xs mb-3" style={{ color:"var(--color-muted)" }}>
          <Calendar className="w-3.5 h-3.5" style={{ color:"var(--color-blue)" }} />
          {new Date(ev.date).toLocaleDateString("en-US", { year:"numeric", month:"long", day:"numeric" })}
        </div>
        <p className="text-sm leading-relaxed" style={{ color:"var(--color-muted)" }}>{ev.description}</p>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const upcoming  = events.filter((e) => e.status === "upcoming");
  const completed = events.filter((e) => e.status === "completed");

  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <span className="page-hero-eyebrow">Campus Life</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>Events at WMC</h1>
          <p className="page-hero-sub">Academic workshops, annual festivals, industry interactions, and cultural celebrations.</p>
        </div>
      </div>

      {upcoming.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeader eyebrow="Upcoming" title="Events to Look Forward To" align="left" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {upcoming.map((ev) => <EventCard key={ev.id} ev={ev} />)}
            </div>
          </div>
        </section>
      )}

      <section className={`section ${upcoming.length > 0 ? "" : ""}`} style={upcoming.length > 0 ? { background:"var(--color-surface)" } : {}}>
        <div className="container">
          <SectionHeader eyebrow="Past Events" title="Highlights from Previous Events" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {completed.map((ev) => <EventCard key={ev.id} ev={ev} />)}
          </div>
        </div>
      </section>
    </>
  );
}
