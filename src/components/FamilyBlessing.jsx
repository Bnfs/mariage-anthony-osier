import WaxPattern from './WaxPattern'
import Reveal from './Reveal'

export default function FamilyBlessing() {
  return (
    <section className="relative bg-cream px-6 py-12 md:py-16 text-center overflow-hidden">
      <WaxPattern className="absolute top-3 left-3 w-14 h-14 md:w-20 md:h-20 -rotate-12 opacity-60" />
      <WaxPattern className="absolute bottom-3 right-3 w-14 h-14 md:w-20 md:h-20 rotate-45 opacity-60" />

      <Reveal>
        <p className="font-display italic text-lg md:text-2xl text-cocoa leading-relaxed max-w-xs sm:max-w-sm md:max-w-xl mx-auto">
          C&apos;est avec la bénédiction de nos parents que nous vous
          invitons à célébrer ce jour avec nous.
        </p>
      </Reveal>
    </section>
  )
}
