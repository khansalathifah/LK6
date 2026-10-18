import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import products from '../data/produk'

/* ---------- Ikon ---------- */

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

const IkonSendokGarpu = (props) => (
  <Ikon {...props}>
    <path d="M3 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3Zm0 0v7" />
  </Ikon>
)

const IkonAlami = (props) => (
  <Ikon {...props}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </Ikon>
)

const IkonAman = (props) => (
  <Ikon {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Ikon>
)

const IkonKirim = (props) => (
  <Ikon {...props}>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </Ikon>
)

const IkonHarga = (props) => (
  <Ikon {...props}>
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r="1" />
  </Ikon>
)

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

/* ---------- Data ---------- */

const statis = [
  { angka: '15+', label: 'Tahun Pengalaman' },
  { angka: '50+', label: 'Varian Produk' },
  { angka: '120+', label: 'Kota Terjangkau' },
  { angka: '4.9/5', label: 'Kepuasan Pelanggan' },
]

const nilaiTentang = [
  'Bahan baku segar dari petani dan pemasok lokal',
  'Standar produksi higienis dan tersertifikasi halal',
  'Resep turun-temurun dengan sentuhan modern',
]

const daftarKeunggulan = [
  {
    judul: 'Bahan Alami Pilihan',
    deskripsi: 'Bumbu dan bahan utama dipilih dari pemasok lokal terpercaya, tanpa pewarna berlebihan.',
    Ikon: IkonAlami,
  },
  {
    judul: 'Produksi Higienis',
    deskripsi: 'Diproduksi dengan standar keamanan pangan dan tersertifikasi halal.',
    Ikon: IkonAman,
  },
  {
    judul: 'Pengiriman Aman & Cepat',
    deskripsi: 'Kemasan tahan lama dan dikirim ke lebih dari 120 kota di seluruh Indonesia.',
    Ikon: IkonKirim,
  },
  {
    judul: 'Harga Grosir Terjangkau',
    deskripsi: 'Harga bersahabat untuk reseller, katering, maupun kebutuhan rumah tangga.',
    Ikon: IkonHarga,
  },
]

const testimoni = [
  {
    inisial: 'SR',
    nama: 'Siti Rahayu',
    peran: 'Pemilik Katering, Jakarta',
    kutipan: 'Sambal dan rendangnya konsisten dari batch ke batch. Pelanggan katering saya selalu menanyakan resepnya.',
  },
  {
    inisial: 'BS',
    nama: 'Budi Santoso',
    peran: 'Reseller, Surabaya',
    kutipan: 'Pengiriman cepat, kemasan aman, dan harga grosirnya masuk akal. Sangat cocok untuk dijual kembali.',
  },
  {
    inisial: 'AP',
    nama: 'Andi Pratama',
    peran: 'Pelanggan Setia, Bandung',
    kutipan: 'Keripik balado dan kue lapisnya sudah jadi langganan rumah. Rasanya seperti buatan sendiri.',
  },
]

/* ---------- Halaman ---------- */

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
      <section id="home" className="relative scroll-mt-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 -bottom-40 h-96 w-96 rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-16 pb-12 lg:grid-cols-2 lg:px-8 lg:pt-24 lg:pb-16">
          <div>
            <span className="inline-flex items-center rounded-full border border-brand/25 bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
              Produsen Makanan Nusantara Sejak 2009
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Cita J-Trip Mate untuk <span className="text-brand">Dapur</span> Anda
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
              Kami mengolah sambal, lauk instan, camilan, dan bumbu dari bahan pilihan
              yang dikemas higienis serta dikirim ke seluruh Indonesia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#produk" className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep">
                Lihat Produk
              </a>
              <Link
                to="/contacts"
                className="rounded-full border border-ink/25 px-7 py-3 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-white"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="flex aspect-square items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-brand to-brand-deep shadow-2xl">              <IkonSendokGarpu className="h-36 w-36 text-white/90" />
            </div>
            <div className="absolute -left-3 top-8 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg sm:flex">
              <IkonAlami className="h-4 w-4 text-brand" />
              100% Bahan Alami
            </div>
            <div className="absolute -right-3 bottom-10 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg sm:flex">
              <IkonAman className="h-4 w-4 text-brand" />
              Tersertifikasi Halal
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-ink/10 bg-white px-6 py-8 shadow-sm sm:grid-cols-4 sm:px-10">
            {statis.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-brand">{s.angka}</p>
                <p className="mt-1 text-sm text-ink/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="rounded-[2.5rem] bg-ink p-10 text-white">
              <IkonSendokGarpu className="h-20 w-20 text-brand" />
              <p className="mt-6 text-2xl font-bold leading-snug">
                &ldquo;Rasa yang konsisten adalah kunci kepuasan pelanggan.&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/60">Dapur Produksi J-Trip Mate</p>
            </div>
            <div className="absolute -right-2 -bottom-6 rounded-2xl bg-brand px-6 py-4 text-white shadow-xl sm:right-6">
              <p className="text-2xl font-extrabold">15+</p>
              <p className="text-xs font-medium">Tahun Pengalaman</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Tentang Kami</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Mengolah Bahan Terbaik Menjadi Kelezatan yang Konsisten
            </h2>
            <p className="mt-5 leading-7 text-ink/70">
              Berdiri di Bandung sejak 2009, J-Trip Mate tumbuh menjadi produsen
              makanan yang dipercaya keluarga, katering, dan reseller di berbagai kota.
            </p>
            <p className="mt-4 leading-7 text-ink/70">
              Setiap produk dibuat dengan resep turun-temurun, bahan pilihan, dan proses
              produksi yang higienis.
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

      {/* Produk */}
      <section id="produk" className="scroll-mt-24 bg-shell py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Produk Kami</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Pilihan Favorit Pelanggan
            </h2>
            <p className="mt-4 leading-7 text-ink/70">
              Tersedia dalam kemasan rumahan maupun grosir untuk kebutuhan katering dan reseller.
            </p>
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

      {/* Keunggulan */}
      <section id="keunggulan" className="scroll-mt-24 bg-ink py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Kenapa Memilih Kami</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Keunggulan J-Trip Mate
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Kualitas yang terjaga sejak dapur produksi hingga ke pintu Anda.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {daftarKeunggulan.map((k) => (
              <div
                key={k.judul}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-brand/60 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <k.Ikon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{k.judul}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{k.deskripsi}</p>
              </div>
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

      {/* Ajakan Bertindak */}
      <section className="bg-shell pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand px-6 py-14 text-center sm:px-14">
            <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-10 -bottom-20 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />
            <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl">
              Siap Menghadirkan J-Trip Mate ke Dapur Anda?
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl leading-7 text-white/85">
              Hubungi tim kami untuk pemesanan retail, grosir, atau kerja sama katering.
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
