import { motion } from 'framer-motion'
import WaxPattern from './WaxPattern'
import Reveal from './Reveal'
import AfricanMotif from './AfricanMotif'

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Entr%C3%A9e+Terre+Rouge/@3.8317215,11.490817,17z/data=!3m1!4b1!4m6!3m5!1s0x108bcfd9a126b0dd:0xf2e93eb71cfa5275!8m2!3d3.8317162!4d11.4933919!16s%2Fg%2F1pp2tzjx8?authuser=0'

const PHONES = ['+237 697 97 89 67', '+237 6 98 29 91 12']

const PhoneIcon = (
  <path
    d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2C10.5 19 5 13.5 5 6a2 2 0 0 1 1-3z"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinejoin="round"
  />
)

export default function InfosPratiques() {
  return (
    <section id="lieu" className="relative bg-white px-6 py-16 md:py-24 text-center scroll-mt-6 overflow-hidden">
      <WaxPattern className="absolute top-2 left-2 w-20 h-20 md:w-28 md:h-28 -rotate-12" />
      <WaxPattern className="absolute bottom-2 right-2 w-20 h-20 md:w-28 md:h-28 rotate-45" />
      <AfricanMotif type="cowrie" className="absolute top-1/4 left-3 -translate-y-1/2 w-11 h-11 md:w-16 md:h-16 opacity-80" />
      <AfricanMotif type="sandal" className="absolute bottom-1/4 right-3 w-11 h-11 md:w-16 md:h-16 opacity-80" />

      <Reveal>
        <h2 className="font-display text-3xl md:text-5xl text-coral mb-6 md:mb-10 tracking-wide">Infos pratiques</h2>

        <div className="max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto space-y-10 md:space-y-14">
          <div>
            <p className="text-xs uppercase tracking-widest text-mustard mb-2">14 Août 2026</p>
            <p className="font-display italic text-xl md:text-3xl text-cocoa mb-1">
              Nsimeyong, Terre Rouge
            </p>
            <p className="text-sm md:text-base uppercase tracking-widest text-cocoa-light mb-6">
              (lieu-dit stade), Yaoundé
            </p>

            <motion.a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 border-2 border-mustard rounded-full px-6 md:px-8 py-3 md:py-4 font-display italic text-base md:text-lg text-cocoa bg-cream shadow-md hover:bg-mustard/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-coral" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21s7-6.5 7-11.5A7 7 0 1 0 5 9.5C5 14.5 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              Voir sur Google Maps
            </motion.a>
          </div>

          <div id="contacts" className="scroll-mt-6 pt-4 border-t border-mustard/30">
            <p className="text-xs uppercase tracking-widest text-mustard mb-4">Contacts</p>
            <div className="flex flex-wrap items-stretch justify-center gap-4 md:gap-6">
              {PHONES.map((phone) => (
                <motion.a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-3 border-2 border-mustard/50 rounded-full bg-white px-6 md:px-8 py-4 shadow-sm hover:bg-mustard/10 transition-colors"
                >
                  <span className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-coral flex items-center justify-center text-coral shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      {PhoneIcon}
                    </svg>
                  </span>
                  <span className="font-display text-base md:text-xl text-cocoa">{phone}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
