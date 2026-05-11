import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import data from "@/lib/data";

const { gallery } = data;

export const metadata = {
  title: "Gallery – Western Mega College",
  description: "Browse photos from WMC events, academic visits, industrial tours, and campus life.",
};

export default function GalleryPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <span className="page-hero-eyebrow">Media</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>Photo Gallery</h1>
          <p className="page-hero-sub">Glimpses from our events, industrial visits, treks, and vibrant campus life.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {gallery.map((album) => (
            <div key={album.id} className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <span className="badge badge-gold">{album.category}</span>
                <h2 className="font-serif font-bold text-xl" style={{ color:"var(--color-ink)" }}>{album.title}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {album.images.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden relative aspect-[4/3] group">
                    <Image src={img.url} alt={img.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3"
                      style={{ background:"linear-gradient(to top, rgba(12,31,63,0.75), transparent)" }}>
                      <p className="text-white text-xs font-medium leading-tight">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="divider mt-12" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
