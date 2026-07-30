import { motion } from 'framer-motion'
import WaxPattern from './WaxPattern'
import Reveal from './Reveal'
import NameReveal from './NameReveal'
import coupleImg from '../assets/couple-hero.jpg'
import AfricanMotif from './AfricanMotif'

export default function Hero() {
  return (
    <section className="relative bg-ivory text-cocoa pt-14 pb-16 md:pt-24 md:pb-24 px-6 overflow-hidden">
      <WaxPattern className="absolute top-2 left-2 w-24 h-24 md:w-36 md:h-36" />
      <WaxPattern className="absolute bottom-2 right-2 w-28 h-28 md:w-40 md:h-40 rotate-180" />
      <AfricanMotif type="palm" className="absolute top-1/3 left-4 w-9 h-9 md:w-14 md:h-14 opacity-60" />
      <AfricanMotif type="calabash" className="absolute top-2/3 right-4 w-9 h-9 md:w-14 md:h-14 opacity-60" />

      <div className="relative max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-coral mb-6 md:mb-10">
            Nous nous marions
          </p>
        </Reveal>

        <div className="relative mx-auto w-60 h-60 md:w-80 md:h-80 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full bg-mustard/30 blur-xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-60 h-60 md:w-80 md:h-80 rounded-full border-4 md:border-[6px] border-mustard overflow-hidden bg-white shadow-xl"
          >
            <motion.img
              src={coupleImg}
              alt="Anthony et Osier Andréa"
              className="w-full h-full object-cover"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative -mt-6 md:-mt-8 mx-auto w-fit max-w-[90vw] bg-white/95 border border-mustard/60 rounded-[2rem] px-5 md:px-10 py-3 md:py-4 shadow-md"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:gap-x-3">
            <NameReveal
              text="Anthony"
              delay={0.7}
              className="font-script text-2xl md:text-5xl leading-none text-cocoa"
            />
            <span className="font-display italic text-base md:text-2xl text-coral">&amp;</span>
            <NameReveal
              text="Osier Andréa"
              delay={1.1}
              className="font-script text-2xl md:text-5xl leading-none text-cocoa"
            />
          </div>
        </motion.div>

        <Reveal delay={0.15}>
          <div className="mt-8 md:mt-12 flex items-center justify-center gap-4 md:gap-6 font-display text-3xl md:text-5xl text-coral">
            <span>14</span>
            <span className="text-mustard text-lg md:text-2xl">&</span>
            <span>15</span>
            <span className="text-mustard text-lg md:text-2xl mx-1">/</span>
            <span>08</span>
            <span className="text-mustard text-lg md:text-2xl mx-1">/</span>
            <span>2026</span>
          </div>

          <p className="mt-4 md:mt-6 font-display italic text-lg md:text-2xl text-cocoa">
            S&apos;unissent pour la vie
          </p>
          <p className="mt-1 md:mt-2 text-xs md:text-sm uppercase tracking-widest text-cocoa-light">
            Nsimeyong, Terre Rouge (lieu-dit stade), Yaoundé
          </p>
          <p className="mt-4 md:mt-6 font-script text-xl md:text-3xl text-coral">
            Nos traditions Ekang &amp; Baluba
          </p>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-cocoa-light">
            Chic &amp; Glamour
          </p>
        </Reveal>
      </div>
    </section>
  )
}
