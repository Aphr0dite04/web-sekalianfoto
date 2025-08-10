'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { getUser, signOut } from "@/lib/session";

// ⬇️ toggle di sini: false = sembunyikan auth; true = tampilkan lagi
const AUTH_ENABLED = false;

export default function Nav() {
  const [user, setUser] = React.useState<any>(null);
  React.useEffect(() => { setUser(getUser()) }, []);

  // smooth scroll ke anchor (#id), sudah ada di project-mu
  React.useEffect(() => {
    const onClick = (e: any) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // biar bisa open-in-new-tab, dll.
      const id = a.getAttribute('href')?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const links = [
    ["Fitur","features"],
    ["Lokasi","locations"],
    ["Galeri","gallery"],
    ["FAQ","faq"],
    ["Kontak","contact"],
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-neutral-900/70 border-b">
      <div className="container grid grid-cols-[auto,1fr,auto] items-center h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3 md:gap-4">
          <img src="/logo-color.png" alt="Sekalian Foto" className="h-10 md:h-12 w-auto object-contain rounded" />
          <img src="/logo-typography-dark.png" alt="Sekalianfoto" className="h-7 md:h-8 w-auto object-contain dark:hidden" />
          <img src="/logo-typography-light.png" alt="Sekalianfoto" className="h-7 md:h-8 w-auto object-contain hidden dark:block" />
        </a>

        <nav className="hidden md:flex justify-center items-center gap-1">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={`#${href}`}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              {label}
            </a>
          ))}
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
              // versi "disabled" kalau kamu pengen tetap kelihatan tapi tidak bisa diklik:
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
