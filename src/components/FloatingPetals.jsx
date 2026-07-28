import { useMemo } from 'react'
import { motion } from 'framer-motion'

const PETALS = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  left: (i * 31 + 7) % 100,
  size: 28 + ((i * 37) % 34),
  duration: 14 + ((i * 13) % 10),
  delay: (i * 1.7) % 8,
  drift: (i % 2 === 0 ? 1 : -1) * (20 + (i * 11) % 30),
}))

let gradId = 0

function Petal({ size }) {
  const id = useMemo(() => `petal-grad-${gradId++}`, [])
  return (
    <svg viewBox="0 0 24 30" width={size} height={size * 1.25}>
      <defs>
        <radialGradient id={id} cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#b3323f" />
          <stop offset="45%" stopColor="#7a1f2b" />
          <stop offset="100%" stopColor="#4a1018" />
        </radialGradient>
      </defs>
      <path
        d="M12 1
           C 19 5, 22 14, 15 22
           C 13 25, 11 27, 12 29
           C 8 26, 3 20, 3 13
           C 3 6, 7 2, 12 1 Z"
        fill={`url(#${id})`}
        stroke="#3b0c12"
        strokeWidth="0.4"
        opacity="0.9"
      />
      <path
        d="M12 3 C 10 9, 9 17, 12 26"
        fill="none"
        stroke="#d99a8f"
        strokeWidth="0.6"
        opacity="0.4"
      />
    </svg>
  )
}

export default function FloatingPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true">
      {PETALS.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.left}%`, top: -40 }}
          initial={{ y: -40, x: 0, rotate: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, p.drift, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Petal size={p.size} />
        </motion.div>
      ))}
    </div>
  )
}
