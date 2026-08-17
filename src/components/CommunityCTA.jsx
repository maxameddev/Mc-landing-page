import TelegramButton from './TelegramButton'

const topics = [
  'Crypto fundamentals',
  'Blockchain concepts',
  'Market knowledge',
  'Risk management',
  'Educational market insights',
]

export default function CommunityCTA() {
  return (
    <section
      aria-labelledby="community-heading"
      className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-telegram/15 bg-navy-card/80 px-7 py-14 text-center sm:px-14 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,158,217,0.08),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <div className="mx-auto mb-6 h-px w-16 bg-telegram/30" aria-hidden="true" />

          <h2
            id="community-heading"
            className="mb-6 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Continue Your Crypto Learning With MC Crypto
          </h2>

          <p className="mx-auto mb-8 max-w-lg text-white/50">
            Discover educational content about:
          </p>

          <ul className="mx-auto mb-10 inline-flex flex-col items-start gap-3 text-left text-sm text-white/70 sm:text-base">
            {topics.map((topic) => (
              <li key={topic} className="flex items-center gap-3">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-telegram/70"
                  aria-hidden="true"
                />
                {topic}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4">
            <TelegramButton size="large" animated showArrow>
              Join MC Crypto on Telegram
            </TelegramButton>

            <p className="max-w-md text-sm leading-relaxed text-white/45 sm:text-base">
              Join the community and continue exploring crypto education with MC
              Crypto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
