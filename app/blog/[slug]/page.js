import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import data from "@/lib/data";

const { blogs } = data;

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) return {};
  return { title: `${post.title} – WMC Blog`, description: post.summary };
}

export default function BlogPostPage({ params }) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) notFound();

  const related = blogs.filter((b) => b.id !== post.id && b.category === post.category).slice(0, 3);

  return (
    <>
      <div className="page-hero">
        <div className="container relative z-10 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-5 transition-colors hover:text-blue-600"
            style={{ color:"var(--color-muted)" }}>
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge badge-gold">{post.category}</span>
            {post.tags?.map((t) => (
              <span key={t} className="badge badge-gray">#{t}</span>
            ))}
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold page-hero-title mb-4 leading-tight" style={{ letterSpacing:"-0.02em" }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-5 text-sm" style={{ color:"var(--color-muted)" }}>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", { year:"numeric", month:"long", day:"numeric" })}
            </span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container max-w-3xl">
          {post.thumbnail
            ? <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 shadow-lg"><Image src={post.thumbnail} alt={post.title} fill className="object-cover" unoptimized /></div>
            : <div className="rounded-2xl overflow-hidden mb-8"><ImagePlaceholder type="landscape" label={post.category} /></div>
          }

          <div className="p-5 rounded-xl mb-8 border-l-4" style={{ background:"var(--color-blue-50)", borderColor:"var(--color-blue)" }}>
            <p className="font-medium leading-relaxed text-[0.9375rem]" style={{ color:"var(--color-ink)" }}>{post.summary}</p>
          </div>

          {post.highlights && (
            <div className="mb-8">
              <h2 className="font-serif text-xl font-bold mb-4" style={{ color:"var(--color-ink)" }}>Event Highlights</h2>
              <ul className="space-y-3">
                {post.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color:"var(--color-muted)" }}>
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color:"var(--color-blue)" }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {post.topics_covered && (
            <div className="mb-8">
              <h2 className="font-serif text-xl font-bold mb-4" style={{ color:"var(--color-ink)" }}>Topics Covered</h2>
              <ul className="space-y-3">
                {post.topics_covered.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color:"var(--color-muted)" }}>
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color:"var(--color-blue)" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {post.resource_person && (
            <div className="p-5 rounded-xl border mb-8" style={{ background:"var(--color-surface)", borderColor:"var(--color-border)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color:"var(--color-blue)" }}>Resource Person</p>
              <p className="font-bold text-base" style={{ color:"var(--color-ink)" }}>{post.resource_person.name}</p>
              <p className="text-sm" style={{ color:"var(--color-muted)" }}>{post.resource_person.qualifications}</p>
            </div>
          )}

          {post.outcome && (
            <div className="p-5 rounded-xl border mb-8"
              style={{ background:"rgba(5,150,105,0.05)", borderColor:"rgba(5,150,105,0.2)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color:"#15803d" }}>Outcome</p>
              <p className="text-sm leading-relaxed" style={{ color:"#166534" }}>{post.outcome}</p>
            </div>
          )}

          {related.length > 0 && (
            <div className="pt-8 border-t" style={{ borderColor:"var(--color-border)" }}>
              <h3 className="font-serif font-bold text-lg mb-5" style={{ color:"var(--color-ink)" }}>More from {post.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link key={r.id} href={`/blog/${r.slug}`}
                    className="group block p-4 rounded-xl border hover:shadow-md transition-shadow bg-white"
                    style={{ borderColor:"var(--color-border)" }}>
                    <span className="badge badge-gold text-[10px] mb-2 inline-block">{r.category}</span>
                    <p className="font-semibold text-sm leading-snug" style={{ color:"var(--color-ink)" }}>{r.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
