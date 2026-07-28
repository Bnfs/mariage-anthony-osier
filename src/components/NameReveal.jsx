import { motion } from 'framer-motion'

export default function NameReveal({ text, delay = 0, className = '' }) {
  const letters = text.split('')

  return (
    <span className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: delay + i * 0.06, ease: 'easeOut' }}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? ' ' : letter}
        </motion.span>
      ))}
    </span>
  )
}
