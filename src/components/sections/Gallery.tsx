'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { burst } from "@/utils/confetti";

export default function Gallery() {
  const wa =
    "https://wa.me/6285777951403?text=Halo%20Sekalian%20Foto%2C%20aku%20mau%20minta%20softcopy%20foto%20aku.%20Namaku%3A%20_____%20Lokasi%3A%20_____%20Tanggal%2FJam%3A%20_____";
  const [toast, setToast] = React.useState(false);

  const handleClick = (el: HTMLElement) => {
    burst(el);
    setToast(true);
    setTimeout(() => setToast(false), 1600);
  };

  return (
    <section id="gallery" className="container py-16 scroll-mt-20 md:scroll-mt-28">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight">Cara Ambil File Foto</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">
          Untuk saat ini, galeri digital belum otomatis. Kamu bisa hubungi WhatsApp admin kami untuk minta softcopy.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5">
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            Klik tombol di bawah dan kirim format singkat: nama, lokasi, tanggal/jam.
          </p>

          <Button
            asChild
            size="lg"
            className="active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
            onClick={(e) => handleClick(e.currentTarget as HTMLElement)}
          >
            <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap">
              <MessageCircle className="size-5 -mt-px" />
              <span className="text-base md:text-lg font-semibold">WhatsApp Admin</span>
            </a>
          </Button>

          <p className="text-xs text-neutral-500">Kami akan kirimkan file digital secepatnya.</p>
        </CardContent>
      </Card>

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 rounded-full px-4 py-2 text-sm font-medium bg-neutral-900 text-neutral-100 shadow-lg"
        >
          Membuka WhatsApp…
        </div>
      )}
    </section>
  );
}
