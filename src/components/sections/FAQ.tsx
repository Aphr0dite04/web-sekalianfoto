
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export default function FAQ() {
  const items = [
    { q: "Pembayaran apa saja yang diterima?", a: "Kami menerima tunai dan non-tunai. Untuk non-tunai kami menggunakan QRIS agar mudah dipakai berbagai bank atau e-wallet." },
    { q: "Bagaimana cara mengambil file?", a: "Hubungi WhatsApp admin Sekalian Foto dan sebutkan nama, lokasi, dan tanggal/jam pemotretan. Kami kirimkan softcopy-nya." },
    { q: "Apakah ada banyak frame ataupun filter?", a: "Ya! Ada banyak pilihan frame dan filter yang bisa kamu pilih sesuka hati." },
    { q: "Aksesoris apa saja yang tersedia?", a: "Kami menyediakan bando, topi, dan kacamata yang bisa digunakan selama foto." },
  ];
  return (
    <section id="faq" className="container py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">FAQ</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-2">Masih bingung? DM kami di Instagram.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
