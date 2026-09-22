export function SearchResultAnatomy() {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 sm:p-5" aria-hidden="true">
      <div className="bg-white rounded-full px-4 py-2.5 flex items-center gap-2 border border-emerald-100 shadow-sm mb-4">
        <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-sm text-gray-500">bakery near me</span>
      </div>

      <div className="bg-white rounded-xl border border-emerald-200 p-4 shadow-sm">
        <p className="text-xs text-emerald-600 mb-1">www.yourbusiness.com</p>
        <p className="text-base font-semibold text-emerald-950 leading-snug">
          Your Business | Fresh Bread and Pastries
        </p>
        <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
          Family bakery in town. See hours, order online, and find the shop on the map.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-3">
        {['Title tag', 'Page URL', 'Description'].map((label) => (
          <div
            key={label}
            className="rounded-lg bg-white border border-emerald-100 px-2 py-2 text-center text-[11px] font-semibold text-emerald-800"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function KeywordIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="18" y="16" width="164" height="28" rx="14" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <circle cx="36" cy="30" r="5" fill="none" stroke="#059669" strokeWidth="2" />
      <path d="M40 34.5 44 38" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      <rect x="52" y="27" width="72" height="6" rx="3" fill="#d1fae5" />
      <rect x="22" y="56" width="52" height="18" rx="9" fill="#059669" />
      <rect x="30" y="62" width="36" height="6" rx="3" fill="#d1fae5" />
      <rect x="80" y="56" width="64" height="18" rx="9" fill="#d1fae5" />
      <rect x="90" y="62" width="44" height="6" rx="3" fill="#047857" opacity="0.55" />
      <rect x="150" y="56" width="32" height="18" rx="9" fill="white" stroke="#6ee7b7" strokeWidth="2" />
      <rect x="22" y="86" width="156" height="22" rx="6" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="32" y="94" width="70" height="5" rx="2" fill="#064e3b" />
      <rect x="110" y="94" width="52" height="5" rx="2" fill="#a7f3d0" />
    </svg>
  );
}

export function StructureIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="16" y="14" width="118" height="92" rx="10" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="16" y="14" width="118" height="16" rx="10" fill="#047857" />
      <rect x="16" y="22" width="118" height="8" fill="#047857" />
      <circle cx="28" cy="22" r="2.4" fill="#d1fae5" />
      <circle cx="36" cy="22" r="2.4" fill="#a7f3d0" />
      <rect x="28" y="40" width="72" height="8" rx="2" fill="#064e3b" />
      <rect x="28" y="54" width="48" height="5" rx="2" fill="#059669" opacity="0.7" />
      <rect x="28" y="64" width="40" height="5" rx="2" fill="#6ee7b7" />
      <rect x="28" y="76" width="94" height="20" rx="4" fill="#d1fae5" />
      <rect x="146" y="28" width="40" height="70" rx="8" fill="white" stroke="#059669" strokeWidth="2" />
      <rect x="152" y="36" width="28" height="6" rx="2" fill="#064e3b" />
      <rect x="152" y="46" width="28" height="22" rx="3" fill="#6ee7b7" />
      <rect x="152" y="72" width="20" height="4" rx="2" fill="#a7f3d0" />
      <rect x="152" y="80" width="16" height="4" rx="2" fill="#a7f3d0" />
    </svg>
  );
}

export function LocalAnalyticsIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="16" y="18" width="96" height="84" rx="10" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="2" />
      <path d="M16 48h96M16 72h96M48 18v84M80 18v84" stroke="#a7f3d0" strokeWidth="1.5" />
      <path d="M70 36c-9 0-16 7-16 16 0 12 16 28 16 28s16-16 16-28c0-9-7-16-16-16z" fill="#059669" />
      <circle cx="70" cy="52" r="5" fill="white" />
      <rect x="124" y="18" width="60" height="84" rx="10" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="136" y="70" width="10" height="20" rx="2" fill="#a7f3d0" />
      <rect x="150" y="54" width="10" height="36" rx="2" fill="#6ee7b7" />
      <rect x="164" y="38" width="10" height="52" rx="2" fill="#059669" />
    </svg>
  );
}
