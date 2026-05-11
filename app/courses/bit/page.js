import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, BookOpen, Cpu, Shield, Globe, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import data from "@/lib/data";

const prog = data.programs.find((p) => p.id === "bit");

export const metadata = {
  title: "Bachelor of Information Technology (BIT) – Western Mega College",
  description: "Upcoming BIT program (2026) at WMC Butwal, affiliated with Lincoln University College Malaysia. Network Security and Mobile & Web Development.",
};

export default function BITPage() {
  const { curriculum } = prog;

  return (
    <>
      <div className="page-hero" style={{ position: "relative" }}>
        {/* Faded technology background */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
            alt="" fill className="object-cover object-center" unoptimized priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.88)" }} />
        </div>
        <div className="container relative z-10">
          <div className="flex items-center gap-2 mb-3 text-sm" style={{ color:"var(--color-muted)" }}>
            <Link href="/courses" className="hover:underline">Programs</Link>
            <span>/</span><span>BIT</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge badge-gold">Bachelor's Degree</span>
            <span className="badge badge-gray">Coming 2026</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>{prog.name}</h1>
          <p className="page-hero-sub">{prog.description.slice(0, 180)}...</p>
        </div>
      </div>

      <div style={{ background:"var(--color-surface)", borderBottom:"1px solid var(--color-border)" }}>
        <div className="container py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Clock,   label:"Duration",      value: prog.duration },
            { icon: BookOpen,label:"Semesters",     value: `${prog.total_semesters} Semesters` },
            { icon: BookOpen,label:"Total Credits",  value: `${curriculum.total_credits} Credits` },
            { icon: Clock,   label:"First Intake",  value: prog.expected_intake },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background:"var(--color-blue-50)", border:"1px solid var(--color-blue-100)" }}>
                <s.icon className="w-4 h-4" style={{ color:"var(--color-blue)" }} />
              </div>
              <div>
                <p className="text-xs" style={{ color:"var(--color-muted)" }}>{s.label}</p>
                <p className="font-semibold text-sm" style={{ color:"var(--color-ink)" }}>{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="page-hero-eyebrow">Program Overview</span>
              <h2 className="font-serif text-2xl font-bold mb-4" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>Preparing Technology Professionals of Tomorrow</h2>
              <p className="leading-relaxed mb-4 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>{prog.overview}</p>

              <h3 className="font-serif font-bold text-lg mb-4 mt-8" style={{ color:"var(--color-ink)" }}>Specializations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {prog.specializations.map((spec) => (
                  <div key={spec.name} className="rounded-xl p-5 border"
                    style={{ background:"var(--color-surface)", borderColor:"var(--color-border)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                      style={{ background:"var(--color-blue-50)", border:"1px solid var(--color-blue-100)" }}>
                      {spec.name.includes("Security")
                        ? <Shield className="w-5 h-5" style={{ color:"var(--color-blue)" }} />
                        : <Globe className="w-5 h-5" style={{ color:"var(--color-blue)" }} />}
                    </div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color:"var(--color-ink)" }}>{spec.name}</h4>
                    <p className="text-xs leading-relaxed" style={{ color:"var(--color-muted)" }}>{spec.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {prog.focus_areas.map((fa) => (
                  <div key={fa} className="flex items-center gap-2.5 p-3 rounded-xl"
                    style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color:"var(--color-blue)" }} />
                    <span className="text-sm font-medium" style={{ color:"var(--color-ink)" }}>{fa}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl border" style={{ background:"var(--color-gold-50)", borderColor:"var(--color-gold-100)" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color:"var(--color-gold)" }}>Eligibility</p>
                <p className="font-medium text-sm" style={{ color:"var(--color-ink)" }}>{prog.eligibility}</p>
              </div>
            </div>

            <div>
              <div className="rounded-2xl p-6 border sticky top-24" style={{ background:"var(--color-surface)", borderColor:"var(--color-border)" }}>
                <h3 className="font-serif font-bold text-lg mb-5" style={{ color:"var(--color-ink)" }}>Career Paths</h3>
                <ul className="space-y-3 mb-6">
                  {prog.career_paths.map((cp) => (
                    <li key={cp} className="flex items-center gap-2.5 text-sm" style={{ color:"var(--color-ink)" }}>
                      <Star className="w-3.5 h-3.5 shrink-0 fill-current" style={{ color:"var(--color-blue)" }} />
                      {cp}
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t" style={{ borderColor:"var(--color-border)" }}>
                  <div className="p-4 rounded-xl mb-4 text-sm border"
                    style={{ background:"rgba(5,150,105,0.05)", borderColor:"rgba(5,150,105,0.2)", color:"#166534" }}>
                    BIT intake expected <strong>2026</strong>. Register interest to be notified.
                  </div>
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Register Interest <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section" style={{ background:"var(--color-surface)" }}>
        <div className="container">
          <SectionHeader eyebrow="Curriculum" title="Semester-Wise Course Structure" subtitle={`Complete ${curriculum.total_credits}-credit program over 6 semesters`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {curriculum.semesters.map((sem) => (
              <div key={sem.semester} className="bg-white rounded-2xl border overflow-hidden"
                style={{ borderColor:"var(--color-border)" }}>
                <div className="px-5 py-4 flex items-center justify-between"
                  style={{ background:"var(--color-navy)" }}>
                  <h3 className="font-serif font-bold text-white text-sm">Semester {sem.semester}</h3>
                  <span className="badge" style={{ background:"rgba(217,119,6,0.25)", color:"var(--color-gold-400)", border:"1px solid rgba(217,119,6,0.3)", fontSize:"0.6875rem" }}>
                    {sem.total_credits} Credits
                  </span>
                </div>
                <div className="divide-y" style={{ borderColor:"var(--color-border)" }}>
                  {sem.subjects.map((sub) => (
                    <div key={sub.code} className="px-5 py-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium leading-tight" style={{ color:"var(--color-ink)" }}>{sub.name}</p>
                          <p className="text-xs mt-0.5" style={{ color:"var(--color-muted)" }}>{sub.code}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs font-bold" style={{ color:"var(--color-blue)" }}>{sub.credits} Cr</p>
                          <p className="text-[10px] mt-0.5" style={{ color:"var(--color-muted)" }}>{sub.classification}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background:"var(--color-navy)" }}>
        <div className="container text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-3">Interested in the BIT Program?</h2>
          <p className="text-white/65 mb-6 max-w-md mx-auto text-sm">Launching in 2026. Register your interest and we'll notify you when admissions open.</p>
          <Link href="/contact" className="btn-ghost">Register Interest <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
