import Countdown from './Countdown'
import WaxPattern from './WaxPattern'
import Reveal from './Reveal'

export default function Welcome({ target }) {
  return (
    <section className="relative bg-white px-6 py-14 text-center overflow-hidden">
      <WaxPattern className="absolute top-4 right-2 w-20 h-20" />
      <WaxPattern className="absolute bottom-4 left-2 w-24 h-24 rotate-90" />

      <div className="max-w-xs mx-auto">
        <Reveal>
          <p className="font-display italic text-lg text-cocoa leading-relaxed">
            « Nous venons de deux chemins différents, avec nos blessures,
            nos combats, nos rêves…
          </p>
          <p className="font-display italic text-lg text-cocoa leading-relaxed mt-4">
            Mais Dieu, le temps et l&apos;amour ont uni nos pas pour écrire
            une seule histoire. »
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="my-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-mustard" />
            <span className="font-display text-2xl tracking-widest text-coral">
              Bienvenue
            </span>
            <span className="h-px w-10 bg-mustard" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Countdown target={target} />
        </Reveal>
      </div>
    </section>
  )
}
