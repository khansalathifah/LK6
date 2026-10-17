import { Link } from 'react-router-dom'
import Card from '../components/Card.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import services from '../data/services.json'
import clients from '../data/clients.json'
import company from '../data/company.json'

export default function Home() {
  const highlights = services.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 from-navy via-navy to-brand text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-sky">
              Mitra Teknologi Anda Sejak 2018
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {company.tagline}
            </h1>
            <p className="mt-4 max-w-lg text-sky">
              {company.name} membantu perusahaan membangun website, aplikasi, dan sistem digital yang
              andal, aman, dan mudah digunakan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/kontak"
                className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-navy transition hover:bg-sky"
              >
                Konsultasi Gratis
              </Link>
              <Link
                to="/layanan"
                className="rounded-lg border border-white/40 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {company.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur"
              >
                <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-sky">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ringkasan perusahaan */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <SectionTitle
              center={false}
              eyebrow="Tentang Kami"
              title="Teknologi yang Dibangun untuk Pertumbuhan Bisnis"
            />
            <p className="-mt-6 leading-relaxed text-navy/80">
              {company.name} adalah perusahaan pengembang solusi digital yang berbasis di Bandung.
              Dengan tim yang berpengalaman, kami mengerjakan proyek dari skala UMKM hingga
              perusahaan menengah dengan standar kualitas yang konsisten.
            </p>
            <Link
              to="/tentang-kami"
              className="mt-6 inline-block font-semibold text-brand hover:underline"
            >
              Kenali kami lebih jauh →
            </Link>
          </div>
          <ul className="space-y-3">
            {['Tim profesional dan berpengalaman', 'Proses kerja transparan', 'Dukungan purna jual'].map(
              (item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl bg-sky p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                    ✓
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* Layanan unggulan */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Layanan Unggulan"
            title="Apa yang Kami Tawarkan"
            subtitle="Beberapa layanan utama yang paling banyak dipercayakan klien kepada kami."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((service) => (
              <Card key={service.id} icon={service.icon} title={service.title}>
                {service.short}
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/layanan"
              className="inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-navy"
            >
              Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Klien */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Dipercaya Oleh" title="Klien Kami" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client}
              className="rounded-xl border border-sky bg-white px-4 py-6 text-center text-sm font-semibold text-brand"
            >
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="mt-3 text-sky">
            Ceritakan kebutuhan Anda dan tim kami akan menghubungi dalam 1×24 jam kerja.
          </p>
          <Link
            to="/kontak"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-navy transition hover:bg-sky"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </>
  )
}
