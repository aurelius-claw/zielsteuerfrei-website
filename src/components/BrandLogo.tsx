interface BrandLogoProps {
  inverse?: boolean
  compact?: boolean
  className?: string
}

export default function BrandLogo({ inverse = false, compact = false, className = '' }: BrandLogoProps) {
  const wordColor = inverse ? 'text-white' : 'text-[#0D3042] dark:text-white'
  const ringColor = inverse ? 'text-white' : 'text-[#0D3042] dark:text-white'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Ziel:steuerfrei">
      <svg
        aria-hidden="true"
        className={`h-8 w-8 flex-none ${ringColor}`}
        viewBox="0 0 48 48"
        fill="none"
      >
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" />
        <circle cx="24" cy="24" r="6" fill="#C8972C" />
      </svg>
      {!compact && (
        <span className={`font-sans text-[1.35rem] leading-none tracking-normal ${wordColor}`}>
          <span className="font-bold">Ziel</span><span className="font-medium text-gold">:</span><span className="font-normal">steuerfrei</span>
        </span>
      )}
    </span>
  )
}
