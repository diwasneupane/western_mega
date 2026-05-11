import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, BookOpen, Users, Award, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import data from "@/lib/data";

const prog = data.programs.find((p) => p.id === "bhm");

export const metadata = {
  title: "Bachelor of Hotel Management (BHM) – Western Mega College",
  description: "4-year BHM program under the SCHOTEL model at WMC, Butwal. Gain practical hospitality expertise for global careers.",
};

export default function BHMPage() {
  return (
    <>
      <div className="page-hero">
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
