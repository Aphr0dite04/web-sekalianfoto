'use client';

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Printer, Truck, Sparkles } from "lucide-react";

export default function Rent() {
  const wa =
    "https://wa.me/6285777951403?text=Halo%20Sekalian%20Foto%2C%20aku%20mau%20sewa%20Portable%20Box.%20Detail%3A%20Nama%20-%20Tanggal%20-%20Lokasi%20-%20Jam";

  return (
    <section id="sewa" className="container py-14 md:py-16 scroll-mt-20 md:scroll-mt-28">
      <div className="text-center mb-8">
        <Badge className="rounded-full">Baru</Badge>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">Sewa Portable Box</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Photobox mungil yang siap dibawa ke nikahan, ulang tahun, corporate event, atau house party.
        </p>
      </div>

      <Card className="mx-auto max-w-6xl overflow-hidden">
        {/* rasio kolom ringan biar seimbang */}
        <div className="grid md:grid-cols-[1.05fr,0.95fr]">
          {/* Kiri */}
          <div className="p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold">Bikin momen jadi obrolan semua orang 🎉</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 max-w-prose">
              Unlimited print, pemasangan cepat, dan desain elegan cocok untuk segala venue.
            </p>

            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Printer aria-hidden="true" className="size-4 mt-0.5" />
                Cetak <span className="font-semibold">tak terbatas</span> untuk semua tamu
              </li>
              <li className="flex items-start gap-2">
                <Truck aria-hidden="true" className="size-4 mt-0.5" />
                Gratis ongkir <span className="opacity-80">Jabodetabek</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles aria-hidden="true" className="size-4 mt-0.5" />
                Ringkas, stylish, dan cepat dipasang
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800">
                Mulai Rp 1.000.000
              </div>
              <span className="text-xs text-neutral-500">Unlimited print</span>
            </div>

            <div className="mt-4">
              <Button asChild size="lg">
                <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <MessageCircle className="size-5 -mt-px" />
                  Booking via WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Kanan: poster portrait — tinggi adaptif agar balance di berbagai layar */}
          <div className="relative md:my-6">
            {/* clamp: min 300px, ideal sekitar 40vh, max 560px */}
            <div className="relative h-[clamp(300px,38vh,540px)] sm:h-[clamp(340px,42vh,560px)] w-full">
              {/* background lembut + ring supaya poster nyatu dengan card */}
              <div
                className="absolute inset-0 rounded-none md:rounded-l-none md:rounded-r-xl
                           bg-gradient-to-b from-neutral-100/70 to-neutral-100/30
                           dark:from-neutral-800/70 dark:to-neutral-800/30
                           ring-1 ring-neutral-200 dark:ring-neutral-800"
                aria-hidden
              />
              {/* klik untuk lihat versi penuh (opsional, aman dihapus) */}
              <a href="/maps/portable-box.png" target="_blank" rel="noreferrer" aria-label="Lihat poster Portable Box ukuran penuh">
                <Image
                  src="/maps/portable-box.png"   // path portrait-mu
                  alt="Portable Box — Sekalian Foto"
                  fill
                  sizes="(min-width:1024px) 520px, 100vw"
                  className="object-contain p-3 md:p-4"
                  priority={false}
                />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
