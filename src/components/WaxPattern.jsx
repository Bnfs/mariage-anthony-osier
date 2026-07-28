export default function WaxPattern({ className = '', opacity = 0.9 }) {
  return (
    <svg
      className={className}
      style={{ opacity }}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="none" stroke="#3b2318" strokeWidth="3.5" strokeLinecap="round">
        <path d="M5 60 Q30 55 45 40 T80 25 Q95 18 110 10" />
        <path d="M45 40 Q40 55 50 65" />
        <path d="M70 30 Q75 15 90 10" />
      </g>
      <circle cx="8" cy="60" r="3" fill="#d99a24" />
      <circle cx="50" cy="65" r="3" fill="#d99a24" />
      <circle cx="90" cy="10" r="3" fill="#d99a24" />
      <circle cx="108" cy="11" r="3" fill="#d99a24" />

      <g transform="translate(58,58)">
        <g fill="#3b2318">
          <ellipse cx="-16" cy="-4" rx="11" ry="7" transform="rotate(-30 -16 -4)" />
          <ellipse cx="16" cy="-4" rx="11" ry="7" transform="rotate(30 16 -4)" />
          <ellipse cx="0" cy="-16" rx="7" ry="11" />
        </g>
        <g fill="#d94a24" stroke="#3b2318" strokeWidth="1">
          <ellipse cx="0" cy="-14" rx="7" ry="9" />
          <ellipse cx="12" cy="-6" rx="7" ry="9" transform="rotate(70 12 -6)" />
          <ellipse cx="10" cy="9" rx="7" ry="9" transform="rotate(140 10 9)" />
          <ellipse cx="-10" cy="9" rx="7" ry="9" transform="rotate(-140 -10 9)" />
          <ellipse cx="-12" cy="-6" rx="7" ry="9" transform="rotate(-70 -12 -6)" />
        </g>
        <circle r="6" fill="#d99a24" />
        <circle r="6" fill="none" stroke="#3b2318" strokeWidth="1" />
      </g>

      <g transform="translate(24,95) scale(0.55)">
        <g fill="#d94a24" stroke="#3b2318" strokeWidth="1.5">
          <ellipse cx="0" cy="-14" rx="7" ry="9" />
          <ellipse cx="12" cy="-6" rx="7" ry="9" transform="rotate(70 12 -6)" />
          <ellipse cx="10" cy="9" rx="7" ry="9" transform="rotate(140 10 9)" />
          <ellipse cx="-10" cy="9" rx="7" ry="9" transform="rotate(-140 -10 9)" />
          <ellipse cx="-12" cy="-6" rx="7" ry="9" transform="rotate(-70 -12 -6)" />
        </g>
        <circle r="6" fill="#d99a24" />
      </g>
    </svg>
  )
}
