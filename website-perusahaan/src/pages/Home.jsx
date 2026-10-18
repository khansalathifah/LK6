import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-snow font-sans text-navy">HOME
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-sky bg-snow/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="text-2xl font-extrabold text-brand">
            Rasa<span className="text-navy">Nusantara.</span>
          </Link>

          <div className="hidden items-center gap-8 font-medium md:flex">
            <a href="#home" className="transition hover:text-brand">Home</a>
            <a href="#tentang" className="transition hover:text-brand">Tentang Kami</a>
            <a href="#produk" className="transition hover:text-brand">Produk</a>
            <a href="#keunggulan" className="transition hover:text-brand">Keunggulan</a>
          </div>

          <Link
            to="/Contacts"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy">Hubungi Kami</Link>
        </div>
      </nav>
      <main>
        {/* Isi hero, produk, dan section lainnya */}
      </main>
      <footer className="bg-navy text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
            <div>
              <Link to="/" className="text-2xl font-extrabold text-white">
                Rasa<span className="text-sky">Nusantara.</span>
              </Link>
              <p className="mt-4 max-w-sm leading-7 text-white/70">
                Menghadirkan cita rasa istimewa melalui makanan berkualitas.
              </p>
            </div>
          </div>

          <div className="border-t border-white/15 px-5 py-5 text-center text-sm text-white/60">
            © {new Date().getFullYear()} Rasa Nusantara. All rights reserved.
          </div>
        </footer>
    </div>

  )
}

export default Home