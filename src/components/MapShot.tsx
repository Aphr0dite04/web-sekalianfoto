'use client'
import * as React from 'react'
import Image from 'next/image'

export default function MapShot({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <div className="relative aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-neutral-100 dark:bg-neutral-800" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        // sesuai lebar kartu: 620 (lg), 560 (sm), 90vw (mobile)
        sizes="(min-width:1280px) 620px, (min-width:640px) 560px, 90vw"
        className={`object-cover transition duration-500 ease-out ${
          loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[1.02] blur-sm'
        }`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        priority={false}
      />
    </div>
  )
}
