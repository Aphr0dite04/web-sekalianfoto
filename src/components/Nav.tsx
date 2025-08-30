'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { getUser, signOut } from "@/lib/session";

// false = sembunyikan auth; true = tampilkan lagi
const AUTH_ENABLED = false;
const IDS = ["features", "sewa", "locations", "gallery", "faq", "contact"] as const;

export default function Nav() {
  const [user, setUser] = React.useState<any>(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => { setUser(getUser()); }, []);

  // smooth scroll ke anchor (#id) — hormati prefers-reduced-motion
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const id = a.getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // shadow saat di-scroll (rAF + passive listener biar hemat)
  React.useEffect(() => {
    let raf = 0;
    const h = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 4));
    };
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", h);
    };
  }, []);

  // scrollspy
  React.useEffect(() => {
    const els = IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      // rootMargin diset agak tengah supaya section tinggi/pendek (termasuk #sewa) tetap terdeteksi
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => io.observe(el));

    // inisialisasi cepat: pilih elemen yang melintasi tengah viewport
    const snap = () => {
      const mid = window.scrollY + window.innerHeight * 0.5;
      let current: string | null = null;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        const top = r.top + window.scrollY;
        const bottom = top + Math.max(1, r.height);
        if (mid >= top && mid < bottom) {
          current = el.id;
          break;
        }
      }
      if (current && current !== active) setActive(current);
    };
    snap();
    window.addEventListener("resize", snap);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", snap);
    };
  }, [active]);

  const links = [
    ["Fitur", "features"],
    ["Sewa", "sewa"],
    ["Lokasi", "locations"],
    ["Galeri", "gallery"],
    ["FAQ", "faq"],
    ["Kontak", "contact"],
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur bg-white/80 dark:bg-neutral-900/70
                  supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60
                  transition-shadow ${scrolled ? "shadow-sm" : ""}`}
    >
      {/* skip link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] rounded bg-neutral-900 text-white px-3 py-2 text-sm"
      >
        Skip to content
      </a>

      <div className="container grid grid-cols-[auto,1fr,auto] items-center h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3 md:gap-4" aria-label="Sekalian Foto - Home">
          <img src="/logo-color1.png" alt="" className="h-10 md:h-12 w-auto object-contain rounded dark:hidden" loading="eager" decoding="async" />
          <img src="/logo-color.png"  alt="" className="hidden dark:block h-10 md:h-12 w-auto object-contain rounded" loading="eager" decoding="async" />
          <img src="/logo-typography-dark.png"  alt="Sekalianfoto" className="h-7 md:h-8 w-auto object-contain dark:hidden" loading="eager" decoding="async" />
          <img src="/logo-typography-light.png" alt="Sekalianfoto" className="hidden dark:block h-7 md:h-8 w-auto object-contain" loading="eager" decoding="async" />
        </a>

        <nav className="hidden md:flex justify-center items-center gap-1">
          {links.map(([label, href]) => {
            const isActive = active === href;
            return (
              <a
                key={href}
                href={`#${href}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900
                            ${isActive
                              ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                              : "hover:bg-neutral-100 dark:hover:bg-neutral-800"}`}
                aria-current={isActive ? "page" : undefined}
                data-active={isActive || undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2 justify-end">
          {AUTH_ENABLED && (
            user ? (
              <>
                <span className="text-sm">Halo, {user.name}</span>
                <Button asChild variant="ghost"><a href="/dashboard">Dashboard</a></Button>
                <Button variant="outline" onClick={signOut}>Keluar</Button>
              </>
            ) : (
              <Button
                variant="outline"
                className="pointer-events-none opacity-50"
                aria-disabled="true"
                title="Segera hadir"
              >
                Masuk
              </Button>
            )
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
