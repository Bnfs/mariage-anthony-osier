import { motion } from 'framer-motion'
import WaxPattern from './WaxPattern'
import Reveal from './Reveal'
import NameReveal from './NameReveal'
import coupleImg from '../assets/couple.jpeg'

export default function Hero() {
  return (
    <section className="relative bg-ivory text-cocoa pt-14 pb-16 px-6 overflow-hidden">
      <WaxPattern className="absolute top-2 left-2 w-24 h-24" />
      <WaxPattern className="absolute bottom-2 right-2 w-28 h-28 rotate-180" />

      <div className="relative max-w-xs mx-auto text-center">
        <Reveal>
          <p className="uppercase tracking-[0.3em] text-xs text-coral mb-6">
            Nous nous marions
          </p>
        </Reveal>

        <div className="relative mx-auto w-60 h-60 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full bg-mustard/30 blur-xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-60 h-60 rounded-full border-4 border-mustard overflow-hidden bg-white shadow-xl"
          >
            <img
              src={coupleImg}
              alt="Anthony et Osier"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative -mt-6 mx-auto w-fit bg-white/95 border border-mustard/60 rounded-full px-6 py-2 shadow-md"
        >
          <div className="flex items-center gap-2">
            <NameReveal
              text="Anthony"
              delay={0.7}
              className="font-script text-3xl leading-none text-cocoa"
            />
            <span className="font-display italic text-lg text-coral">&amp;</span>
            <NameReveal
              text="Osier"
              delay={1.1}
              className="font-script text-3xl leading-none text-cocoa"
            />
          </div>
        </motion.div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex items-center justify-center gap-4 font-display text-3xl text-coral">
            <span>14</span>
            <span className="text-mustard text-lg">&</span>
            <span>15</span>
            <span className="text-mustard text-lg mx-1">/</span>
            <span>08</span>
            <span className="text-mustard text-lg mx-1">/</span>
            <span>2026</span>
          </div>

          <p className="mt-4 font-display italic text-lg text-cocoa">
            S&apos;unissent pour la vie
          </p>
          <p className="mt-1 text-xs uppercase tracking-widest text-cocoa-light">
            Yaoundé, Cameroun
          </p>
        </Reveal>
      </div>
    </section>
  )
}
