import React from "react";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <section className="container py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3 md:gap-4">
              <img src="/logo-color1.png" alt="Sekalian Foto" className="h-10 md:h-12 w-auto object-contain rounded dark:hidden" loading="lazy" decoding="async" />
              <img src="/logo-color.png"  alt="Sekalian Foto" className="hidden dark:block h-10 md:h-12 w-auto object-contain rounded" loading="lazy" decoding="async" />
              <img src="/logo-typography-dark.png" alt="Sekalianfoto" className="h-7 md:h-8 w-auto object-contain dark:hidden" loading="lazy" decoding="async" />
              <img src="/logo-typography-light.png" alt="Sekalianfoto" className="hidden dark:block h-7 md:h-8 w-auto object-contain" loading="lazy" decoding="async" />
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mt-3">
              Rekam Jejak Kebahagiaan — photobooth di kafe favoritmu.
            </p>
          </div>

          <div>
            <div className="font-semibold">Produk</div>
            <ul className="mt-2 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li><a href="#features" className="hover:underline">Fitur</a></li>
              <li><a href="#sewa" className="hover:underline">Sewa</a></li>      {/* ⬅️ baru */}
              <li><a href="#locations" className="hover:underline">Lokasi</a></li>
              <li><a href="#gallery" className="hover:underline">Galeri</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li><a className="hover:underline" href="/terms">Syarat & Ketentuan</a></li>
              <li><a className="hover:underline" href="/privacy">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Sekalian Foto — All rights reserved.
        </div>
      </section>
    </footer>
  );
}
