'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  CheckCircle, Phone, Mail, ArrowRight, AlertCircle,
  Loader2, GraduationCap, Clock, Users, Star,
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { inquiriesApi } from '@/lib/api';
import data from '@/lib/data';

const { contact } = data;

// ─── Program catalogue ────────────────────────────────────────────────────────
const PROGRAMS = [
  {
    code: 'BHM',
    full: 'Bachelor of Hotel Management',
    duration: '4 Years',
    seats: 60,
    eligibility: '+2 or equivalent in any stream',
    color: { ring: '#7C3AED', bg: '#F5F3FF', badge: '#EDE9FE', text: '#6D28D9' },
    icon: '🏨',
  },
  {
    code: 'MBA',
    full: 'Master of Business Administration',
    duration: '2 Years',
    seats: 40,
    eligibility: "Bachelor's degree in any discipline",
    color: { ring: '#0369A1', bg: '#F0F9FF', badge: '#E0F2FE', text: '#0369A1' },
    icon: '📊',
  },
  {
    code: 'BBA',
    full: 'Bachelor of Business Administration',
    duration: '4 Years',
    seats: 60,
    eligibility: '+2 or equivalent in any stream',
    color: { ring: '#0F766E', bg: '#F0FDFA', badge: '#CCFBF1', text: '#0F766E' },
    icon: '💼',
  },
  {
    code: 'BCS',
    full: 'Bachelor of Computer Science (Hons)',
    duration: '4 Years',
    seats: 50,
    eligibility: '+2 with Science / Computer Science',
    color: { ring: '#0D9488', bg: '#F0FDFA', badge: '#99F6E4', text: '#0D9488' },
    icon: '💻',
  },
  {
    code: 'BIT',
    full: 'Bachelor of Information Technology',
    duration: '4 Years',
    seats: 50,
    eligibility: '+2 or equivalent in any stream',
    color: { ring: '#D97706', bg: '#FFFBEB', badge: '#FEF3C7', text: '#B45309' },
    icon: '🔧',
  },
];

const EMPTY = {
  firstName: '', lastName: '', email: '', phone: '',
  program: '', address: '', guardianName: '', guardianPhone: '', message: '',
};

