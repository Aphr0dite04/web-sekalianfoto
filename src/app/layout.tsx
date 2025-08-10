import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

import LoaderOverlay from "@/components/LoaderOverlay";
import PageTransition from "@/components/PageTransition";
// import BackToTop from "@/components/BackToTop"; // <- kalau sudah bikin, tinggal un-comment

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://web-sekalianfoto.vercel.app"),
  title: "Sekalian Foto — Photobooth di Kafe",
  description: "Rekam Jejak Kebahagiaan — photobooth di kafe favoritmu.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=4" },
      { url: "/icon.png?v=4", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=4", sizes: "180x180" }],
  },
  openGraph: {
    title: "Sekalian Foto — Photobooth di Kafe",
    description: "Rekam Jejak Kebahagiaan — photobooth di kafe favoritmu.",
    url: "/",
    siteName: "Sekalian Foto",
    images: [{ url: "/opengraph-image" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sekalian Foto — Photobooth di Kafe",
    description: "Rekam Jejak Kebahagiaan — photobooth di kafe favoritmu.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* set kelas 'dark' SEBELUM React hydrate, default = dark */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var t = localStorage.getItem('theme');
              if (!t) t = 'dark';
              if (t === 'dark') document.documentElement.classList.add('dark');
              else document.documentElement.classList.remove('dark');
            } catch (e) {}
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased">
        <ThemeProvider>
          <LoaderOverlay />
          <Nav />
          <PageTransition>{children}</PageTransition>
          <Footer />
          {/* <BackToTop /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
