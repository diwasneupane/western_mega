"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, MapPin, Phone, X } from "lucide-react";

const PROGRAMS = [
  { label: "Bachelor of Science (Hons) in Hospitality Management", sub: "BHM · 4 Years · Enrolling", href: "/courses/bhm" },
  { label: "Master of Business Administration", sub: "MBA · 2 Years · Enrolling", href: "/courses/mba" },
  { label: "Bachelor (Hons) in Business Administration", sub: "BBA · 4 Years · Enrolling", href: "/courses/bba" },
  { label: "Bachelor of Computer Science (Hons) – Network Technology & Cybersecurity", sub: "BCS · 4 Years · Enrolling", href: "/courses/bcs" },
  { label: "Bachelor of Information Technology (Hons)", sub: "BIT · 4 Years · Enrolling", href: "/courses/bit" },
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
  const [scrolled, setScrolled]     = useState(false);
  const [visible,  setVisible]      = useState(true);
  const [openDrop, setOpenDrop]     = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    let last = 0;
    const fn = () => {
      const curr = window.scrollY;
      setScrolled(curr > 50);
      if (curr < 80) {
        setVisible(true);
      } else if (curr > last + 6) {
        setVisible(false);
      } else if (curr < last - 6) {
        setVisible(true);
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggle = (k) => setOpenDrop(openDrop === k ? null : k);

  return (
    <>
      {/* ══ DESKTOP ONLY ══ */}

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

            <Link href="/admission" className="btn-gold shrink-0 text-sm py-2 px-5">
              Apply Now
            </Link>
          </div>
        </nav>
      </div>

      {/* ══ MOBILE ONLY ══ */}

      {/* Fixed top bar – logo + phone only, no hamburger */}
      <div
        className="lg:hidden flex items-center justify-between fixed top-0 left-0 right-0 z-50"
        style={{
          height: "56px",
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--color-border)",
          padding: "0 1rem",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://westernmegacollege.edu.np/_next/static/media/logo.5a59ae59.png"
            alt="WMC" width={26} height={26} className="object-contain" unoptimized
          />
          <span className="font-serif font-bold text-sm" style={{ color: "var(--color-ink)" }}>
            Western Mega College
          </span>
        </Link>

        {/* Phone shortcut */}
        <a
          href="tel:9857071252"
          aria-label="Call us"
          style={{
            width: 38, height: 38,
            borderRadius: "0.625rem",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "var(--color-blue-50)",
            border: "1px solid var(--color-blue-100)",
            flexShrink: 0,
          }}
        >
          <Phone className="w-4 h-4" style={{ color: "var(--color-blue)" }} />
        </a>
      </div>

      {/* Left-edge nav tab – small rectangular strip at viewport midpoint */}
      <button
        className="lg:hidden flex flex-col items-center justify-center"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation"
        style={{
          position: "fixed",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 90,
          width: 28,
          height: 72,
          borderRadius: "0 10px 10px 0",
          background: "var(--color-blue)",
          border: "none",
          cursor: "pointer",
          gap: "5px",
          boxShadow: "3px 0 18px rgba(79,70,229,0.35)",
          padding: 0,
        }}
      >
        <span style={{ display: "block", width: 11, height: 1.5, background: "rgba(255,255,255,0.9)", borderRadius: 2 }} />
        <span style={{ display: "block", width: 11, height: 1.5, background: "rgba(255,255,255,0.9)", borderRadius: 2 }} />
        <span style={{ display: "block", width: 11, height: 1.5, background: "rgba(255,255,255,0.9)", borderRadius: 2 }} />
      </button>

      {/* Slide-in drawer */}
      <div
        className="lg:hidden"
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "absolute", inset: 0,
            background: "rgba(15,23,42,0.55)",
            opacity: mobileOpen ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Drawer panel */}
        <nav
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0,
            width: "min(84vw, 300px)",
            background: "#fff",
            display: "flex", flexDirection: "column",
            transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
            overflowY: "auto",
            boxShadow: "8px 0 40px rgba(15,23,42,0.15)",
          }}
        >
          {/* Drawer header */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "1rem",
            borderBottom: "1px solid var(--color-border)",
            flexShrink: 0,
          }}>
            <Link href="/" onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <div style={{
                width: 34, height: 34, borderRadius: "0.5rem", flexShrink: 0,
                background: "var(--color-blue-50)", border: "1px solid var(--color-blue-100)",
                display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
              }}>
                <Image src="https://westernmegacollege.edu.np/_next/static/media/logo.5a59ae59.png"
                  alt="WMC" width={34} height={34} className="object-contain p-0.5" unoptimized />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "0.8125rem", color: "var(--color-ink)", lineHeight: 1 }}>Western Mega College</p>
                <p style={{ fontSize: "0.625rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>Butwal, Nepal</p>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                width: 34, height: 34, borderRadius: "0.5rem", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "var(--color-surface)", border: "1px solid var(--color-border)",
              }}
            >
              <X className="w-4 h-4" style={{ color: "var(--color-ink)" }} />
            </button>
          </div>

          {/* Nav links */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            {/* Home & About */}
            {[LINKS[0], LINKS[1]].map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: "0.875rem 1.25rem",
                  fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-ink)",
                  borderBottom: "1px solid var(--color-border-light)",
                }}
              >{l.label}</Link>
            ))}

            {/* Programs group */}
            <div style={{ borderBottom: "1px solid var(--color-border)" }}>
              <p style={{
                padding: "0.75rem 1.25rem 0.25rem",
                fontSize: "0.6875rem", fontWeight: 700,
                color: "var(--color-blue)", textTransform: "uppercase", letterSpacing: "0.1em",
              }}>Programs</p>
              {PROGRAMS.map((p) => (
                <Link key={p.href} href={p.href} onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "0.625rem 1.25rem 0.625rem 1.5rem",
                    borderBottom: "1px solid var(--color-border-light)",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink)" }}>{p.label}</p>
                    <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginTop: "0.1rem" }}>{p.sub}</p>
                  </div>
                  {p.badge && <span className="badge badge-gold text-[10px]">2026</span>}
                </Link>
              ))}
            </div>

            {/* Our Team group */}
            <div style={{ borderBottom: "1px solid var(--color-border)" }}>
              <p style={{
                padding: "0.75rem 1.25rem 0.25rem",
                fontSize: "0.6875rem", fontWeight: 700,
                color: "var(--color-blue)", textTransform: "uppercase", letterSpacing: "0.1em",
              }}>Our Team</p>
              {TEAM.map((t) => (
                <Link key={t.href} href={t.href} onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.625rem 1.25rem 0.625rem 1.5rem",
                    fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink-700)",
                    borderBottom: "1px solid var(--color-border-light)",
                  }}
                >{t.label}</Link>
              ))}
            </div>

            {/* Gallery, Events, Blog, Contact */}
            {LINKS.slice(2).map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: "0.875rem 1.25rem",
                  fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-ink)",
                  borderBottom: "1px solid var(--color-border-light)",
                }}
              >{l.label}</Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            padding: "1rem 1.25rem",
            borderTop: "1px solid var(--color-border)",
            flexShrink: 0,
            display: "flex", flexDirection: "column", gap: "0.75rem",
          }}>
            <Link href="/admission" className="btn-gold w-full justify-center" onClick={() => setMobileOpen(false)}>
              Apply Now – 2025
            </Link>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
              <Phone className="w-3.5 h-3.5" style={{ color: "var(--color-blue)" }} />
              <a href="tel:9857071252" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", fontWeight: 500 }}>
                9857-071252
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile bottom CTA */}
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
          Apply Now – Admissions Open 2026
        </Link>
      </div>
    </>
  );
}
