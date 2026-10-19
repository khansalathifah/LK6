import { Link } from 'react-router-dom'

const navigasi = [
  { label: 'Home', to: '/' },
  { label: 'Tentang Kami', to: '/about' },
  { label: 'Layanan', to: '/services' },
  { label: 'Galeri', to: '/galeri' },
  { label: 'Kontak', to: '/contacts' },
]

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="text-2xl font-extrabold text-white">
            J-Trip<span className="text-brand">Mate.</span>
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-white/85">
            Memudahkan alokasi wisata sesuai budget dan waktu yang sesuai. 
          </p>
        </div>

        <div>
          <h3 className="font-bold">Navigasi</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {navigasi.map((n) => (
              <li key={n.label}>
                <Link to={n.to} className="transition hover:text-brand">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Kontak</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>jtrip@kawanmain.com</li>
            <li>wa.me/6288123457</li>
            <li>Kota Bandung, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 py-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} J-Trip Mate. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
