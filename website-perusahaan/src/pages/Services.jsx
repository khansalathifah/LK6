
import { Link } from 'react-router-dom'
import products from '../data/produk'

function Services() {
  return (
    <div className="w-full bg-shell py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Galeri
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Galeri Produk J-Trip Mate
          </h1>

          <p className="mt-4 leading-7 text-ink/70">
            Pilih destinasi favorit Anda dan hubungi kami untuk pemesanan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-3xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={p.foto}
                  alt={p.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-bold text-ink">
                  {p.nama}
                </h2>

                <p className="mt-3 text-sm leading-7 text-ink/65">
                  {p.deskripsi}
                </p>

                <Link
                  to="/contacts"
                  className="mt-4 inline-block text-sm font-semibold text-brand transition hover:underline"
                >
                  Pesan &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
