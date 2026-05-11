import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Globe, Users, BookOpen, TrendingUp, Building2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import data from "@/lib/data";

const { college, board_of_directors, value_propositions, campus_life, media, principal } = data;

export const metadata = {
  title: "About Us – Western Mega College",
  description: "Learn about Western Mega College — history, mission, leadership, and commitment to excellence in hospitality, business, and technology education since 2013.",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <span className="page-hero-eyebrow">About Us</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ maxWidth:"34rem", letterSpacing:"-0.02em" }}>
            About Western Mega College
          </h1>
          <p className="page-hero-sub">{college.tagline}</p>
        </div>
      </div>

      {/* College Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="page-hero-eyebrow">Our Story</span>
              <h2 className="font-serif text-3xl font-bold mb-5" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>
                A Legacy of Excellence Since {college.founded}
              </h2>
              <p className="leading-relaxed mb-6 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>{college.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-7">
                {[
                  { label:"Founded",     value: college.founded },
                  { label:"Location",    value: "Butwal, Nepal" },
                  { label:"Affiliation", value: "Lincoln Univ. Malaysia" },
                  { label:"Programs",    value: "BHM, MBA, BIT" },
                ].map((d) => (
                  <div key={d.label} className="rounded-xl p-4 border" style={{ background:"var(--color-surface)", borderColor:"var(--color-border)" }}>
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color:"var(--color-muted)" }}>{d.label}</p>
                    <p className="font-bold text-sm" style={{ color:"var(--color-ink)" }}>{d.value}</p>
                  </div>
                ))}
              </div>
              <Link href="/admission" className="btn-gold">Apply Now <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] relative">
                <Image src={media.home_banner} alt="WMC Campus" fill className="object-cover" unoptimized />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl border" style={{ borderColor:"var(--color-border)" }}>
                <p className="font-serif text-3xl font-bold" style={{ color:"var(--color-ink)" }}>10+</p>
                <p className="text-sm" style={{ color:"var(--color-muted)" }}>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background:"var(--color-surface)" }}>
        <div className="container">
          <SectionHeader eyebrow="Mission & Vision" title="Guided by Purpose, Driven by Excellence" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-7 border" style={{ borderColor:"var(--color-border)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background:"var(--color-gold-50)", border:"1px solid var(--color-gold-100)" }}>
                <Award className="w-5 h-5" style={{ color:"var(--color-gold)" }} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3" style={{ color:"var(--color-ink)" }}>Our Mission</h3>
              <p style={{ color:"var(--color-muted)" }} className="leading-relaxed text-sm">
                To provide industry-relevant, practical education in hospitality management, business administration, and information technology — developing confident, ethical, and globally competitive graduates who contribute meaningfully to society.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 border" style={{ borderColor:"var(--color-border)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background:"var(--color-blue-50)", border:"1px solid var(--color-blue-100)" }}>
                <Globe className="w-5 h-5" style={{ color:"var(--color-blue)" }} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3" style={{ color:"var(--color-ink)" }}>Our Vision</h3>
              <p style={{ color:"var(--color-muted)" }} className="leading-relaxed text-sm">
                To be recognized as the premier institution in Western Nepal for professional education — setting benchmarks in academic quality, student placement, and institutional integrity as recognized by Lincoln University College, Malaysia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why WMC */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Why WMC" title="What Sets Us Apart" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {value_propositions.map((vp, i) => {
              const ICONS = [Award, TrendingUp, Globe, BookOpen, Users, Building2];
              const Icon = ICONS[i % ICONS.length];
              return (
                <div key={vp.title} className="rounded-xl p-5 border hover:shadow-md transition-shadow"
                  style={{ background:"var(--color-surface)", borderColor:"var(--color-border)" }}>
                  <Icon className="w-5 h-5 mb-3" style={{ color:"var(--color-blue)" }} />
                  <h3 className="font-semibold text-sm mb-1.5" style={{ color:"var(--color-ink)" }}>{vp.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color:"var(--color-muted)" }}>{vp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="section" style={{ background:"var(--color-navy)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] mb-3" style={{ color:"var(--color-gold)" }}>Our Affiliation</p>
              <h2 className="font-serif text-3xl font-bold text-white mb-5">Lincoln University College, Malaysia</h2>
              <p className="text-white/65 leading-relaxed mb-6 text-sm">
                Western Mega College is proudly affiliated with Lincoln University College, Malaysia — a globally recognized institution known for academic excellence and international standards. Degrees carry the credential of an internationally respected institution, opening doors to global careers.
              </p>
              <ul className="space-y-2.5 mb-7">
                {["Globally recognized degrees","International academic standards","Research collaboration opportunities","Access to international faculty and resources"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/75 text-sm">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color:"var(--color-gold)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://www.lincoln.edu.my/" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Visit Lincoln University <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-2xl p-10 w-full max-w-xs text-center shadow-2xl">
                <Image src={media.lincoln_logo} alt="Lincoln University College" width={180} height={72} className="object-contain mx-auto mb-3" unoptimized />
                <p className="text-sm font-semibold" style={{ color:"var(--color-ink)" }}>Lincoln University College</p>
                <p className="text-xs" style={{ color:"var(--color-muted)" }}>Petaling Jaya, Malaysia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Campus Life" title="Beyond the Classroom" subtitle="WMC offers a vibrant campus environment that nurtures the whole person." />
          <div className="flex flex-wrap gap-2.5 justify-center">
            {campus_life.activities.map((act) => (
              <span key={act} className="px-4 py-2 rounded-full text-sm font-medium border transition-colors hover:border-blue-200"
                style={{ background:"var(--color-surface)", borderColor:"var(--color-border)", color:"var(--color-ink)" }}>
                {act}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section" style={{ background:"var(--color-surface)" }}>
        <div className="container">
          <SectionHeader eyebrow="Leadership" title="Board of Directors" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {board_of_directors.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-5 text-center border" style={{ borderColor:"var(--color-border)" }}>
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
                  <ImagePlaceholder type="profile" />
                </div>
                <h3 className="font-semibold text-sm mb-0.5" style={{ color:"var(--color-ink)" }}>{member.name}</h3>
                <p className="text-xs font-semibold mb-2" style={{ color:"var(--color-blue)" }}>{member.role}</p>
                <p className="text-xs leading-relaxed" style={{ color:"var(--color-muted)" }}>{member.bio}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-7">
            <Link href="/bod" className="btn-outline-soft text-sm py-2.5 px-5">View Full Board</Link>
          </p>
        </div>
      </section>
    </>
  );
}
