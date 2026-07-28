import WaxPattern from './WaxPattern'
import Reveal from './Reveal'
import AfricanMotif from './AfricanMotif'

export default function Cadeaux() {
  return (
    <section id="cadeaux" className="relative bg-ivory px-6 py-16 md:py-24 text-center scroll-mt-6 overflow-hidden">
      <WaxPattern className="absolute top-4 right-4 w-20 h-20 md:w-28 md:h-28" />
      <WaxPattern className="absolute bottom-4 left-4 w-20 h-20 md:w-28 md:h-28 rotate-180" />
      <AfricanMotif type="palm" className="absolute top-1/2 left-3 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 opacity-60" />

      <Reveal>
        <h2 className="font-display text-3xl md:text-5xl text-coral mb-6 md:mb-10 tracking-wide">Cadeaux</h2>

        <div className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto">
          <p className="font-display italic text-lg md:text-2xl text-cocoa leading-relaxed">
            Votre présence est le plus beau des cadeaux.
          </p>
          <p className="mt-4 md:mt-6 text-sm md:text-lg text-cocoa-light leading-relaxed">
            Si toutefois vous souhaitez nous gâter, les modalités
            seront communiquées prochainement.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
