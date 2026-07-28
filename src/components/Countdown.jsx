import { useEffect, useState } from 'react'

function getTimeLeft(target) {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown({ target }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Jours', value: timeLeft.days },
    { label: 'Heures', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ]

  return (
    <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-cocoa text-ivory flex items-center justify-center font-display text-xl sm:text-2xl md:text-3xl shadow-md border-2 md:border-[3px] border-mustard">
            {String(u.value).padStart(2, '0')}
          </div>
          <span className="mt-1 md:mt-2 text-[10px] sm:text-xs md:text-sm tracking-widest uppercase text-cocoa-light">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  )
}
