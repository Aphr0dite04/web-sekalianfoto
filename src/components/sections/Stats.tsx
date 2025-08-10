
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
export default function Stats() {
  const items = [
    { n: "99.9%", l: "Uptime Mesin" },{ n: "< 60 dtk", l: "Rata-rata Proses" },
    { n: "2", l: "Lokasi Aktif" },{ n: "Banyak", l: "Frame & Filter" },
  ];
  return (
    <section className="container py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(s => (
          <Card key={s.l} className="text-center">
            <CardContent className="py-6">
              <div className="text-2xl font-bold">{s.n}</div>
              <div className="text-xs text-neutral-500">{s.l}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
