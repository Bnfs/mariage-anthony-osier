import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import WaxPattern from '../components/WaxPattern'
import Laurel from '../components/Laurel'
import Reveal from '../components/Reveal'
import AfricanMotif from '../components/AfricanMotif'
import bouquetImg from '../assets/bouquet.jpg'
import rosesHeaderImg from '../assets/roses-header.jpg'

const TIMELINE = [
  {
    day: '14 Août 2026',
    time: '14h00',
    title: "Accueil de la famille d'Anthony",
    subtitle: 'Danse traditionnelle & installation',
  },
  {
    day: '14 Août 2026',
    time: '15h30 – 17h30',
    title: 'Cérémonie de la Dot',
    subtitle: 'Demande de main puis cérémonie de dot',
  },
  {
    day: '14 Août 2026',
    time: '18h00',
    title: 'Agapes',
    subtitle: 'Piano Bar, danse & prestations des artistes',
  },
  {
    day: '15 Août 2026',
    time: 'Soirée',
    title: 'Réception',
    subtitle: 'United Hotel · Sur invitation',
  },
]

const CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=' + encodeURIComponent('Mariage Anthony & Osier Andréa') +
  '&dates=20260814/20260816' +
  '&details=' + encodeURIComponent("14 août : accueil, danse traditionnelle et cérémonie de la dot (Nsimeyong, Terre Rouge, Yaoundé). 15 août : réception en soirée à United Hotel, sur invitation.") +
  '&location=' + encodeURIComponent('Nsimeyong, Terre Rouge, Yaoundé, Cameroun')

const PALETTE = [
  { name: 'Champagne', color: '#d9b896' },
  { name: 'Or Rose', color: '#c9a877' },
  { name: 'Blush', color: '#e3b7ae' },
  { name: 'Ivoire', color: '#f5ede4' },
]

