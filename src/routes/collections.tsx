import { createFileRoute, Link } from "@tanstack/react-router";
import monarchAgbada from "@/assets/monarch-agbada.jpg";
import oloriSet from "@/assets/olori-set.jpg";
import obaKaftan from "@/assets/oba-kaftan.jpg";
import brideCoral from "@/assets/bride-coral.jpg";
import groomEmerald from "@/assets/groom-emerald.jpg";
import coupleRoyal from "@/assets/couple-royal.jpg";
import { ModelViewer } from "@/components/ModelViewer";

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

const items = [
  { img: monarchAgbada, title: "The Monarch Agbada", cat: "Men • Ceremonial", price: "₦350k+", desc: "Triple-layered hand embroidery with 18k gold thread accents." },
  { img: oloriSet, title: "The Olori Set", cat: "Women • Wedding", price: "₦280k+", desc: "Minimalist wrap silk with architectural sleeves for the modern queen." },
  { img: obaKaftan, title: "The Oba Kaftan", cat: "Men • Everyday Regal", price: "Custom", desc: "Structured silhouette crafted from bespoke hand-woven Aso-Oke." },
  { img: brideCoral, title: "Coral Bride Edition", cat: "Bridal • Traditional", price: "₦420k+", desc: "Coral silk iro & buba paired with a sculpted gele and gold beads." },
  { img: groomEmerald, title: "Emerald Oba Agbada", cat: "Men • Coronation", price: "₦480k+", desc: "Deep emerald aso-oke with white fila and heirloom brass coral rope." },
  { img: coupleRoyal, title: "Royal Aso-Ebi Duo", cat: "Couples • Wedding", price: "From ₦650k", desc: "His & hers wedding set in cobalt blue with hand-appliquéd gold motifs." },
];

const filters = ["All", "Men", "Women", "Bridal", "Couples"];

const models3d = [
  {
    src: "/models/agbada-cloth.glb",
    alt: "3D model of a hand-embroidered Yoruba agbada cloth",
    title: "The Monarch Agbada — 3D",
    cat: "Men • Ceremonial • Interactive",
    desc: "Rotate, zoom and inspect every fold of the embroidery before you commission it.",
  },
  {
    src: "/models/agbada-cloth-model.glb",
    alt: "3D model of an agbada garment on a form",
    title: "The Oba Kaftan — 3D",
    cat: "Men • Everyday Regal • Interactive",
    desc: "See the drape and structure of the silhouette from every angle, in real time.",
  },
  {
    src: "/models/aso-oke-wedding-dress.glb",
    alt: "3D model of an aso-oke wedding dress",
    title: "Coral Bride Edition — 3D",
    cat: "Bridal • Traditional • Interactive",
    desc: "Explore the coral silk iro & buba silhouette and gold beadwork in fully rotatable 3D.",
  },
];

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