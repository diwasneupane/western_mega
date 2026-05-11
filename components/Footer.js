"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink, Share2, Globe, Play, ArrowRight } from "lucide-react";

const PROGRAMS = [
  { label: "BHM – Hotel Management",        href: "/courses/bhm" },
  { label: "MBA – Business Administration", href: "/courses/mba" },
  { label: "BIT – Info Technology",         href: "/courses/bit" },
];
const QUICK = [
  { label: "About Us",    href: "/about" },
  { label: "Faculty",     href: "/faculty" },
  { label: "Events",      href: "/events" },
  { label: "Gallery",     href: "/gallery" },
  { label: "Blog",        href: "/blog" },
  { label: "Admission",   href: "/admission" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-navy-900)", color: "#fff" }}>

      {/* Main grid */}
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

        {/* Brand – col-span-4 */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <Image src="https://westernmegacollege.edu.np/_next/static/media/logo.5a59ae59.png"
                alt="WMC" width={40} height={40} className="object-contain" unoptimized />
            </div>
            <div>
              <p className="font-serif font-bold text-base leading-none">Western Mega College</p>
              <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Est. 2013 · Butwal, Nepal</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "20rem" }}>
            Hospitality &amp; Management Excellence Since 2013. Shaping future leaders through innovative education affiliated with Lincoln University College, Malaysia.
          </p>

          <div className="mb-6">
            <Image src="https://westernmegacollege.edu.np/_next/static/media/lincon.fd098be9.png"
              alt="Lincoln University College" width={110} height={36} className="object-contain opacity-70" unoptimized />
          </div>

          <div className="flex items-center gap-2">
            {[Share2, Globe, Play].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.color = "var(--color-gold)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Programs + Quick Links – col-span-3 */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Programs</h4>
          <ul className="space-y-2.5 mb-8">
            {PROGRAMS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >{l.label}</Link>
              </li>
            ))}
          </ul>

          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Quick Links</h4>
          <ul className="space-y-2.5">
            {QUICK.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact – col-span-3 */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Contact</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                Dhawaha, Butwal, Lumbini Province, Nepal
                <br /><span style={{ color: "rgba(255,255,255,0.4)" }}>Located at Aramba Resort</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }} />
              <div className="text-sm space-y-0.5">
                {["071-422131", "071-422132", "9857071252"].map((p) => (
                  <a key={p} href={`tel:${p}`} className="block transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                  >{p}</a>
                ))}
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }} />
              <a href="mailto:info@westernmegacollege.edu.np" className="text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.65)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >info@westernmegacollege.edu.np</a>
            </li>
            <li className="flex gap-3">
              <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>Sunday – Friday: 9:00 AM – 5:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Admission CTA – col-span-2 */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Admissions</h4>
          <div className="rounded-2xl p-5" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
            <div className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mb-3"
              style={{ background: "var(--color-gold)", color: "#fff" }}>
              Open Now
            </div>
            <p className="font-bold text-sm text-white mb-1">BHM &amp; MBA 2025</p>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
              Applications are currently open.
            </p>
            <Link href="/admission"
              className="flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-4 rounded-lg w-full transition-all"
              style={{ background: "var(--color-gold)", color: "#fff" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-gold-600)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-gold)")}
            >
              Apply Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "rgba(255,255,255,0.3)" }}>
          <p>© {new Date().getFullYear()} Western Mega College, Butwal, Nepal. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.lincoln.edu.my/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-white/60">
              Lincoln University College <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <a href="https://westernmegacollege.edu.np/" target="_blank" rel="noopener noreferrer"
              className="transition-colors hover:text-white/60">
              Official Website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
