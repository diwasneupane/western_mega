import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, BookOpen, Users, Award, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import data from "@/lib/data";

const BHM_SEMESTERS = [
  { sem: 1, total_credits: 22, subjects: [
    { code: "BHM 111", name: "Introduction to Hospitality Industry", classification: "Major",      credits: 4 },
    { code: "BHM 112", name: "Food Production I",                    classification: "Major",      credits: 4 },
    { code: "BHM 113", name: "Food & Beverage Service I",            classification: "Major",      credits: 4 },
    { code: "BHM 114", name: "Housekeeping Operations I",            classification: "Major",      credits: 4 },
    { code: "BHM 115", name: "Front Office Operations I",            classification: "Major",      credits: 3 },
    { code: "BHM 116", name: "Business Communication",               classification: "Compulsory", credits: 3 },
  ]},
  { sem: 2, total_credits: 22, subjects: [
    { code: "BHM 121", name: "Food Production II",                   classification: "Major",      credits: 4 },
    { code: "BHM 122", name: "Food & Beverage Service II",           classification: "Major",      credits: 4 },
    { code: "BHM 123", name: "Housekeeping Operations II",           classification: "Major",      credits: 4 },
    { code: "BHM 124", name: "Front Office Operations II",           classification: "Major",      credits: 3 },
    { code: "BHM 125", name: "Accounting for Hospitality",           classification: "Major",      credits: 4 },
    { code: "BHM 126", name: "Principles of Management",             classification: "Compulsory", credits: 3 },
  ]},
  { sem: 3, total_credits: 21, subjects: [
    { code: "BHM 231", name: "Food Production III",                  classification: "Major",      credits: 4 },
    { code: "BHM 232", name: "F&B Management",                       classification: "Major",      credits: 4 },
    { code: "BHM 233", name: "Hotel Engineering & Maintenance",      classification: "Major",      credits: 3 },
    { code: "BHM 234", name: "Tourism & Travel Management",          classification: "Major",      credits: 4 },
    { code: "BHM 235", name: "Marketing for Hospitality",            classification: "Major",      credits: 3 },
    { code: "BHM 236", name: "Research Methodology",                 classification: "Compulsory", credits: 3 },
  ]},
  { sem: 4, total_credits: 20, subjects: [
    { code: "BHM 241", name: "Advanced Food Production",             classification: "Major",      credits: 4 },
    { code: "BHM 242", name: "F&B Cost Control",                     classification: "Major",      credits: 4 },
    { code: "BHM 243", name: "Revenue Management",                   classification: "Major",      credits: 4 },
    { code: "BHM 244", name: "Event Management I",                   classification: "Major",      credits: 3 },
    { code: "BHM 245", name: "Human Resource Management",            classification: "Major",      credits: 3 },
    { code: "BHM 246", name: "Environmental Studies",                classification: "Compulsory", credits: 2 },
  ]},
  { sem: 5, total_credits: 22, subjects: [
    { code: "BHM 351", name: "Advanced Culinary Arts",               classification: "Major",      credits: 4 },
    { code: "BHM 352", name: "Bar Management & Mixology",            classification: "Major",      credits: 3 },
    { code: "BHM 353", name: "Conference & Banquet Management",      classification: "Major",      credits: 4 },
    { code: "BHM 354", name: "Strategic Hotel Management",           classification: "Major",      credits: 4 },
    { code: "BHM 355", name: "Entrepreneurship in Hospitality",      classification: "Major",      credits: 3 },
    { code: "BHM 356", name: "Industrial Training I",                classification: "Major",      credits: 4 },
  ]},
  { sem: 6, total_credits: 21, subjects: [
    { code: "BHM 361", name: "Resort & Spa Management",              classification: "Major",      credits: 4 },
    { code: "BHM 362", name: "International Cuisine",                classification: "Major",      credits: 4 },
    { code: "BHM 363", name: "Food Safety & Quality Management",     classification: "Major",      credits: 3 },
    { code: "BHM 364", name: "Property Management Systems",          classification: "Major",      credits: 4 },
    { code: "BHM 365", name: "Digital Marketing for Hospitality",    classification: "Major",      credits: 3 },
    { code: "BHM 366", name: "Project Work I",                       classification: "Major",      credits: 3 },
  ]},
  { sem: 7, total_credits: 22, subjects: [
    { code: "BHM 471", name: "Leadership & Organizational Behavior", classification: "Major",      credits: 4 },
    { code: "BHM 472", name: "Hotel Investment & Asset Management",  classification: "Major",      credits: 4 },
    { code: "BHM 473", name: "International Hotel Operations",       classification: "Major",      credits: 4 },
    { code: "BHM 474", name: "Sustainable Tourism",                  classification: "Major",      credits: 3 },
    { code: "BHM 475", name: "Advanced Event Management",            classification: "Major",      credits: 3 },
    { code: "BHM 476", name: "Research Project",                     classification: "Major",      credits: 4 },
  ]},
  { sem: 8, total_credits: 21, subjects: [
    { code: "BHM 481", name: "Grand Project / Dissertation",         classification: "Major",      credits: 8 },
    { code: "BHM 482", name: "Comprehensive Practical Training",     classification: "Major",      credits: 6 },
    { code: "BHM 483", name: "Career Development Workshop",          classification: "Compulsory", credits: 3 },
    { code: "BHM 484", name: "Industry Mentorship Program",          classification: "Major",      credits: 4 },
  ]},
];

function ClassBadge({ type }) {
  const map = {
    Major:      { bg: "#FEF3C7", color: "#D97706" },
    Compulsory: { bg: "#EEF2FF", color: "#4F46E5" },
  };
  const s = map[type] || map.Major;
  return (
    <span style={{
      fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
      padding: "0.15rem 0.45rem", borderRadius: 4,
      background: s.bg, color: s.color, whiteSpace: "nowrap",
    }}>{type}</span>
  );
}

