import { createFileRoute } from "@tanstack/react-router";
import { TIKTOK_URL } from "@/components/SiteHeader";
import { galleryItems } from "@/data/content";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: "Lookbook — Damas Couture" },
      { name: "description", content: "A visual archive of Damas Couture creations: agbada, iro & buba, gele artistry and behind-the-scenes atelier moments." },
      { property: "og:title", content: "Lookbook — Damas Couture" },
      { property: "og:description", content: "A visual archive of Damas Couture creations and behind-the-scenes atelier moments." },
    ],
  }),
  component: LookbookPage,
});

const gallery = galleryItems;

function LookbookPage() {
  return (
    <main className="pt-32 pb-16 px-6 md:px-10">
      <section className="max-w-7xl mx-auto text-center mb-14">
        <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">Lookbook</span>
        <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">
          The <span className="italic text-gold-glow">Visual</span> Archive
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-white/60 leading-relaxed">
          Editorial portraits, wedding-day frames, and the quiet moments between the stitches.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-4">
        {gallery.map((g, i) => (
          <figure
            key={i}
            className={`relative overflow-hidden rounded-2xl group ring-1 ring-white/10 ${g.span ?? ""}`}
          >
            <img src={g.img} width={800} height={800} loading="lazy" alt={g.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-bg/90 via-royal-bg/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <figcaption className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity">
              {g.label}
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="max-w-4xl mx-auto mt-24 text-center glass-panel rounded-[2rem] p-12">
        <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">Moving Pictures</span>
        <h2 className="font-display text-3xl md:text-5xl mt-4 mb-6">See the fabric move.</h2>
        <p className="text-white/60 max-w-xl mx-auto mb-8">Our TikTok is where the atelier breathes — try-ons, gele wraps and unboxings, posted weekly.</p>
        <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gold-glow text-royal-bg font-bold text-xs tracking-[0.25em] uppercase hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
            <path d="M19.6 6.7a5 5 0 0 1-3-1 5 5 0 0 1-2-3.2H11v13.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V10a5.8 5.8 0 1 0 5.4 5.8V9.4a8.1 8.1 0 0 0 5 1.7V7.7a5 5 0 0 1 0-1Z"/>
          </svg>
          Watch on TikTok
        </a>
      </section>
    </main>
  );
}