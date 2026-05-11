import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, BookOpen, Users, GraduationCap, Briefcase, Cpu } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import data from "@/lib/data";

const { programs } = data;
const ICONS = { bhm: GraduationCap, mba: Briefcase, bit: Cpu };

export const metadata = {
  title: "Programs – BHM, MBA & BIT | Western Mega College",
  description: "Explore WMC's BHM, MBA, and BIT programs affiliated with Lincoln University College, Malaysia.",
};

export default function CoursesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <span className="page-hero-eyebrow">Programs</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>
            Our Academic Programs
          </h1>
          <p className="page-hero-sub">Affiliated with Lincoln University College, Malaysia — delivering globally recognized qualifications in Butwal, Nepal.</p>
        </div>
      </div>

      <section className="section">
        <div className="container space-y-14">
          {programs.map((prog, idx) => {
            const Icon = ICONS[prog.id] || GraduationCap;
            const even = idx % 2 === 0;
            return (
              <div key={prog.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className={even ? "" : "lg:order-2"}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background:"var(--color-blue-50)", border:"1px solid var(--color-blue-100)" }}>
                      <Icon className="w-5 h-5" style={{ color:"var(--color-blue)" }} />
                    </div>
                    <span className="badge badge-gold">{prog.level}</span>
                    {prog.status === "coming_soon" && <span className="badge badge-gray">Coming 2026</span>}
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-3" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>{prog.name}</h2>
                  <p className="text-[0.9375rem] leading-relaxed mb-6" style={{ color:"var(--color-muted)" }}>{prog.description}</p>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { icon: Clock,   label:"Duration",   value: prog.duration },
                      { icon: BookOpen,label:"Semesters",  value: prog.total_semesters },
                      { icon: Users,   label:"Target",     value: prog.target.split(" ").slice(0,2).join(" ") },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl p-3 text-center border" style={{ background:"var(--color-surface)", borderColor:"var(--color-border)" }}>
                        <s.icon className="w-4 h-4 mx-auto mb-1.5" style={{ color:"var(--color-blue)" }} />
                        <p className="font-bold text-sm" style={{ color:"var(--color-ink)" }}>{s.value}</p>
                        <p className="text-[0.7rem]" style={{ color:"var(--color-muted)" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl mb-6 border" style={{ background:"var(--color-gold-50)", borderColor:"var(--color-gold-100)" }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color:"var(--color-gold)" }}>Eligibility</p>
                    <p className="font-medium text-sm" style={{ color:"var(--color-ink)" }}>{prog.eligibility}</p>
                  </div>
                  <Link href={`/courses/${prog.id}`} className="btn-primary">
                    View Full Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={even ? "" : "lg:order-1"}>
                  <div className="rounded-2xl p-6 border" style={{ background:"var(--color-surface)", borderColor:"var(--color-border)" }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color:"var(--color-muted)" }}>Focus Areas</p>
                    <ul className="space-y-2 mb-6">
                      {prog.focus_areas.map((fa) => (
                        <li key={fa} className="flex items-center gap-2.5 text-sm" style={{ color:"var(--color-ink)" }}>
                          <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color:"var(--color-blue)" }} />
                          {fa}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color:"var(--color-muted)" }}>Career Paths</p>
                    <div className="flex flex-wrap gap-2">
                      {prog.career_paths.map((cp) => (
                        <span key={cp} className="badge badge-blue">{cp}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-sm" style={{ background:"var(--color-surface)" }}>
        <div className="container text-center">
          <h2 className="font-serif text-2xl font-bold mb-3" style={{ color:"var(--color-ink)" }}>Ready to Enroll?</h2>
          <p className="text-[0.9375rem] mb-6" style={{ color:"var(--color-muted)" }}>Admissions open for BHM & MBA. Apply today.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/admission" className="btn-gold">Apply Now <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/contact" className="btn-outline-soft">Ask a Question</Link>
          </div>
        </div>
      </section>
    </>
  );
}
