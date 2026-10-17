import PageHeader from '../components/PageHeader.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Card from '../components/Card.jsx'
import Avatar from '../components/Avatar.jsx'
import company from '../data/company.json'
import team from '../data/team.json'

export default function About() {
  return (
    <>
      <PageHeader
        title="Tentang Kami"
        subtitle="Mengenal perjalanan, visi, misi, dan orang-orang di balik NusaTech."
      />

      {/* Sejarah */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Sejarah" title="Perjalanan Kami" />
        <ol className="relative space-y-8 border-l-2 border-sky pl-6">
          {company.history.map((item) => (
            <li key={item.year} className="relative">
              <span className="absolute top-1 h-4 w-4 rounded-full border-4 border-snow bg-brand" />
              <p className="font-bold text-brand">{item.year}</p>
              <p className="mt-1 text-navy/80">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Visi & Misi */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Arah Kami" title="Visi & Misi" />
          <div className="grid gap-6 md:grid-cols-2">
            <Card icon="🎯" title="Visi">
              {company.vision}
            </Card>
            <Card icon="🚀" title="Misi">
              <ul className="list-disc space-y-2 pl-5">
                {company.mission.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Tim */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Tim Kami"
          title="Orang-Orang Hebat di Balik Layar"
          subtitle="Tim multidisiplin yang berkomitmen memberikan hasil terbaik."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center rounded-2xl border border-sky bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Avatar name={member.name} />
              <h3 className="mt-4 font-semibold text-navy">{member.name}</h3>
              <p className="text-sm font-medium text-brand">{member.role}</p>
              <p className="mt-2 text-sm text-navy/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
