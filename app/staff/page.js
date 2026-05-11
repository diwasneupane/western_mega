import Image from "next/image";
import { Mail } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import data from "@/lib/data";

const { staff } = data;

export const metadata = {
  title: "Staff Members – Western Mega College",
  description: "Meet the administrative and support staff of Western Mega College.",
};

export default function StaffPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <span className="page-hero-eyebrow">Our Team</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>Staff Members</h1>
          <p className="page-hero-sub">The dedicated administrative team that keeps Western Mega College running seamlessly every day.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Administrative Team" title="Our Support Staff" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-3xl mx-auto">
            {staff.map((member) => (
              <div key={member.name} className="card group overflow-hidden bg-white">
                <div className="relative aspect-square overflow-hidden">
                  {member.photo
                    ? <Image src={member.photo} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" unoptimized />
                    : <ImagePlaceholder type="profile" />}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-0.5" style={{ color:"var(--color-ink)" }}>{member.name}</h3>
                  <p className="text-xs font-semibold mb-2.5" style={{ color:"var(--color-blue)" }}>{member.role}</p>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 text-xs hover:underline break-all" style={{ color:"var(--color-muted)" }}>
                    <Mail className="w-3 h-3 shrink-0" /> {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
