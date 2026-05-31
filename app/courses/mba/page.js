import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, BookOpen, Users, Briefcase, Star, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import SemesterTable from "@/components/curriculum/SemesterTable";
import data from "@/lib/data";

const MBA_SEMESTERS = [
  { sem: "Semester 1", total_credits: 17, subjects: [
    { code: "ACC501", name: "Business Accounting & Finance",          credits: 3 },
    { code: "ECO501", name: "Business Economics",                     credits: 3 },
    { code: "HRM501", name: "Human Resource Management",              credits: 3 },
    { code: "MGT513", name: "Managerial Communications",              credits: 4 },
    { code: "MGT516", name: "Business Environment Analysis",          credits: 4 },
  ]},
  { sem: "Semester 2", total_credits: 13, subjects: [
    { code: "MGT507", name: "Research Methodology",                   credits: 4 },
    { code: "MGT510", name: "Operation Management",                   credits: 3 },
    { code: "MKT501", name: "Marketing Management",                   credits: 3 },
    { code: "ORG501", name: "Organizational Behavior",                credits: 3 },
  ]},
  { sem: "Semester 3", total_credits: 21, subjects: [
    { code: "MGT505", name: "Strategic Management",                   credits: 3 },
    { code: "MGT518", name: "Financial Management",                   credits: 4 },
    { code: "MGT504", name: "Entrepreneurship Management",            credits: 3 },
    { code: "MGT519", name: "Sales & Promotions Management",          credits: 4 },
    { code: "MGT501", name: "International Business",                 credits: 3 },
    { code: "HRD501", name: "Human Resource Development and Leadership", credits: 4 },
  ]},
  { sem: "Semester 4", total_credits: 25, subjects: [
    { code: "MGT520", name: "Banking & Insurance",                    credits: 4 },
    { code: "MGT521", name: "Customer Relationship Management",       credits: 4 },
    { code: "MGT522", name: "Conflict Management & Negotiation Skills", credits: 4 },
    { code: "MGT512", name: "Management of Data",                     credits: 4 },
    { code: "MGT503", name: "Business Ethics & Governance",           credits: 3 },
    { code: "MGT508", name: "Graduate Research Project Paper",        credits: 6 },
  ]},
];

const ACCENT = {
  ring: "border-blue-200",
  bg:   "bg-blue-50",
  text: "text-blue-700",
  badge:"bg-blue-100 text-blue-700",
};

const prog = data.programs.find((p) => p.id === "mba");

export const metadata = {
  title: "Master of Business Administration (MBA) – Western Mega College",
  description: "2-year MBA program at WMC Butwal. Develop strategic leadership skills in finance, marketing, HR, and entrepreneurship.",
};

export default function MBAPage() {
  return (
    <>
      <div className="page-hero" style={{ position: "relative" }}>
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
            { icon: Clock,     label:"Duration",      value: prog.duration },
            { icon: BookOpen,  label:"Semesters",     value: `${prog.total_semesters} Semesters` },
            { icon: Users,     label:"Active Batches",value: prog.batches?.join(", ") },
            { icon: TrendingUp,label:"Total Credits",  value: `${prog.total_credits} Credits` },
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
                  <Link href="/admission" className="btn-primary w-full justify-center">Apply for MBA <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/contact" className="btn-outline-soft w-full justify-center">Enquire Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"var(--color-navy)" }}>
        <div className="container">
          <SectionHeader eyebrow="Curriculum Highlights" title="What You Will Learn" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title:"Business Strategy",      desc:"Develop the ability to formulate, implement, and evaluate cross-functional decisions that align with organizational goals." },
              { title:"Financial Acumen",        desc:"Understand financial statements, valuation, investment appraisal, and managerial accounting for decision-making." },
              { title:"Marketing Excellence",    desc:"Explore consumer behavior, brand management, digital marketing, and strategic market analysis." },
              { title:"Leadership & HR",         desc:"Build skills in talent management, organizational behavior, conflict resolution, and leadership development." },
              { title:"Research & Analytics",    desc:"Apply quantitative and qualitative research methods to solve real business problems." },
              { title:"Entrepreneurship",        desc:"Turn ideas into ventures — business planning, funding, innovation management, and startup ecosystems." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-5 border"
                style={{ background:"rgba(255,255,255,0.04)", borderColor:"rgba(255,255,255,0.1)" }}>
                <h4 className="font-semibold text-white text-sm mb-2">{item.title}</h4>
                <p className="text-xs leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"var(--color-surface)" }}>
        <div className="container">
          <SectionHeader
            eyebrow="Semester-wise Curriculum"
            title="MBA Course Structure"
            subtitle={`2-year program · 4 Semesters · ${prog.total_credits} Total Credits · Lincoln University College`}
          />
          <SemesterTable semesters={MBA_SEMESTERS} accent={ACCENT} columns={2} />
        </div>
      </section>

      <section className="section-sm" style={{ background:"var(--color-surface)" }}>
        <div className="container text-center">
          <h2 className="font-serif text-2xl font-bold mb-3" style={{ color:"var(--color-ink)" }}>Take the Next Step in Your Career</h2>
          <p className="text-[0.9375rem] mb-6 max-w-md mx-auto" style={{ color:"var(--color-muted)" }}>MBA admissions are open. Elevate your leadership and business expertise.</p>
          <Link href="/admission" className="btn-primary">Apply Now <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
