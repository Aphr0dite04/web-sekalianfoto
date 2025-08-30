import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import Rent from "@/components/sections/Rent";        // ⬅️ baru
import Locations from "@/components/sections/Locations";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Hero />
      <Stats />
      <Features />
      <Rent />          {/* ⬅️ Sewa Portable Box */}
      <Locations />
      <Gallery />
      <FAQ />
      <Contact />
    </main>
  );
}
