import WaxPattern from './WaxPattern'
import Reveal from './Reveal'
import AfricanMotif from './AfricanMotif'
import orangeMoneyIcon from '../assets/orange-money.svg'
import revolutIcon from '../assets/revolut.svg'

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
            Pas de liste de cadeaux !
          </p>
          <p className="mt-4 md:mt-6 text-sm md:text-lg text-cocoa-light leading-relaxed">
            Votre présence à nos côtés sera notre plus beau cadeau. Si vous
            souhaitez toutefois nous témoigner une attention, un numéro
            Orange Money et un lien Revolut sont mis à votre disposition.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap items-stretch justify-center gap-4">
            <div className="inline-flex flex-col items-center gap-2 border-2 border-mustard/50 rounded-2xl bg-white px-8 py-5 shadow-sm">
              <img src={orangeMoneyIcon} alt="Orange Money" className="h-6 md:h-7" />
              <span className="font-display text-lg md:text-xl text-cocoa">
                +237 6 95 09 66 62
              </span>
            </div>

            <a
              href="https://revolut.me/edouardwilly"
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-col items-center gap-2 border-2 border-mustard/50 rounded-2xl bg-white px-8 py-5 shadow-sm hover:bg-mustard/10 transition-colors"
            >
              <img src={revolutIcon} alt="Revolut" className="h-6 md:h-7" />
              <span className="text-xs uppercase tracking-widest text-cocoa-light">
                Envoyer via Revolut
              </span>
            </a>
          </div>

          <p className="mt-8 md:mt-10 text-sm md:text-lg text-cocoa-light leading-relaxed">
            Un panier sera également disponible sur place pour y déposer
            vos cadeaux en nature.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
