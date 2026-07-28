import WaxPattern from './WaxPattern'
import Reveal from './Reveal'
import AfricanMotif from './AfricanMotif'

const CONTACTS = [
  { name: 'Anthony', phone: 'À venir' },
  { name: 'Osier', phone: 'À venir' },
]

export default function Contacts() {
  return (
    <section id="contacts" className="relative bg-ivory px-6 py-16 md:py-24 text-center scroll-mt-6 overflow-hidden">
      <WaxPattern className="absolute top-2 left-2 w-20 h-20 md:w-28 md:h-28 -rotate-12" />
      <WaxPattern className="absolute bottom-2 right-2 w-20 h-20 md:w-28 md:h-28 rotate-45" />
      <AfricanMotif type="djembe" className="absolute top-1/2 left-3 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 opacity-60" />

      <Reveal>
        <h2 className="font-display text-3xl md:text-5xl text-coral mb-8 md:mb-12 tracking-wide">Contacts</h2>

        <div className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto space-y-5 md:space-y-6">
          {CONTACTS.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between border-2 border-mustard/50 rounded-lg px-5 md:px-8 py-4 md:py-5 bg-white"
            >
              <span className="font-display italic text-lg md:text-2xl text-cocoa">{c.name}</span>
              <span className="text-sm md:text-base text-cocoa-light">{c.phone}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 md:mt-10 text-sm md:text-base text-cocoa-light italic">
          Pour toute question, n&apos;hésitez pas à nous contacter.
        </p>
      </Reveal>
    </section>
  )
}
