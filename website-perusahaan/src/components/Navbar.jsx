import { useState } from 'react'
import { Link } from 'react-router-dom'

const tautan = [
  { label: 'Home', to: '/' },
  { label: 'Tentang Kami', to: '/#tentang' },
  { label: 'Produk', to: '/#produk' },
  { label: 'Keunggulan', to: '/#keunggulan' },
  { label: 'Galeri', to: '/galeri' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-shell/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="text-2xl font-extrabold text-brand">
          J-Trip<span className="text-ink">Mate.</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink md:flex">
          {tautan.map((t) => (
            <Link key={t.label} to={t.to} className="transition hover:text-brand">
              {t.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contacts"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep sm:inline-block"
          >
            Hubungi Kami
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Buka menu navigasi"
            aria-expanded={open}
            className="rounded-lg p-2 text-ink transition hover:bg-ink/10 md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-shell px-5 py-4 md:hidden">
          <ul className="space-y-3 text-sm font-medium text-ink">
            {tautan.map((t) => (
              <li key={t.label}>
                <Link to={t.to} onClick={() => setOpen(false)} className="transition hover:text-brand">
                  {t.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contacts"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
