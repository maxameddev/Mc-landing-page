import TelegramButton from './TelegramButton'

export default function CommunityCTA() {
  return (
    <section
      aria-labelledby="community-heading"
      className="px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/5 bg-navy-900/80 px-8 py-16 text-center sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.08),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <h2
            id="community-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Keep Learning With MC Crypto
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
            Join our Telegram community to access educational content, crypto
            insights, and learning resources.
          </p>

          <TelegramButton size="large">Join MC Crypto on Telegram</TelegramButton>
        </div>
      </div>
    </section>
  )
}
