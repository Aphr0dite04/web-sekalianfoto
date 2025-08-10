import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircleMore, Youtube, Music3 } from "lucide-react";

export default function Contact() {
  const ig = "https://www.instagram.com/sekalianfoto";
  const tiktok = "https://www.tiktok.com/@sekalianfoto";
  const yt = "https://www.youtube.com/@Sekalianfoto";
  const wa = "https://wa.me/6281387659249";

  return (
    <section id="contact" className="container py-16">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader><CardTitle>Hubungi Kami</CardTitle></CardHeader>
          <CardContent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">

            <Button asChild variant="outline">
              <a href={ig} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap">
                <Instagram className="size-5 -mt-px" />
                <span className="text-base md:text-lg font-semibold">Instagram</span>
              </a>
            </Button>

            <Button asChild variant="outline">
              <a href={tiktok} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap">
                <Music3 className="size-5 -mt-px" />
                <span className="text-base md:text-lg font-semibold">TikTok</span>
              </a>
            </Button>

            <Button asChild variant="outline">
              <a href={yt} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap">
                <Youtube className="size-5 -mt-px" />
                <span className="text-base md:text-lg font-semibold">YouTube</span>
              </a>
            </Button>

            <Button asChild>
              <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap">
                <MessageCircleMore className="size-5 -mt-px" />
                <span className="text-base md:text-lg font-semibold">WhatsApp</span>
              </a>
            </Button>

          </CardContent>
        </Card>
      </div>
    </section>
  )
}
