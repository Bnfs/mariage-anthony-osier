import { useState } from 'react'
import Envelope from '../components/Envelope'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import MenuIcons from '../components/MenuIcons'
import Blessing from '../components/Blessing'
import InfosPratiques from '../components/InfosPratiques'
import Cadeaux from '../components/Cadeaux'
import FloatingPetals from '../components/FloatingPetals'

const WEDDING_START = new Date('2026-08-14T09:00:00')

export default function Home() {
  const [opened, setOpened] = useState(
    () => sessionStorage.getItem('envelopeOpened') === 'true'
  )

  const handleOpen = () => {
    sessionStorage.setItem('envelopeOpened', 'true')
    setOpened(true)
  }

  if (!opened) {
    return <Envelope onOpen={handleOpen} />
  }

  return (
    <main className="min-h-screen bg-cream">
      <FloatingPetals />
      <Hero />
      <MenuIcons />
      <Welcome target={WEDDING_START} />
      <InfosPratiques />
      <Blessing />
      <Cadeaux />
      <footer className="bg-cocoa text-mustard text-center text-xs md:text-sm py-6 md:py-8 tracking-widest uppercase">
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-2 text-coral"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 21s-7.5-4.8-10-9.3C0.3 8.4 2 5 5.5 5c2 0 3.5 1.1 4.5 2.6C11 6.1 12.5 5 14.5 5 18 5 19.7 8.4 22 11.7 14.5 16.2 12 21 12 21z" />
        </svg>
        Anthony &amp; Osier Andréa · 14 Août 2026 · Yaoundé
      </footer>
    </main>
  )
}
