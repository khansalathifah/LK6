function Contacts() {
  return (
    <div className="w-full bg-shell py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Kontak</p>
          <h1 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Hubungi Kami
          </h1>
          <p className="mt-4 leading-7 text-ink/70">
            Ingin memesan paket perjalanan? Tim J-Trip Mate siap membantu Anda.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
          <div className="rounded-3xl border border-ink/10 bg-white p-6 text-center">
            <h2 className="font-bold text-ink">Email</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">halo@jtripmate.com</p>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-6 text-center">
            <h2 className="font-bold text-ink">Telepon</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">+62 812-0000-0000</p>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-6 text-center">
            <h2 className="font-bold text-ink">Alamat</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">Bandung, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
