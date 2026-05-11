import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, BookOpen, Users, Briefcase, Star, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import data from "@/lib/data";

const MBA_SEMESTERS = [
  { sem: 1, total_credits: 17, subjects: [
    { code: "MBA 111", name: "Principles of Management",          classification: "Core",       credits: 3 },
    { code: "MBA 112", name: "Business Statistics",               classification: "Core",       credits: 3 },
    { code: "MBA 113", name: "Managerial Economics",              classification: "Core",       credits: 3 },
    { code: "MBA 114", name: "Financial Accounting",              classification: "Core",       credits: 3 },
    { code: "MBA 115", name: "Marketing Management",              classification: "Core",       credits: 3 },
    { code: "MBA 116", name: "Business Communication",            classification: "Compulsory", credits: 2 },
  ]},
  { sem: 2, total_credits: 18, subjects: [
    { code: "MBA 221", name: "Strategic Management",              classification: "Core",       credits: 3 },
    { code: "MBA 222", name: "Organizational Behavior",           classification: "Core",       credits: 3 },
    { code: "MBA 223", name: "Corporate Finance",                 classification: "Core",       credits: 3 },
    { code: "MBA 224", name: "Research Methodology",              classification: "Compulsory", credits: 3 },
    { code: "MBA 225", name: "Human Resource Management",         classification: "Core",       credits: 3 },
    { code: "MBA 226", name: "Operations Management",             classification: "Core",       credits: 3 },
  ]},
  { sem: 3, total_credits: 18, subjects: [
    { code: "MBA 331", name: "Business Law & Ethics",             classification: "Core",       credits: 3 },
    { code: "MBA 332", name: "Investment & Portfolio Management", classification: "Core",       credits: 3 },
    { code: "MBA 333", name: "Consumer Behavior",                 classification: "Core",       credits: 3 },
    { code: "MBA 334", name: "Entrepreneurship & Innovation",     classification: "Core",       credits: 3 },
    { code: "MBA 335", name: "International Business",            classification: "Core",       credits: 3 },
    { code: "MBA 336", name: "Elective I",                        classification: "Elective",   credits: 3 },
  ]},
  { sem: 4, total_credits: 21, subjects: [
    { code: "MBA 441", name: "Corporate Governance",              classification: "Core",       credits: 3 },
    { code: "MBA 442", name: "Leadership & Change Management",    classification: "Core",       credits: 3 },
    { code: "MBA 443", name: "Advanced Marketing Strategy",       classification: "Core",       credits: 3 },
    { code: "MBA 444", name: "Financial Planning & Analysis",     classification: "Core",       credits: 3 },
    { code: "MBA 445", name: "Thesis / Research Project",         classification: "Major",      credits: 6 },
    { code: "MBA 446", name: "Elective II",                       classification: "Elective",   credits: 3 },
  ]},
];

function ClassBadge({ type }) {
  const map = {
    Core:       { bg: "#EEF2FF", color: "#4F46E5" },
    Compulsory: { bg: "#FEF3C7", color: "#D97706" },
    Major:      { bg: "#EEF2FF", color: "#4F46E5" },
    Elective:   { bg: "#F0FDF4", color: "#15803D" },
  };
  const s = map[type] || map.Core;
  return (
    <span style={{
      fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
      padding: "0.15rem 0.45rem", borderRadius: 4,
      background: s.bg, color: s.color, whiteSpace: "nowrap",
    }}>{type}</span>
  );
}

const prog = data.programs.find((p) => p.id === "mba");

export const metadata = {
  title: "Master of Business Administration (MBA) – Western Mega College",
  description: "2-year MBA program at WMC Butwal. Develop strategic leadership skills in finance, marketing, HR, and entrepreneurship.",
};

