import Image from "next/image";
import { Mail } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import data from "@/lib/data";

const { faculty } = data;

export const metadata = {
  title: "Faculty Members – Western Mega College",
  description: "Meet the expert faculty at Western Mega College — experienced professionals in hospitality, business, law, finance, and technology.",
};

function FacultyCard({ member }) {
  return (
    <div className="card group overflow-hidden flex flex-col bg-white">
      <div className="relative aspect-[3/4] overflow-hidden">
        {member.photo
          ? <Image src={member.photo} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" unoptimized />
          : <ImagePlaceholder type="profile" label={member.name} className="w-full h-full absolute inset-0" />}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background:"linear-gradient(to top, rgba(12,31,63,0.65), transparent 55%)" }} />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-sm mb-0.5 leading-tight" style={{ color:"var(--color-ink)" }}>{member.name}</h3>
        <p className="text-xs font-semibold mb-1" style={{ color:"var(--color-blue)" }}>{member.role}</p>
        <p className="text-xs leading-relaxed mb-3 flex-1" style={{ color:"var(--color-muted)" }}>{member.specialization}</p>
        <div className="flex flex-wrap gap-1 mb-2.5">
          {member.programs.map((p) => (
            <span key={p} className="badge badge-blue text-[10px]">{p}</span>
          ))}
        </div>
        <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 text-xs hover:underline truncate" style={{ color:"var(--color-muted)" }}>
          <Mail className="w-3 h-3 shrink-0" /> {member.email}
        </a>
      </div>
    </div>
  );
}

export default function FacultyPage() {
  const instructors = faculty.filter((f) => f.role === "Practical Instructor");
  const regular = faculty.filter((f) => f.role !== "Practical Instructor");

  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <span className="page-hero-eyebrow">Our Team</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>Faculty Members</h1>
          <p className="page-hero-sub">Seasoned professionals and academics whose real-world expertise enriches every classroom session.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Academic Faculty" title="Meet Our Educators" subtitle={`${regular.length} dedicated faculty members across BHM and MBA programs`} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {regular.map((m) => <FacultyCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {instructors.length > 0 && (
        <section className="section" style={{ background:"var(--color-surface)" }}>
          <div className="container">
            <SectionHeader eyebrow="Practical Training" title="Practical Instructors" subtitle="Hands-on industry experts delivering experiential hospitality training." />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-xl">
              {instructors.map((m) => <FacultyCard key={m.name} member={m} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
