import { useEffect, useRef, useState } from "react";

interface Slide {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
}

interface SlideshowProps {
  slides: Slide[];
  intervalMs?: number;
}

export function Slideshow({ slides, intervalMs = 5000 }: SlideshowProps) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, intervalMs]);

  const goTo = (i: number) => {
    setActive(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((cur) => (cur + 1) % slides.length);
    }, intervalMs);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10">
      <div className="relative rounded-[2rem] overflow-hidden aspect-[16/8] md:aspect-[16/6]">
        {/* animated glow frame */}
        <div className="pointer-events-none absolute -inset-1 rounded-[2.2rem] opacity-70 animate-glow-pulse bg-[conic-gradient(from_0deg,transparent,var(--gold-glow)_60%,transparent_85%)] blur-md" />
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden ring-1 ring-gold-glow/30">
          {slides.map((s, i) => (
            <div
              key={s.src}
              className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
              style={{ opacity: i === active ? 1 : 0 }}
              aria-hidden={i !== active}
            >
              <img
                src={s.src}
                alt={s.alt}
                width={1600}
                height={700}
                loading={i === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-bg via-royal-bg/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
                <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">{s.eyebrow}</span>
                <h3 className="font-display text-3xl md:text-5xl mt-2 text-white">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* corner glow accents */}
        <div className="pointer-events-none absolute -top-10 -left-10 size-40 rounded-full bg-gold-glow/30 blur-[60px]" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 size-40 rounded-full bg-gold-glow/30 blur-[60px]" />
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {slides.map((s, i) => (
          <button
            key={s.src}
            onClick={() => goTo(i)}
            aria-label={`Show slide ${i + 1}: ${s.title}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? "w-8 bg-gold-glow shadow-[0_0_10px_2px_var(--gold-glow)]" : "w-1.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
