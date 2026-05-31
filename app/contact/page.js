'use client';

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink, MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import data from "@/lib/data";
import { contactsApi } from "@/lib/api";

const { contact, college } = data;

const EMPTY = { name: "", email: "", phone: "", inquiryType: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function set(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await contactsApi.submit(form);
      setSuccess(true);
      setForm(EMPTY);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <span className="page-hero-eyebrow">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing: "-0.02em" }}>Contact Us</h1>
          <p className="page-hero-sub">Have a question? We&apos;d love to hear from you. Our team responds within one business day.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] mb-5" style={{ color: "var(--color-blue)" }}>Our Details</p>
              <div className="space-y-4 mb-7">
                {[
                  { icon: MapPin, label: "Address", content: <><p>{contact.address}</p><p className="text-xs mt-0.5">Located at {college.located_in}</p></> },
                  { icon: Mail, label: "Email", content: <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a> },
                  { icon: Clock, label: "Hours", content: <p>{contact.office_hours}</p> },
                ].map((row) => (
                  <div key={row.label} className="flex gap-4 p-5 rounded-xl border"
                    style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--color-blue-50)", border: "1px solid var(--color-blue-100)" }}>
                      <row.icon className="w-5 h-5" style={{ color: "var(--color-blue)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-ink)" }}>{row.label}</p>
                      <div className="text-sm" style={{ color: "var(--color-muted)" }}>{row.content}</div>
                    </div>
                  </div>
                ))}

                {/* Phones */}
                <div className="flex gap-4 p-5 rounded-xl border" style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-blue-50)", border: "1px solid var(--color-blue-100)" }}>
                    <Phone className="w-5 h-5" style={{ color: "var(--color-blue)" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2" style={{ color: "var(--color-ink)" }}>Phone Numbers</p>
                    <div className="grid grid-cols-2 gap-1">
                      {contact.phone.map((p) => (
                        <a key={p} href={`tel:${p}`} className="text-sm hover:underline" style={{ color: "var(--color-muted)" }}>{p}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a href={college.whatsapp_url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-xl border-2 transition-all hover:shadow-md"
                style={{ borderColor: "rgba(37,211,102,0.35)", background: "rgba(37,211,102,0.04)" }}>
                <MessageCircle className="w-6 h-6 shrink-0" style={{ color: "#16a34a" }} />
                <div className="flex-1">
                  <p className="font-semibold text-sm" style={{ color: "var(--color-ink)" }}>Chat on WhatsApp</p>
                  <p className="text-xs" style={{ color: "var(--color-muted)" }}>+977 {contact.whatsapp} — Quick responses</p>
                </div>
                <ExternalLink className="w-4 h-4" style={{ color: "var(--color-muted)" }} />
              </a>
            </div>

            {/* Form */}
            <div>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] mb-5" style={{ color: "var(--color-blue)" }}>Send a Message</p>

              {success ? (
                <div className="rounded-2xl p-10 border text-center" style={{ background: "#f0fdf4", borderColor: "#bbf7d0" }}>
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: "#16a34a" }} />
                  <h3 className="font-serif text-xl font-bold mb-2" style={{ color: "var(--color-ink)" }}>Message Sent!</h3>
                  <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
                    Thank you for reaching out. We&apos;ll get back to you within one business day.
                  </p>
                  <button onClick={() => setSuccess(false)} className="btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="field-label">Full Name <span style={{ color: "var(--color-gold)" }}>*</span></label>
                      <input type="text" className="field" placeholder="Full Name"
                        value={form.name} onChange={(e) => set("name", e.target.value)} />
                    </div>
                    <div>
                      <label className="field-label">Email Address <span style={{ color: "var(--color-gold)" }}>*</span></label>
                      <input type="email" className="field" placeholder="your@email.com"
                        value={form.email} onChange={(e) => set("email", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="field-label">Phone Number <span style={{ color: "var(--color-gold)" }}>*</span></label>
                    <input type="tel" className="field" placeholder="+977 XXXXXXXXXX"
                      value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                  </div>
                  <div>
                    <label className="field-label">Inquiry Type</label>
                    <select className="field" value={form.inquiryType} onChange={(e) => set("inquiryType", e.target.value)}>
                      <option value="">Select an inquiry type</option>
                      {contact.inquiry_types.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="field-label">Message <span style={{ color: "var(--color-gold)" }}>*</span></label>
                    <textarea rows={5} className="field resize-none" placeholder="Write your message here..."
                      value={form.message} onChange={(e) => set("message", e.target.value)} />
                  </div>

                  {error && (
                    <div className="flex items-center gap-3 p-4 rounded-xl border" style={{ background: "#fef2f2", borderColor: "#fecaca" }}>
                      <AlertCircle className="w-5 h-5 shrink-0" style={{ color: "#dc2626" }} />
                      <p className="text-sm" style={{ color: "#dc2626" }}>{error}</p>
                    </div>
                  )}

                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5">
                    {loading ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map strip */}
      <div className="h-56 relative flex flex-col items-center justify-center gap-3"
        style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
        <MapPin className="w-7 h-7" style={{ color: "var(--color-blue)" }} />
        <p className="font-semibold text-sm" style={{ color: "var(--color-ink)" }}>Dhawaha, Butwal, Lumbini Province, Nepal</p>
        <a href="https://maps.google.com/?q=Butwal+Lumbini+Nepal" target="_blank" rel="noopener noreferrer"
          className="btn-outline-soft text-sm py-2 px-4">
          Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </>
  );
}
