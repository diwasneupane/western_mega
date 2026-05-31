import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, BookOpen, Users, Briefcase, Star, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import SemesterTable from "@/components/curriculum/SemesterTable";
import data from "@/lib/data";

const BBA_SEMESTERS = [
  { sem: "Semester 1", total_credits: 15, subjects: [
    { code: "ENF 613",  name: "English I",                                        credits: 3 },
    { code: "EPP 633",  name: "English for Professional Purposes",                credits: 3 },
    { code: "BBA 1133", name: "Principles of Management",                         credits: 3 },
    { code: "BBA 1143", name: "Introduction to Accounting",                       credits: 3 },
    { code: "BBA 1153", name: "Fundamental Computer Principles & Programming",    credits: 3 },
  ]},
  { sem: "Semester 2", total_credits: 15, subjects: [
    { code: "BBA 1213", name: "Human Resource Management",                        credits: 3 },
    { code: "BBA 1223", name: "Principles of Marketing",                          credits: 3 },
    { code: "BBA 1233", name: "Internet Fundamentals & Applications",             credits: 3 },
    { code: "BBA 1243", name: "Entrepreneurship",                                 credits: 3 },
    { code: "ENG 623",  name: "English II",                                       credits: 3 },
  ]},
  { sem: "Semester 3", total_credits: 17, subjects: [
    { code: "MPU 3232", name: "Human Relations and Leadership Skills",            credits: 2 },
    { code: "BBA 1263", name: "Sociology",                                        credits: 3 },
    { code: "BBA 1313", name: "Business Organization",                            credits: 3 },
    { code: "BBA 1323", name: "Business Law",                                     credits: 3 },
    { code: "BBA 2413", name: "Microeconomics",                                   credits: 3 },
    { code: "BBA 2423", name: "Project Management",                               credits: 3 },
  ]},
  { sem: "Semester 4", total_credits: 15, subjects: [
    { code: "BBA 2433", name: "Introduction to Financial Accounting",             credits: 3 },
    { code: "BBA 2443", name: "Consumer Behavior",                                credits: 3 },
    { code: "BBA 2453", name: "Company Law",                                      credits: 3 },
    { code: "BBA 2553", name: "Macroeconomics",                                   credits: 3 },
    { code: "BBA 2513", name: "Business Ethics",                                  credits: 3 },
  ]},
  { sem: "Semester 5", total_credits: 17, subjects: [
    { code: "BBA 2523", name: "Quantitative Methods",                             credits: 3 },
    { code: "BBA 2533", name: "Management Information System",                    credits: 3 },
    { code: "BBA 2543", name: "International Business Management",                credits: 3 },
    { code: "BBA 2463", name: "E-Commerce",                                       credits: 3 },
    { code: "BBA 2633", name: "Organizational Behavior",                          credits: 3 },
    { code: "MPU 3412", name: "Community Service",                                credits: 2 },
  ]},
  { sem: "Semester 6", total_credits: 15, subjects: [
    { code: "BBA 2643", name: "Production and Operations Management",             credits: 3 },
    { code: "BBA 3713", name: "Retail Management",                                credits: 3 },
    { code: "BBA 3723", name: "Event Management",                                 credits: 3 },
    { code: "BBA 3733", name: "Marketing Management",                             credits: 3 },
    { code: "BBA 3743", name: "Logistics & Supply Chain Management",              credits: 3 },
  ]},
  { sem: "Semester 7", total_credits: 20, subjects: [
    { code: "BBA 3753", name: "Target Economic Regions",                          credits: 3 },
    { code: "BBA 3763", name: "Psychology",                                       credits: 3 },
    { code: "BBA 3813", name: "Strategic Management",                             credits: 3 },
    { code: "BBA 3823", name: "Innovation Management for Global Competitiveness", credits: 3 },
    { code: "BBA 3912", name: "Industry Based Internship",                        credits: 8 },
  ]},
  { sem: "Semester 8", total_credits: 21, subjects: [
    { code: "BBA 3833", name: "TQM and Six Sigma",                                credits: 3 },
    { code: "BBA 3843", name: "Business Research Methods",                        credits: 3 },
    { code: "BBA 3853", name: "Marketing Research",                               credits: 3 },
    { code: "BBA 3863", name: "Multinational Enterprise",                         credits: 3 },
    { code: "BBA 3913", name: "Bachelor's Thesis",                                credits: 9 },
  ]},
];

const ACCENT = {
  ring: "border-purple-200",
  bg:   "bg-purple-50",
  text: "text-purple-700",
  badge:"bg-purple-100 text-purple-700",
};

