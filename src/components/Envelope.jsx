import { useState } from 'react'
import { motion } from 'framer-motion'
import WaxPattern from './WaxPattern'
import FloatingPetals from './FloatingPetals'
import coupleImg from '../assets/couple-envelope.jpg'
import goldFabricBg from '../assets/gold-fabric-bg.jpg'

export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false)

  const handleClick = () => {
    if (opening) return
    setOpening(true)
    setTimeout(onOpen, 650)
  }

  return (
    <motion.div
      animate={{ opacity: opening ? 0 : 1 }}
      transition={{ duration: 0.35, delay: opening ? 0.35 : 0 }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-cocoa px-4 py-4"
    >
      <motion.img
        src={goldFabricBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.15, x: 0, y: 0 }}
        animate={{ x: [0, -14, 6, 0], y: [0, -10, 8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-cocoa/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, transparent 35%, rgba(20,10,5,0.65) 100%)',
        }}
      />

      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-mustard"
          style={{
            left: `${(i * 37 + 8) % 100}%`,
            top: `${(i * 53 + 12) % 100}%`,
            fontSize: 10 + (i % 3) * 4,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6] }}
          transition={{
            duration: 2.5 + (i % 4),
            repeat: Infinity,
            delay: i * 0.6,
            ease: 'easeInOut',
          }}
        >
          ✦
        </motion.span>
      ))}

      <FloatingPetals />
      <WaxPattern className="absolute -top-2 -left-2 w-28 h-28" />
      <WaxPattern className="absolute -bottom-4 -right-4 w-32 h-32 rotate-180" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: opening ? 0 : 1,
          y: 0,
          scale: opening ? 1.08 : 1,
        }}
        transition={{ duration: 0.4 }}
        style={{ boxShadow: '0 25px 60px -15px rgba(0,0,0,0.6), 0 10px 25px -8px rgba(0,0,0,0.4)' }}
        className="relative z-10 w-full max-w-[19rem] sm:max-w-sm md:max-w-lg border-2 md:border-[3px] border-mustard/70 rounded-t-full rounded-b-lg pt-6 md:pt-10 pb-5 md:pb-8 px-5 md:px-10 flex flex-col items-center bg-cream/60 backdrop-blur-sm"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-[5px] md:inset-[7px] rounded-t-full rounded-b-md border border-mustard/40"
        />

        <div className="relative w-20 h-20 md:w-32 md:h-32 flex items-center justify-center mb-3 md:mb-6">
          <motion.div
            className="absolute inset-0 rounded-full bg-mustard/40 blur-lg"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -inset-1 rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, transparent, #ffe9a8 8%, transparent 20%)',
              WebkitMaskImage:
                'radial-gradient(circle, transparent 64%, black 65%)',
              maskImage: 'radial-gradient(circle, transparent 64%, black 65%)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-20 h-20 md:w-32 md:h-32 rounded-full bg-ivory border-4 md:border-[5px] border-mustard overflow-hidden shadow-lg"
          >
            <img
              src={coupleImg}
              alt="Anthony et Osier Andréa"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <p className="font-display italic text-cocoa text-base md:text-lg text-center mb-2 md:mb-5 leading-snug">
          Deux familles, une union, une tradition.
        </p>

        <p className="text-cocoa-light uppercase tracking-[0.2em] text-sm md:text-sm mb-3 md:mb-6 text-center">
          Cliquez sur l&apos;enveloppe
        </p>

        <button
          onClick={handleClick}
          className="group relative w-full max-w-[13rem] md:max-w-xs aspect-[3/2] focus:outline-none"
          aria-label="Ouvrir l'invitation"
          style={{ perspective: 600 }}
        >
          <motion.div
            className="absolute inset-0 rounded-md bg-cream border-2 border-mustard shadow-xl"
            animate={{ scale: opening ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-cocoa origin-top"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            animate={{ rotateX: opening ? -175 : 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={
              opening
                ? { opacity: 0, scale: 2.2 }
                : { opacity: 1, scale: [1, 1.15, 1] }
            }
            transition={
              opening
                ? { duration: 0.5, ease: 'easeOut' }
                : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            <div className="w-10 h-10 rounded-full bg-ivory border-2 border-mustard flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-cocoa" />
            </div>
          </motion.div>
        </button>

        <p className="mt-4 md:mt-6 font-display italic text-cocoa-light text-base md:text-lg text-center">
          Anthony &amp; Osier Andréa ont le bonheur de vous inviter à célébrer leur union
        </p>

        <div className="mt-3 md:mt-6 pt-3 md:pt-6 border-t border-mustard/40 w-full">
          <p className="font-display italic text-cocoa text-base md:text-base text-center leading-snug">
            « Celui qui trouve une femme trouve le bonheur ; c&apos;est une
            grâce qu&apos;il obtient de l&apos;Éternel. »
          </p>
          <p className="mt-1 text-cocoa-light text-sm md:text-xs uppercase tracking-widest text-center">
            Proverbes 18:22
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
