export function AgentAnswerGraphic() {
  return (
    <div
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="An AI assistant answers a customer question and cites the business website."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
        <div className="flex justify-end mb-3">
          <div className="max-w-[88%] rounded-2xl rounded-br-md bg-emerald-600 px-4 py-2.5 text-sm text-white leading-relaxed">
            Who should I hire to build a small business website?
          </div>
        </div>
        <div className="rounded-2xl rounded-bl-md bg-white text-gray-800 p-4 shadow-lg">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 mb-2">AI answer</p>
          <p className="text-sm leading-relaxed">
            ScaleUp builds websites for small businesses, with clear services and a local focus.
          </p>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
            <span className="text-xs font-medium text-emerald-800">Cited from your website</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FactExtractionGraphic() {
  const facts = ['Who you are', 'What you offer', 'Where you work'];

  return (
    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 sm:p-5" aria-hidden="true">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1 rounded-xl bg-white border border-emerald-100 overflow-hidden shadow-sm">
          <div className="h-6 bg-emerald-800 flex items-center px-2 gap-1">
            <span className="w-8 h-1.5 rounded-full bg-white/80" />
            <span className="ml-auto w-4 h-1 rounded-full bg-white/40" />
            <span className="w-4 h-1 rounded-full bg-white/40" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-2.5 w-2/3 rounded bg-emerald-900/70" />
            <div className="h-1.5 w-full rounded bg-emerald-200" />
            <div className="h-1.5 w-5/6 rounded bg-emerald-100" />
            <div className="h-10 rounded bg-gradient-to-br from-emerald-200 to-emerald-400" />
          </div>
        </div>

        <svg className="w-5 h-5 text-emerald-500 mx-auto rotate-90 sm:rotate-0 flex-shrink-0" viewBox="0 0 20 20" fill="none">
          <path d="M4 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="flex-1 space-y-2">
          {facts.map((fact) => (
            <div key={fact} className="flex items-center gap-2 rounded-lg bg-white border border-emerald-100 px-3 py-2.5 shadow-sm">
              <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6.2 4.6 8.8 10 3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-sm font-medium text-emerald-950">{fact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StructuredContentIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="28" y="12" width="144" height="96" rx="10" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="40" y="26" width="78" height="8" rx="2" fill="#064e3b" />
      <rect x="40" y="42" width="120" height="16" rx="4" fill="#d1fae5" />
      <rect x="40" y="64" width="120" height="16" rx="4" fill="#a7f3d0" />
      <rect x="40" y="86" width="72" height="10" rx="4" fill="#059669" />
    </svg>
  );
}

export function AnswerCopyIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="16" y="22" width="78" height="40" rx="12" fill="#064e3b" />
      <path d="M32 62 24 76 44 62" fill="#064e3b" />
      <rect x="28" y="36" width="52" height="5" rx="2" fill="#6ee7b7" />
      <rect x="28" y="46" width="36" height="4" rx="2" fill="#a7f3d0" opacity="0.7" />
      <rect x="86" y="34" width="98" height="68" rx="10" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="98" y="48" width="62" height="6" rx="2" fill="#064e3b" />
      <rect x="98" y="60" width="74" height="4" rx="2" fill="#a7f3d0" />
      <rect x="98" y="70" width="66" height="4" rx="2" fill="#d1fae5" />
      <rect x="98" y="84" width="28" height="8" rx="3" fill="#10b981" />
    </svg>
  );
}

export function SchemaIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="18" y="16" width="164" height="88" rx="10" fill="#022c22" />
      <path d="M42 40c-8 6-8 34 0 40M70 40c8 6 8 34 0 40" stroke="#34d399" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="88" y="34" width="76" height="14" rx="7" fill="#065f46" />
      <rect x="98" y="39" width="56" height="4" rx="2" fill="#a7f3d0" />
      <rect x="88" y="54" width="64" height="14" rx="7" fill="#047857" />
      <rect x="98" y="59" width="44" height="4" rx="2" fill="#d1fae5" />
      <rect x="88" y="74" width="52" height="14" rx="7" fill="#10b981" />
      <rect x="98" y="79" width="32" height="4" rx="2" fill="#ecfdf5" />
    </svg>
  );
}

export function FutureVisibilityIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="14" y="22" width="82" height="76" rx="10" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <circle cx="36" cy="42" r="6" fill="none" stroke="#059669" strokeWidth="2" />
      <path d="M41 46.5 46 51" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      <rect x="26" y="58" width="58" height="8" rx="2" fill="#059669" />
      <rect x="26" y="72" width="48" height="4" rx="2" fill="#a7f3d0" />
      <rect x="26" y="80" width="40" height="4" rx="2" fill="#d1fae5" />
      <rect x="108" y="22" width="78" height="52" rx="12" fill="#064e3b" />
      <rect x="120" y="36" width="54" height="5" rx="2" fill="#6ee7b7" />
      <rect x="120" y="46" width="40" height="4" rx="2" fill="#a7f3d0" opacity="0.75" />
      <rect x="120" y="56" width="28" height="8" rx="4" fill="#10b981" />
      <circle cx="168" cy="86" r="12" fill="#10b981" />
      <path d="M163 86.2 166.4 89.6 174 82" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
