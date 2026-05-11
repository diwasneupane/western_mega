import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Star, Calendar, BookOpen, Users, Award, Globe,
  ChevronRight, GraduationCap, Briefcase, Cpu, MapPin,
  CheckCircle, TrendingUp, Building2, Phone, Clock, Sparkles
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import data from "@/lib/data";

const { college, programs, principal, alumni_testimonials, corporate_partners, faqs, value_propositions, events, blogs, media } = data;

const PROG_ICONS = { bhm: GraduationCap, mba: Briefcase, bit: Cpu };
const PROG_ACC = {
  bhm: { color: "var(--color-gold)",   bg: "var(--color-gold-50)",  border: "var(--color-gold-100)" },
  mba: { color: "var(--color-blue)",   bg: "var(--color-blue-50)",  border: "var(--color-blue-100)" },
  bit: { color: "#059669",              bg: "#f0fdf4",               border: "#bbf7d0" },
};

function FAQItem({ question, answer }) {
  return (
    <details className="group border-b last:border-none" style={{ borderColor: "var(--color-border)" }}>
      <summary className="flex items-center justify-between py-3.5 cursor-pointer select-none list-none gap-4">
        <span className="font-medium text-sm" style={{ color: "var(--color-ink)" }}>{question}</span>
        <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" style={{ color: "var(--color-blue)" }} />
      </summary>
      <p className="pb-3.5 text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{answer}</p>
    </details>
  );
}

