import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '', y = 24, bounce = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={
        bounce
          ? { type: 'spring', stiffness: 260, damping: 18, delay }
          : { duration: 0.45, delay, ease: 'easeOut' }
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
