import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";
import data from "@/lib/data";

const { principal } = data;

export const metadata = {
  title: `${principal.name} – Principal | Western Mega College`,
  description: `Read a message from ${principal.name}, Principal of Western Mega College, Butwal.`,
};

export default function PrincipalPage() {
  const msg = principal.message;
  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <span className="page-hero-eyebrow">Our Team</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>Principal's Message</h1>
          <p className="page-hero-sub">A personal welcome from the leadership of Western Mega College.</p>
        </div>
      </div>

      <section className="section">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl mb-5 aspect-[4/5] relative">
                <Image src={principal.photo} alt={principal.name} fill className="object-cover object-top" unoptimized />
              </div>
              <div className="rounded-xl p-5 border" style={{ background:"var(--color-surface)", borderColor:"var(--color-border)" }}>
                <h2 className="font-serif font-bold text-xl mb-0.5" style={{ color:"var(--color-ink)" }}>{principal.name}</h2>
                <p className="font-semibold text-sm mb-3" style={{ color:"var(--color-blue)" }}>{principal.title}</p>
                <p className="text-xs mb-4" style={{ color:"var(--color-muted)" }}>{principal.specialization}</p>
                <div className="space-y-2 pt-3 border-t" style={{ borderColor:"var(--color-border)" }}>
                  <a href={`mailto:${principal.email}`} className="flex items-center gap-2 text-xs hover:underline" style={{ color:"var(--color-muted)" }}>
                    <Mail className="w-3.5 h-3.5" style={{ color:"var(--color-blue)" }} /> {principal.email}
                  </a>
                  <a href={`tel:${principal.phone}`} className="flex items-center gap-2 text-xs hover:underline" style={{ color:"var(--color-muted)" }}>
                    <Phone className="w-3.5 h-3.5" style={{ color:"var(--color-blue)" }} /> {principal.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-2">
              <span className="page-hero-eyebrow">A Message from the Principal</span>

              {/* Pull quote */}
              <div className="relative mb-8 p-6 rounded-2xl border-l-4" style={{ background:"var(--color-blue-50)", borderColor:"var(--color-blue)" }}>
                <p className="font-serif text-xl leading-relaxed italic" style={{ color:"var(--color-ink)" }}>
                  "{msg.quote}"
                </p>
              </div>

              <p className="font-serif text-xl font-bold mb-4" style={{ color:"var(--color-ink)" }}>{msg.welcome}</p>
              <p className="leading-relaxed mb-6 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>{msg.body}</p>

              <div className="space-y-4 mb-8">
                {[
                  { label:"BHM Program", text: msg.pathways.bhm },
                  { label:"MBA Program", text: msg.pathways.mba },
                  { label:"BIT Program", text: msg.pathways.bit },
                ].map((item) => (
                  <div key={item.label} className="pl-4 border-l-4 py-1.5" style={{ borderColor:"var(--color-gold)" }}>
                    <p className="font-semibold text-sm mb-1" style={{ color:"var(--color-gold)" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color:"var(--color-muted)" }}>{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="leading-relaxed mb-3 text-[0.9375rem]" style={{ color:"var(--color-muted)" }}>{msg.campus_life}</p>
              <p className="leading-relaxed mb-8 font-medium text-[0.9375rem]" style={{ color:"var(--color-ink)" }}>{msg.closing}</p>

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
