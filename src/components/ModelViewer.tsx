import { useEffect, useRef, useState } from "react";

// Loads the <model-viewer> custom element (Google's model-viewer web
// component) once, on the client, and renders a themed 3D viewer card
// for a glTF/GLB garment. Falls back to a poster image + loading state
// while the model streams in.

let modelViewerLoaded = false;
let modelViewerLoadPromise: Promise<void> | null = null;

function loadModelViewer(): Promise<void> {
  if (modelViewerLoaded) return Promise.resolve();
  if (modelViewerLoadPromise) return modelViewerLoadPromise;
  modelViewerLoadPromise = import("@google/model-viewer").then(() => {
    modelViewerLoaded = true;
  });
  return modelViewerLoadPromise;
}

interface ModelViewerProps {
  src: string;
  alt: string;
  title: string;
  cat: string;
  desc: string;
  posterClassName?: string;
}

export function ModelViewer({ src, alt, title, cat, desc }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  // Only mount the (heavy) 3D viewer once the card scrolls into view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    loadModelViewer().then(() => {
      if (cancelled) return;
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [inView]);

  useEffect(() => {
    if (!ready) return;
    const el = containerRef.current?.querySelector("model-viewer");
    if (!el) return;
    const onProgress = (e: Event) => {
      const detail = (e as CustomEvent).detail as { totalProgress?: number };
      if (typeof detail?.totalProgress === "number") {
        setProgress(Math.round(detail.totalProgress * 100));
      }
    };
    el.addEventListener("progress", onProgress);
    return () => el.removeEventListener("progress", onProgress);
  }, [ready]);

  const loaded = progress >= 100;

  return (
    <article
      ref={containerRef}
      className="neumorph-card p-4 group hover:-translate-y-2 transition-all duration-500"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-5 bg-[#0d1018] ring-1 ring-white/5">
        {ready ? (
          // @ts-expect-error -- model-viewer is a custom element, not a typed React component
          <model-viewer
            src={src}
            alt={alt}
            camera-controls
            auto-rotate
            auto-rotate-delay="1200"
            rotation-per-second="14deg"
            shadow-intensity="1"
            exposure="0.95"
            environment-image="neutral"
            interaction-prompt="none"
            style={{
              width: "100%",
              height: "100%",
              "--poster-color": "transparent",
            }}
          />
        ) : null}

        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0d1018] pointer-events-none">
            <div className="size-10 rounded-full border-2 border-gold-glow/25 border-t-gold-glow animate-spin" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
              {inView ? `Loading ${progress}%` : "3D Model"}
            </span>
          </div>
        )}

        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-gold-glow/15 backdrop-blur-sm border border-gold-glow/30 text-gold-glow text-[9px] font-bold tracking-[0.25em] uppercase">
            360° · Drag
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between items-end bg-gradient-to-t from-royal-bg/90 to-transparent pointer-events-none">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">{cat}</span>
        </div>
      </div>
      <div className="px-3 pb-3">
        <h3 className="font-display text-xl mb-2">{title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
      </div>
    </article>
  );
}
