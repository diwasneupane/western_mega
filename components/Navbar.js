"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, MapPin, Phone } from "lucide-react";

const PROGRAMS = [
  { label: "Bachelor of Hotel Management", sub: "BHM · 4 Years · Enrolling", href: "/courses/bhm" },
  { label: "Master of Business Administration", sub: "MBA · 2 Years · Enrolling", href: "/courses/mba" },
  { label: "Bachelor of Information Technology", sub: "BIT · Coming 2026", href: "/courses/bit", badge: true },
];
const TEAM = [
  { label: "Our Principal",      href: "/principal" },
  { label: "Board of Directors", href: "/bod" },
  { label: "Faculty Members",    href: "/faculty" },
  { label: "Staff Members",      href: "/staff" },
];
const LINKS = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events",  href: "/events" },
  { label: "Blog",    href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function DropMenu({ label, items, open, onToggle }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
        style={{ color: open ? "var(--color-blue)" : "var(--color-ink-700)", background: open ? "var(--color-blue-50)" : "transparent" }}
      >
        {label}
        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "none" }} />
      </button>
      <div
        className="absolute top-full left-0 mt-2 z-50 rounded-xl border overflow-hidden"
        style={{
          minWidth: "270px",
          background: "#fff",
          borderColor: "var(--color-border)",
          boxShadow: "0 20px 60px rgba(15,23,42,0.12), 0 4px 16px rgba(15,23,42,0.06)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.97)",
          transformOrigin: "top left",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        }}
      >
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={onToggle}
            className="flex items-center justify-between px-4 py-3.5 border-b last:border-none transition-colors"
            style={{ borderColor: "var(--color-border-light)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-blue-50)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>{item.label}</p>
              {item.sub && <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>{item.sub}</p>}
            </div>
            {item.badge && <span className="badge badge-gold text-[10px]">2026</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [visible,  setVisible]    = useState(true);
  const [openDrop, setOpenDrop]   = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    let last = 0;
    const fn = () => {
      const curr = window.scrollY;
      setScrolled(curr > 50);
      if (curr < 80) {
        setVisible(true);            // always show near the top
      } else if (curr > last + 6) {
        setVisible(false);           // scrolling down → hide
      } else if (curr < last - 6) {
        setVisible(true);            // scrolling up → show
      }
      last = curr;
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpenDrop(null); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const toggle = (k) => setOpenDrop(openDrop === k ? null : k);

  return (
    <>
      {/* ── DESKTOP ONLY ── */}

      {/* Info strip */}
      <div
        className="hidden lg:block fixed top-0 left-0 right-0 z-50"
        style={{
          background: "#fff",
          borderBottom: "1px solid var(--color-border)",
          transform: (scrolled || !visible) ? "translateY(-100%)" : "translateY(0)",
          opacity: (scrolled || !visible) ? 0 : 1,
          transition: "transform 0.3s ease, opacity 0.25s ease",
          pointerEvents: (scrolled || !visible) ? "none" : "auto",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 5rem" }}>
          <div className="flex items-center justify-between py-2">
            <p className="text-xs" style={{ color: "var(--color-muted)" }}>
              Affiliated with{" "}
              <span className="font-semibold" style={{ color: "var(--color-blue)" }}>
                Lincoln University College, Malaysia
              </span>
            </p>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-muted)" }}>
                <MapPin className="w-3 h-3" /> Dhawaha, Butwal, Nepal
              </span>
              <a href="tel:9857071252"
                className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                style={{ color: "var(--color-ink)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
              >
                <Phone className="w-3 h-3" style={{ color: "var(--color-blue)" }} /> 9857-071252
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating pill nav */}
      <div
        className="hidden lg:block fixed left-0 right-0 z-40"
        style={{
          top: scrolled ? "0" : "33px",
          padding: scrolled ? "0.625rem 1.25rem" : "0",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "top 0.35s cubic-bezier(0.4,0,0.2,1), padding 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.3s ease",
        }}
      >
        <nav
          ref={navRef}
          style={scrolled ? {
            maxWidth: "1100px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: "1rem",
            border: "1px solid rgba(226,232,240,0.9)",
            boxShadow: "0 8px 32px rgba(15,23,42,0.09), 0 2px 8px rgba(15,23,42,0.05)",
            padding: "0 1.75rem",
            transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
          } : {
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 5rem",
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid transparent",
            borderRadius: "0",
            boxShadow: "none",
            transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div className="flex items-center justify-between h-14 gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shrink-0"
                style={{ background: "var(--color-blue-50)", border: "1px solid var(--color-blue-100)" }}>
                <Image
                  src="https://westernmegacollege.edu.np/_next/static/media/logo.5a59ae59.png"
                  alt="WMC" width={32} height={32}
                  className="object-contain p-0.5" unoptimized
                />
              </div>
              <div>
                <p className="font-serif font-bold text-[0.875rem] leading-none" style={{ color: "var(--color-ink)" }}>
                  Western Mega College
                </p>
                <p className="text-[0.625rem] leading-none mt-0.5 font-medium" style={{ color: "var(--color-muted)" }}>
                  Butwal, Nepal
                </p>
              </div>
            </Link>

            {/* Links */}
            <div className="flex items-center gap-0.5 flex-1 justify-center">
              {LINKS.slice(0, 2).map((l) => (
                <Link key={l.href} href={l.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: "var(--color-ink-700)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-blue)"; e.currentTarget.style.background = "var(--color-blue-50)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-ink-700)"; e.currentTarget.style.background = "transparent"; }}
                >{l.label}</Link>
              ))}
              <DropMenu label="Programs" items={PROGRAMS} open={openDrop === "programs"} onToggle={() => toggle("programs")} />
              <DropMenu label="Our Team"  items={TEAM}     open={openDrop === "team"}     onToggle={() => toggle("team")} />
              {LINKS.slice(2).map((l) => (
                <Link key={l.href} href={l.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: "var(--color-ink-700)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-blue)"; e.currentTarget.style.background = "var(--color-blue-50)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-ink-700)"; e.currentTarget.style.background = "transparent"; }}
                >{l.label}</Link>
              ))}
            </div>

            {/* CTA */}
            <Link href="/admission" className="btn-gold shrink-0 text-sm py-2 px-5">
              Apply Now
            </Link>
          </div>
        </nav>
      </div>

      {/* ── MOBILE ONLY: sticky bottom CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-3"
        style={{
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTop: "1px solid var(--color-border)",
          boxShadow: "0 -4px 24px rgba(15,23,42,0.07)",
        }}
      >
        <Link href="/admission" className="btn-gold w-full justify-center py-3 text-sm">
          Apply Now – Admissions Open 2025
        </Link>
      </div>
    </>
  );
}
