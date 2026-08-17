export default function Disclaimer() {
  return (
    <section
      aria-labelledby="disclaimer-heading"
      className="px-6 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/5 bg-navy-900/40 px-8 py-10">
        <h2
          id="disclaimer-heading"
          className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500"
        >
          Educational Disclaimer
        </h2>
        <p className="text-sm leading-relaxed text-slate-500">
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
