
'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { getUser, signOut } from "@/lib/session";

export default function Nav() {
  const [user, setUser] = React.useState<any>(null);
  React.useEffect(()=>{ setUser(getUser()) },[]);

  React.useEffect(() => {
    const onClick = (e: any) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href')?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const links = [
    ["Fitur","features"],["Lokasi","locations"],["Galeri","gallery"],["FAQ","faq"],["Kontak","contact"]
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
            <a key={href} href={`#${href}`} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2 justify-end">
          {user ? (
            <>
              <span className="text-sm">Halo, {user.name}</span>
              <Button asChild variant="ghost"><a href="/dashboard">Dashboard</a></Button>
              <Button variant="outline" onClick={signOut}>Keluar</Button>
            </>
          ) : (
            <Button asChild variant="outline"><a href="/signin">Masuk</a></Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
