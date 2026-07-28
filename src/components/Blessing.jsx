import WaxPattern from './WaxPattern'
import Laurel from './Laurel'
import Reveal from './Reveal'
import AfricanMotif from './AfricanMotif'

export default function Blessing() {
  return (
    <section className="relative bg-white px-6 py-16 md:py-24 text-center overflow-hidden">
      <WaxPattern className="absolute top-4 right-4 w-20 h-20 md:w-28 md:h-28" />
      <WaxPattern className="absolute bottom-4 left-4 w-20 h-20 md:w-28 md:h-28 rotate-180" />
      <AfricanMotif type="mask" className="absolute top-1/2 left-3 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 opacity-60" />

      <Reveal>
        <div className="max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <Laurel className="w-12 h-5 md:w-16 md:h-7" />
            <Laurel className="w-12 h-5 md:w-16 md:h-7" flip />
          </div>
          <p className="font-display italic text-xl md:text-3xl text-cocoa leading-relaxed">
            Votre présence honore notre union et bénit le chemin que nous
            entamons ensemble.
          </p>
          <p className="mt-4 md:mt-6 font-script text-2xl md:text-4xl text-coral">
            Merci d&apos;être des nôtres
          </p>
        </div>
      </Reveal>
    </section>
  )
}
