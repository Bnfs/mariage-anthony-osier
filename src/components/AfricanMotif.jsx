const ICONS = {
  calabash: (
    <>
      <path d="M12 3c3 2 5 6 5 10a5 5 0 0 1-10 0c0-4 2-8 5-10z" />
      <path d="M9 8h6" strokeLinecap="round" />
    </>
  ),
  djembe: (
    <>
      <path d="M8 4h8l-1.5 6h-5L8 4z" />
      <path d="M6.5 10h11l-2 10a2.5 2.5 0 0 1-2.3 2h-2.4a2.5 2.5 0 0 1-2.3-2l-2-10z" />
      <path d="M7 13h10M7.6 16h8.8" strokeLinecap="round" />
    </>
  ),
  palm: (
    <>
      <path d="M12 21V10" strokeLinecap="round" />
      <path d="M12 10c-3-1-6 0-8 2 2 3 6 3 8 1" />
      <path d="M12 10c3-1 6 0 8 2-2 3-6 3-8 1" />
      <path d="M12 10c-1-3-1-5 1-7 2 2 1 5-1 7z" />
    </>
  ),
  mask: (
    <>
      <path d="M12 3c-3.5 0-6 2.7-6 7 0 5 2.5 9.5 4 11 .6-1 1-2 2-2s1.4 1 2 2c1.5-1.5 4-6 4-11 0-4.3-2.5-7-6-7z" />
      <path d="M9 10.5c.5-1 1.5-1 2 0M13 10.5c.5-1 1.5-1 2 0" strokeLinecap="round" />
      <path d="M10 15c.7.6 1.3.6 2 0 .7.6 1.3.6 2 0" strokeLinecap="round" />
    </>
  ),
  necklace: (
    <>
      <path d="M4 5c0 7 4 11 8 11s8-4 8-11" strokeLinecap="round" />
      <circle cx="4" cy="5" r="1.1" fill="#3b2318" stroke="none" />
      <circle cx="6.2" cy="9.2" r="1.1" fill="#3b2318" stroke="none" />
      <circle cx="9" cy="12.6" r="1.1" fill="#3b2318" stroke="none" />
      <circle cx="15" cy="12.6" r="1.1" fill="#3b2318" stroke="none" />
      <circle cx="17.8" cy="9.2" r="1.1" fill="#3b2318" stroke="none" />
      <circle cx="20" cy="5" r="1.1" fill="#3b2318" stroke="none" />
      <path d="M11 15.5l1 2.5 1-2.5" fill="none" strokeLinejoin="round" />
    </>
  ),
  basket: (
    <>
      <path d="M5 10h14l-1.5 9a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 10z" />
      <path d="M8 4c0 3.5 1.8 6 4 6s4-2.5 4-6" strokeLinecap="round" />
      <path d="M6.2 13.5h11.6M6.7 17h10.6" strokeLinecap="round" />
      <path d="M9 10l1 11M15 10l-1 11" strokeLinecap="round" />
    </>
  ),
  cowrie: (
    <>
      <path d="M12 3c4 0 7 4 7 8.5S16 21 12 21s-7-5-7-9.5S8 3 12 3z" />
      <path d="M12 6c1 3 1 9 0 12M9.5 8c.8 2.5.8 6.5 0 9M14.5 8c-.8 2.5-.8 6.5 0 9" strokeLinecap="round" />
    </>
  ),
  sandal: (
    <>
      <path d="M12 3c-3 0-5 3.5-5 9s2 9 5 9 5-3.5 5-9-2-9-5-9z" />
      <path d="M8 8c1.3.9 2.7 1.3 4 1.3S14.7 8.9 16 8" strokeLinecap="round" />
      <path d="M12 4.5v5" strokeLinecap="round" />
    </>
  ),
}

export default function AfricanMotif({ type = 'calabash', className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="#3b2318"
      strokeWidth="1.3"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[type]}
    </svg>
  )
}
