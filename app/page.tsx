export default function Home() {
  const faqs = [
    {
      q: "Which Slack plans are supported?",
      a: "Works with all Slack plans including Free, Pro, Business+, and Enterprise Grid."
    },
    {
      q: "How do I configure the inactivity threshold?",
      a: "After connecting your Slack workspace, you can set the number of days (e.g. 7, 14, 30) before a thread is auto-archived from your dashboard."
    },
    {
      q: "Is my Slack data stored?",
      a: "No. We only store thread metadata (timestamps and IDs) — never message content. Your data stays private."
    }
  ];

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Slack Productivity
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Auto-archive old Slack threads by activity
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 leading-relaxed">
          Slack Thread Declutterer connects to your workspace and silently archives threads that have gone quiet — keeping channels clean without any manual effort.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#30363d] rounded-xl p-8 bg-[#161b22] text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-[#c9d1d9]">
            {[
              "Connect unlimited Slack workspaces",
              "Configurable inactivity threshold (days)",
              "Real-time webhook monitoring",
              "Automatic background cleanup jobs",
              "Email digest of archived threads",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
