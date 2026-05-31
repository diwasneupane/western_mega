import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, BookOpen, Users, Cpu, Shield, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import SemesterTable from "@/components/curriculum/SemesterTable";
import data from "@/lib/data";

const BIT_SEMESTERS = [
  { sem: "Semester 1", total_credits: 16, subjects: [
    { code: "ENG I",    name: "Business English",                                 credits: 3 },
    { code: "BIT 6023", name: "Principles of Information Technology",             credits: 3 },
    { code: "BIT 6044", name: "Introduction to C++ Programming",                  credits: 4 },
    { code: "BIT 6033", name: "Computer Related Mathematics and Statistics",       credits: 3 },
    { code: "BIT 6013", name: "Basic Computer Architecture",                      credits: 3 },
  ]},
  { sem: "Semester 2", total_credits: 15, subjects: [
    { code: "BIT 6133", name: "Human Computer Interaction",                       credits: 3 },
    { code: "BIT 6063", name: "Discrete Mathematics",                             credits: 3 },
    { code: "BIT 6113", name: "Data Communication and Networks",                  credits: 3 },
    { code: "BIT 6083", name: "Object Oriented Programming",                      credits: 3 },
    { code: "BIT 6053", name: "Operating Systems",                                credits: 3 },
  ]},
  { sem: "Semester 3", total_credits: 20, subjects: [
    { code: "BIT 6193", name: "Digital Electronics and Logic Design",             credits: 3 },
    { code: "BIT 6153", name: "Data Structure & Algorithm",                       credits: 3 },
    { code: "BIT 6223", name: "Industrial Management",                            credits: 3 },
    { code: "BIT 6124", name: "Web Technology",                                   credits: 4 },
    { code: "BIT 6304", name: "Linux Administration",                             credits: 4 },
    { code: "BIT 6093", name: "Database Management System",                       credits: 3 },
  ]},
  { sem: "Semester 4", total_credits: 20, subjects: [
    { code: "BIT 6103", name: "Visual Programming",                               credits: 3 },
    { code: "BIT 6233", name: "System Analysis and Design",                       credits: 3 },
    { code: "BIT 6183", name: "Organizational Behaviour",                         credits: 3 },
    { code: "BIT 6143", name: "Information Systems Security",                     credits: 3 },
    { code: "BIT 6144", name: "CMS Based E-Commerce",                             credits: 4 },
    { code: "BIT 6264", name: "Artificial Intelligence",                          credits: 4 },
  ]},
  { sem: "Semester 5", total_credits: 18, subjects: [
    { code: "MPU 3232", name: "Human Relations and Leadership Skills",            credits: 2 },
    { code: "BIT 6273", name: "Cyber Security Law & Policy Analysis",             credits: 3 },
    { code: "BIT 6163", name: "Cryptography & Network Security",                  credits: 3 },
    { code: "BIT 6213", name: "Multimedia Systems",                               credits: 3 },
    { code: "BIT 6254", name: "Server-Side Programming",                          credits: 4 },
    { code: "BIT 6073", name: "Values & Ethics in Profession",                    credits: 3 },
  ]},
  { sem: "Semester 6", total_credits: 17, subjects: [
    { code: "BIT 6293", name: "Research Methodology",                             credits: 4 },
    { code: "BIT 6294", name: "Android Programming",                              credits: 4 },
    { code: "BIT 6243", name: "Project Management",                               credits: 3 },
    { code: "BIT 6173", name: "Management Information System",                    credits: 3 },
    { code: "BIT 6203", name: "System Administration and Maintenance",            credits: 3 },
  ]},
  { sem: "Semester 7 · Final Year Project", total_credits: 6, subjects: [
    { code: "BIT 6286", name: "Final Year Project",                               credits: 6 },
  ]},
  { sem: "Semester 8 · Industrial Training", total_credits: 8, subjects: [
    { code: "BIT 6318", name: "Industrial Training",                              credits: 8 },
  ]},
];

const ACCENT = {
  ring: "border-emerald-200",
  bg:   "bg-emerald-50",
  text: "text-emerald-700",
  badge:"bg-emerald-100 text-emerald-700",
};

const prog = data.programs.find((p) => p.id === "bit");

