export default function Laurel({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 60 24"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      <path d="M2 20 Q30 20 56 4" stroke="#d99a24" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {[0, 1, 2, 3, 4].map((i) => {
        const x = 10 + i * 9
        const y = 19 - i * 3.2
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="5"
            ry="2.6"
            fill="#d94a24"
            opacity={0.85}
            transform={`rotate(${-30 - i * 6} ${x} ${y})`}
          />
        )
      })}
    </svg>
  )
}