export default function HomePage() {
  const featuredBlogs  = blogs.filter((b) => b.thumbnail).slice(0, 3);
  const latestEvents   = events.slice(0, 3);
  const faqLeft        = faqs.slice(0, 4);
  const faqRight       = faqs.slice(4, 8);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "7rem", paddingBottom: "4.5rem", background: "#fff" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"-10%", right:"-5%", width:"55%", height:"80%",
            background:"radial-gradient(ellipse at 60% 30%, rgba(79,70,229,0.07) 0%, transparent 65%)" }} />
          <div style={{ position:"absolute", bottom:"-5%", left:"-8%", width:"45%", height:"60%",
            background:"radial-gradient(ellipse at 30% 80%, rgba(245,158,11,0.05) 0%, transparent 65%)" }} />
          <svg className="absolute inset-0 w-full h-full" style={{ opacity:0.02 }}>
            <defs><pattern id="hero-dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="var(--color-ink)" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] gap-10 xl:gap-16 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{ background:"var(--color-blue-50)", color:"var(--color-blue)", border:"1px solid var(--color-blue-100)" }}>
                <Sparkles className="w-3.5 h-3.5" />
                Affiliated with Lincoln University College, Malaysia
              </div>

              <h1 className="font-serif font-bold mb-5"
                style={{ fontSize:"clamp(2.25rem, 4vw, 3.5rem)", lineHeight:1.1, letterSpacing:"-0.03em", color:"var(--color-ink)" }}>
                Build Your Career in{" "}
                <span style={{ color:"var(--color-blue)" }}>BHM, MBA</span>
                {" "}&amp; <span style={{ color:"var(--color-gold)" }}>BIT</span>{" "}
                at WMC
              </h1>

              <p style={{ color:"var(--color-muted)", fontSize:"1.0625rem", lineHeight:1.7, maxWidth:"29rem", marginBottom:"2rem" }}>
                {college.description.slice(0, 200)}...
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/admission" className="btn-gold" style={{ fontSize:"0.9375rem", padding:"0.75rem 1.75rem" }}>
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/courses" className="btn-outline-soft" style={{ fontSize:"0.9375rem", padding:"0.75rem 1.75rem" }}>
                  Explore Programs
                </Link>
              </div>

              <div className="flex flex-wrap gap-5">
                {[
                  { value: college.founded,              label:"Founded" },
                  { value:"3",                            label:"Programs" },
                  { value:`${college.google_rating}★`,  label:"Google Rating" },
                  { value:"500+",                         label:"Alumni" },
                ].map((s) => (
                  <div key={s.label} className="pr-5 border-r last:border-none last:pr-0"
                    style={{ borderColor:"var(--color-border)" }}>
                    <p className="font-serif font-bold text-xl" style={{ color:"var(--color-ink)" }}>{s.value}</p>
                    <p className="text-xs mt-0.5" style={{ color:"var(--color-muted)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden"
                style={{ boxShadow:"0 20px 64px rgba(79,70,229,0.13), 0 4px 16px rgba(15,23,42,0.07)" }}>
                {media?.home_banner ? (
                  <Image
                    src={media.home_banner}
                    alt="WMC Campus"
                    width={500} height={580}
                    className="w-full object-cover"
                    style={{ aspectRatio:"5/6", objectPosition:"center top" }}
                    priority unoptimized
                  />
                ) : (
                  <div style={{ aspectRatio:"5/6" }}><ImagePlaceholder type="banner" label="WMC Campus" /></div>
                )}
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full p-5"
                    style={{ background:"linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 55%)" }}>
                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                      style={{ background:"rgba(255,255,255,0.12)", backdropFilter:"blur(12px)" }}>
                      <div className="flex items-center gap-0.5">
                        {[1,2,3,4].map(i=><Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color:"var(--color-gold)" }} />)}
                        <Star className="w-3.5 h-3.5" style={{ color:"var(--color-gold)", opacity:0.4 }} />
                      </div>
                      <span className="text-white font-semibold text-sm">{college.google_rating}/5</span>
                      <span className="text-white/60 text-xs ml-auto">{college.google_reviews_count} reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl"
                style={{ background:"#fff", border:"1px solid var(--color-border)", boxShadow:"0 4px 16px rgba(15,23,42,0.09)" }}>
                <p className="text-xs font-bold" style={{ color:"var(--color-blue)" }}>Est. {college.founded}</p>
                <p className="text-[10px]" style={{ color:"var(--color-muted)" }}>10+ Years Excellence</p>
              </div>
              <div className="absolute -bottom-4 -left-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
                style={{ background:"#fff", border:"1px solid var(--color-border)", boxShadow:"0 4px 16px rgba(15,23,42,0.09)" }}>
                <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color:"var(--color-blue)" }} />
                <div>
                  <p className="text-xs font-bold" style={{ color:"var(--color-ink)" }}>Butwal, Nepal</p>
                  <p className="text-[10px]" style={{ color:"var(--color-muted)" }}>Aramba Resort Campus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFO STRIP ─── */}
      <div style={{ background:"var(--color-surface)", borderTop:"1px solid var(--color-border)", borderBottom:"1px solid var(--color-border)" }}>
        <div className="container py-3.5 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2" style={{ color:"var(--color-muted)" }}>
            <Globe className="w-4 h-4" style={{ color:"var(--color-blue)" }} />
            <span className="text-xs">{college.affiliation}</span>
          </div>
          <div className="flex items-center gap-2" style={{ color:"var(--color-muted)" }}>
            <MapPin className="w-4 h-4" style={{ color:"var(--color-blue)" }} />
            <span className="text-xs">{college.location}</span>
          </div>
          <div className="flex items-center gap-2" style={{ color:"var(--color-muted)" }}>
            <Clock className="w-4 h-4" style={{ color:"var(--color-blue)" }} />
            <span className="text-xs">Sun–Fri: 9 AM – 5 PM</span>
          </div>
          <a href={college.whatsapp_url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg"
            style={{ background:"rgba(37,211,102,0.08)", color:"#16a34a", border:"1px solid rgba(37,211,102,0.25)" }}>
            <Phone className="w-3.5 h-3.5" /> WhatsApp Us
          </a>
        </div>
      </div>

      {/* ─── PROGRAMS ─── */}
      <section className="section" style={{ background:"#fff" }}>
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="page-hero-eyebrow">Our Programs</span>
              <h2 className="font-serif text-3xl font-bold" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>
                Choose Your Path
              </h2>
            </div>
            <Link href="/courses" className="hidden md:flex items-center gap-1 text-sm font-semibold" style={{ color:"var(--color-blue)" }}>
              All Programs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {programs.map((prog) => {
              const Icon = PROG_ICONS[prog.id] || GraduationCap;
              const acc  = PROG_ACC[prog.id] || PROG_ACC.mba;
              return (
                <div key={prog.id}
                  className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                  style={{ background:"#fff", borderColor:"var(--color-border)" }}>
                  <div className="h-1" style={{ background:acc.color }} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background:acc.bg, border:`1px solid ${acc.border}` }}>
                        <Icon className="w-5 h-5" style={{ color:acc.color }} />
                      </div>
                      {prog.status === "coming_soon"
                        ? <span className="badge badge-gray">2026</span>
                        : <span className="badge badge-green">Enrolling</span>}
                    </div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-widest mb-1" style={{ color:acc.color }}>{prog.short_name}</p>
                    <h3 className="font-serif font-bold text-base mb-2" style={{ color:"var(--color-ink)" }}>{prog.name}</h3>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color:"var(--color-muted)" }}>
                      {prog.description.slice(0, 110)}...
                    </p>
                    <div className="flex items-center gap-3 text-xs mb-4" style={{ color:"var(--color-muted)" }}>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {prog.duration}</span>
                      <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {prog.total_semesters} Sem</span>
                    </div>
                    <Link href={`/courses/${prog.id}`}
                      className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                      style={{ color:acc.color }}>
                      View Program <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPS ─── */}
      <section className="section" style={{ background:"var(--color-surface)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="page-hero-eyebrow">Why WMC</span>
              <h2 className="font-serif text-3xl font-bold mb-4" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>
                A Decade of Excellence
              </h2>
              <p className="leading-relaxed text-[0.9375rem] mb-8" style={{ color:"var(--color-muted)", maxWidth:"27rem" }}>
                {college.description.slice(0, 200)}...
              </p>
              <Link href="/about" className="btn-primary">
                About WMC <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {(() => {
                const ICONS = [Award, TrendingUp, Globe, BookOpen, Users, Building2];
                return value_propositions.map((vp, i) => {
                  const Icon = ICONS[i % ICONS.length];
                  const first = i === 0;
                  return (
                    <div key={vp.title} className="rounded-2xl p-5 border transition-shadow hover:shadow-md"
                      style={{
                        background: first ? "var(--color-blue)" : "#fff",
                        borderColor: first ? "var(--color-blue)" : "var(--color-border)",
                      }}>
                      <Icon className="w-5 h-5 mb-3" style={{ color: first ? "#fff" : "var(--color-blue)" }} />
                      <h4 className="font-semibold text-sm mb-1.5" style={{ color: first ? "#fff" : "var(--color-ink)" }}>
                        {vp.title}
                      </h4>
                      <p className="text-xs leading-relaxed" style={{ color: first ? "rgba(255,255,255,0.72)" : "var(--color-muted)" }}>
                        {vp.description}
                      </p>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRINCIPAL ─── */}
      <section className="section" style={{ background:"#fff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 xl:gap-14 items-start max-w-5xl mx-auto">
            <div className="relative" style={{ position:"sticky", top:"5.5rem", alignSelf:"start" }}>
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio:"3/4" }}>
                <Image src={principal.photo} alt={principal.name} fill
                  className="object-cover object-top" unoptimized />
              </div>
              <div className="absolute -bottom-4 -right-4 px-5 py-3.5 rounded-2xl"
                style={{ background:"var(--color-blue)", boxShadow:"0 8px 28px rgba(79,70,229,0.28)" }}>
                <p className="text-white font-serif font-bold text-sm leading-tight">{principal.name}</p>
                <p className="text-[10px] mt-0.5" style={{ color:"rgba(255,255,255,0.7)" }}>{principal.specialization}</p>
              </div>
            </div>

            <div>
              <span className="page-hero-eyebrow">Principal's Message</span>
              <h2 className="font-serif text-2xl font-bold mb-5" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>
                Welcome to Western Mega College
              </h2>
              <div className="relative mb-5 pl-5 border-l-2" style={{ borderColor:"var(--color-blue)" }}>
                <p className="text-base leading-relaxed italic" style={{ color:"var(--color-muted)" }}>
                  "{principal.message.quote}"
                </p>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color:"var(--color-muted)" }}>
                {principal.message.body.slice(0, 240)}...
              </p>
              <Link href="/principal" className="btn-primary">
                Read Full Message <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      {alumni_testimonials?.length > 0 && (
        <section className="section" style={{ background:"var(--color-surface)" }}>
          <div className="container">
            <SectionHeader eyebrow="Alumni" title="What Our Graduates Say"
              subtitle="Our alumni work across hospitality, business, and tech organizations worldwide." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {alumni_testimonials.map((t) => (
                <div key={t.id} className="rounded-2xl p-5 flex flex-col bg-white border hover:shadow-md transition-shadow"
                  style={{ borderColor:"var(--color-border)" }}>
                  <div className="flex items-center gap-0.5 mb-3">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" style={{ color:"var(--color-gold)" }} />
                    ))}
                  </div>
                  <p className="text-[0.8125rem] leading-relaxed flex-1 mb-4 italic" style={{ color:"var(--color-muted)" }}>
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor:"var(--color-border)" }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                      style={{ background:"var(--color-blue)", fontSize:"0.75rem" }}>
                      {t.name?.[0] ?? "A"}
                    </div>
                    <div>
                      <p className="font-semibold text-sm leading-tight" style={{ color:"var(--color-ink)" }}>{t.name}</p>
                      <p className="text-xs mt-0.5" style={{ color:"var(--color-muted)" }}>{t.current_role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── EVENTS ─── */}
      <section className="section" style={{ background:"#fff" }}>
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="page-hero-eyebrow">Events</span>
              <h2 className="font-serif text-2xl font-bold" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>
                Campus Life &amp; Events
              </h2>
            </div>
            <Link href="/events" className="btn-outline-soft text-sm py-2 px-4 hidden md:inline-flex shrink-0 mb-1">
              All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {latestEvents.map((ev) => (
              <div key={ev.id} className="card overflow-hidden bg-white">
                {ev.thumbnail
                  ? <div className="relative aspect-[16/9]"><Image src={ev.thumbnail} alt={ev.title} fill className="object-cover" unoptimized /></div>
                  : <ImagePlaceholder type="landscape" label="Event" />}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="badge badge-gold">{ev.type}</span>
                    <span className={`badge ${ev.status === "upcoming" ? "badge-blue" : "badge-green"}`}>{ev.status}</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm mb-1.5 leading-snug" style={{ color:"var(--color-ink)" }}>{ev.title}</h3>
                  <p className="text-xs mb-2.5 flex items-center gap-1.5" style={{ color:"var(--color-muted)" }}>
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(ev.date).toLocaleDateString("en-US", { year:"numeric", month:"long", day:"numeric" })}
                  </p>
                  <p className="text-[0.8125rem] leading-relaxed" style={{ color:"var(--color-muted)" }}>
                    {ev.description.slice(0, 80)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section className="section" style={{ background:"var(--color-surface)" }}>
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="page-hero-eyebrow">Blog &amp; News</span>
              <h2 className="font-serif text-2xl font-bold" style={{ color:"var(--color-ink)", letterSpacing:"-0.02em" }}>
                Latest from WMC
              </h2>
            </div>
            <Link href="/blog" className="btn-outline-soft text-sm py-2 px-4 hidden md:inline-flex shrink-0 mb-1">
              All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredBlogs.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="card group block bg-white">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={post.thumbnail} alt={post.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                  <div className="absolute top-3 left-3">
                    <span className="badge badge-gold">{post.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs mb-2" style={{ color:"var(--color-muted)" }}>
                    {new Date(post.date).toLocaleDateString("en-US", { year:"numeric", month:"short", day:"numeric" })}
                    {" "}· {post.author}
                  </p>
                  <h3 className="font-serif font-bold text-[0.9375rem] leading-snug mb-2" style={{ color:"var(--color-ink)" }}>
                    {post.title}
                  </h3>
                  <p className="text-[0.8125rem] leading-relaxed" style={{ color:"var(--color-muted)" }}>
                    {post.summary.slice(0, 95)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section className="section-sm" style={{ background:"var(--color-surface-2)", borderTop:"1px solid var(--color-border)" }}>
        <div className="container text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-7" style={{ color:"var(--color-muted)" }}>
            Corporate &amp; Industry Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {corporate_partners.map((p) => (
              <div key={p.name} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border"
                style={{ borderColor:"var(--color-border)" }}>
                <Building2 className="w-4 h-4 shrink-0" style={{ color:"var(--color-blue)" }} />
                <div className="text-left">
                  <p className="text-sm font-semibold" style={{ color:"var(--color-ink)" }}>{p.name}</p>
                  <p className="text-[0.7rem]" style={{ color:"var(--color-muted)" }}>{p.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section" style={{ background:"#fff" }}>
        <div className="container">
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions"
            subtitle="Everything you need to know about admissions, programs, and campus life." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[faqLeft, faqRight].map((group, gi) => (
              <div key={gi} className="rounded-2xl border overflow-hidden bg-white"
                style={{ borderColor:"var(--color-border)" }}>
                {group.map((faq, i) => (
                  <div key={faq.id} className="px-5">
                    <FAQItem question={faq.question} answer={faq.answer} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/contact" className="btn-outline-soft text-sm py-2.5 px-5">
              Still have questions? Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="section-sm relative overflow-hidden" style={{ background:"var(--color-blue)" }}>
        <div className="pointer-events-none absolute inset-0">
          <svg width="100%" height="100%">
            <defs><pattern id="cta-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" opacity="0.07" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
          <div style={{ position:"absolute", top:"-30%", right:"-5%", width:"40%", height:"160%",
            background:"radial-gradient(ellipse at 60% 40%, rgba(255,255,255,0.08) 0%, transparent 65%)" }} />
        </div>
        <div className="container relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4"
            style={{ background:"rgba(255,255,255,0.15)", color:"#fff", border:"1px solid rgba(255,255,255,0.25)" }}>
            <Sparkles className="w-3.5 h-3.5" /> Admissions Open 2025
          </div>
          <h2 className="font-serif text-3xl font-bold text-white mb-3" style={{ letterSpacing:"-0.02em" }}>
            Begin Your Journey at WMC
          </h2>
          <p className="text-white/70 text-base max-w-md mx-auto mb-7">
            Applications are open for BHM and MBA. Secure your seat in Nepal's most respected institution.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/admission" className="btn-gold">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
