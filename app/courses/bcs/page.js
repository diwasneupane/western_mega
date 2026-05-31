import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, BookOpen, Users, Shield, Star, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import SemesterTable from "@/components/curriculum/SemesterTable";
import data from "@/lib/data";

const BCS_SEMESTERS = [
  { sem: "Semester 1", total_credits: 15, subjects: [
    { code: "ENG 111",    name: "English",                                        credits: 3 },
    { code: "CNW 112",    name: "Computer Network",                               credits: 3 },
    { code: "BCSNT 6013", name: "Principle of Programming",                       credits: 3 },
    { code: "BCSNT 6023", name: "Discrete Mathematics and Probability",           credits: 3 },
    { code: "BCSNT 6033", name: "Computer Systems",                               credits: 3 },
  ]},
  { sem: "Semester 2", total_credits: 15, subjects: [
    { code: "BCSNT 6073", name: "Computer Ethics",                                credits: 3 },
    { code: "DCN 263",    name: "Data Communication & Networking",                credits: 3 },
    { code: "BCSNT 6063", name: "Object Oriented Programming",                    credits: 3 },
    { code: "OPS 252",    name: "Operating Systems",                              credits: 3 },
    { code: "ECM 383",    name: "Computer Organization",                          credits: 3 },
  ]},
  { sem: "Semester 3", total_credits: 20, subjects: [
    { code: "BCSNT 6103", name: "Software Engineering Fundamentals",              credits: 3 },
    { code: "HCI 131",    name: "Human Computer Interaction",                     credits: 3 },
    { code: "BCSNT 6043", name: "Applied Statistics",                             credits: 3 },
    { code: "WSA 381",    name: "Microsoft Windows Server Administration",        credits: 4 },
    { code: "CSLPA 372",  name: "Cyber Security Legal Issues & Policy Analysis",  credits: 3 },
    { code: "CCNA 373",   name: "Cisco Certified Network Associate",              credits: 4 },
  ]},
  { sem: "Semester 4", total_credits: 20, subjects: [
    { code: "BCSNT 6053", name: "Values & Ethics in Profession",                  credits: 3 },
    { code: "WBT 123",    name: "Web Technology",                                 credits: 3 },
    { code: "WLC 384",    name: "Wireless Communication",                         credits: 4 },
    { code: "BCSNT 6123", name: "Information Security",                           credits: 3 },
    { code: "DMS 254",    name: "Database Management System",                     credits: 3 },
    { code: "IT-ETH",     name: "Ethical Hacking",                                credits: 4 },
  ]},
  { sem: "Semester 5", total_credits: 18, subjects: [
    { code: "MPU 3232",   name: "Human Relations and Leadership Skills",          credits: 2 },
    { code: "LNXA 371",   name: "Linux Administration",                           credits: 4 },
    { code: "AFI 373",    name: "Artificial Intelligence",                        credits: 3 },
    { code: "BCSNT 6083", name: "Information Assurance & Security 1",             credits: 3 },
    { code: "SAD 375",    name: "System Analysis & Design",                       credits: 3 },
    { code: "CBS 381",    name: "Cyber Security Management",                      credits: 3 },
  ]},
  { sem: "Semester 6", total_credits: 17, subjects: [
    { code: "BCSNT 6093", name: "Network Security & Privacy",                     credits: 3 },
    { code: "BCSNT 6114", name: "Project Management",                             credits: 4 },
    { code: "DSA 251",    name: "Data Structure & Algorithms",                    credits: 3 },
    { code: "BCSNT 6143", name: "Information Assurance & Security 2",             credits: 3 },
    { code: "IRT 252",    name: "Inter Routing Technology",                       credits: 4 },
  ]},
  { sem: "Semester 7 · Final Year Project", total_credits: 8, subjects: [
    { code: "AST 382",    name: "Advance Switching Technology & Troubleshooting", credits: 4 },
    { code: "BCSNT 6138", name: "Final Year Project 1",                           credits: 4 },
  ]},
  { sem: "Semester 8 · Industrial Training", total_credits: 12, subjects: [
    { code: "BCSNT 6158", name: "Industrial Training",                            credits: 8 },
    { code: "BCSNT 6148", name: "Final Year Project 2",                           credits: 4 },
  ]},
];

const ACCENT = {
  ring: "border-teal-200",
  bg:   "bg-teal-50",
  text: "text-teal-700",
  badge:"bg-teal-100 text-teal-700",
};

const prog = data.programs.find((p) => p.id === "bcs");

