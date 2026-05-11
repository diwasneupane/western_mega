import { Phone, Mail, MapPin, Clock, ExternalLink, MessageCircle } from "lucide-react";
import data from "@/lib/data";

const { contact, college } = data;

export const metadata = {
  title: "Contact Us – Western Mega College",
  description: "Get in touch with Western Mega College, Butwal. Call, email, or visit us at Dhawaha, Butwal.",
};

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <span className="page-hero-eyebrow">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>Contact Us</h1>
          <p className="page-hero-sub">Have a question? We'd love to hear from you. Our team responds within one business day.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] mb-5" style={{ color:"var(--color-blue)" }}>Our Details</p>
              <div className="space-y-4 mb-7">
                {[
                  { icon: MapPin, label:"Address", content: <><p>{contact.address}</p><p className="text-xs mt-0.5">Located at {college.located_in}</p></> },
                  { icon: Mail,   label:"Email",   content: <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a> },
                  { icon: Clock,  label:"Hours",   content: <p>{contact.office_hours}</p> },
                ].map((row) => (
                  <div key={row.label} className="flex gap-4 p-5 rounded-xl border"
                    style={{ background:"var(--color-surface)", borderColor:"var(--color-border)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background:"var(--color-blue-50)", border:"1px solid var(--color-blue-100)" }}>
                      <row.icon className="w-5 h-5" style={{ color:"var(--color-blue)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color:"var(--color-ink)" }}>{row.label}</p>
                      <div className="text-sm" style={{ color:"var(--color-muted)" }}>{row.content}</div>
                    </div>
                  </div>
                ))}

                {/* Phones */}
                <div className="flex gap-4 p-5 rounded-xl border" style={{ background:"var(--color-surface)", borderColor:"var(--color-border)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background:"var(--color-blue-50)", border:"1px solid var(--color-blue-100)" }}>
                    <Phone className="w-5 h-5" style={{ color:"var(--color-blue)" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2" style={{ color:"var(--color-ink)" }}>Phone Numbers</p>
                    <div className="grid grid-cols-2 gap-1">
                      {contact.phone.map((p) => (
                        <a key={p} href={`tel:${p}`} className="text-sm hover:underline" style={{ color:"var(--color-muted)" }}>{p}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a href={college.whatsapp_url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-xl border-2 transition-all hover:shadow-md"
                style={{ borderColor:"rgba(37,211,102,0.35)", background:"rgba(37,211,102,0.04)" }}>
                <MessageCircle className="w-6 h-6 shrink-0" style={{ color:"#16a34a" }} />
                <div className="flex-1">
                  <p className="font-semibold text-sm" style={{ color:"var(--color-ink)" }}>Chat on WhatsApp</p>
                  <p className="text-xs" style={{ color:"var(--color-muted)" }}>+977 {contact.whatsapp} — Quick responses</p>
                </div>
                <ExternalLink className="w-4 h-4" style={{ color:"var(--color-muted)" }} />
              </a>
            </div>

            {/* Form */}
            <div>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] mb-5" style={{ color:"var(--color-blue)" }}>Send a Message</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Full Name", "Email Address"].map((f) => (
                    <div key={f}>
                      <label className="field-label">{f}</label>
                      <input type={f === "Email Address" ? "email" : "text"} className="field" placeholder={f} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="field-label">Phone Number</label>
                  <input type="tel" className="field" placeholder="+977 XXXXXXXXXX" />
                </div>
                <div>
                  <label className="field-label">Inquiry Type</label>
                  <select className="field">
                    <option value="">Select an inquiry type</option>
                    {contact.inquiry_types.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="field-label">Message</label>
                  <textarea rows={5} className="field resize-none" placeholder="Write your message here..." />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map strip */}
      <div className="h-56 relative flex flex-col items-center justify-center gap-3"
        style={{ background:"var(--color-surface)", borderTop:"1px solid var(--color-border)" }}>
        <MapPin className="w-7 h-7" style={{ color:"var(--color-blue)" }} />
        <p className="font-semibold text-sm" style={{ color:"var(--color-ink)" }}>Dhawaha, Butwal, Lumbini Province, Nepal</p>
        <a href="https://maps.google.com/?q=Butwal+Lumbini+Nepal" target="_blank" rel="noopener noreferrer"
          className="btn-outline-soft text-sm py-2 px-4">
          Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </>
  );
}
