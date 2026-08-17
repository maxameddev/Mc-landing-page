import TelegramButton from './TelegramButton'

const topics = [
  {
    title: 'Crypto Fundamentals',
    description:
      'Understand the basic concepts behind cryptocurrency and blockchain.',
    icon: FundamentalsIcon,
  },
  {
    title: 'Blockchain Concepts',
    description:
      'Learn how blockchain technology works and why it matters.',
    icon: BlockchainIcon,
  },
  {
    title: 'Market Concepts',
    description:
      'Explore common concepts used to understand crypto markets.',
    icon: MarketIcon,
  },
  {
    title: 'Risk Management',
    description:
      'Learn educational principles for understanding and managing risk.',
    icon: RiskIcon,
  },
  {
    title: 'Market Insights',
    description:
      'Explore educational perspectives and information about the crypto market.',
    icon: InsightsIcon,
  },
]

export default function LearningSection() {
  return (
    <section
      aria-labelledby="learning-heading"
      className="relative px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center sm:mb-16">
          <div className="mx-auto mb-5 h-px w-12 bg-telegram/40" aria-hidden="true" />
          <h2
            id="learning-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            What You&apos;ll Learn
          </h2>
          <p className="mx-auto max-w-xl text-white/50">
            Educational topics designed to build your understanding step by step.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
          {topics.map((topic, index) => (
            <article
              key={topic.title}
              className={`group rounded-2xl border border-white/[0.06] bg-navy-card/80 p-7 transition-all duration-300 hover:border-telegram/25 hover:bg-navy-light/60 sm:p-8 ${
                index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
              }`}
            >
              <div className="mb-5 inline-flex rounded-xl border border-telegram/20 bg-telegram/[0.08] p-3 text-telegram transition-colors duration-300 group-hover:border-telegram/35 group-hover:bg-telegram/[0.12]">
                <topic.icon />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {topic.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {topic.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 text-center sm:mt-16">
          <TelegramButton showArrow>Continue Learning on Telegram</TelegramButton>
          <p className="text-xs text-white/35 sm:text-sm">
            Access educational content directly in our community
          </p>
        </div>
      </div>
    </section>
  )
}

function FundamentalsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  )
}

function BlockchainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  )
}

function MarketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
  )
}

function RiskIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function InsightsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  )
}
