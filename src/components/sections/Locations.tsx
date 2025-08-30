"use client";

import React from "react";
import MapShot from "@/components/MapShot";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Coffee, Clock, ArrowLeft, ArrowRight } from "lucide-react";

type Location = {
  name: string;
  city: string;
  meta?: string;
  address?: string;
  maps?: string;
  img?: string;
  comingSoon?: boolean;
};

function getOpenHours(meta?: string) {
  if (!meta) return "";
  const parts = meta.split("•").map((s) => s.trim().toLowerCase());
  const hit = parts.find((p) => p.startsWith("buka"));
  return hit ? hit.replace(/^buka\s*/i, "Buka ") : "";
}

export default function Locations() {
  const data: Location[] = [
    {
      name: "Kulumanu Kopi",
      city: "Tangerang",
      meta: "Wide Box • Buka 12:00–24:00",
      address:
        "Jl. Bahagia No. 48, RT.004/RW.005, Sukarasa, Kec. Tangerang, Kota Tangerang, Banten 15111",
      maps: "https://maps.app.goo.gl/n1Lyhr333ys1iTxEA",
      img: "/maps/mapkulumanu.png",
    },
    {
      name: "Warkop Tja Uda",
      city: "Tangerang Selatan",
      meta: "Vintage Box • Buka 15:00–24:00",
      address:
        "Jl. Graha Raya Bintaro No. 51, Blok GR 11, Pd. Kacang Bar., Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15226",
      maps: "https://maps.app.goo.gl/d6AGBpy4sBohAGGY7",
      img: "/maps/mapwarkop.png",
    },
    {
      name: "COMING SOON I",
      city: "Tangerang",
      meta: "Elevator Box — segera diumumkan.",
      address: "Lokasi baru — segera diumumkan.",
      comingSoon: true,
      img: "/maps/comingsoon.jpg",
    },
    {
      name: "COMING SOON II",
      city: "Jakarta",
      meta: "Segera Hadir",
      address: "Lokasi baru — segera diumumkan.",
      comingSoon: true,
      img: "/maps/comingsoon.jpg",
    },
  ];

  const wrapRef = React.useRef<HTMLDivElement>(null);
  const scrollByOne = (dir: "left" | "right") => {
    const el = wrapRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    const w = slide ? slide.offsetWidth : el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "left" ? -w - 24 : w + 24, behavior: "smooth" });
  };

  return (
    <section className="container py-16">
      <span id="locations" className="block h-0 scroll-mt-20 md:scroll-mt-28" />

      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Lokasi Sekalian Foto</h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Datang ke kafe favoritmu dan <em>rekam jejak kebahagiaan</em>.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="outline"
            className="h-10 w-10 p-0"
            onClick={() => scrollByOne("left")}
            aria-label="Sebelumnya"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-10 w-10 p-0"
            onClick={() => scrollByOne("right")}
            aria-label="Berikutnya"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* wrapper + edge-fade hint */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent dark:from-neutral-900" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent dark:from-neutral-900" />

        <div
          ref={wrapRef}
          className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>

          {data.map((l) => {
            const hours = getOpenHours(l.meta);
            const isSoon = l.comingSoon || !l.maps;
            const showImg = Boolean(l.img);

            return (
              <Card
                key={l.name}
                data-slide
                className="snap-center shrink-0 w-[90vw] sm:w-[560px] lg:w-[620px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Coffee className="size-4" />
                    {l.name}
                  </CardTitle>
                  {/* Tinggi tetap 1 baris supaya map sejajar */}
                  <CardDescription className="min-h-[24px]">
                    {l.city}
                    {l.meta ? ` • ${l.meta}` : ""}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {/* Alamat maksimum 2 baris */}
                  {l.address && (
                    <div
                      className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed min-h-[44px]"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {l.address}
                    </div>
                  )}

                  {showImg ? (
                    <MapShot src={l.img as string} alt={`Peta ${l.name}`} />
                  ) : (
                    <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-800" />
                  )}
                </CardContent>

                <CardFooter className="justify-between">
                  {isSoon ? (
                    <>
                      <div className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm bg-neutral-100 dark:bg-neutral-800">
                        Segera Hadir
                      </div>
                      <div className="text-sm text-neutral-500">—</div>
                    </>
                  ) : (
                    <>
                      <Button
                        asChild
                        variant="ghost"
                        className="active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
                      >
                        <a
                          href={l.maps}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Buka Google Maps – ${l.name}`}
                          className="inline-flex items-center gap-2 whitespace-nowrap"
                        >
                          <span>Buka Google Maps</span>
                          <ChevronRight className="h-4 w-4" />
                        </a>
                      </Button>

                      {hours && (
                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                          <Clock className="size-4" />
                          {hours}
                        </div>
                      )}
                    </>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