export const metadata = {
  title: "Bachelor of Computer Science (Hons) – Network Technology & Cybersecurity | Western Mega College",
  description: "4-year BCS program at WMC Butwal specializing in network technology and cybersecurity. Affiliated with Lincoln University College, Malaysia.",
};

export default function BCSPage() {
  return (
    <>
      <div className="page-hero" style={{ position: "relative" }}>
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
            alt="" fill className="object-cover object-center" unoptimized priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.88)" }} />
        </div>
        <div className="container relative z-10">
          <div className="flex items-center gap-2 mb-3 text-sm" style={{ color:"var(--color-muted)" }}>
            <Link href="/courses" className="hover:underline">Programs</Link>
            <span>/</span><span>BCS</span>
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
            { icon: Clock,   label:"Duration",      value: prog.duration },
            { icon: BookOpen,label:"Semesters",     value: `${prog.total_semesters} Semesters` },
            { icon: Users,   label:"Active Batches",value: prog.batches?.join(", ") },
            { icon: Shield,  label:"Total Credits",  value: `${prog.total_credits} Credits` },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background:"#F0FDFA", border:"1px solid #99F6E4" }}>
                <s.icon className="w-4 h-4" style={{ color:"#0D9488" }} />
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
              <h2 className="font-serif text-2xl font-bold mb-4" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>Secure the Future of Digital Infrastructure</h2>
              <p className="leading-relaxed mb-4 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>
                The BCS program at WMC is a specialized computer science degree focused on network technology and cybersecurity — two of the most in-demand fields in today's digital economy. Affiliated with Lincoln University College Malaysia, the curriculum combines foundational computer science with hands-on security training.
              </p>
              <p className="leading-relaxed mb-6 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>
                Students build expertise in areas such as ethical hacking, Linux administration, Cisco networking (CCNA), cryptography, and security operations — graduating as job-ready professionals equipped to defend and manage critical digital infrastructure.
              </p>

              {prog.specializations && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {prog.specializations.map((sp) => (
                    <div key={sp.name} className="p-4 rounded-xl border"
                      style={{ background:"#F0FDFA", borderColor:"#99F6E4" }}>
                      <h4 className="font-semibold text-sm mb-1.5" style={{ color:"#0D9488" }}>{sp.name}</h4>
                      <p className="text-xs leading-relaxed" style={{ color:"var(--color-muted)" }}>{sp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {prog.focus_areas.map((fa) => (
                  <div key={fa} className="flex items-center gap-2.5 p-3 rounded-xl"
                    style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color:"#0D9488" }} />
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
                      <Star className="w-3.5 h-3.5 shrink-0 fill-current" style={{ color:"#0D9488" }} />
                      {cp}
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t space-y-2" style={{ borderColor:"var(--color-border)" }}>
                  <Link href="/admission" className="btn-primary w-full justify-center" style={{ background:"#0D9488", borderColor:"#0D9488" }}>Apply for BCS <ArrowRight className="w-4 h-4" /></Link>
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
              { title:"Network Engineering",   desc:"Master LAN/WAN design, Cisco technologies (CCNA), routing, switching, and wireless communication." },
              { title:"Ethical Hacking",        desc:"Learn penetration testing, vulnerability assessment, and offensive security techniques ethically." },
              { title:"Cybersecurity Ops",      desc:"Study information assurance, network security, and cyber security management frameworks." },
              { title:"Linux & Windows Admin",  desc:"Administer Linux systems and Windows Server environments at enterprise scale." },
              { title:"Cryptography & Privacy", desc:"Understand encryption algorithms, PKI, digital signatures, and secure communications." },
              { title:"Industry Training",      desc:"Apply skills in a professional environment through structured industrial training in semester 8." },
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
            title="BCS Course Structure"
            subtitle={`4-year program · 8 Semesters · ${prog.total_credits} Total Credits · Lincoln University College`}
          />
          <SemesterTable semesters={BCS_SEMESTERS} accent={ACCENT} columns={2} />
        </div>
      </section>

      <section className="section-sm" style={{ background:"var(--color-surface)" }}>
        <div className="container text-center">
          <h2 className="font-serif text-2xl font-bold mb-3" style={{ color:"var(--color-ink)" }}>Start Your Cybersecurity Career</h2>
          <p className="text-[0.9375rem] mb-6 max-w-md mx-auto" style={{ color:"var(--color-muted)" }}>BCS admissions are open. Join the next generation of network and security professionals.</p>
          <Link href="/admission" className="btn-primary" style={{ background:"#0D9488", borderColor:"#0D9488" }}>Apply Now <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
