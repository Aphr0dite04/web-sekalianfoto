import Link from "next/link"

export default function NotFound() {
  return (
    <main className="container py-24 text-center">
      <div className="inline-block rounded-2xl border bg-white dark:bg-neutral-900
                      border-neutral-200 dark:border-neutral-800 px-8 py-10">
        <div className="text-7xl mb-3">🤔</div>
        <h1 className="text-2xl font-extrabold mb-2">Halaman Tidak Ditemukan</h1>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6">
          Sepertinya kamu nyasar. Yuk balik ke beranda.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                                 bg-black text-white dark:bg-white dark:text-black">
          Balik ke Beranda
        </Link>
      </div>
    </main>
  )
}
