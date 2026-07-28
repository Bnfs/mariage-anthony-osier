import { useState } from 'react'
import Envelope from './components/Envelope'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import MenuIcons from './components/MenuIcons'
import Programme from './components/Programme'
import Lieu from './components/Lieu'
import FloatingPetals from './components/FloatingPetals'

const WEDDING_START = new Date('2026-08-14T09:00:00')

function App() {
  const [opened, setOpened] = useState(false)

  if (!opened) {
    return <Envelope onOpen={() => setOpened(true)} />
  }

  return (
    <main className="min-h-screen bg-cream">
      <FloatingPetals />
      <Hero />
      <Welcome target={WEDDING_START} />
      <MenuIcons />
      <Programme />
      <Lieu />
      <footer className="bg-cocoa text-mustard text-center text-xs py-6 tracking-widest uppercase">
        Anthony &amp; Osier · 14-15 Août 2026 · Yaoundé
      </footer>
    </main>
  )
}

export default App
