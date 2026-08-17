const TELEGRAM_URL = 'https://t.me/mc_markets1'

export default function TelegramButton({
  className = '',
  children,
  size = 'default',
  animated = false,
  showArrow = false,
}) {
  const sizeClasses =
    size === 'large'
      ? 'px-8 py-4 text-sm sm:px-10 sm:py-5 sm:text-base'
      : 'px-6 py-3.5 text-xs sm:text-sm'

  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-xl bg-telegram font-bold uppercase tracking-wide text-white shadow-lg shadow-telegram/25 transition-all duration-300 hover:scale-[1.03] hover:bg-telegram-hover hover:shadow-xl hover:shadow-telegram/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-telegram active:scale-[0.98] ${animated ? 'animate-breathe' : ''} ${sizeClasses} ${className}`}
    >
      <span className={animated ? 'animate-icon-pulse' : ''}>
        <TelegramIcon />
      </span>
      <span className={animated ? 'animate-cta-text' : ''}>{children}</span>
      {showArrow && (
        <ArrowIcon className={animated ? 'animate-arrow-nudge' : ''} />
      )}
    </a>
  )
}

export function TelegramIcon({ className = 'h-5 w-5 shrink-0 text-white' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  )
}

function ArrowIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 ${className}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export { TELEGRAM_URL }