// ─── Step indicator ───────────────────────────────────────────────────────────
function Steps({ current }) {
  const steps = ['Personal Info', 'Program', 'Additional', 'Review'];
  return (
    <div className="flex items-center gap-0 mb-8">
      {steps.map((label, i) => {
        const idx = i + 1;
        const done = idx < current;
        const active = idx === current;
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                style={{
                  background: done ? '#4F46E5' : active ? '#4F46E5' : '#E2E8F0',
                  color: done || active ? '#fff' : '#94A3B8',
                  boxShadow: active ? '0 0 0 4px rgba(79,70,229,0.15)' : 'none',
                }}
              >
                {done ? '✓' : idx}
              </div>
              <span
                className="text-xs font-medium hidden sm:block"
                style={{ color: active ? 'var(--color-blue)' : done ? 'var(--color-ink)' : 'var(--color-muted)' }}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className="flex-1 h-0.5 mx-2 mb-4"
                style={{ background: done ? '#4F46E5' : '#E2E8F0' }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Field wrapper ────────────────────────────────────────────────────────────
function Field({ label, required, children, hint }) {
  return (
    <div>
      <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: 'var(--color-muted)' }}>
        {label} {required && <span style={{ color: 'var(--color-gold)' }}>*</span>}
      </label>
      {children}
      {hint && <p className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>{hint}</p>}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function AdmissionPage() {
  const [form, setForm] = useState(EMPTY);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function set(field, value) {
    setForm((p) => ({ ...p, [field]: value }));
    setError('');
  }

  function nextStep() {
    if (step === 1 && (!form.firstName || !form.lastName || !form.email || !form.phone)) {
      setError('Please fill in all required fields before continuing.');
      return;
    }
    if (step === 2 && !form.program) {
      setError('Please select a program to continue.');
      return;
    }
    setError('');
    setStep((s) => s + 1);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.program) {
      setError('Please complete all required fields.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await inquiriesApi.submit(form);
      setSuccess(true);
      setForm(EMPTY);
      setStep(1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const selectedProgram = PROGRAMS.find((p) => p.code === form.program);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ minHeight: 480 }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80"
            alt="Students on campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(79,70,229,0.72) 100%)' }} />
        </div>

        {/* Content */}
        <div className="container relative z-10 pt-36 pb-20">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: 'var(--color-gold)', color: '#fff' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Admissions Open 2026
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5" style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Begin Your Journey at<br />
              <span style={{ color: 'var(--color-gold-400)' }}>Western Mega College</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Admissions Open 2026 — BHM, MBA, BBA, BCS &amp; BIT Programs Now Enrolling
            </p>
            {/* Stats strip */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: <GraduationCap className="w-4 h-4" />, label: '5 Programs' },
                { icon: <Users className="w-4 h-4" />, label: '260+ Seats' },
                { icon: <Star className="w-4 h-4" />, label: 'Since 2013' },
                { icon: <Clock className="w-4 h-4" />, label: '48h Response' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/75 text-sm font-medium">
                  {icon} {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Notice bar ───────────────────────────────────────────────────── */}
      <div style={{ background: 'var(--color-gold-50)', borderBottom: '1px solid var(--color-gold-100)' }}>
        <div className="container py-3.5 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-gold)' }} />
          <p className="text-sm" style={{ color: 'var(--color-ink)' }}>
            Seats are limited. Early applicants receive priority consideration. All five programs are now open for the 2026 intake.&nbsp;
            <a href={`tel:${contact.phone[0]}`} className="font-semibold underline underline-offset-2" style={{ color: 'var(--color-gold-600)' }}>
              Call us
            </a>
            &nbsp;for program-specific deadlines.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* ── Program eligibility cards ─────────────────────────────────── */}
          <SectionHeader eyebrow="Eligibility" title="Choose Your Program" subtitle="Five industry-aligned programs — find the one that fits your goals." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
            {PROGRAMS.map((prog) => (
              <div
                key={prog.code}
                className="rounded-2xl p-5 border-2 transition-all cursor-default"
                style={{
                  background: prog.color.bg,
                  borderColor: prog.color.ring + '33',
                }}
              >
                <div className="text-2xl mb-3">{prog.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: prog.color.badge, color: prog.color.text }}>
                    {prog.code}
                  </span>
                  <span className="text-xs font-medium" style={{ color: prog.color.text }}>{prog.duration}</span>
                </div>
                <p className="text-xs font-semibold leading-tight mb-2" style={{ color: 'var(--color-ink)' }}>{prog.full}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>{prog.eligibility}</p>
                <div className="mt-3 text-xs font-medium" style={{ color: prog.color.text }}>
                  {prog.seats} seats available
                </div>
              </div>
            ))}
          </div>

          {/* ── Application form ──────────────────────────────────────────── */}
          <div className="max-w-5xl mx-auto">
            <SectionHeader eyebrow="Application" title="Submit Your Application" subtitle="Takes less than 3 minutes. Our admissions team will contact you within 48 hours." />

            {success ? (
              /* ── Success state ────────────────────────────────────────── */
              <div className="rounded-3xl p-12 border text-center" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderColor: '#bbf7d0' }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: '#dcfce7' }}>
                  <CheckCircle className="w-10 h-10" style={{ color: '#16a34a' }} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: 'var(--color-ink)' }}>Application Received!</h3>
                <p className="text-base mb-2" style={{ color: 'var(--color-muted)', maxWidth: 460, margin: '0 auto 1.5rem' }}>
                  Thank you for applying to Western Mega College. Our admissions team will review your application and contact you within <strong>48 hours</strong>.
                </p>
                <div className="flex flex-wrap gap-4 justify-center mb-8">
                  <a href={`tel:${contact.phone[0]}`} className="flex items-center gap-2 text-sm font-medium" style={{ color: '#16a34a' }}>
                    <Phone className="w-4 h-4" /> {contact.phone[0]}
                  </a>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm font-medium" style={{ color: '#16a34a' }}>
                    <Mail className="w-4 h-4" /> {contact.email}
                  </a>
                </div>
                <button onClick={() => setSuccess(false)} className="btn-gold">
                  Submit Another Application <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* ── Form ─────────────────────────────────────────────────── */
              <form onSubmit={handleSubmit}>
                <Steps current={step} />

                {/* Step 1 — Personal Information */}
                {step === 1 && (
                  <div className="rounded-3xl border p-8" style={{ background: '#fff', borderColor: 'var(--color-border)' }}>
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--color-blue)' }}>1</div>
                      <h3 className="font-serif text-lg font-bold" style={{ color: 'var(--color-ink)' }}>Personal Information</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="First Name" required>
                        <input type="text" className="field" placeholder="Your first name"
                          value={form.firstName} onChange={(e) => set('firstName', e.target.value)} />
                      </Field>
                      <Field label="Last Name" required>
                        <input type="text" className="field" placeholder="Your last name"
                          value={form.lastName} onChange={(e) => set('lastName', e.target.value)} />
                      </Field>
                      <Field label="Email Address" required hint="We'll send confirmation to this email">
                        <input type="email" className="field" placeholder="you@example.com"
                          value={form.email} onChange={(e) => set('email', e.target.value)} />
                      </Field>
                      <Field label="Phone Number" required hint="Include country code e.g. +977">
                        <input type="tel" className="field" placeholder="+977 9XXXXXXXXX"
                          value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                      </Field>
                    </div>
                  </div>
                )}

                {/* Step 2 — Program Selection */}
                {step === 2 && (
                  <div className="rounded-3xl border p-8" style={{ background: '#fff', borderColor: 'var(--color-border)' }}>
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--color-blue)' }}>2</div>
                      <h3 className="font-serif text-lg font-bold" style={{ color: 'var(--color-ink)' }}>
                        Program Selection <span className="text-sm font-normal" style={{ color: 'var(--color-muted)' }}>— choose one</span>
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {PROGRAMS.map((prog) => {
                        const selected = form.program === prog.code;
                        return (
                          <label
                            key={prog.code}
                            className="relative flex flex-col gap-3 p-5 rounded-2xl cursor-pointer border-2 transition-all"
                            style={{
                              borderColor: selected ? prog.color.ring : 'var(--color-border)',
                              background: selected ? prog.color.bg : '#fff',
                              boxShadow: selected ? `0 0 0 3px ${prog.color.ring}22` : 'none',
                            }}
                          >
                            <input type="radio" name="program" value={prog.code}
                              checked={selected}
                              onChange={() => set('program', prog.code)}
                              className="sr-only" />
                            {selected && (
                              <div className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                                style={{ background: prog.color.ring }}>
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                            )}
                            <span className="text-2xl">{prog.icon}</span>
                            <div>
                              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: prog.color.badge, color: prog.color.text }}>
                                {prog.code}
                              </span>
                              <p className="text-sm font-semibold mt-2 leading-snug" style={{ color: 'var(--color-ink)' }}>{prog.full}</p>
                              <p className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>{prog.duration} · {prog.eligibility}</p>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3 — Additional Details */}
                {step === 3 && (
                  <div className="rounded-3xl border p-8 space-y-6" style={{ background: '#fff', borderColor: 'var(--color-border)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--color-blue)' }}>3</div>
                      <h3 className="font-serif text-lg font-bold" style={{ color: 'var(--color-ink)' }}>
                        Additional Details <span className="text-sm font-normal" style={{ color: 'var(--color-muted)' }}>— all optional</span>
                      </h3>
                    </div>
                    <Field label="Current Address" hint="City, district, or full address">
                      <input type="text" className="field" placeholder="e.g. Butwal-10, Rupandehi"
                        value={form.address} onChange={(e) => set('address', e.target.value)} />
                    </Field>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Guardian Name">
                        <input type="text" className="field" placeholder="Parent or guardian's name"
                          value={form.guardianName} onChange={(e) => set('guardianName', e.target.value)} />
                      </Field>
                      <Field label="Guardian Phone">
                        <input type="tel" className="field" placeholder="+977 9XXXXXXXXX"
                          value={form.guardianPhone} onChange={(e) => set('guardianPhone', e.target.value)} />
                      </Field>
                    </div>
                    <Field label="Message / Questions">
                      <textarea rows={4} className="field resize-none" placeholder="Any questions about the program, fees, or admission process..."
                        value={form.message} onChange={(e) => set('message', e.target.value)} />
                    </Field>
                  </div>
                )}

                {/* Step 4 — Review */}
                {step === 4 && selectedProgram && (
                  <div className="rounded-3xl border p-8" style={{ background: '#fff', borderColor: 'var(--color-border)' }}>
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--color-blue)' }}>4</div>
                      <h3 className="font-serif text-lg font-bold" style={{ color: 'var(--color-ink)' }}>Review &amp; Submit</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {[
                        { label: 'Full Name', value: `${form.firstName} ${form.lastName}` },
                        { label: 'Email', value: form.email },
                        { label: 'Phone', value: form.phone },
                        { label: 'Program', value: `${selectedProgram.code} — ${selectedProgram.full}` },
                        form.address && { label: 'Address', value: form.address },
                        form.guardianName && { label: 'Guardian', value: `${form.guardianName}${form.guardianPhone ? ` · ${form.guardianPhone}` : ''}` },
                      ].filter(Boolean).map(({ label, value }) => (
                        <div key={label} className="rounded-xl p-4 border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted)' }}>{label}</p>
                          <p className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>{value}</p>
                        </div>
                      ))}
                    </div>
                    {form.message && (
                      <div className="rounded-xl p-4 border mb-6" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted)' }}>Message</p>
                        <p className="text-sm" style={{ color: 'var(--color-ink)' }}>{form.message}</p>
                      </div>
                    )}
                    <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'var(--color-blue-50)', border: '1px solid var(--color-blue-100)' }}>
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--color-blue)' }} />
                      <p className="text-sm" style={{ color: 'var(--color-blue)' }}>
                        By submitting you agree that our admissions team may contact you via the provided email and phone number.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div className="flex items-start gap-3 p-4 rounded-xl border mt-4" style={{ background: '#fef2f2', borderColor: '#fecaca' }}>
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#dc2626' }} />
                    <p className="text-sm" style={{ color: '#dc2626' }}>{error}</p>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex items-center justify-between mt-6 gap-4">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep((s) => s - 1)}
                      className="btn-outline-soft">
                      ← Back
                    </button>
                  ) : <div />}

                  {step < 4 ? (
                    <button type="button" onClick={nextStep} className="btn-primary">
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button type="submit" disabled={loading} className="btn-gold">
                      {loading ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                      ) : (
                        <>Submit Application <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Bottom contact strip ──────────────────────────────────────────── */}
      <div style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container py-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-sm" style={{ color: 'var(--color-ink)' }}>Need help with your application?</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>Our admissions team is available Sunday–Friday, 9 AM – 5 PM</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href={`tel:${contact.phone[0]}`} className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: 'var(--color-blue)' }}>
              <Phone className="w-4 h-4" /> {contact.phone[0]}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: 'var(--color-blue)' }}>
              <Mail className="w-4 h-4" /> {contact.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
