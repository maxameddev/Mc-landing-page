import { TELEGRAM_URL, TelegramIcon } from './TelegramButton'

export default function FloatingTelegramButton() {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join MC Crypto on Telegram"
      className="animate-float-pulse fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-telegram px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-telegram/30 transition-all duration-300 hover:scale-[1.03] hover:bg-telegram-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-telegram active:scale-[0.98] sm:bottom-6 sm:right-6 sm:gap-2.5 sm:px-5 sm:py-3.5 sm:text-base"
    >
      <span className="animate-icon-pulse">
        <TelegramIcon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
      </span>

      <span className="hidden min-[380px]:inline sm:hidden">
        Join on Telegram
      </span>
      <span className="hidden sm:inline">Join MC Crypto</span>
      <span className="min-[380px]:hidden">Telegram</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="animate-arrow-nudge hidden h-3.5 w-3.5 sm:block"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  )
}
