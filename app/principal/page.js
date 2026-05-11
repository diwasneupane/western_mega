import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";
import data from "@/lib/data";

const { principal } = data;
const msg = principal.message;

export const metadata = {
  title: `${principal.name} – Principal | Western Mega College`,
  description: `Read a message from ${principal.name}, Principal of Western Mega College, Butwal.`,
};

export default function PrincipalPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ background: "#fff" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80"
            alt="" fill className="object-cover object-center" unoptimized priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.90)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 95% 20%, rgba(79,70,229,0.07) 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 5% 90%, rgba(245,158,11,0.05) 0%, transparent 60%)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ height: 1, background: "var(--color-border)" }} />

        <div className="container relative z-10 pt-20 pb-8 lg:pt-36 lg:pb-14">
          <span className="page-hero-eyebrow">Our Leadership</span>
          <h1 className="font-serif font-bold mb-2"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.625rem)", letterSpacing: "-0.02em", color: "var(--color-ink)", lineHeight: 1.15 }}>
            Principal's Message
          </h1>
          <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem", lineHeight: 1.65, maxWidth: "34rem" }}>
            A personal welcome from the leadership of Western Mega College.
          </p>
        </div>
      </div>

      {/* ── Main layout ── */}
      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

            {/* Left – outer stretches to grid height; inner sticks on desktop */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl overflow-hidden shadow-xl mb-5"
                  style={{ aspectRatio: "4/5", position: "relative" }}>
                  <Image
                    src={principal.photo}
                    alt={principal.name}
                    fill className="object-cover object-top" unoptimized
                  />
                </div>
                <div className="rounded-xl p-5 border"
                  style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                  <h2 className="font-serif font-bold text-xl mb-0.5" style={{ color: "var(--color-ink)" }}>{principal.name}</h2>
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-blue)" }}>{principal.title}</p>
                  <p className="text-xs mb-4" style={{ color: "var(--color-muted)" }}>{principal.specialization}</p>
                  <div className="space-y-2.5 pt-3 border-t" style={{ borderColor: "var(--color-border)" }}>
                    <a href={`mailto:${principal.email}`}
                      className="flex items-center gap-2 text-xs hover:underline break-all"
                      style={{ color: "var(--color-muted)" }}>
                      <Mail className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-blue)" }} />
                      {principal.email}
                    </a>
                    <a href={`tel:${principal.phone}`}
                      className="flex items-center gap-2 text-xs hover:underline"
                      style={{ color: "var(--color-muted)" }}>
                      <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-blue)" }} />
                      {principal.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right – message content only */}
            <div className="lg:col-span-7">
              <span className="page-hero-eyebrow">A Message from the Principal</span>

              <div className="relative mb-8 p-5 rounded-2xl border-l-4"
                style={{ background: "var(--color-blue-50)", borderColor: "var(--color-blue)" }}>
                <p className="font-serif text-lg leading-relaxed italic" style={{ color: "var(--color-ink)" }}>
                  "{msg.quote}"
                </p>
              </div>

              <p className="font-serif text-lg font-bold mb-4" style={{ color: "var(--color-ink)" }}>{msg.welcome}</p>
              <p className="leading-relaxed mb-6 text-[0.9375rem]" style={{ color: "var(--color-muted)" }}>{msg.body}</p>

              <div className="space-y-3 mb-8">
                {[
                  { label: "BHM Program", text: msg.pathways.bhm },
                  { label: "MBA Program", text: msg.pathways.mba },
                  { label: "BIT Program", text: msg.pathways.bit },
                ].map((item) => (
                  <div key={item.label} className="pl-4 border-l-4 py-1.5"
                    style={{ borderColor: "var(--color-gold)" }}>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-gold)" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="leading-relaxed mb-3 text-[0.9375rem]" style={{ color: "var(--color-muted)" }}>{msg.campus_life}</p>
              <p className="leading-relaxed mb-8 font-medium text-[0.9375rem]" style={{ color: "var(--color-ink)" }}>{msg.closing}</p>

              <div className="flex flex-wrap gap-3">
                <Link href="/admission" className="btn-gold">Apply Now <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-outline-soft">Visit Us</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
