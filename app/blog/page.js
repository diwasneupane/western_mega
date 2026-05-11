import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import data from "@/lib/data";

const { blogs } = data;

export const metadata = {
  title: "Blog – Western Mega College",
  description: "Read latest news, academic updates, event highlights, and campus life stories from Western Mega College.",
};

export default function BlogPage() {
  const featured = blogs.find((b) => b.featured) || blogs[0];
  const rest = blogs.filter((b) => b.id !== featured.id);

  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10">
          <span className="page-hero-eyebrow">Blog & News</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold page-hero-title mb-3" style={{ letterSpacing:"-0.02em" }}>Latest from WMC</h1>
          <p className="page-hero-sub">News, stories, and insights from Western Mega College.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] mb-5" style={{ color:"var(--color-blue)" }}>Featured</p>
          <Link href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 card overflow-hidden p-0 block bg-white">
            <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden">
              {featured.thumbnail
                ? <Image src={featured.thumbnail} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                : <ImagePlaceholder type="landscape" label="Featured Post" className="w-full h-full absolute inset-0" />}
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="badge badge-gold">{featured.category}</span>
                {featured.featured && <span className="badge badge-blue text-[10px]">Featured</span>}
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 leading-tight" style={{ color:"var(--color-ink)" }}>
                {featured.title}
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color:"var(--color-muted)" }}>{featured.summary}</p>
              <div className="flex items-center gap-4 text-xs mb-5" style={{ color:"var(--color-muted)" }}>
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />
                  {new Date(featured.date).toLocaleDateString("en-US", { year:"numeric", month:"long", day:"numeric" })}
                </span>
                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {featured.author}</span>
              </div>
              <span className="flex items-center gap-2 text-sm font-semibold" style={{ color:"var(--color-blue)" }}>
                Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section" style={{ background:"var(--color-surface)" }}>
        <div className="container">
          <SectionHeader eyebrow="All Posts" title="More from the Blog" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="card group overflow-hidden block bg-white">
                <div className="relative aspect-[16/9] overflow-hidden">
                  {post.thumbnail
                    ? <Image src={post.thumbnail} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                    : <ImagePlaceholder type="landscape" label={post.category} />}
                  <div className="absolute top-3 left-3">
                    <span className="badge badge-gold">{post.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-bold text-[0.9375rem] leading-snug mb-2" style={{ color:"var(--color-ink)" }}>
                    {post.title}
                  </h3>
                  <p className="text-xs mb-3" style={{ color:"var(--color-muted)" }}>
                    {new Date(post.date).toLocaleDateString("en-US", { year:"numeric", month:"short", day:"numeric" })} · {post.author}
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color:"var(--color-muted)" }}>{post.summary.slice(0,110)}...</p>
                  {post.tags && (
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0,3).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background:"var(--color-blue-50)", color:"var(--color-blue)" }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
