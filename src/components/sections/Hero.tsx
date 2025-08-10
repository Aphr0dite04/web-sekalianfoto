'use client'
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Camera,
  MapPin,
  Users,
  Image as ImageIcon,
  ShieldCheck,
  Gauge,
  Sparkles,
  Download,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <div className="relative overflow-hidden" id="home">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 size-[36rem] bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/15 to-amber-400/15 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 size-[32rem] bg-gradient-to-br from-emerald-400/15 via-cyan-400/15 to-indigo-400/15 blur-3xl rounded-full" />
      </div>

      <section className="container pt-14 pb-10 sm:pt-24 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Kiri: Headline & CTA */}
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="space-y-6">
            <Badge className="rounded-full">Photobooth di Kafe</Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Rekam Jejak Kebahagiaan 🎞️{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-amber-500">
                Sekalian
              </span>{" "}
              Senang
            </h1>

            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-prose">
              Sekalian Foto adalah photobox di kafe: cukup masuk booth, pilih frame &amp; filter, pose, dan cetak.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#locations" className="inline-flex items-center gap-2 whitespace-nowrap">
                  <MapPin className="size-5 -mt-px" />
                  <span className="text-base md:text-lg font-semibold">Lihat Lokasi</span>
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href="#gallery" className="inline-flex items-center gap-2 whitespace-nowrap">
                  <Download className="size-5 -mt-px" />
                  <span className="text-base md:text-lg font-semibold">Lihat Cara Ambil File</span>
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck className="size-4" /> Beroperasional
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Gauge className="size-4" /> Cepat &amp; baik
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Sparkles className="size-4" /> Template estetik
              </div>
            </div>
          </motion.div>

          {/* Kanan: Simulasi Photobox */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl border-neutral-200 dark:border-neutral-800">
              <CardHeader>
                <CardTitle>Simulasi Photobox</CardTitle>
                <CardDescription>Pratinjau alur pemotretan 3 langkah</CardDescription>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="scan" className="w-full">
                  {/* Perbaikan: tab aktif selalu teks gelap di atas pil putih */}
                  <TabsList className="grid grid-cols-3 gap-3 p-0 bg-transparent">
                    <TabsTrigger
                      value="scan"
                      className="rounded-xl border bg-transparent
                                 text-neutral-700 dark:text-neutral-300
                                 data-[state=active]:bg-white dark:data-[state=active]:bg-white
                                 data-[state=active]:text-neutral-900 dark:data-[state=active]:text-neutral-900
                                 data-[state=active]:shadow-sm"
                    >
                      Pilih
                    </TabsTrigger>
                    <TabsTrigger
                      value="pose"
                      className="rounded-xl border bg-transparent
                                 text-neutral-700 dark:text-neutral-300
                                 data-[state=active]:bg-white dark:data-[state=active]:bg-white
                                 data-[state=active]:text-neutral-900 dark:data-[state=active]:text-neutral-900
                                 data-[state=active]:shadow-sm"
                    >
                      Pose
                    </TabsTrigger>
                    <TabsTrigger
                      value="print"
                      className="rounded-xl border bg-transparent
                                 text-neutral-700 dark:text-neutral-300
                                 data-[state=active]:bg-white dark:data-[state=active]:bg-white
                                 data-[state=active]:text-neutral-900 dark:data-[state=active]:text-neutral-900
                                 data-[state=active]:shadow-sm"
                    >
                      Cetak
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="scan" className="space-y-3">
                    <div className="aspect-video rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                      <Camera className="size-10" />
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      Pilih template &amp; filter favoritmu, siap!
                    </p>
                  </TabsContent>

                  <TabsContent value="pose" className="space-y-3">
                    <div className="aspect-video rounded-xl bg-neutral-100 dark:bg-neutral-800 grid place-items-center">
                      <Users className="size-10" />
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      Countdown 3...2...1! Ambil 3-4 bidikan, gerak bebas.
                    </p>
                  </TabsContent>

                  <TabsContent value="print" className="space-y-3">
                    <div className="aspect-video rounded-xl bg-neutral-100 dark:bg-neutral-800 grid place-items-center">
                      <ImageIcon className="size-10" />
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      Foto cetak instan + salinan digital via admin.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>

              <CardFooter className="justify-between">
                <div className="text-sm text-neutral-500">Waktu proses ± 30-60 detik</div>
                <Button asChild size="sm">
                  <a href="#gallery" className="inline-flex items-center gap-2 whitespace-nowrap">
                    <Download className="size-4 -mt-px" />
                    <span className="font-semibold">Cara Ambil File</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}