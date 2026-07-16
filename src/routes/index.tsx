import { createFileRoute } from "@tanstack/react-router";
import heroAgbada from "@/assets/hero-agbada.jpg";
import monarchAgbada from "@/assets/monarch-agbada.jpg";
import oloriSet from "@/assets/olori-set.jpg";
import obaKaftan from "@/assets/oba-kaftan.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-royal-radial text-white font-sans overflow-x-hidden selection:bg-gold-glow/30">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-10 py-5 flex justify-between items-center backdrop-blur-md bg-royal-bg/50 border-b border-white/5">
        <div className="text-2xl font-display font-bold tracking-tight text-gold-glow italic">
          Damas Couture
        </div>
        <div className="hidden md:flex gap-10 text-xs font-medium tracking-[0.25em] uppercase text-white/70">
          <a href="#heritage" className="hover:text-gold-glow transition-colors">The Heritage</a>
          <a href="#collections" className="hover:text-gold-glow transition-colors">Collections</a>
          <a href="#bespoke" className="hover:text-gold-glow transition-colors">Bespoke</a>
        </div>
        <a href="#bespoke" className="px-6 py-2 rounded-full border border-gold-glow/50 text-gold-glow text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-gold-glow hover:text-royal-bg transition-all duration-500">
          Inquire
        </a>
      </nav>

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
              <a href="#bespoke" className="px-10 py-5 bg-gold-glow text-royal-bg font-bold rounded-xl animate-glow-pulse transition-transform hover:scale-105 active:scale-95">
                Start Your Fitting
              </a>
              <a href="#collections" className="px-10 py-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                View Lookbook
              </a>
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

      {/* Collections */}
      <section id="collections" className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 justify-between items-end mb-16">
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">The Collection</span>
              <h2 className="text-4xl md:text-5xl font-display mt-4">Signature Cuts</h2>
              <p className="text-white/40 mt-3">Explore our hand-sewn native masterpieces.</p>
            </div>
            <div className="text-gold-glow font-bold text-xs tracking-[0.3em] uppercase border-b border-gold-glow/30 pb-1 cursor-pointer hover:border-gold-glow transition-all">
              View All Series
            </div>
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
              src={monarchAgbada}
              width={800}
              height={1000}
              loading="lazy"
              alt="Detail of gold thread embroidery on indigo aso-oke"
              className="relative rounded-2xl w-full aspect-[4/5] object-cover ring-1 ring-white/10 shadow-2xl"
            />
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

      <footer className="py-12 border-t border-white/5 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-display text-gold-glow/70 italic">Damas Couture</div>
          <div className="text-[10px] tracking-[0.35em] uppercase text-white/30 font-medium">
            © 2026 Lagos • London • Paris
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
            <a href="#" className="hover:text-gold-glow transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold-glow transition-colors">Showroom</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
