import { createFileRoute, Link } from "@tanstack/react-router";
import { ModelViewer } from "@/components/ModelViewer";
import { collectionItems, collectionFilters, models3d } from "@/data/content";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Damas Couture" },
      { name: "description", content: "Explore Damas Couture's signature hand-sewn Yoruba collections: Agbada, Iro & Buba, Kaftan, Aso-Ebi and bridal editions." },
      { property: "og:title", content: "Collections — Damas Couture" },
      { property: "og:description", content: "Hand-sewn Yoruba native attire — Agbada, Iro & Buba, Aso-Ebi, bridal & groom editions." },
    ],
  }),
  component: CollectionsPage,
});

const items = collectionItems;
const filters = collectionFilters;

function CollectionsPage() {
  return (
    <main className="pt-32 pb-16 px-6 md:px-10">
      <section className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">The Full Catalogue</span>
        <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">
          Collections <span className="italic text-gold-glow">2026</span>
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-white/60 leading-relaxed">
          Each piece begins as a conversation and ends as an heirloom. Browse
          our signature editions or commission your own.
        </p>
        <div className="mt-10 inline-flex flex-wrap justify-center gap-2 glass-panel rounded-full p-1.5">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`px-5 py-2 rounded-full text-[11px] tracking-[0.25em] uppercase transition-all ${i === 0 ? "bg-gold-glow text-royal-bg font-bold" : "text-white/70 hover:text-gold-glow"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it) => (
          <article key={it.title} className="neumorph-card p-4 group hover:-translate-y-2 transition-all duration-500">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-5">
              <img src={it.img} width={1024} height={1280} loading="lazy" alt={it.title} className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between items-end bg-gradient-to-t from-royal-bg/90 to-transparent">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">{it.cat}</span>
                <span className="text-gold-glow font-bold text-sm">{it.price}</span>
              </div>
            </div>
            <div className="px-3 pb-3">
              <h3 className="font-display text-xl mb-2">{it.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{it.desc}</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-gold-glow border-b border-gold-glow/30 hover:border-gold-glow pb-1">
                Commission →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* 3D Collection */}
      <section className="max-w-7xl mx-auto mt-28">
        <div className="text-center mb-14">
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">New · Interactive</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Explore in <span className="italic text-gold-glow">3D</span>
          </h2>
          <p className="max-w-xl mx-auto mt-3 text-white/60 leading-relaxed">
            Drag to rotate, pinch or scroll to zoom. Feel the weight and drape
            of the fabric before your first fitting.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models3d.map((m) => (
            <ModelViewer key={m.title} {...m} />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24 text-center glass-panel rounded-[2rem] p-12">
        <h2 className="font-display text-3xl md:text-4xl mb-4">Don't see your vision?</h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Every Damas piece can be built from scratch. Send us a mood board — we'll return with sketches within 72 hours.</p>
        <Link to="/contact" className="inline-flex px-10 py-4 rounded-full bg-gold-glow text-royal-bg font-bold text-xs tracking-[0.25em] uppercase hover:scale-105 transition-transform">
          Start a Bespoke Order
        </Link>
      </section>
    </main>
  );
}