export default function MBAPage() {
  return (
    <>
      <div className="page-hero" style={{ position: "relative" }}>
        {/* Faded business/office background */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
            alt="" fill className="object-cover object-center" unoptimized priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.88)" }} />
        </div>
        <div className="container relative z-10">
          <div className="flex items-center gap-2 mb-3 text-sm" style={{ color:"var(--color-muted)" }}>
            <Link href="/courses" className="hover:underline">Programs</Link>
            <span>/</span><span>MBA</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge badge-gold">Master's Degree</span>
            <span className="badge badge-green">Now Enrolling</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>{prog.name}</h1>
          <p className="page-hero-sub">{prog.description}</p>
        </div>
      </div>

      <div style={{ background:"var(--color-surface)", borderBottom:"1px solid var(--color-border)" }}>
        <div className="container py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Clock,   label:"Duration",      value: prog.duration },
            { icon: BookOpen,label:"Semesters",     value: `${prog.total_semesters} Semesters` },
            { icon: Users,   label:"Active Batches",value: prog.batches?.join(", ") },
            { icon: Briefcase,label:"Level",        value: prog.level },
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
              <h2 className="font-serif text-2xl font-bold mb-4" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>Strategic Leadership for the Modern Business World</h2>
              <p className="leading-relaxed mb-4 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>
                The MBA program at WMC is engineered for professionals and fresh graduates who aspire to leadership roles in complex business environments. Through a rigorous 2-year curriculum, students develop the strategic mindset, analytical skills, and leadership qualities demanded by today's global organizations.
              </p>
              <p className="leading-relaxed mb-6 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>
                Currently running with batches from 2023, 2024, and 2025, the program blends theoretical frameworks with real-world case studies, research workshops, and industry engagement — aligned with international business standards through our affiliation with Lincoln University College, Malaysia.
              </p>
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
                <div className="pt-5 border-t space-y-2" style={{ borderColor:"var(--color-border)" }}>
                  <Link href="/admission" className="btn-gold w-full justify-center">Apply for MBA <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/contact" className="btn-outline-soft w-full justify-center">Enquire Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"var(--color-navy)" }}>
        <div className="container">
          <SectionHeader eyebrow="MBA Pillars" title="Core Competency Areas" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, title:"Strategic Mgmt",   desc:"Business strategy, competitive analysis, and corporate planning frameworks." },
              { icon: Briefcase,  title:"Finance",           desc:"Financial analysis, investment decisions, cost accounting, and financial modeling." },
              { icon: Users,      title:"Marketing",         desc:"Market research, brand building, digital marketing, and consumer behavior." },
              { icon: Star,       title:"Human Resources",   desc:"Talent management, organizational behavior, HR strategy, and labor law." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-5 border"
                style={{ background:"rgba(255,255,255,0.04)", borderColor:"rgba(255,255,255,0.1)" }}>
                <item.icon className="w-5 h-5 mb-3" style={{ color:"var(--color-gold)" }} />
                <h4 className="font-semibold text-white text-sm mb-2">{item.title}</h4>
                <p className="text-xs leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Semester-wise Curriculum */}
      <section className="section" style={{ background:"var(--color-surface)" }}>
        <div className="container">
          <SectionHeader eyebrow="Semester-wise Curriculum" title="MBA Course Structure" subtitle="2-year program · 4 Semesters · 74 Total Credits · Lincoln University College, Malaysia" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {MBA_SEMESTERS.map(({ sem, subjects, total_credits }) => (
              <div key={sem} className="rounded-xl border overflow-hidden"
                style={{ background:"#fff", borderColor:"var(--color-border)" }}>
                <div className="flex items-center justify-between px-4 py-2.5"
                  style={{ background:"var(--color-blue-50)", borderBottom:"1px solid var(--color-blue-100)" }}>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color:"var(--color-blue)" }}>
                    Semester {sem}
                  </span>
                  <span style={{ fontSize:"0.6875rem", color:"var(--color-blue)", fontWeight:600 }}>{total_credits} Credits</span>
                </div>
                <div style={{ overflowX:"auto" }}>
                  <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"0.75rem" }}>
                    <thead>
                      <tr style={{ background:"var(--color-surface)" }}>
                        <th style={{ padding:"0.45rem 0.75rem", textAlign:"left", color:"var(--color-muted)", fontWeight:600, fontSize:"0.6875rem", borderBottom:"1px solid var(--color-border)", whiteSpace:"nowrap" }}>Code</th>
                        <th style={{ padding:"0.45rem 0.75rem", textAlign:"left", color:"var(--color-muted)", fontWeight:600, fontSize:"0.6875rem", borderBottom:"1px solid var(--color-border)", width:"100%" }}>Subject</th>
                        <th style={{ padding:"0.45rem 0.75rem", textAlign:"center", color:"var(--color-muted)", fontWeight:600, fontSize:"0.6875rem", borderBottom:"1px solid var(--color-border)", whiteSpace:"nowrap" }}>Type</th>
                        <th style={{ padding:"0.45rem 0.75rem", textAlign:"center", color:"var(--color-muted)", fontWeight:600, fontSize:"0.6875rem", borderBottom:"1px solid var(--color-border)", whiteSpace:"nowrap" }}>Cr.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjects.map((s, i) => (
                        <tr key={s.code} style={{ background: i % 2 === 0 ? "#fff" : "var(--color-surface)" }}>
                          <td style={{ padding:"0.45rem 0.75rem", color:"var(--color-blue)", fontWeight:600, fontSize:"0.6875rem", whiteSpace:"nowrap", borderBottom:"1px solid var(--color-border-light)" }}>{s.code}</td>
                          <td style={{ padding:"0.45rem 0.75rem", color:"var(--color-ink)", borderBottom:"1px solid var(--color-border-light)" }}>{s.name}</td>
                          <td style={{ padding:"0.45rem 0.75rem", textAlign:"center", borderBottom:"1px solid var(--color-border-light)" }}>
                            <ClassBadge type={s.classification} />
                          </td>
                          <td style={{ padding:"0.45rem 0.75rem", textAlign:"center", fontWeight:700, color:"var(--color-ink)", borderBottom:"1px solid var(--color-border-light)" }}>{s.credits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background:"var(--color-surface)" }}>
        <div className="container text-center">
          <h2 className="font-serif text-2xl font-bold mb-3" style={{ color:"var(--color-ink)" }}>Advance Your Career with an MBA</h2>
          <p className="text-[0.9375rem] mb-6 max-w-md mx-auto" style={{ color:"var(--color-muted)" }}>MBA admissions are open. Shape your leadership future with WMC.</p>
          <Link href="/admission" className="btn-gold">Apply Now <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