export const metadata = {
  title: "Bachelor of Information Technology (Hons) – Western Mega College",
  description: "4-year BIT program at WMC Butwal, affiliated with Lincoln University College Malaysia. Network Security and Mobile & Web Development.",
};

export default function BITPage() {
  return (
    <>
      <div className="page-hero" style={{ position: "relative" }}>
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80"
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
            <span className="badge badge-green">Now Enrolling</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>{prog.name}</h1>
          <p className="page-hero-sub">{prog.description}</p>
        </div>
      </div>

      <div style={{ background:"var(--color-surface)", borderBottom:"1px solid var(--color-border)" }}>
        <div className="container py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Clock,   label:"Duration",     value: prog.duration },
            { icon: BookOpen,label:"Semesters",    value: `${prog.total_semesters} Semesters` },
            { icon: Cpu,     label:"Affiliation",  value: "Lincoln University College" },
            { icon: Shield,  label:"Total Credits",value: `${prog.total_credits} Credits` },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background:"#ECFDF5", border:"1px solid #A7F3D0" }}>
                <s.icon className="w-4 h-4" style={{ color:"#059669" }} />
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
              <h2 className="font-serif text-2xl font-bold mb-4" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>Build, Secure & Innovate with Technology</h2>
              <p className="leading-relaxed mb-4 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>
                {prog.overview}
              </p>
              <p className="leading-relaxed mb-6 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>
                The 4-year, 8-semester curriculum provides deep expertise in programming, networking, cybersecurity, databases, and web technologies — capped with a final year project and industrial training that bridges classroom learning with real-world application.
              </p>

              {prog.specializations && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {prog.specializations.map((sp) => (
                    <div key={sp.name} className="p-4 rounded-xl border"
                      style={{ background:"#ECFDF5", borderColor:"#A7F3D0" }}>
                      <h4 className="font-semibold text-sm mb-1.5" style={{ color:"#059669" }}>{sp.name}</h4>
                      <p className="text-xs leading-relaxed" style={{ color:"var(--color-muted)" }}>{sp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {prog.focus_areas.map((fa) => (
                  <div key={fa} className="flex items-center gap-2.5 p-3 rounded-xl"
                    style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color:"#059669" }} />
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
                      <Star className="w-3.5 h-3.5 shrink-0 fill-current" style={{ color:"#059669" }} />
                      {cp}
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t space-y-2" style={{ borderColor:"var(--color-border)" }}>
                  <Link href="/admission" className="btn-primary w-full justify-center" style={{ background:"#059669", borderColor:"#059669" }}>Apply for BIT <ArrowRight className="w-4 h-4" /></Link>
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
              { title:"Programming",         desc:"Master C++, Object-Oriented Programming, Visual Programming, Server-Side, and Android development." },
              { title:"Networking & Security",desc:"Learn data communication, cryptography, network security, and cybersecurity law & policy." },
              { title:"Database & Systems",   desc:"Study DBMS, system analysis, Linux & Windows administration, and operating systems." },
              { title:"Web Technologies",     desc:"Build web applications with Web Technology, CMS-based e-commerce, and server-side frameworks." },
              { title:"AI & Multimedia",      desc:"Explore artificial intelligence, multimedia systems, and cutting-edge computing concepts." },
              { title:"Industry Training",    desc:"Apply skills in a real professional setting through the structured industrial training program." },
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
            title="BIT Course Structure"
            subtitle={`4-year program · 8 Semesters · ${prog.total_credits} Total Credits · Lincoln University College`}
          />
          <SemesterTable semesters={BIT_SEMESTERS} accent={ACCENT} columns={2} />
        </div>
      </section>

      <section className="section-sm" style={{ background:"var(--color-surface)" }}>
        <div className="container text-center">
          <h2 className="font-serif text-2xl font-bold mb-3" style={{ color:"var(--color-ink)" }}>Launch Your IT Career</h2>
          <p className="text-[0.9375rem] mb-6 max-w-md mx-auto" style={{ color:"var(--color-muted)" }}>BIT admissions are open. Join a program built for the technology professionals of tomorrow.</p>
          <Link href="/admission" className="btn-primary" style={{ background:"#059669", borderColor:"#059669" }}>Apply Now <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
