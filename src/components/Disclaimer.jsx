export default function Disclaimer() {
  return (
    <section
      aria-labelledby="disclaimer-heading"
      className="px-6 py-14 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.06] bg-navy-card/50 px-7 py-9 sm:px-8 sm:py-10">
        <h2
          id="disclaimer-heading"
          className="mb-4 text-base font-semibold text-white/70 sm:text-lg"
        >
          Educational Disclaimer
        </h2>
        <p className="text-sm leading-relaxed text-white/45">
          The information provided on this website and through MC Crypto is for
          educational purposes only and does not constitute investment advice or
          financial advice. Nothing on this website should be considered a
          recommendation to buy, sell, or hold any cryptocurrency or financial
          asset. Always conduct your own research and make your own decisions.
        </p>
      </div>
    </section>
  )
}
