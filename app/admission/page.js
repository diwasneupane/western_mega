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

const PROGRAMS = [
  {
    code: 'BHM',
    full: 'Bachelor of Hotel Management',
    duration: '4 Years',
    seats: 60,
    eligibility: '+2 or equivalent in any stream',
    accent: '#2563EB',
    lightBg: '#EFF6FF',
    badgeBg: '#DBEAFE',
    badgeText: '#1D4ED8',
  },
  {
    code: 'MBA',
    full: 'Master of Business Administration',
    duration: '2 Years',
    seats: 40,
    eligibility: "Bachelor's degree in any discipline",
    accent: '#0891B2',
    lightBg: '#ECFEFF',
    badgeBg: '#CFFAFE',
    badgeText: '#0E7490',
  },
  {
    code: 'BBA',
    full: 'Bachelor of Business Administration',
    duration: '4 Years',
    seats: 60,
    eligibility: '+2 or equivalent in any stream',
    accent: '#3B82F6',
    lightBg: '#EFF6FF',
    badgeBg: '#BFDBFE',
    badgeText: '#1E40AF',
  },
  {
    code: 'BCS',
    full: 'Bachelor of Computer Science (Hons)',
    duration: '4 Years',
    seats: 50,
    eligibility: '+2 with Science / Computer Science',
    accent: '#1D4ED8',
    lightBg: '#EFF6FF',
    badgeBg: '#DBEAFE',
    badgeText: '#1E3A8A',
  },
  {
    code: 'BIT',
    full: 'Bachelor of Information Technology',
    duration: '4 Years',
    seats: 50,
    eligibility: '+2 or equivalent in any stream',
    accent: '#0369A1',
    lightBg: '#F0F9FF',
    badgeBg: '#BAE6FD',
    badgeText: '#075985',
  },
];

const EMPTY = {
  firstName: '', lastName: '', email: '', phone: '',
  program: '', address: '', guardianName: '', guardianPhone: '', message: '',
};

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid #CBD5E1',
  borderRadius: 8,
  fontSize: 14,
  color: '#0F172A',
  background: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
};

