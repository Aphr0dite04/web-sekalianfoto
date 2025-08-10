'use client'
import React from "react";
import Image from "next/image";

export default function MapShot({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <div className="relative aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-neutral-100 dark:bg-neutral-800" />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width:1024px) 600px, 100vw"
        className="object-cover"
        onLoadingComplete={() => setLoaded(true)}
        priority={false}
      />
    </div>
  );
}
