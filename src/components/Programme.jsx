import WaxPattern from './WaxPattern'
import Reveal from './Reveal'

const DAYS = [
  {
    date: '14',
    month: 'Août 2026',
    title: 'Cérémonie Traditionnelle',
    subtitle: 'La Dot',
    description:
      "Célébration de l'union selon nos traditions africaines : remise de la dot et bénédiction des familles.",
  },
  {
    date: '15',
    month: 'Août 2026',
    title: 'Mariage & Réception',
    subtitle: 'Célébration civile/religieuse et fête',
    description:
      "Cérémonie officielle suivie d'une grande fête pour célébrer notre union avec vous.",
  },
]

export default function Programme() {
  return (
    <section id="programme" className="relative bg-ivory px-6 py-16 scroll-mt-6 overflow-hidden">
      <WaxPattern className="absolute top-4 left-2 w-20 h-20" />
      <WaxPattern className="absolute bottom-4 right-2 w-20 h-20 rotate-45" />

      <Reveal>
        <h2 className="text-center font-display text-3xl text-coral mb-10 tracking-wide">
          Programme
        </h2>
      </Reveal>

      <div className="max-w-xs mx-auto space-y-8">
        {DAYS.map((day, i) => (
          <Reveal key={day.date} delay={i * 0.2} bounce y={40}>
            <div className="border-2 border-mustard/60 rounded-lg px-5 py-6 bg-white text-center shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="font-display text-4xl text-coral">{day.date}</span>
                <span className="text-xs uppercase tracking-widest text-cocoa-light">
                  {day.month}
                </span>
              </div>
              <h3 className="font-display text-xl mb-1 text-cocoa">{day.title}</h3>
              <p className="text-xs uppercase tracking-wide text-coral mb-3">
                {day.subtitle}
              </p>
              <p className="text-sm text-cocoa-light leading-relaxed">{day.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
