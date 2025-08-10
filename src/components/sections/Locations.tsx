import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronRight, Coffee, Clock } from "lucide-react";

export default function Locations() {
  const data = [
    {
      name: "Kulumanu Kopi",
      city: "Tangerang",
      meta: "Wide Box • Buka 12.00–24.00",
      address:
        "Jl. Bahagia No. 48, RT.004/RW.005, Sukarasa, Kec. Tangerang, Kota Tangerang, Banten 15111",
      maps: "https://maps.app.goo.gl/n1Lyhr333ys1iTxEA",
      img: "/maps/mapkulumanu.png",
    },
    {
      name: "Warkop Tja Uda",
      city: "Tangerang Selatan",
      meta: "Vintage Box • Buka 15.00–24.00",
      address:
        "Jl. Graha Raya Bintaro No. 51, Blok GR 11, Pd. Kacang Bar., Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15226",
      maps: "https://maps.app.goo.gl/d6AGBpy4sBohAGGY7",
      img: "/maps/mapwarkop.png",
    },
  ] as const;

  return (
    <section id="locations" className="container py-16">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Lokasi Sekalian Foto
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Datang ke kafe favoritmu dan <em>rekam jejak kebahagiaan</em>.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((l) => (
          <Card key={l.name}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Coffee className="size-4" />
                {l.name}
              </CardTitle>
              <CardDescription>
                {l.city} • {l.meta}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="text-sm text-neutral-700 dark:text-neutral-300">
                {l.address}
              </div>

              {/* Kotak gambar PNG (tanpa link/overlay) */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-800">
                {/* object-cover = isi penuh (mungkin terpotong); 
                    kalau mau semua gambar terlihat, ganti ke object-contain */}
                <img
                  src={l.img}
                  alt={`Peta ${l.name}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </CardContent>

            <CardFooter className="justify-between">
              <Button asChild variant="ghost">
                <a href={l.maps} target="_blank" rel="noreferrer">
                  Buka Google Maps <ChevronRight className="ml-1 size-4" />
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                <Clock className="size-4" />
                {l.meta.split("•")[1].trim()}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