const prog = data.programs.find((p) => p.id === "bba");

export const metadata = {
  title: "Bachelor (Hons) in Business Administration (BBA) – Western Mega College",
  description: "4-year BBA program at WMC Butwal affiliated with Lincoln University College Malaysia. Build expertise in management, marketing, finance, and entrepreneurship.",
};

export default function BBAPage() {
  return (
    <>
      <div className="page-hero" style={{ position: "relative" }}>
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
            alt="" fill className="object-cover object-center" unoptimized priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.88)" }} />
        </div>
        <div className="container relative z-10">
          <div className="flex items-center gap-2 mb-3 text-sm" style={{ color:"var(--color-muted)" }}>
            <Link href="/courses" className="hover:underline">Programs</Link>
            <span>/</span><span>BBA</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge badge-gold">Bachelor's Degree</span>
            <span className="badge badge-green">Now Enrolling</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>{prog.name}</h1>
          <p className="page-hero-sub">{prog.description}</p>
        </div>
      </div>

      <div style={{ background:"var(--color-surface)", borderBottom:"1px solid var(--color-border)" }}>
        <div className="container py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Clock,     label:"Duration",     value: prog.duration },
            { icon: BookOpen,  label:"Semesters",    value: `${prog.total_semesters} Semesters` },
            { icon: Users,     label:"Active Batches",value: prog.batches?.join(", ") },
            { icon: TrendingUp,label:"Total Credits", value: `${prog.total_credits} Credits` },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background:"#F5F3FF", border:"1px solid #DDD6FE" }}>
                <s.icon className="w-4 h-4" style={{ color:"#7C3AED" }} />
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
              <h2 className="font-serif text-2xl font-bold mb-4" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>Business Education for the Modern Workplace</h2>
              <p className="leading-relaxed mb-4 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>
                The BBA program at WMC provides a comprehensive foundation in business administration, equipping graduates with practical knowledge across management, marketing, finance, and entrepreneurship. Affiliated with Lincoln University College Malaysia, the program follows internationally recognized standards.
              </p>
              <p className="leading-relaxed mb-6 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>
                The 4-year, 8-semester curriculum blends core business theory with applied projects, an industry-based internship, and a capstone thesis — preparing graduates to excel in diverse business environments across Nepal and globally.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {prog.focus_areas.map((fa) => (
                  <div key={fa} className="flex items-center gap-2.5 p-3 rounded-xl"
                    style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color:"#7C3AED" }} />
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
                      <Star className="w-3.5 h-3.5 shrink-0 fill-current" style={{ color:"#7C3AED" }} />
                      {cp}
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t space-y-2" style={{ borderColor:"var(--color-border)" }}>
                  <Link href="/admission" className="btn-primary w-full justify-center" style={{ background:"#7C3AED", borderColor:"#7C3AED" }}>Apply for BBA <ArrowRight className="w-4 h-4" /></Link>
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
              { title:"Management Principles",   desc:"Master foundational management theories and apply them to real organizational challenges." },
              { title:"Marketing & Sales",        desc:"Understand consumer behavior, brand strategy, digital marketing, and retail management." },
              { title:"Financial Management",     desc:"Learn accounting, financial analysis, budgeting, and investment decision-making." },
              { title:"Entrepreneurship",         desc:"Develop business plans, explore startup ecosystems, and learn innovation management." },
              { title:"Business Law & Ethics",    desc:"Understand company law, contracts, corporate governance, and professional ethics." },
              { title:"Industry Internship",      desc:"Gain real-world experience through a structured industry-based internship in semester 7." },
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
            title="BBA Course Structure"
            subtitle={`4-year program · 8 Semesters · ${prog.total_credits} Total Credits · Lincoln University College`}
          />
          <SemesterTable semesters={BBA_SEMESTERS} accent={ACCENT} columns={2} />
        </div>
      </section>

      <section className="section-sm" style={{ background:"var(--color-surface)" }}>
        <div className="container text-center">
          <h2 className="font-serif text-2xl font-bold mb-3" style={{ color:"var(--color-ink)" }}>Build Your Business Career</h2>
          <p className="text-[0.9375rem] mb-6 max-w-md mx-auto" style={{ color:"var(--color-muted)" }}>BBA admissions are open. Start your journey towards becoming a business leader.</p>
          <Link href="/admission" className="btn-primary" style={{ background:"#7C3AED", borderColor:"#7C3AED" }}>Apply Now <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
