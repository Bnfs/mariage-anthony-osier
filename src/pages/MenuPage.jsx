import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import WaxPattern from '../components/WaxPattern'
import Laurel from '../components/Laurel'
import Reveal from '../components/Reveal'
import FloatingPetals from '../components/FloatingPetals'
import AfricanMotif from '../components/AfricanMotif'
import tableSettingImg from '../assets/table-setting.jpg'
import calabashImg from '../assets/calabash.jpg'
import djembeImg from '../assets/djembe.jpg'

const CATEGORIES = [
  {
    name: 'Les Entrées',
    motif: 'calabash',
    items: ["Verrines d'avocat au saumon", 'Salade croquante', 'Charcuteries'],
  },
  {
    name: 'Les Plats Chauds',
    motif: 'djembe',
    items: [
      'Filet de capitaine à la dieppoise',
      'Suprême de volaille cordon bleu',
      'Porc aux échalotes',
      'Gambas sautées aux champignons',
      'Mini steak au poivre vert',
      'Ndolé façon 237',
      "Ndomba de poisson d'eau douce",
      'Ndomba de vipère',
      'Ndomba de gibier',
      'Gombo au crabe',
      'Mbongo de porc',
      'Mets de pistache',
    ],
  },
  {
    name: 'Les Accompagnements',
    motif: 'palm',
    items: [
      'Riz aux vermicelles',
      'Plantains frits',
      'Pommes rissolées',
      'Ignames',
      'Bâton de manioc',
      "Macabos bassa'a",
      'Plantain pilé',
    ],
  },
  {
    name: 'Les Desserts',
    motif: 'mask',
    items: ['Somptueuse table de fruits de saison'],
  },
]

export default function MenuPage() {
  const headerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  })
  const headerScale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <main className="relative min-h-screen bg-ivory text-cocoa overflow-hidden">
      <FloatingPetals />
      <WaxPattern className="absolute top-4 left-3 w-16 h-16 md:w-24 md:h-24 -rotate-12" />
      <WaxPattern className="absolute top-[45%] right-2 w-14 h-14 md:w-20 md:h-20 rotate-12 opacity-60" />
      <WaxPattern className="absolute bottom-10 right-3 w-16 h-16 md:w-24 md:h-24 rotate-45" />

      <div className="relative max-w-xs sm:max-w-sm md:max-w-2xl mx-auto px-6 pt-8 md:pt-12 pb-16 md:pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm md:text-base text-cocoa-light mb-8 md:mb-10 hover:text-coral transition-colors"
        >
          ← Retour
        </Link>

        <Reveal>
          <div ref={headerRef} className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full bg-mustard/40 blur-2xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              style={{ scale: headerScale, y: headerY }}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 md:border-[6px] border-mustard shadow-xl"
            >
              <img
                src={tableSettingImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="relative -mt-7 md:-mt-9 mx-auto w-fit bg-white/95 border border-mustard/60 rounded-full px-6 md:px-9 py-2 md:py-3 shadow-md flex items-center gap-2 md:gap-3">
            <Laurel className="w-10 h-4 md:w-14 md:h-6" />
            <h1 className="font-script text-3xl md:text-5xl px-1 shimmer-text">Menu</h1>
            <Laurel className="w-10 h-4 md:w-14 md:h-6" flip />
          </div>

          <div className="flex items-center justify-center gap-3 mt-6 md:mt-8 mb-10 md:mb-14">
            <span className="h-px w-8 md:w-12 bg-mustard" />
            <span className="font-display text-lg md:text-2xl tracking-widest text-cocoa">
              Anthony &amp; Osier
            </span>
            <span className="h-px w-8 md:w-12 bg-mustard" />
          </div>
        </Reveal>

        <div className="space-y-10 md:space-y-14">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.12} bounce y={30}>
              <div className="relative">
                <AfricanMotif
                  type={cat.motif}
                  className={`absolute -top-2 w-8 h-8 md:w-11 md:h-11 opacity-70 ${
                    i % 2 === 0 ? 'left-0 md:left-4' : 'right-0 md:right-4'
                  }`}
                />
                <div className="relative mx-auto w-fit bg-coral rounded-full px-8 md:px-12 py-2 md:py-3 shadow-md mb-5 md:mb-7">
                  <span className="font-script text-2xl md:text-3xl text-white">
                    {cat.name}
                  </span>
                </div>
                <ul className="text-center space-y-2 md:space-y-3">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="font-display italic text-lg md:text-xl text-cocoa-light"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {i === 0 && (
                <Reveal delay={0.15} className="flex justify-center my-10 md:my-14">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-coral/25 blur-lg"
                    />
                    <img
                      src={calabashImg}
                      alt=""
                      className="relative w-full h-full rounded-full object-cover border-4 border-mustard shadow-md"
                    />
                  </div>
                </Reveal>
              )}
              {i === 2 && (
                <Reveal delay={0.15} className="flex justify-center my-10 md:my-14">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-coral/25 blur-lg"
                    />
                    <img
                      src={djembeImg}
                      alt=""
                      className="relative w-full h-full rounded-full object-cover border-4 border-mustard shadow-md"
                    />
                  </div>
                </Reveal>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <p className="mt-14 md:mt-20 text-center font-script text-2xl md:text-3xl text-coral">
            Bon appétit !
          </p>
        </Reveal>
      </div>
    </main>
  )
}
