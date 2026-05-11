import Link from "next/link";
import { CheckCircle, Phone, Mail, ArrowRight, AlertCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import data from "@/lib/data";

const { admission, programs, contact } = data;

export const metadata = {
  title: "Admission – Apply for BHM & MBA | Western Mega College",
  description: "Apply for BHM or MBA at Western Mega College, Butwal. Admissions open for 2025.",
};

export default function AdmissionPage() {
  const { form_fields } = admission;

  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <div className="inline-block px-3 py-1 rounded-full text-[0.6875rem] font-bold uppercase tracking-wider mb-4"
            style={{ background:"var(--color-gold)", color:"#fff" }}>
            Admissions Open 2025
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>
            Apply to Western Mega College
          </h1>
          <p className="page-hero-sub">{admission.banner}</p>
        </div>
      </div>

      {/* Notice */}
      <div style={{ background:"var(--color-gold-50)", borderBottom:"1px solid var(--color-gold-100)" }}>
        <div className="container py-3.5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color:"var(--color-gold)" }} />
          <p className="text-sm" style={{ color:"var(--color-ink)" }}>{admission.note}</p>
        </div>
      </div>

      {/* Eligibility */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Eligibility" title="Admission Requirements" subtitle="Check your eligibility before applying." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {programs.map((prog) => (
              <div key={prog.id} className="rounded-2xl p-5 border" style={{ background:"var(--color-surface)", borderColor:"var(--color-border)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge badge-gold">{prog.short_name}</span>
                  {prog.status === "coming_soon" && <span className="badge badge-gray">2026</span>}
                </div>
                <h3 className="font-serif font-bold text-sm mb-3" style={{ color:"var(--color-ink)" }}>{prog.name}</h3>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color:"var(--color-blue)" }} />
                  <p className="text-sm leading-relaxed" style={{ color:"var(--color-muted)" }}>{prog.eligibility}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="Application" title="Submit Your Application" subtitle="Fill in your details below. Our team will contact you within 48 hours." />

            <form className="space-y-6">
              {/* Personal */}
              <div className="rounded-2xl p-6 border" style={{ background:"#fff", borderColor:"var(--color-border)" }}>
                <h3 className="font-semibold text-sm mb-5" style={{ color:"var(--color-ink)" }}>Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  {["First Name","Middle Name","Last Name"].map((f) => (
                    <div key={f}>
                      <label className="field-label">{f} {f === "First Name" && <span style={{ color:"var(--color-gold)" }}>*</span>}</label>
                      <input type="text" className="field" placeholder={f} />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="field-label">Email Address <span style={{ color:"var(--color-gold)" }}>*</span></label>
                    <input type="email" className="field" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="field-label">Contact Number <span style={{ color:"var(--color-gold)" }}>*</span></label>
                    <input type="tel" className="field" placeholder="+977 XXXXXXXXXX" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="field-label">Date of Birth</label>
                    <input type="date" className="field" />
                  </div>
                  <div>
                    <label className="field-label">Religion</label>
                    <select className="field">
                      <option value="">Select</option>
                      {form_fields.religion_options.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="field-label">Marital Status</label>
                    <select className="field">
                      <option value="">Select</option>
                      {form_fields.marital_status_options.map((m) => <option key={m}>{m}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Program */}
              <div className="rounded-2xl p-6 border" style={{ background:"#fff", borderColor:"var(--color-border)" }}>
                <h3 className="font-semibold text-sm mb-5" style={{ color:"var(--color-ink)" }}>Program Selection <span style={{ color:"var(--color-gold)" }}>*</span></h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {form_fields.program_options.map((prog) => (
                    <label key={prog}
                      className="flex items-center gap-3 p-4 rounded-xl cursor-pointer border transition-all hover:border-blue-300"
                      style={{ borderColor:"var(--color-border)", background:"var(--color-surface)" }}>
                      <input type="radio" name="program" value={prog} style={{ accentColor:"var(--color-blue)" }} />
                      <span className="text-sm font-medium" style={{ color:"var(--color-ink)" }}>{prog}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="rounded-2xl p-6 border" style={{ background:"#fff", borderColor:"var(--color-border)" }}>
                <h3 className="font-semibold text-sm mb-5" style={{ color:"var(--color-ink)" }}>Address</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label">Province</label>
                    <select className="field">
                      <option value="">Select Province</option>
                      {form_fields.provinces.map((p) => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  {["District","VDC/Municipality","Ward No."].map((f) => (
                    <div key={f}>
                      <label className="field-label">{f}</label>
                      <input type="text" className="field" placeholder={f} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Guardian */}
              <div className="rounded-2xl p-6 border" style={{ background:"#fff", borderColor:"var(--color-border)" }}>
                <h3 className="font-semibold text-sm mb-5" style={{ color:"var(--color-ink)" }}>Guardian Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {form_fields.guardian.map((f) => (
                    <div key={f}>
                      <label className="field-label">{f}</label>
                      <input type="text" className="field" placeholder={f} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="rounded-2xl p-6 border" style={{ background:"#fff", borderColor:"var(--color-border)" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color:"var(--color-ink)" }}>Academic Documents</h3>
                <p className="text-xs mb-4" style={{ color:"var(--color-muted)" }}>Upload mark sheets, certificates, transcripts (PDF, JPG, PNG – max 5MB each)</p>
                <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed rounded-xl cursor-pointer transition-colors hover:bg-blue-100"
                  style={{ borderColor:"var(--color-blue-100)", background:"var(--color-blue-50)" }}>
                  <p className="text-sm font-medium" style={{ color:"var(--color-blue)" }}>Click to upload or drag & drop</p>
                  <p className="text-xs mt-1" style={{ color:"var(--color-muted)" }}>PDF, JPG, PNG up to 5MB</p>
                  <input type="file" className="hidden" multiple accept=".pdf,.jpg,.jpeg,.png" />
                </label>
              </div>

              <button type="submit" className="btn-gold w-full justify-center text-base py-4">
                Submit Application <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom info strip */}
      <div style={{ background:"var(--color-surface)", borderTop:"1px solid var(--color-border)" }}>
        <div className="container py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="font-semibold text-sm" style={{ color:"var(--color-ink)" }}>Need help with your application?</p>
          <div className="flex flex-wrap gap-5">
            <a href={`tel:${contact.phone[3]}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color:"var(--color-muted)" }}>
              <Phone className="w-4 h-4" style={{ color:"var(--color-blue)" }} /> {contact.phone[3]}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color:"var(--color-muted)" }}>
              <Mail className="w-4 h-4" style={{ color:"var(--color-blue)" }} /> {contact.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
