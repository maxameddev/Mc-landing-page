import TelegramButton from './TelegramButton'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[90vh] items-center overflow-hidden px-6 py-20 sm:px-8 lg:px-12"
    >
      <BackgroundElements />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <p className="animate-fade-up mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          MC Crypto
        </p>

        <h1
          id="hero-heading"
          className="animate-fade-up-delay-1 mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Learn More About Crypto
        </h1>

        <p className="animate-fade-up-delay-2 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          Explore simple educational content designed to help you better understand
          crypto, blockchain, market concepts, and risk management.
        </p>

        <div className="animate-fade-up-delay-3">
          <TelegramButton size="large">Join MC Crypto on Telegram</TelegramButton>
        </div>
      </div>
    </section>
  )
}

function BackgroundElements() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(5,10,20,0.8))]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-[80px]"
        aria-hidden="true"
      />

      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" className="text-accent" />
        <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1" className="text-accent" />
        <circle cx="300" cy="300" r="120" stroke="currentColor" strokeWidth="1" className="text-accent" />
        <line x1="300" y1="20" x2="300" y2="580" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
        <line x1="20" y1="300" x2="580" y2="300" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
      </svg>
    </>
  )
}
