import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import products from '../data/produk'

function Ikon({ className = 'h-6 w-6', fill = 'none', children }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
} 


const IkonCentang = (props) => (
  <Ikon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.5 2.5 4.5-5.5" />
  </Ikon>
)

const IkonBintang = (props) => (
  <Ikon fill="currentColor" stroke="none" {...props}>
    <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.45l-5.81 3.05 1.11-6.47L2.6 9.45l6.5-.95L12 2.6Z" />
  </Ikon>
)

const nilaiTentang = [
  'Proses pengiriman fisik sangat cepat',
  'Customer service sangat fast-respon',
  'Sudah terverifikasi oleh ratusan pelanggan',
]

const testimoni = [
  {
    inisial: 'A',
    nama: 'Anindia Pranata',
    peran: 'Pebisnis, Jakarta',
    kutipan: 'Proses tiketnya cepat sekalii dan customer servicenya gercep satsesot.',
  },
  {
    inisial: 'BS',
    nama: 'Budi Santoso',
    peran: 'Traveler, Surabaya',
    kutipan: 'Udah langganan di sini dari 2011, kualitasnya ga pernah berubah. Selalu fast respon dan konfirmasi perubahan sedikitpun.',
  },
]


function Home() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace('#', '')
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  return (
    <div className="w-full bg-shell">
      {/* Hero */}
        <section
          id="home"
          className="relative flex min-h-[85vh] scroll-mt-24 items-center justify-center overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/hero.jpg')" }}
        >
          {/* Overlay gelap */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Konten hero */}
          <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              Pemesanan tiket destinasi Jepang sejak 2010
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
              Ingin liburan?
              <br />
              <span className="text-brand">J-Trip</span> solusi Anda
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              Melayani berbagai permintaan untuk seluruh destinasi bernuansa Jepang.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#produk"
                className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
              >
                Lihat Produk
              </a>

              <Link
                to="/contacts"
                className="rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>     

     <section id="tentang" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="rounded-[2.5rem] bg-ink p-10 text-white">
              <p className="mt-6 text-2xl font-bold leading-snug">
                &ldquo;Pelayanan yang konsisten adalah kunci kepuasan pelanggan.&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/60">Operasional J-Trip Mate</p>
            </div>
            <div className="absolute -right-2 -bottom-6 rounded-2xl bg-brand px-6 py-4 text-white shadow-xl sm:right-6">
              <p className="text-2xl font-extrabold">15+</p>
              <p className="text-xs font-medium">Tahun Pengalaman</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Tentang Kami</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Mengatasi masalah kebingungan Anda saat liburan je Jepun.
            </h2>
            <p className="mt-5 leading-7 text-ink/70">
              Berdiri di Bandung sejak 2010, J-Trip Mate tumbuh menjadi produsen
              tiket destinasi yang dipercaya keluarga dan reseller di berbagai kota.
            </p>
            <ul className="mt-6 space-y-3">
              {nilaiTentang.map((n) => (
                <li key={n} className="flex items-start gap-3 text-ink/80">
                  <IkonCentang className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-7 inline-block font-semibold text-brand transition hover:underline">
              Selengkapnya tentang kami &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section id="produk" className="scroll-mt-24 bg-shell py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Produk Kami</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Pilihan Favorit Pelanggan
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.id}
                to="/galeri"
                className="group block overflow-hidden rounded-3xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={p.foto}
                  alt={p.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="scroll-mt-24 bg-shell py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Testimoni</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Kata Mereka tentang J-Trip Mate
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimoni.map((t) => (
              <figure key={t.nama} className="rounded-3xl border border-ink/10 bg-white p-6">
                <div className="flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IkonBintang key={i} className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="mt-4 leading-7 text-ink/80">
                  &ldquo;{t.kutipan}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand">
                    {t.inisial}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{t.nama}</span>
                    <span className="block text-sm text-ink/60">{t.peran}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-shell pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand px-6 py-14 text-center sm:px-14">
            <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-10 -bottom-20 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />
            <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl">
              Siap Menghadirkan J-Trip Mate ke daftar liburan Anda?
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl leading-7 text-white/85">
              Hubungi tim kami untuk pemesanan lebih lanjut.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contacts"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand transition hover:bg-brand-deep hover:text-white"
              >
                Hubungi Kami
              </Link>
              <a href="#produk" className="rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Lihat Produk Lagi
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
