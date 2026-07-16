import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroAgbada from "@/assets/hero-agbada.jpg";
import monarchAgbada from "@/assets/monarch-agbada.jpg";
import oloriSet from "@/assets/olori-set.jpg";
import obaKaftan from "@/assets/oba-kaftan.jpg";
import embroideryDetail from "@/assets/embroidery-detail.jpg";
import atelierHands from "@/assets/atelier-hands.jpg";
import brideCoral from "@/assets/bride-coral.jpg";
import coupleRoyal from "@/assets/couple-royal.jpg";
import fabrics from "@/assets/fabrics.jpg";
import { TIKTOK_URL } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 md:pt-40 pb-24 px-6 md:px-10 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 size-[520px] rounded-full bg-gold-glow/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-40 -right-40 size-[520px] rounded-full bg-[#4c0519]/40 blur-[140px]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="relative z-10 animate-reveal-up">
            <span className="inline-block py-1 px-3 rounded-full bg-gold-glow/10 border border-gold-glow/25 text-gold-glow text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              Lagos Originality
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-medium leading-[0.9] mb-8">
              Regal <span className="italic animate-shimmer">Yoruba</span> Artistry
            </h1>
            <p className="text-lg text-white/60 max-w-md leading-relaxed mb-12 font-light">
              Where ancient tradition meets contemporary luxury. Hand-stitched
              native attire for the modern visionary who demands distinction.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/contact" className="px-10 py-5 bg-gold-glow text-royal-bg font-bold rounded-xl animate-glow-pulse transition-transform hover:scale-105 active:scale-95">
                Start Your Fitting
              </Link>
              <Link to="/lookbook" className="px-10 py-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                View Lookbook
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full aspect-[4/5] max-w-md animate-float-slow">
              <div className="absolute -inset-4 bg-gold-glow/15 rounded-3xl blur-3xl" />
              <img
                src={heroAgbada}
                width={1024}
                height={1280}
                alt="Model wearing an indigo and gold hand-embroidered Yoruba Agbada"
                className="relative z-10 w-full h-full object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl"
              />
              <div className="absolute -right-6 -bottom-6 md:-right-10 md:-bottom-10 w-44 h-44 neumorph-card p-4 animate-slide-in-right z-20">
                <div className="w-full h-full border border-gold-glow/25 rounded-xl flex items-center justify-center text-center p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-glow leading-tight">
                    100% Authentic Aso&nbsp;Oke
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden py-6 border-y border-white/5 bg-white/[0.02]">
        <div className="flex gap-16 whitespace-nowrap animate-marquee text-2xl md:text-4xl font-display italic text-gold-glow/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span>Agbada</span><span className="text-white/20">✦</span>
              <span>Iro & Buba</span><span className="text-white/20">✦</span>
              <span>Gele</span><span className="text-white/20">✦</span>
              <span>Aso-Oke</span><span className="text-white/20">✦</span>
              <span>Fila</span><span className="text-white/20">✦</span>
              <span>Kaftan</span><span className="text-white/20">✦</span>
              <span>Kembe</span><span className="text-white/20">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Collections */}
      <section id="collections" className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 justify-between items-end mb-16">
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">The Collection</span>
              <h2 className="text-4xl md:text-5xl font-display mt-4">Signature Cuts</h2>
              <p className="text-white/40 mt-3">Explore our hand-sewn native masterpieces.</p>
            </div>
            <Link to="/collections" className="text-gold-glow font-bold text-xs tracking-[0.3em] uppercase border-b border-gold-glow/30 pb-1 hover:border-gold-glow transition-all">
              View All Series
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: monarchAgbada,
                title: "The Monarch Agbada",
                desc: "Triple-layered hand embroidery with 18k gold thread accents.",
                price: "₦350k+",
              },
              {
                img: oloriSet,
                title: "The Olori Set",
                desc: "Minimalist wrap silk with architectural sleeves for the modern queen.",
                price: "₦280k+",
              },
              {
                img: obaKaftan,
                title: "The Oba Kaftan",
                desc: "Structured silhouette crafted from bespoke hand-woven Aso-Oke.",
                price: "Custom",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="neumorph-card p-4 group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.35)]"
              >
                <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                  <img
                    src={item.img}
                    width={800}
                    height={1000}
                    loading="lazy"
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="px-3 pb-3">
                  <h3 className="text-xl font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 mb-6">{item.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold-glow font-bold text-lg">{item.price}</span>
                    <button
                      aria-label={`View ${item.title}`}
                      className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-glow hover:text-royal-bg transition-colors"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-6 bg-gold-glow/10 blur-3xl rounded-full" />
            <img src={atelierHands} width={1024} height={1024} loading="lazy" alt="Master tailor hand-stitching gold embroidery" className="relative rounded-3xl w-full aspect-square object-cover ring-1 ring-white/10" />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">The Process</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-8">Four weeks from <span className="italic text-gold-glow">thread to throne</span>.</h2>
            <div className="space-y-6">
              {[
                { n: "01", t: "Consultation", d: "A private conversation to understand the occasion, silhouette and story." },
                { n: "02", t: "Fabric & Pattern", d: "Curated aso-oke, silks and lace. Signature patterns drawn to your taste." },
                { n: "03", t: "Hand Embroidery", d: "Between 80 and 240 hours of gold-thread work per garment." },
                { n: "04", t: "Final Fitting", d: "Delivered in a bespoke Damas trunk with a lifetime alteration promise." },
              ].map((s) => (
                <div key={s.n} className="glass-panel rounded-2xl p-5 flex gap-5 items-start hover:-translate-y-0.5 hover:border-gold-glow/40 transition-all">
                  <span className="font-display italic text-gold-glow text-2xl">{s.n}</span>
                  <div>
                    <div className="font-display text-lg">{s.t}</div>
                    <p className="text-sm text-white/50 mt-1 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/atelier" className="inline-block mt-8 text-gold-glow text-xs tracking-[0.3em] uppercase border-b border-gold-glow/30 pb-1 hover:border-gold-glow">
              Inside the Atelier →
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage / Craftsmanship */}
      <section id="heritage" className="py-28 px-6 md:px-10 relative">
        <div className="max-w-6xl mx-auto glass-panel rounded-[2rem] p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">The Heritage</span>
            <h2 className="font-display text-4xl md:text-5xl italic mt-4 mb-6 leading-tight">
              Where the needle meets the <span className="text-gold-glow text-gold-glow-shadow">soul</span>.
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Every Damas piece begins on a traditional loom, where master
              weavers translate ancestral Yoruba patterns into modern armor.
              A single Monarch Agbada requires over 200 hours of manual
              embroidery — every gold thread placed to catch the light.
            </p>
            <ul className="space-y-4">
              {[
                "Ethically sourced silk, cotton & aso-oke",
                "Hand-loom weaving from Iseyin",
                "Royal-grade gold embroidery",
              ].map((line, i) => (
                <li key={line} className="flex items-center gap-4">
                  <span className="size-9 rounded-full border border-gold-glow/40 flex items-center justify-center font-display italic text-gold-glow">
                    {i + 1}
                  </span>
                  <span className="text-sm text-white/80">{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gold-glow/10 blur-3xl rounded-full" />
            <img
              src={embroideryDetail}
              width={1024}
              height={1024}
              loading="lazy"
              alt="Close-up of gold thread embroidery on indigo aso-oke"
              className="relative rounded-2xl w-full aspect-square object-cover ring-1 ring-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">Voices</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Worn by tastemakers.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "The most exquisite agbada I've ever worn. Every eye in the room turned.", n: "Chief A. Adebayo", r: "Lagos" },
              { q: "Damas turned my wedding into a moving painting. Pure poetry in thread.", n: "Adaeze O.", r: "London" },
              { q: "Modern, ancestral, unforgettable. My guests still talk about the gele.", n: "Yewande B.", r: "Paris" },
            ].map((t) => (
              <figure key={t.n} className="neumorph-card p-8">
                <div className="text-gold-glow text-3xl font-display leading-none mb-4">"</div>
                <blockquote className="text-white/80 leading-relaxed">{t.q}</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-white/5 text-sm">
                  <div className="text-white">{t.n}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1">{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TikTok highlight */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto glass-panel rounded-[2rem] p-8 md:p-14 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center overflow-hidden">
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">On TikTok</span>
            <h2 className="font-display text-3xl md:text-5xl mt-4 mb-6 leading-tight">Watch the stitches come alive.</h2>
            <p className="text-white/60 leading-relaxed max-w-md">
              Behind-the-scenes fittings, gele tutorials, embroidery close-ups and
              runway reveals — follow <span className="text-gold-glow">@damas_couture27</span> for the daily atelier diary.
            </p>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold-glow text-royal-bg font-bold text-xs tracking-[0.25em] uppercase hover:scale-105 transition-transform">
              Follow on TikTok
              <span>→</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[brideCoral, coupleRoyal, fabrics, embroideryDetail].map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl aspect-[3/4] ${i % 2 ? "translate-y-6" : ""}`}>
                <img src={img} width={512} height={680} loading="lazy" alt="TikTok reel preview" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-bg/70 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke CTA */}
      <section id="bespoke" className="py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-[1px] rounded-[40px] bg-gradient-to-br from-gold-glow/50 via-transparent to-white/10">
            <div className="bg-royal-bg rounded-[39px] p-12 lg:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15),transparent_60%)]" />
              <h2 className="relative text-4xl md:text-6xl font-display mb-8">
                Your <span className="italic text-gold-glow">Legacy</span>, Sewn to Perfection.
              </h2>
              <p className="relative text-white/60 mb-12 text-lg max-w-xl mx-auto leading-relaxed">
                Book an appointment at our Victoria Island studio or request a
                private home measurement service.
              </p>
              <div className="relative inline-flex flex-col sm:flex-row gap-4">
                <a href="mailto:atelier@damascouture.com" className="px-12 py-5 bg-white text-royal-bg font-bold rounded-full hover:scale-105 transition-transform">
                  Book Studio Visit
                </a>
                <a href="https://wa.me/2340000000000" className="px-12 py-5 border border-white/20 rounded-full hover:bg-white/5 transition-colors">
                  WhatsApp Stylist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