const prog = data.programs.find((p) => p.id === "bhm");

export const metadata = {
  title: "Bachelor of Hotel Management (BHM) – Western Mega College",
  description: "4-year BHM program under the SCHOTEL model at WMC, Butwal. Gain practical hospitality expertise for global careers.",
};

export default function BHMPage() {
  return (
    <>
      <div className="page-hero" style={{ position: "relative" }}>
        {/* Faded hotel/hospitality background */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80"
            alt="" fill className="object-cover object-center" unoptimized priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.88)" }} />
        </div>
        <div className="container relative z-10">
          <div className="flex items-center gap-2 mb-3 text-sm" style={{ color:"var(--color-muted)" }}>
            <Link href="/courses" className="hover:underline">Programs</Link>
            <span>/</span><span>BHM</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge badge-gold">Bachelor's Degree</span>
            <span className="badge badge-green">Now Enrolling</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>{prog.name}</h1>
          <p className="page-hero-sub">{prog.description}</p>
        </div>
      </div>

      {/* Quick facts */}
      <div style={{ background:"var(--color-surface)", borderBottom:"1px solid var(--color-border)" }}>
        <div className="container py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Clock,   label:"Duration",  value: prog.duration },
            { icon: BookOpen,label:"Semesters", value: `${prog.total_semesters} Semesters` },
            { icon: Users,   label:"Model",     value: prog.model },
            { icon: Award,   label:"Level",     value: prog.level },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background:"var(--color-gold-50)", border:"1px solid var(--color-gold-100)" }}>
                <s.icon className="w-4 h-4" style={{ color:"var(--color-gold)" }} />
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
              <span className="page-hero-eyebrow">About the Program</span>
              <h2 className="font-serif text-2xl font-bold mb-4" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>SCHOTEL Model – Industry-Aligned Training</h2>
              <p className="leading-relaxed mb-4 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>
                The BHM program operates under the pioneering <strong>SCHOTEL model</strong> — a curriculum framework that mirrors real hospitality industry operations. Students practice in settings that simulate five-star hotels, resorts, restaurants, and event venues.
              </p>
              <p className="leading-relaxed mb-6 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>
                Located within <strong>Aramba Resort, Butwal</strong>, students have a live hospitality environment on campus — providing unparalleled hands-on learning from day one. The 4-year, 8-semester program covers every dimension of the industry, from culinary arts and F&B service to front office operations and event management.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {prog.focus_areas.map((fa) => (
                  <div key={fa} className="flex items-center gap-2.5 p-3 rounded-xl"
                    style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color:"var(--color-gold)" }} />
                    <span className="text-sm font-medium" style={{ color:"var(--color-ink)" }}>{fa}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl mb-6 border" style={{ background:"var(--color-gold-50)", borderColor:"var(--color-gold-100)" }}>
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
                      <Star className="w-3.5 h-3.5 shrink-0 fill-current" style={{ color:"var(--color-gold)" }} />
                      {cp}
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t space-y-2" style={{ borderColor:"var(--color-border)" }}>
                  <Link href="/admission" className="btn-gold w-full justify-center">Apply for BHM <ArrowRight className="w-4 h-4" /></Link>
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
              { title:"Culinary Excellence",    desc:"Master professional cooking techniques, food presentation, and kitchen management in a real restaurant environment." },
              { title:"Front Office Ops",       desc:"Learn check-in/check-out, reservations, PMS systems, and guest relations management." },
              { title:"Event Management",       desc:"Plan and execute weddings, conferences, and corporate events with industry-standard tools." },
              { title:"F&B Service",            desc:"Master table service, wine etiquette, bar operations, and F&B cost control." },
              { title:"Housekeeping Mgmt",      desc:"Cleaning protocols, laundry operations, room inspection, and quality control systems." },
              { title:"Hotel Operations",       desc:"Yield management, occupancy optimization, OTA management, and revenue strategies." },
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

      {/* Semester-wise Curriculum */}
      <section className="section" style={{ background:"var(--color-surface)" }}>
        <div className="container">
          <SectionHeader eyebrow="Semester-wise Curriculum" title="BHM Course Structure" subtitle="4-year program · 8 Semesters · 171 Total Credits · SCHOTEL Model" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BHM_SEMESTERS.map(({ sem, subjects, total_credits }) => (
              <div key={sem} className="rounded-xl border overflow-hidden"
                style={{ background:"#fff", borderColor:"var(--color-border)" }}>
                <div className="flex items-center justify-between px-4 py-2.5"
                  style={{ background:"var(--color-gold-50)", borderBottom:"1px solid var(--color-gold-100)" }}>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color:"var(--color-gold-600)" }}>
                    Semester {sem}
                  </span>
                  <span style={{ fontSize:"0.6875rem", color:"var(--color-gold-600)", fontWeight:600 }}>{total_credits} Credits</span>
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
                          <td style={{ padding:"0.45rem 0.75rem", color:"var(--color-gold-600)", fontWeight:600, fontSize:"0.6875rem", whiteSpace:"nowrap", borderBottom:"1px solid var(--color-border-light)" }}>{s.code}</td>
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
          <h2 className="font-serif text-2xl font-bold mb-3" style={{ color:"var(--color-ink)" }}>Begin Your Hospitality Journey</h2>
          <p className="text-[0.9375rem] mb-6 max-w-md mx-auto" style={{ color:"var(--color-muted)" }}>Admissions are open for BHM. Join the next generation of hospitality leaders.</p>
          <Link href="/admission" className="btn-gold">Apply Now <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
