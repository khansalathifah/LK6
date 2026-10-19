
function Contacts() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert("Terima kasih! Pesan Anda berhasil dikirim.");
    form.reset();
  }

  return (
    <main className="min-h-screen w-full bg-shell text-ink">
      {/* Hero Kontak */}
      <section
        className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-cover bg-center px-5 py-16"
        style={{ backgroundImage: "url('/assets/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
            Get in Touch
          </p>

          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Hubungi <span className="text-brand">Kami</span>
          </h1>

          <p className="mt-5 leading-8 text-white/85 sm:text-lg">
            Punya pertanyaan atau ingin merencanakan perjalanan ke Jepang?
            Tim J-Trip siap membantu Anda.
          </p>
        </div>
      </section>

      {/* Form dan Informasi Kontak */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24 lg:px-8">
        {/* Form Kontak */}
        <div className="rounded-3xl border border-brand/10 bg-white p-6 shadow-sm sm:p-9">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Send Us a Message
          </p>

          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            Kirim Pesan
          </h2>

          <p className="mt-3 leading-7 text-ink/65">
            Isi formulir berikut dan sampaikan kebutuhan perjalanan Anda.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="nama"
                className="mb-2 block text-sm font-semibold"
              >
                Nama Lengkap
              </label>

              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Masukkan nama lengkap"
                required
                minLength={2}
                className="w-full rounded-xl border border-ink/15 bg-shell px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="nama@email.com"
                required
                className="w-full rounded-xl border border-ink/15 bg-shell px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div>
              <label
                htmlFor="pesan"
                className="mb-2 block text-sm font-semibold"
              >
                Pesan
              </label>

              <textarea
                id="pesan"
                name="pesan"
                rows="5"
                placeholder="Tuliskan pertanyaan atau kebutuhan Anda..."
                required
                minLength={10}
                className="w-full resize-y rounded-xl border border-ink/15 bg-shell px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              ></textarea>

              <p className="mt-2 text-xs text-ink/50">
                Pesan minimal 10 karakter.
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-deep"
            >
              Kirim Pesan →
            </button>
          </form>
        </div>

        {/* Informasi Kontak */}
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl bg-brand p-7 text-white sm:p-9">
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">
              Contact Information
            </p>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Informasi Kontak
            </h2>

            <p className="mt-4 leading-7 text-white/80">
              Jangan ragu menghubungi kami untuk informasi layanan dan
              perencanaan perjalanan wisata Jepang.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold text-white/65">
                  Email
                </p>
                <a
                  href="mailto:jtrip@kawanmain.com"
                  className="mt-1 inline-block break-all font-medium hover:underline"
                >
                  jtrip@kawanmain.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-white/65">
                  Telepon / WhatsApp
                </p>
                <a
                  href="https://wa.me/6288123457"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block hover:underline"
                >
                  0881-234-57
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-white/65">
                  Alamat
                </p>
                <p className="mt-1 leading-7">
                  Jl. Yang Tak Ada, Kota Bandung, Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Media Sosial */}
          <div className="rounded-3xl border border-brand/10 bg-white p-7 shadow-sm sm:p-9">
            <h3 className="text-xl font-extrabold">Ikuti Media Sosial Kami</h3>

            <p className="mt-3 leading-7 text-ink/65">
              Dapatkan inspirasi destinasi dan informasi perjalanan terbaru
              bersama J-Trip.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand/20 px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand/20 px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
              >
                TikTok
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand/20 px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
              >
                Facebook
              </a>
            </div>

            <p className="mt-5 text-xs italic text-ink/45">
              *Tautan media sosial masih berupa contoh dan dapat diganti
              dengan akun resmi J-Trip.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacts;
