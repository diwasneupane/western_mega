import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import data from "@/lib/data";

const { board_of_directors } = data;

export const metadata = {
  title: "Board of Directors – Western Mega College",
  description: "Meet the Board of Directors leading Western Mega College toward academic excellence.",
};

export default function BODPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <span className="page-hero-eyebrow">Our Team</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>Board of Directors</h1>
          <p className="page-hero-sub">Experienced leaders driving WMC's mission with decades of expertise in education, hospitality, and business.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Leadership" title="Our Board" subtitle="Dedicated individuals providing strategic oversight and institutional governance." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {board_of_directors.map((member) => (
              <div key={member.name} className="card p-6 flex flex-col items-center text-center bg-white">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4"
                  style={{ border:"3px solid var(--color-blue-100)" }}>
                  <ImagePlaceholder type="profile" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-0.5" style={{ color:"var(--color-ink)" }}>{member.name}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color:"var(--color-blue)" }}>{member.role}</p>
                <p className="text-sm leading-relaxed" style={{ color:"var(--color-muted)" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
