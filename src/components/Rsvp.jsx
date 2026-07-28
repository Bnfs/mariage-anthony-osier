import WaxPattern from './WaxPattern'
import Reveal from './Reveal'
import AfricanMotif from './AfricanMotif'

const GOOGLE_FORM_URL = '#'

export default function Rsvp() {
  return (
    <section id="rsvp" className="relative bg-white px-6 py-16 md:py-24 text-center scroll-mt-6 overflow-hidden">
      <WaxPattern className="absolute top-4 left-4 w-20 h-20 md:w-28 md:h-28 -rotate-12" />
      <WaxPattern className="absolute bottom-4 right-4 w-20 h-20 md:w-28 md:h-28 rotate-45" />
      <AfricanMotif type="calabash" className="absolute top-1/2 left-3 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 opacity-60" />

      <Reveal>
        <p className="font-display italic text-lg md:text-2xl text-cocoa leading-relaxed max-w-xs sm:max-w-sm md:max-w-xl mx-auto mb-6 md:mb-8">
          Savoir que vous partagerez ce moment inoubliable avec nous
          nous rendra plus heureux.
        </p>

        <h2 className="font-display text-4xl md:text-6xl text-coral tracking-wide mb-3 md:mb-4">RSVP</h2>

        <p className="text-sm md:text-base text-cocoa-light mb-1">
          Merci de confirmer votre présence
        </p>
        <p className="text-sm md:text-base font-medium text-cocoa mb-8 md:mb-10">
          avant le <span className="text-coral">13 Août 2026</span>
        </p>

        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-block border-2 border-mustard rounded-full px-10 md:px-14 py-3 md:py-4 font-display italic text-lg md:text-xl text-cocoa bg-cream hover:bg-mustard/20 transition-colors"
        >
          Confirmer ma présence
        </a>
      </Reveal>
    </section>
  )
}