export default function ProgrammePage() {
  const headerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  })
  const headerScale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <main className="relative min-h-screen bg-ivory text-cocoa overflow-hidden">
      <WaxPattern className="absolute top-4 left-3 w-16 h-16 md:w-24 md:h-24 -rotate-12" />
      <WaxPattern className="absolute top-[38%] right-2 w-14 h-14 md:w-20 md:h-20 rotate-12 opacity-60" />
      <WaxPattern className="absolute top-[62%] left-2 w-14 h-14 md:w-20 md:h-20 -rotate-45 opacity-60" />
      <WaxPattern className="absolute bottom-10 right-3 w-16 h-16 md:w-24 md:h-24 rotate-45" />
      <AfricanMotif type="djembe" className="absolute top-[25%] left-3 w-9 h-9 md:w-12 md:h-12 opacity-60" />
      <AfricanMotif type="mask" className="absolute top-[75%] right-3 w-9 h-9 md:w-12 md:h-12 opacity-60" />

      <div className="relative max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto px-6 pt-8 md:pt-12 pb-16 md:pb-24">
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
                src={rosesHeaderImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="relative -mt-7 md:-mt-9 mx-auto w-fit bg-white/95 border border-mustard/60 rounded-full px-6 md:px-9 py-2 md:py-3 shadow-md flex items-center gap-2 md:gap-3">
            <Laurel className="w-10 h-4 md:w-14 md:h-6" />
            <h1 className="font-script text-3xl md:text-5xl px-1 shimmer-text">Au Programme</h1>
            <Laurel className="w-10 h-4 md:w-14 md:h-6" flip />
          </div>

          <div className="flex items-center justify-center gap-3 mt-6 md:mt-8 mb-10 md:mb-14">
            <span className="h-px w-8 md:w-12 bg-mustard" />
            <span className="font-display text-lg md:text-2xl tracking-widest text-cocoa">
              14 &amp; 15 Août 2026
            </span>
            <span className="h-px w-8 md:w-12 bg-mustard" />
          </div>
        </Reveal>

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute left-5 top-6 bottom-6 w-px border-l-2 border-dashed border-mustard/50"
          />
          <div className="space-y-6 md:space-y-8">
            {TIMELINE.map((item, i) => (
              <Reveal key={i} delay={i * 0.15} bounce y={30}>
                <div className="relative flex items-start gap-4 md:gap-6 border-2 border-mustard/50 rounded-2xl bg-white px-5 md:px-8 py-4 md:py-6 shadow-md overflow-hidden">
                  <WaxPattern className="absolute -top-3 -right-3 w-12 h-12 md:w-16 md:h-16 opacity-50 rotate-45" />
                  <div className="shrink-0 mt-1 relative">
                    <motion.div
                      aria-hidden="true"
                      className="absolute -inset-2 rounded-full bg-coral/25 blur-md"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    />
                    <motion.div
                      className="relative w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-coral bg-white flex items-center justify-center text-coral font-display text-sm md:text-lg"
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    >
                      {i + 1}
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm uppercase tracking-widest text-mustard">
                      {item.day} · {item.time}
                    </p>
                    <p className="font-display italic text-xl md:text-3xl text-cocoa mt-1">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-sm uppercase tracking-wide text-coral mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.35}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 md:mt-10">
            <motion.a
              href={CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 border-2 border-mustard rounded-full px-6 md:px-8 py-3 md:py-4 font-display italic text-base md:text-lg text-cocoa bg-white shadow-md hover:bg-mustard/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-coral" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="5" width="16" height="16" rx="2" />
                <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
              </svg>
              Ajouter à mon calendrier
            </motion.a>

            <motion.a
              href={`https://wa.me/?text=${encodeURIComponent(
                'Anthony & Osier Andréa se marient 💍 Découvrez le programme du mariage (14 & 15 Août 2026, Yaoundé) : ' +
                  (typeof window !== 'undefined' ? window.location.href : '')
              )}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 border-2 border-[#25D366] rounded-full px-6 md:px-8 py-3 md:py-4 font-display italic text-base md:text-lg text-cocoa bg-white shadow-md hover:bg-[#25D366]/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="#25D366">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.64-1.03-5.13-2.9-6.99A9.82 9.82 0 0 0 12.04 2m0 1.8c2.14 0 4.15.83 5.66 2.35a7.94 7.94 0 0 1 2.35 5.66c0 4.41-3.6 8-8.02 8a8 8 0 0 1-4.07-1.11l-.29-.17-3.02.79.8-2.95-.19-.3a7.9 7.9 0 0 1-1.24-4.27c0-4.42 3.6-8 8.02-8m-4.4 4.6c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03s.87 2.35 1 2.51c.12.16 1.7 2.6 4.13 3.55 2.02.8 2.44.64 2.88.6.44-.04 1.4-.57 1.6-1.13.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28-.24-.12-1.4-.7-1.62-.77-.22-.08-.37-.12-.53.12-.16.24-.6.77-.74.93-.14.16-.27.18-.51.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.32-.74-1.8-.18-.44-.38-.4-.53-.4z" />
              </svg>
              Partager sur WhatsApp
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="relative mt-14 md:mt-20 rounded-2xl border-2 border-mustard/50 bg-white px-6 md:px-12 py-8 md:py-12 text-center overflow-hidden shadow-md">
            <WaxPattern className="absolute top-2 right-2 w-16 h-16 md:w-24 md:h-24 opacity-70" />
            <h2 className="font-script text-3xl md:text-5xl text-coral mb-3 md:mb-5">Dress-code</h2>
            <p className="text-sm md:text-lg text-cocoa-light leading-relaxed mb-1">
              Chic et Élégant
            </p>
            <p className="text-sm md:text-lg text-cocoa-light leading-relaxed mb-4 md:mb-6">
              Tenue de soirée et de cérémonie
            </p>
            <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
              <Laurel className="w-9 h-4 md:w-12 md:h-5" />
              <p className="font-script text-2xl md:text-4xl text-cocoa px-1">
                Champagne &amp; Timeless Elegance
              </p>
              <Laurel className="w-9 h-4 md:w-12 md:h-5" flip />
            </div>
            <div className="flex items-center justify-center gap-3 md:gap-5">
              {PALETTE.map((p) => (
                <div key={p.name} className="flex flex-col items-center gap-1 md:gap-2">
                  <span
                    className="w-9 h-9 md:w-14 md:h-14 rounded-md border border-mustard/40 shadow-sm"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="text-[10px] md:text-xs uppercase tracking-wide text-cocoa-light">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="relative mt-10 md:mt-14">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-2xl bg-coral/20 blur-xl"
            />
            <img
              src={bouquetImg}
              alt="Bouquet de mariage"
              className="relative w-full rounded-2xl shadow-lg object-cover h-64 md:h-96 border-2 border-mustard/40"
            />
          </div>
        </Reveal>
      </div>
    </main>
  )
}
