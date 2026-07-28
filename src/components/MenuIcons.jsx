import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import WaxPattern from './WaxPattern'
import Laurel from './Laurel'

const MotionLink = motion(Link)

const ITEMS = [
  {
    label: 'Détails de la journée',
    route: '/programme',
    icon: (
      <path d="M4 4h16v16H4z M4 9h16 M8 3v3 M16 3v3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    ),
  },
  {
    label: 'Lieu',
    target: '#lieu',
    icon: (
      <path
        d="M12 21s7-6.5 7-11.5A7 7 0 1 0 5 9.5C5 14.5 12 21 12 21z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    ),
  },
  {
    label: 'Menu',
    route: '/menu',
    icon: (
      <path
        d="M7 3v8 M5 3v5a2 2 0 0 0 4 0V3 M17 3c-2 0-3 2-3 5s1 4 3 4 M17 3v18"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    ),
  },
  {
    label: 'Contacts',
    target: '#contacts',
    icon: (
      <path
        d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2C10.5 19 5 13.5 5 6a2 2 0 0 1 1-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: 'Cadeaux',
    target: '#cadeaux',
    icon: (
      <path
        d="M4 8h16v4H4z M5 12h14v9H5z M12 8v13 M8 8c-2 0-3-1.5-3-3s1-2 2-2c2 0 3 3 3 5 M16 8c2 0 3-1.5 3-3s-1-2-2-2c-2 0-3 3-3 5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
]

export default function MenuIcons() {
  return (
    <section className="relative bg-cream px-6 py-16 md:py-24 overflow-hidden">
      <WaxPattern className="absolute top-6 left-4 w-16 h-16 md:w-24 md:h-24 -rotate-12" />
      <WaxPattern className="absolute bottom-10 right-4 w-16 h-16 md:w-24 md:h-24 rotate-45" />

      <Reveal className="relative max-w-xs sm:max-w-sm md:max-w-3xl mx-auto">
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-t-[10rem] rounded-b-[3rem] md:rounded-[3rem] bg-mustard/25 blur-2xl"
        />

        <div className="relative rounded-t-[10rem] rounded-b-[3rem] md:rounded-[3rem] border-2 border-mustard bg-white/60 backdrop-blur-sm shadow-xl px-6 md:px-14 pt-12 md:pt-14 pb-12 md:pb-14 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-9 md:gap-x-14 md:gap-y-10">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-[6px] rounded-t-[9.5rem] rounded-b-[2.5rem] md:rounded-[2.7rem] border border-mustard/40"
          />
          <WaxPattern className="absolute top-4 right-5 w-9 h-9 opacity-70" />
          <WaxPattern className="absolute bottom-4 left-5 w-9 h-9 rotate-180 opacity-70" />

          <div className="flex items-center gap-2 -mt-2 md:mt-0 md:basis-full md:justify-center">
            <Laurel className="w-12 h-5 md:w-16 md:h-7" />
            <span className="font-script text-2xl md:text-4xl text-coral px-1">Explorez</span>
            <Laurel className="w-12 h-5 md:w-16 md:h-7" flip />
          </div>

          {ITEMS.map((item) => {
            const content = (
              <>
                <span
                  aria-hidden="true"
                  className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(217,74,36,0.30) 0%, rgba(217,74,36,0.14) 45%, rgba(217,74,36,0) 75%)',
                  }}
                />
                <span className="relative w-16 h-16 md:w-20 md:h-20">
                  <motion.span
                    aria-hidden="true"
                    className="absolute -left-7 md:-left-8 top-1/2 -translate-y-1/2 text-xl md:text-2xl"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    👉
                  </motion.span>
                  <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-coral flex items-center justify-center text-coral shadow-md">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-9 md:h-9">
                      {item.icon}
                    </svg>
                  </span>
                </span>
                <span className="text-xs md:text-sm font-medium tracking-wide text-center leading-tight max-w-[6.5rem] md:max-w-[8rem]">
                  {item.label}
                </span>
              </>
            )

            return item.route ? (
              <MotionLink
                key={item.label}
                to={item.route}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex flex-col items-center gap-2 text-cocoa md:w-32"
              >
                {content}
              </MotionLink>
            ) : (
              <motion.a
                key={item.label}
                href={item.target}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex flex-col items-center gap-2 text-cocoa md:w-32"
              >
                {content}
              </motion.a>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
