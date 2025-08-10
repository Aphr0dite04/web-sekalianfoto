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
import { ChevronRight, Coffee, Clock } from "lucide-react";

type Location = {
  name: string;
  city: string;
  meta: string;
  address: string;
  maps: string;
  img: string;
};

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
  ];

  return (
    <section id="locations" className="container py-16 scroll-mt-20 md:scroll-mt-28">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Lokasi Sekalian Foto</h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Datang ke kafe favoritmu dan <em>rekam jejak kebahagiaan</em>.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {data.map((l) => (
          <Card
            key={l.name}
            className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Coffee className="size-4" />
                {l.name}
              </CardTitle>
              <CardDescription>
                {l.city} • {l.meta}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="text-sm text-neutral-700 dark:text-neutral-300">{l.address}</div>
              <MapShot src={l.img} alt={`Peta ${l.name}`} />
            </CardContent>

            <CardFooter className="justify-between">
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
                  <ChevronRight className="size-4" />
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
