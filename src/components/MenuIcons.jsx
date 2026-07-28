import { motion } from 'framer-motion'
import Reveal from './Reveal'

const ITEMS = [
  {
    label: 'Programme',
    target: '#programme',
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
]

export default function MenuIcons() {
  return (
    <section className="bg-cream px-6 py-12">
      <Reveal className="max-w-xs mx-auto flex justify-center gap-10">
        {ITEMS.map((item) => (
          <motion.a
            key={item.label}
            href={item.target}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-2 text-cocoa"
          >
            <span className="w-16 h-16 rounded-full bg-white border-2 border-coral flex items-center justify-center text-coral shadow-sm">
              <svg viewBox="0 0 24 24" className="w-7 h-7">
                {item.icon}
              </svg>
            </span>
            <span className="text-xs font-medium tracking-wide">{item.label}</span>
          </motion.a>
        ))}
      </Reveal>
    </section>
  )
}
