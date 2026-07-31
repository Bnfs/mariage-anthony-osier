import { motion } from 'framer-motion'
import WaxPattern from './WaxPattern'
import Reveal from './Reveal'
import AfricanMotif from './AfricanMotif'

const PHONES = ['+237 6 95 09 66 62', '+237 6 98 29 91 12']

const PhoneIcon = (
  <path
    d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2C10.5 19 5 13.5 5 6a2 2 0 0 1 1-3z"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinejoin="round"
  />
)

export default function Contacts() {
  return (
    <section id="contacts" className="relative bg-ivory px-6 py-16 md:py-24 text-center scroll-mt-6 overflow-hidden">
      <WaxPattern className="absolute top-2 left-2 w-20 h-20 md:w-28 md:h-28 -rotate-12" />
      <WaxPattern className="absolute bottom-2 right-2 w-20 h-20 md:w-28 md:h-28 rotate-45" />
      <AfricanMotif type="sandal" className="absolute top-1/2 left-3 -translate-y-1/2 w-11 h-11 md:w-16 md:h-16 opacity-80" />

      <Reveal>
        <h2 className="font-display text-3xl md:text-5xl text-coral mb-3 md:mb-4 tracking-wide">Contacts</h2>
        <p className="text-sm md:text-lg text-cocoa-light italic mb-8 md:mb-12">
          Pour toute question, n&apos;hésitez pas à nous joindre
        </p>

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
      </Reveal>
    </section>
  )
}
