import TelegramButton from './TelegramButton'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[85vh] items-center overflow-hidden px-6 py-16 sm:min-h-[88vh] sm:px-8 sm:py-20 lg:px-12"
    >
      <BackgroundElements />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <p className="animate-fade-up mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-telegram sm:text-sm">
          MC Crypto
        </p>

        <h1
          id="hero-heading"
          className="animate-fade-up-delay-1 mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Learn More About Crypto
        </h1>

        <p className="animate-fade-up-delay-2 mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg lg:text-xl">
          Learn about crypto, blockchain, market concepts, and risk management
          through simple educational content.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col items-center gap-5">
          <TelegramButton size="large" animated showArrow>
            Join MC Crypto on Telegram
          </TelegramButton>

          <p className="animate-fade-up-delay-4 animate-attention flex items-center gap-1.5 text-sm text-white/50 sm:text-base">
            <span aria-hidden="true" className="text-telegram">
              →
            </span>
            Join the Telegram community and keep learning
          </p>
        </div>
      </div>
    </section>
  )
}

function BackgroundElements() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(7,26,43,0.85))]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-telegram/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-telegram/[0.06]"
        width="560"
        height="560"
        viewBox="0 0 560 560"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="280" cy="280" r="260" stroke="currentColor" strokeWidth="1" />
        <circle cx="280" cy="280" r="180" stroke="currentColor" strokeWidth="1" />
        <circle cx="280" cy="280" r="100" stroke="currentColor" strokeWidth="1" />
      </svg>
    </>
  )
}
