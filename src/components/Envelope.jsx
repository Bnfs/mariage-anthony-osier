import { useState } from 'react'
import { motion } from 'framer-motion'
import WaxPattern from './WaxPattern'
import FloatingPetals from './FloatingPetals'
import coupleImg from '../assets/couple.jpeg'
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
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-cocoa px-6 py-10"
    >
      <img
        src={goldFabricBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-cocoa/70" />

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
        className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-lg border-2 md:border-[3px] border-mustard/70 rounded-t-full rounded-b-lg pt-10 md:pt-16 pb-8 md:pb-12 px-6 md:px-10 flex flex-col items-center bg-cream/60 backdrop-blur-sm"
      >
        <div className="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center mb-8 md:mb-10">
          <motion.div
            className="absolute inset-0 rounded-full bg-mustard/40 blur-lg"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-28 h-28 md:w-40 md:h-40 rounded-full bg-ivory border-4 md:border-[5px] border-mustard overflow-hidden shadow-lg"
          >
            <img
              src={coupleImg}
              alt="Anthony et Osier Andréa"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <p className="text-cocoa-light uppercase tracking-[0.2em] text-xs md:text-sm mb-6 md:mb-8 text-center">
          Cliquez sur l&apos;enveloppe
        </p>

        <button
          onClick={handleClick}
          className="group relative w-full aspect-[3/2] focus:outline-none"
          aria-label="Ouvrir l'invitation"
          style={{ perspective: 600 }}
        >
          <motion.div
            className="absolute inset-0 rounded-md bg-coral/90 shadow-xl"
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

        <p className="mt-8 md:mt-10 font-display italic text-cocoa-light text-sm md:text-lg text-center">
          Anthony &amp; Osier Andréa vous invitent
        </p>
      </motion.div>
    </motion.div>
  )
}
