import Countdown from './Countdown'
import WaxPattern from './WaxPattern'
import Reveal from './Reveal'
import AfricanMotif from './AfricanMotif'

export default function Welcome({ target }) {
  return (
    <section className="relative bg-white px-6 py-14 md:py-24 text-center overflow-hidden">
      <WaxPattern className="absolute top-4 right-2 w-20 h-20 md:w-28 md:h-28" />
      <WaxPattern className="absolute bottom-4 left-2 w-24 h-24 md:w-32 md:h-32 rotate-90" />
      <AfricanMotif type="necklace" className="absolute top-1/2 left-3 -translate-y-1/2 w-11 h-11 md:w-16 md:h-16 opacity-80" />

      <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto">
        <Reveal>
          <p className="font-display italic text-lg md:text-2xl text-cocoa leading-relaxed">
            « Il n&apos;y a qu&apos;un bonheur dans la vie, c&apos;est
            d&apos;aimer et de se sentir aimé. »
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="my-8 md:my-12 flex items-center justify-center gap-3">
            <span className="h-px w-10 md:w-16 bg-mustard" />
            <span className="font-display text-2xl md:text-4xl tracking-widest text-coral">
              Bienvenue
            </span>
            <span className="h-px w-10 md:w-16 bg-mustard" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Countdown target={target} />
        </Reveal>
      </div>
    </section>
  )
}
