
function About() {
  const misi = [
    {
      nomor: "01",
      judul: "Pelayanan Terbaik",
      deskripsi:
        "Memberikan pelayanan pemesanan tiket dan kebutuhan wisata yang mudah, nyaman, dan terpercaya.",
    },
    {
      nomor: "02",
      judul: "Eksplorasi Jepang",
      deskripsi:
        "Membantu wisatawan menemukan destinasi menarik, mulai dari wisata populer hingga budaya lokal Jepang.",
    },
    {
      nomor: "03",
      judul: "Pengalaman Berkesan",
      deskripsi:
        "Menghadirkan pengalaman perjalanan yang menyenangkan melalui informasi dan layanan wisata yang sesuai kebutuhan.",
    },
  ];

  const tim = [
    {
      nama: "Tim Manajemen",
      peran: "Perencanaan dan Pengembangan",
      inisial: "TM",
    },
    {
      nama: "Tim Customer Service",
      peran: "Layanan dan Informasi Pelanggan",
      inisial: "CS",
    },
    {
      nama: "Tim Travel Consultant",
      peran: "Konsultasi Perjalanan Wisata",
      inisial: "TC",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#FFF9F2] text-ink">
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden bg-cover bg-center px-5 py-20"
        style={{ backgroundImage: "url('/assets/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Discover Japan with J-Trip
          </p>

          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="text-brand">About</span> Us? 
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Teman perjalanan Anda untuk menjelajahi keindahan, budaya,
            dan destinasi menarik di Jepang.
          </p>
        </div>
      </section>

      {/* Sejarah Singkat */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Mengenal J-Trip
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Perjalanan Dimulai dari Sebuah Impian
          </h2>

          <p className="mt-6 leading-8 text-ink/75">
            J-Trip merupakan perusahaan layanan wisata yang berfokus
            pada kebutuhan perjalanan ke Jepang. Kami hadir untuk
            membantu wisatawan merencanakan perjalanan, memperoleh
            informasi destinasi, dan menemukan layanan tiket yang
            sesuai dengan kebutuhan mereka.
          </p>

          <p className="mt-4 leading-8 text-ink/75">
            Dengan semangat untuk memperkenalkan keindahan Jepang,
            J-Trip berupaya menjadi teman perjalanan yang membantu
            setiap wisatawan menikmati pengalaman liburan yang
            nyaman dan berkesan.
          </p>
        </div>

        <div className="relative">
          <img
            src="/assets/disneyland.jpg"
            alt="Destinasi wisata Jepang"
            className="h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96"
          />

          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-brand px-6 py-4 text-white shadow-lg sm:-left-5">
            <p className="text-2xl font-extrabold">J-Trip</p>
            <p className="text-sm text-white/80">
              Your Japan Travel Partner
            </p>
          </div>
        </div>
      </section>

      {/* Visi */}
      <section className="bg-brand px-5 py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Tujuan Kami
          </p>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Visi J-Trip
          </h2>

          <p className="mt-6 text-lg leading-9 text-white/90 sm:text-xl">
            Menjadi mitra perjalanan terpercaya yang membantu setiap
            wisatawan menjelajahi Jepang dengan mudah, nyaman, dan
            mendapatkan pengalaman yang berkesan.
          </p>
        </div>
      </section>

      {/* Misi */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Langkah Kami
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Misi J-Trip
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/65">
            Kami berkomitmen memberikan layanan yang membantu
            perjalanan wisata Anda menjadi lebih praktis dan menyenangkan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {misi.map((item) => (
            <article
              key={item.nomor}
              className="rounded-3xl border border-brand/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 font-extrabold text-brand">
                {item.nomor}
              </span>

              <h3 className="mt-6 text-xl font-bold">{item.judul}</h3>

              <p className="mt-3 leading-7 text-ink/65">
                {item.deskripsi}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Profil Tim */}
      <section className="bg-[#F3E6D5] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
              Orang di Balik J-Trip
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Kenali Tim Kami
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/65">
              Tim yang berkolaborasi untuk membantu memberikan
              informasi dan pengalaman perjalanan terbaik bagi pelanggan.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {tim.map((anggota) => (
              <article
                key={anggota.inisial}
                className="rounded-3xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand text-2xl font-extrabold text-white ring-8 ring-brand/10">
                  {anggota.inisial}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {anggota.nama}
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink/60">
                  {anggota.peran}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-5 py-16 text-center md:py-20">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Siap Menjelajahi Jepang?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/65">
          Wujudkan rencana perjalanan Anda dan temukan destinasi
          Jepang yang ingin dikunjungi bersama J-Trip.
        </p>

        <a
          href="/contacts"
          className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 font-semibold text-white transition hover:bg-brand-deep"
        >
          Hubungi Kami
        </a>
      </section>
    </main>
  );
}

export default About;
