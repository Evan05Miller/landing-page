export function AccessibilityPreview() {
  return (
    <div
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A website preview with a visible keyboard focus ring, high contrast text, and image alt text."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-300/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-200/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300/80" />
          <span className="ml-2 text-[11px] text-emerald-100/70">yoursite.com</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="rounded-lg bg-white px-3 py-3">
            <div className="h-2.5 w-2/5 rounded bg-emerald-900/80 mb-2" />
            <div className="h-1.5 w-full rounded bg-emerald-900/15 mb-1" />
            <div className="h-1.5 w-4/5 rounded bg-emerald-900/15" />
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg ring-2 ring-emerald-300 ring-offset-2 ring-offset-emerald-950 bg-emerald-500 px-3 py-2 text-xs font-semibold text-white">
              Contact us
            </div>
            <span className="text-[11px] text-emerald-200/80">Keyboard focus</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-2 h-16 rounded-lg bg-gradient-to-br from-emerald-300 to-emerald-500" />
            <div className="col-span-3 rounded-lg bg-white/10 border border-white/10 px-3 py-2 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-wide text-emerald-300 font-semibold">Alt text</p>
              <p className="text-xs text-emerald-50/90 mt-1">Storefront photo, Main Street</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AccessModesGraphic() {
  const modes = [
    { label: 'Screen readers', detail: 'Spoken page structure' },
    { label: 'Keyboard', detail: 'Every control reachable' },
    { label: 'Contrast', detail: 'Text that stays readable' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" aria-hidden="true">
      {modes.map((mode) => (
        <div key={mode.label} className="rounded-xl bg-white border border-emerald-100 p-4 shadow-sm">
          <div className="h-14 rounded-lg bg-emerald-50 border border-emerald-100 mb-3 flex items-center justify-center">
            {mode.label === 'Screen readers' && (
              <div className="flex items-end gap-1 h-6">
                {[10, 16, 22, 14, 20].map((height) => (
                  <span key={height} className="w-1.5 rounded-full bg-emerald-500" style={{ height }} />
                ))}
              </div>
            )}
            {mode.label === 'Keyboard' && (
              <div className="flex gap-1">
                {[0, 1, 2].map((key) => (
                  <span
                    key={key}
                    className={`w-6 h-6 rounded-md border text-[10px] font-semibold flex items-center justify-center ${
                      key === 1
                        ? 'bg-emerald-600 border-emerald-600 text-white ring-2 ring-emerald-300'
                        : 'bg-white border-emerald-200 text-emerald-800'
                    }`}
                  >
                    {key === 0 ? 'Tab' : key}
                  </span>
                ))}
              </div>
            )}
            {mode.label === 'Contrast' && (
              <div className="flex gap-2">
                <span className="w-8 h-8 rounded-md bg-emerald-950 text-white text-xs font-bold flex items-center justify-center">
                  Aa
                </span>
                <span className="w-8 h-8 rounded-md bg-emerald-100 text-emerald-950 text-xs font-bold flex items-center justify-center border border-emerald-200">
                  Aa
                </span>
              </div>
            )}
          </div>
          <p className="text-sm font-semibold text-gray-900">{mode.label}</p>
          <p className="text-xs text-gray-500 mt-1">{mode.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function ReadableIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="36" y="14" width="128" height="92" rx="10" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="50" y="30" width="72" height="10" rx="3" fill="#064e3b" />
      <rect x="50" y="50" width="100" height="6" rx="2" fill="#059669" />
      <rect x="50" y="64" width="88" height="5" rx="2" fill="#a7f3d0" />
      <rect x="50" y="78" width="96" height="5" rx="2" fill="#d1fae5" />
      <rect x="50" y="90" width="60" height="5" rx="2" fill="#d1fae5" />
    </svg>
  );
}

export function KeyboardIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="46" y="16" width="108" height="40" rx="10" fill="none" stroke="#34d399" strokeWidth="3" />
      <rect x="58" y="26" width="84" height="20" rx="6" fill="#059669" />
      <rect x="28" y="70" width="144" height="36" rx="8" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="40" y="80" width="22" height="16" rx="3" fill="#d1fae5" />
      <rect x="68" y="80" width="22" height="16" rx="3" fill="#059669" />
      <rect x="96" y="80" width="22" height="16" rx="3" fill="#d1fae5" />
      <rect x="124" y="80" width="36" height="16" rx="3" fill="#a7f3d0" />
    </svg>
  );
}

export function ContrastIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="18" y="18" width="76" height="84" rx="10" fill="#064e3b" />
      <rect x="30" y="36" width="40" height="8" rx="2" fill="white" />
      <rect x="30" y="52" width="52" height="5" rx="2" fill="#a7f3d0" />
      <rect x="30" y="64" width="44" height="5" rx="2" fill="#6ee7b7" />
      <rect x="106" y="18" width="76" height="84" rx="10" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="118" y="36" width="40" height="8" rx="2" fill="#064e3b" />
      <rect x="118" y="52" width="52" height="5" rx="2" fill="#047857" />
      <rect x="118" y="64" width="44" height="5" rx="2" fill="#059669" opacity="0.7" />
      <circle cx="164" cy="84" r="12" fill="#10b981" />
      <path d="M158.5 84.2 162.2 88 170 79.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AltTextIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="24" y="14" width="152" height="92" rx="10" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="36" y="26" width="128" height="48" rx="6" fill="#d1fae5" />
      <path d="M36 62l28-18 22 14 18-12 60 16v12H36V62z" fill="#6ee7b7" />
      <circle cx="68" cy="40" r="6" fill="#fde68a" />
      <rect x="36" y="82" width="22" height="12" rx="4" fill="#059669" />
      <rect x="64" y="85" width="88" height="6" rx="2" fill="#a7f3d0" />
    </svg>
  );
}