function Steps({ current }) {
  const steps = ['Personal Info', 'Program', 'Additional', 'Review'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
      {steps.map((label, i) => {
        const idx = i + 1;
        const done = idx < current;
        const active = idx === current;
        return (
          <div key={label} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? 1 : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 600,
                background: done || active ? '#2563EB' : '#F1F5F9',
                color: done || active ? '#fff' : '#94A3B8',
                boxShadow: active ? '0 0 0 4px rgba(37,99,235,0.12)' : 'none',
                transition: 'all 0.2s',
              }}>
                {done ? '✓' : idx}
              </div>
              <span style={{
                fontSize: 11, fontWeight: 500,
                color: active ? '#2563EB' : done ? '#0F172A' : '#94A3B8',
                whiteSpace: 'nowrap',
              }}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                flex: 1, height: 1, margin: '0 8px', marginBottom: 20,
                background: done ? '#2563EB' : '#E2E8F0',
                transition: 'background 0.2s',
              }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Field({ label, required, children, hint }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 12, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}{required && <span style={{ color: '#DC2626', marginLeft: 3 }}>*</span>}
      </label>
      {children}
      {hint && <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>{hint}</p>}
    </div>
  );
}

function StepCard({ step, title, subtitle, children }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #E2E8F0',
      borderRadius: 16,
      padding: 32,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: '#EFF6FF', color: '#2563EB',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 700,
        }}>
          {step}
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, color: '#0F172A' }}>{title}</h3>
          {subtitle && <p style={{ margin: 0, fontSize: 13, color: '#94A3B8' }}>{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

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
    if (step === 3 && (!form.address || !form.guardianName || !form.guardianPhone)) {
      setError('Please fill in address, guardian name, and guardian phone before continuing.');
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
      {/* Hero */}
      <div style={{ position: 'relative', minHeight: 480, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&q=80"
            alt="University campus"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(15,23,42,0.85) 0%, rgba(37,99,235,0.6) 100%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: 144, paddingBottom: 80 }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 999,
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              color: '#fff', textTransform: 'uppercase', marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#60A5FA', display: 'inline-block' }} />
              Admissions Open 2026
            </div>

            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}>
              Begin Your Journey at<br />
              <span style={{ color: '#93C5FD' }}>Western Mega College</span>
            </h1>

            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', marginBottom: 36, lineHeight: 1.6, maxWidth: 500 }}>
              BHM, MBA, BBA, BCS and BIT programs now enrolling for the 2026 academic year.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
              {[
                { icon: <GraduationCap size={15} />, label: '5 Programs' },
                { icon: <Users size={15} />, label: '260+ Seats' },
                { icon: <Star size={15} />, label: 'Est. 2013' },
                { icon: <Clock size={15} />, label: '48h Response' },
              ].map(({ icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 500 }}>
                  {icon} {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notice bar */}
      <div style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div className="container" style={{ padding: '12px 24px', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <AlertCircle size={15} style={{ color: '#2563EB', marginTop: 2, flexShrink: 0 }} />
          <p style={{ fontSize: 13, color: '#1E40AF', margin: 0 }}>
            Seats are limited. Early applicants receive priority consideration.{' '}
            <a href={`tel:${contact.phone[0]}`} style={{ fontWeight: 600, color: '#1D4ED8' }}>
              Call us
            </a>{' '}
            for program-specific deadlines.
          </p>
        </div>
      </div>

      {/* Main section */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">

          {/* Program cards */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 8 }}>
              Eligibility
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>Choose Your Program</h2>
            <p style={{ fontSize: 15, color: '#64748B', marginBottom: 32 }}>
              Five industry-aligned programs — find the one that fits your goals.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
            marginBottom: 64,
          }}>
            {PROGRAMS.map((prog) => (
              <div key={prog.code} style={{
                background: '#fff',
                border: '1px solid #E2E8F0',
                borderRadius: 14,
                padding: 20,
                borderTop: `3px solid ${prog.accent}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    padding: '3px 8px', borderRadius: 6,
                    background: prog.badgeBg, color: prog.badgeText,
                  }}>
                    {prog.code}
                  </span>
                  <span style={{ fontSize: 11, color: prog.badgeText, fontWeight: 500 }}>{prog.duration}</span>
                </div>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', marginBottom: 6, lineHeight: 1.4 }}>{prog.full}</p>
                <p style={{ fontSize: 12, color: '#94A3B8', marginBottom: 10, lineHeight: 1.5 }}>{prog.eligibility}</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: prog.badgeText }}>{prog.seats} seats</p>
              </div>
            ))}
          </div>

          {/* Form section */}
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 8 }}>
                Application
              </p>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>Submit Your Application</h2>
              <p style={{ fontSize: 15, color: '#64748B' }}>Takes less than 3 minutes. Our team will contact you within 48 hours.</p>
            </div>

            {success ? (
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: 16,
                padding: 48,
                textAlign: 'center',
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: '#DCFCE7', margin: '0 auto 20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <CheckCircle size={36} style={{ color: '#16A34A' }} />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', marginBottom: 10 }}>Application Received</h3>
                <p style={{ fontSize: 14, color: '#64748B', maxWidth: 420, margin: '0 auto 24px', lineHeight: 1.6 }}>
                  Thank you for applying to Western Mega College. Our admissions team will review your application and contact you within <strong>48 hours</strong>.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 28 }}>
                  <a href={`tel:${contact.phone[0]}`} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: '#16A34A', textDecoration: 'none' }}>
                    <Phone size={14} /> {contact.phone[0]}
                  </a>
                  <a href={`mailto:${contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: '#16A34A', textDecoration: 'none' }}>
                    <Mail size={14} /> {contact.email}
                  </a>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '10px 24px', borderRadius: 8,
                    background: '#16A34A', color: '#fff',
                    border: 'none', cursor: 'pointer',
                    fontSize: 14, fontWeight: 600,
                  }}
                >
                  Submit Another Application <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <Steps current={step} />

                {/* Step 1 */}
                {step === 1 && (
                  <StepCard step="1" title="Personal Information">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                      <Field label="First Name" required>
                        <input style={inputStyle} type="text" placeholder="Your first name"
                          value={form.firstName} onChange={(e) => set('firstName', e.target.value)} />
                      </Field>
                      <Field label="Last Name" required>
                        <input style={inputStyle} type="text" placeholder="Your last name"
                          value={form.lastName} onChange={(e) => set('lastName', e.target.value)} />
                      </Field>
                      <Field label="Email Address" required hint="Confirmation will be sent here">
                        <input style={inputStyle} type="email" placeholder="you@example.com"
                          value={form.email} onChange={(e) => set('email', e.target.value)} />
                      </Field>
                      <Field label="Phone Number" required hint="Include country code e.g. +977">
                        <input style={inputStyle} type="tel" placeholder="+977 9XXXXXXXXX"
                          value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                      </Field>
                    </div>
                  </StepCard>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <StepCard step="2" title="Program Selection" subtitle="Choose one program">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
                      {PROGRAMS.map((prog) => {
                        const selected = form.program === prog.code;
                        return (
                          <label key={prog.code} style={{
                            display: 'flex', flexDirection: 'column', gap: 10,
                            padding: 18, borderRadius: 12, cursor: 'pointer',
                            border: selected ? `2px solid ${prog.accent}` : '1px solid #E2E8F0',
                            background: selected ? prog.lightBg : '#fff',
                            transition: 'all 0.15s',
                            position: 'relative',
                          }}>
                            <input type="radio" name="program" value={prog.code}
                              checked={selected}
                              onChange={() => set('program', prog.code)}
                              style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }} />
                            {selected && (
                              <div style={{
                                position: 'absolute', top: 12, right: 12,
                                width: 18, height: 18, borderRadius: '50%',
                                background: prog.accent,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 10, color: '#fff', fontWeight: 700,
                              }}>✓</div>
                            )}
                            <span style={{
                              fontSize: 11, fontWeight: 700,
                              padding: '2px 8px', borderRadius: 5,
                              background: prog.badgeBg, color: prog.badgeText,
                              alignSelf: 'flex-start',
                            }}>
                              {prog.code}
                            </span>
                            <div>
                              <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 4px', lineHeight: 1.4 }}>{prog.full}</p>
                              <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>{prog.duration} · {prog.eligibility}</p>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </StepCard>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <StepCard step="3" title="Additional Details">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      <Field label="Current Address" required hint="City, district, or full address">
                        <input style={inputStyle} type="text" placeholder="e.g. Butwal-10, Rupandehi"
                          value={form.address} onChange={(e) => set('address', e.target.value)} />
                      </Field>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                        <Field label="Guardian Name" required>
                          <input style={inputStyle} type="text" placeholder="Parent or guardian's name"
                            value={form.guardianName} onChange={(e) => set('guardianName', e.target.value)} />
                        </Field>
                        <Field label="Guardian Phone" required>
                          <input style={inputStyle} type="tel" placeholder="+977 9XXXXXXXXX"
                            value={form.guardianPhone} onChange={(e) => set('guardianPhone', e.target.value)} />
                        </Field>
                      </div>
                      <Field label="Message or Questions" hint="Optional">
                        <textarea
                          rows={4}
                          style={{ ...inputStyle, resize: 'none', fontFamily: 'inherit' }}
                          placeholder="Any questions about the program, fees, or admission process..."
                          value={form.message}
                          onChange={(e) => set('message', e.target.value)}
                        />
                      </Field>
                    </div>
                  </StepCard>
                )}

                {/* Step 4 */}
                {step === 4 && selectedProgram && (
                  <StepCard step="4" title="Review and Submit">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                      {[
                        { label: 'Full Name', value: `${form.firstName} ${form.lastName}` },
                        { label: 'Email', value: form.email },
                        { label: 'Phone', value: form.phone },
                        { label: 'Program', value: `${selectedProgram.code} — ${selectedProgram.full}` },
                        form.address && { label: 'Address', value: form.address },
                        form.guardianName && { label: 'Guardian', value: `${form.guardianName}${form.guardianPhone ? ` · ${form.guardianPhone}` : ''}` },
                      ].filter(Boolean).map(({ label, value }) => (
                        <div key={label} style={{
                          padding: 16, borderRadius: 10,
                          background: '#F8FAFC', border: '1px solid #E2E8F0',
                        }}>
                          <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94A3B8', margin: '0 0 4px' }}>{label}</p>
                          <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>{value}</p>
                        </div>
                      ))}
                    </div>
                    {form.message && (
                      <div style={{ padding: 16, borderRadius: 10, background: '#F8FAFC', border: '1px solid #E2E8F0', marginBottom: 20 }}>
                        <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94A3B8', margin: '0 0 4px' }}>Message</p>
                        <p style={{ fontSize: 13, color: '#0F172A', margin: 0, lineHeight: 1.6 }}>{form.message}</p>
                      </div>
                    )}
                    <div style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      padding: 14, borderRadius: 10,
                      background: '#EFF6FF', border: '1px solid #BFDBFE',
                    }}>
                      <CheckCircle size={15} style={{ color: '#2563EB', marginTop: 1, flexShrink: 0 }} />
                      <p style={{ fontSize: 13, color: '#1D4ED8', margin: 0, lineHeight: 1.5 }}>
                        By submitting, you agree that our admissions team may contact you via the provided email and phone number.
                      </p>
                    </div>
                  </StepCard>
                )}

                {/* Error */}
                {error && (
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    padding: 14, borderRadius: 10, marginTop: 16,
                    background: '#FEF2F2', border: '1px solid #FECACA',
                  }}>
                    <AlertCircle size={15} style={{ color: '#DC2626', marginTop: 1, flexShrink: 0 }} />
                    <p style={{ fontSize: 13, color: '#DC2626', margin: 0 }}>{error}</p>
                  </div>
                )}

                {/* Navigation */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      style={{
                        padding: '10px 20px', borderRadius: 8,
                        border: '1px solid #E2E8F0', background: '#fff',
                        color: '#64748B', fontSize: 14, fontWeight: 500,
                        cursor: 'pointer',
                      }}
                    >
                      Back
                    </button>
                  ) : <div />}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '10px 24px', borderRadius: 8,
                        background: '#2563EB', color: '#fff',
                        border: 'none', cursor: 'pointer',
                        fontSize: 14, fontWeight: 600,
                      }}
                    >
                      Continue <ArrowRight size={15} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '10px 24px', borderRadius: 8,
                        background: loading ? '#93C5FD' : '#2563EB', color: '#fff',
                        border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                        fontSize: 14, fontWeight: 600,
                      }}
                    >
                      {loading ? (
                        <><Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> Submitting...</>
                      ) : (
                        <>Submit Application <ArrowRight size={15} /></>
                      )}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom contact strip */}
      <div style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: '0 0 2px' }}>Need help with your application?</p>
            <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>Admissions team available Sunday–Friday, 9 AM – 5 PM</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            <a href={`tel:${contact.phone[0]}`} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 500, color: '#2563EB', textDecoration: 'none' }}>
              <Phone size={14} /> {contact.phone[0]}
            </a>
            <a href={`mailto:${contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 500, color: '#2563EB', textDecoration: 'none' }}>
              <Mail size={14} /> {contact.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}