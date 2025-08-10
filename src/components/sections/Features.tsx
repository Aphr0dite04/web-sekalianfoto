
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, CreditCard, Armchair, Sun, Glasses } from "lucide-react";
export default function Features() {
  const list = [
    { title: "Template Estetik", desc: "Banyak pilihan frame & filter yang bisa kamu mix-match.", icon: <Sparkles className="size-5" /> },
    { title: "Tunai & Non-Tunai", desc: "Bayar pakai tunai atau QRIS. Praktis dan cepat.", icon: <CreditCard className="size-5" /> },
    { title: "Ruang Nyaman", desc: "Booth tertutup dan rapi. Privasi terjaga, feel kece.", icon: <Armchair className="size-5" /> },
    { title: "Lighting Bagus", desc: "Lampu disetel pas supaya hasil foto tetap tajam dan cerah.", icon: <Sun className="size-5" /> },
    { title: "Aksesoris Seru", desc: "Sedia bando, topi, kacamata — tinggal pilih dan pose!", icon: <Glasses className="size-5" /> },
  ];
  return (
    <section id="features" className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Fitur Sekalian Foto</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">Semua yang kamu butuh untuk foto cantik, tanpa ribet.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(f => (
          <Card key={f.title}>
            <CardHeader className="flex-row items-center gap-3">
              <div className="size-10 grid place-items-center rounded-lg bg-neutral-100 dark:bg-neutral-800">{f.icon}</div>
              <CardTitle className="text-lg">{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">{f.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
