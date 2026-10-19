
import { Link } from "react-router-dom";

function Galeri() {
  const klien = [
    {
      nama: "PT Sakura Indonesia",
      kategori: "Perusahaan",
      deskripsi:
        "Layanan perencanaan perjalanan wisata Jepang untuk kebutuhan perusahaan.",
      inisial: "SI",
    },
    {
      nama: "Nippon Travel Community",
      kategori: "Komunitas Wisata",
      deskripsi:
        "Kolaborasi eksplorasi destinasi dan budaya lokal Jepang.",
      inisial: "NT",
    },
    {
      nama: "Hikari Education",
      kategori: "Institusi Pendidikan",
      deskripsi:
        "Pendampingan kebutuhan perjalanan edukasi dan kunjungan budaya.",
      inisial: "HE",
    },
    {
      nama: "Tokyo Explorer Club",
      kategori: "Komunitas",
      deskripsi:
        "Dukungan informasi destinasi dan perencanaan perjalanan kelompok.",
      inisial: "TE",
    },
  ];

const kegiatan = [
  {
    foto: "/assets/org-wisata1.jpg",
    judul: "Eksplorasi Kota Tokyo",
    kategori: "Eksplorasi Kota",
    deskripsi:
      "Dokumentasi kegiatan eksplorasi destinasi hiburan populer di Jepang.",
  },
  {
    foto: "/assets/org-wisata2.jpg",
    judul: "Menjelajahi Dunia Ghibli",
    kategori: "Wisata Budaya",
    deskripsi:
      "Dokumentasi perjalanan untuk mengenal budaya dan karya animasi Jepang.",
  },
  {
    foto: "/assets/org-wisata3.jpg",
    judul: "Berkeliling Dunia LEGO ",
    kategori: "Wisata Hiburan",
    deskripsi:
      "Dokumentasi kegiatan menjelajahi LEGOLand di Jepang.",
  },
];

  return (
    <main className="min-h-screen w-full bg-shell text-ink">
      {/* Hero Galeri */}
      <section
        className="relative flex min-h-[45vh] items-center justify-center overflow-hidden bg-cover bg-center px-5 py-20"
        style={{ backgroundImage: "url('/assets/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
            Portfolio & Documentation
          </p>

          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Galeri <span className="text-brand">J-Trip</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Mengenal mitra perjalanan kami dan melihat berbagai inspirasi
            destinasi serta dokumentasi kegiatan wisata di Jepang.
          </p>

          <a
            href="#klien"
            className="mt-8 inline-flex rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-deep"
          >
            Lihat Portofolio
          </a>
        </div>
      </section>

      {/* Daftar Klien */}
      <section
        id="klien"
        className="scroll-mt-24 px-5 py-16 md:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand">
                Our Clients
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Daftar Klien & Mitra
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-ink/65">
                Mitra yang menjadi bagian dari perjalanan dan kolaborasi
                bersama J-Trip.
              </p>
            </div>

            <span className="w-fit rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
              {klien.length} Mitra
            </span>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {klien.map((item) => (
              <article
                key={item.inisial}
                className="rounded-3xl border border-brand/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-lg font-extrabold text-white">
                  {item.inisial}
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand">
                  {item.kategori}
                </p>

                <h3 className="mt-2 text-lg font-bold">{item.nama}</h3>

                <p className="mt-3 text-sm leading-7 text-ink/65">
                  {item.deskripsi}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dokumentasi Kegiatan */}
      <section
        id="dokumentasi"
        className="bg-[#F3E6D5] px-5 py-16 md:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
              Our Activities
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Dokumentasi Kegiatan
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/65">
              Kumpulan destinasi dan inspirasi kegiatan yang dapat menjadi
              bagian dari perjalanan Anda bersama J-Trip.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kegiatan.map((item) => (
              <article
                key={item.judul}
                className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.foto}
                    alt={item.judul}
                    loading="lazy"
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                  />                </div>

                <div className="p-6">
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                    {item.kategori}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">{item.judul}</h3>

                  <p className="mt-3 text-sm leading-7 text-ink/65">
                    {item.deskripsi}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

`
`      <section className="px-5 py-16 text-center md:py-20">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Rencanakan Perjalanan Anda
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/65">
          Punya rencana liburan, kunjungan kelompok, atau perjalanan
          bersama perusahaan? Mari diskusikan bersama tim J-Trip.
        </p>

        <Link
          to="/contacts"
          className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 font-semibold text-white transition hover:bg-brand-deep"
        >
          Hubungi Kami
        </Link>
      </section>
    </main>
  );
}

export default Galeri;
