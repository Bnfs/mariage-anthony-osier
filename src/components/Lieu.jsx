import WaxPattern from './WaxPattern'
import Reveal from './Reveal'

export default function Lieu() {
  return (
    <section id="lieu" className="relative bg-white px-6 py-16 text-center scroll-mt-6 overflow-hidden">
      <WaxPattern className="absolute bottom-2 right-2 w-24 h-24 rotate-45" />
      <WaxPattern className="absolute top-2 left-2 w-20 h-20 -rotate-12" />

      <Reveal>
        <h2 className="font-display text-3xl text-coral mb-6 tracking-wide">Lieu</h2>

        <div className="max-w-xs mx-auto">
          <p className="font-display italic text-xl text-cocoa mb-2">Yaoundé</p>
          <p className="text-sm uppercase tracking-widest text-cocoa-light mb-6">Cameroun</p>
          <p className="text-sm text-cocoa-light leading-relaxed">
            Les cérémonies du 14 et 15 août 2026 se dérouleront à Yaoundé.
            Le détail des adresses vous sera communiqué prochainement.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
