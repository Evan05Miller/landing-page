import type { ReactNode } from 'react';

export function ProcessEvolution() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-stretch gap-3" aria-hidden="true">
      <StageFrame label="Notes">
        <div className="h-full rounded-xl bg-white border border-emerald-100 p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-700" viewBox="0 0 16 16" fill="none">
                <path d="M4 2.5h6.2L13 5.2V13.5H4v-11Z" stroke="currentColor" strokeWidth="1.4" />
                <path d="M10 2.6V5.4H13" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
            <span className="h-2 flex-1 rounded-full bg-emerald-100" />
          </div>
          <div className="space-y-2">
            {[true, true, false].map((done, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className={`w-3.5 h-3.5 rounded-full border ${
                    done ? 'bg-emerald-500 border-emerald-500' : 'border-emerald-300'
                  }`}
                />
                <span className={`h-1.5 rounded-full bg-emerald-200 ${index === 2 ? 'w-3/5' : 'w-full'}`} />
              </div>
            ))}
          </div>
        </div>
      </StageFrame>

      <FlowArrow />

      <StageFrame label="Wireframe">
        <div className="h-full rounded-xl border border-dashed border-emerald-300 bg-white/70 p-2.5 flex flex-col gap-1.5">
          <div className="h-3 rounded bg-emerald-100" />
          <div className="flex-1 grid grid-cols-5 gap-1.5 min-h-16">
            <div className="col-span-3 rounded bg-emerald-50 border border-emerald-100" />
            <div className="col-span-2 flex flex-col gap-1">
              <div className="h-1.5 w-full rounded bg-emerald-200" />
              <div className="h-1 w-full rounded bg-emerald-100" />
              <div className="h-1 w-4/5 rounded bg-emerald-100" />
              <div className="mt-auto h-3.5 w-8 rounded bg-emerald-300/80" />
            </div>
          </div>
        </div>
      </StageFrame>

      <FlowArrow />

      <StageFrame label="Live site">
        <div className="h-full rounded-xl bg-white border border-emerald-100 overflow-hidden shadow-sm flex flex-col">
          <div className="h-5 bg-emerald-800 flex items-center px-2 gap-1">
            <span className="w-6 h-1 rounded-full bg-white/80" />
            <span className="ml-auto w-3 h-1 rounded-full bg-white/40" />
            <span className="w-3 h-1 rounded-full bg-white/40" />
          </div>
          <div className="flex-1 grid grid-cols-5 gap-1.5 p-2 bg-emerald-50 min-h-16">
            <div className="col-span-3 rounded bg-gradient-to-br from-emerald-200 to-emerald-400" />
            <div className="col-span-2 flex flex-col justify-center gap-1">
              <div className="h-1.5 w-full rounded bg-emerald-900/70" />
              <div className="h-1 w-full rounded bg-emerald-900/15" />
              <div className="h-1 w-4/5 rounded bg-emerald-900/15" />
              <div className="mt-1 h-3 w-8 rounded bg-emerald-600" />
            </div>
          </div>
        </div>
      </StageFrame>
    </div>
  );
}

function StageFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="h-28 sm:h-32">{children}</div>
      <p className="text-center text-xs font-semibold text-emerald-800 mt-2">{label}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center sm:pt-0 sm:-mt-5 text-emerald-500">
      <svg className="w-5 h-5 rotate-90 sm:rotate-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function DiscoveryIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="28" y="14" width="96" height="92" rx="10" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="28" y="14" width="96" height="18" rx="10" fill="#d1fae5" />
      <rect x="28" y="24" width="96" height="8" fill="#d1fae5" />
      <circle cx="42" cy="23" r="3" fill="#059669" />
      <rect x="52" y="21" width="36" height="4" rx="2" fill="#065f46" opacity="0.45" />
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(0 ${row * 18})`}>
          <circle cx="46" cy="50" r="5" fill={row < 2 ? '#10b981' : 'none'} stroke="#10b981" strokeWidth="1.6" />
          {row < 2 && <path d="M43.5 50.2 45.4 52.1 49 48.2" stroke="white" strokeWidth="1.4" strokeLinecap="round" />}
          <rect x="58" y="48" width={row === 2 ? 40 : 52} height="4" rx="2" fill="#a7f3d0" />
        </g>
      ))}
      <rect x="118" y="36" width="62" height="34" rx="12" fill="#064e3b" />
      <path d="M132 70 124 82 140 70" fill="#064e3b" />
      <rect x="130" y="48" width="38" height="4" rx="2" fill="#6ee7b7" />
      <rect x="130" y="56" width="28" height="3" rx="1.5" fill="#a7f3d0" opacity="0.7" />
    </svg>
  );
}

export function DesignIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="18" y="22" width="104" height="78" rx="8" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="2" strokeDasharray="4 3" />
      <rect x="28" y="32" width="40" height="56" rx="4" fill="white" stroke="#6ee7b7" />
      <rect x="74" y="36" width="36" height="5" rx="2" fill="#6ee7b7" />
      <rect x="74" y="46" width="34" height="3" rx="1.5" fill="#d1fae5" />
      <rect x="74" y="53" width="28" height="3" rx="1.5" fill="#d1fae5" />
      <rect x="74" y="66" width="22" height="10" rx="3" fill="#a7f3d0" />
      <rect x="78" y="10" width="108" height="86" rx="10" fill="white" stroke="#059669" strokeWidth="2" />
      <rect x="78" y="10" width="108" height="16" rx="10" fill="#059669" />
      <rect x="78" y="18" width="108" height="8" fill="#059669" />
      <circle cx="90" cy="18" r="2.5" fill="#d1fae5" />
      <circle cx="98" cy="18" r="2.5" fill="#a7f3d0" />
      <rect x="90" y="36" width="42" height="48" rx="4" fill="#d1fae5" />
      <rect x="140" y="38" width="34" height="5" rx="2" fill="#064e3b" />
      <rect x="140" y="48" width="32" height="3" rx="1.5" fill="#a7f3d0" />
      <rect x="140" y="55" width="26" height="3" rx="1.5" fill="#a7f3d0" />
      <rect x="140" y="68" width="24" height="10" rx="3" fill="#10b981" />
    </svg>
  );
}

export function BuildIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="16" y="18" width="78" height="84" rx="8" fill="#022c22" />
      <rect x="26" y="30" width="28" height="4" rx="2" fill="#34d399" />
      <rect x="26" y="40" width="46" height="3" rx="1.5" fill="#6ee7b7" opacity="0.7" />
      <rect x="26" y="48" width="40" height="3" rx="1.5" fill="#a7f3d0" opacity="0.45" />
      <rect x="26" y="58" width="52" height="3" rx="1.5" fill="#34d399" opacity="0.8" />
      <rect x="26" y="66" width="34" height="3" rx="1.5" fill="#6ee7b7" opacity="0.5" />
      <rect x="26" y="76" width="44" height="3" rx="1.5" fill="#a7f3d0" opacity="0.35" />
      <path d="M104 58h16M114 52l8 6-8 6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="126" y="16" width="62" height="88" rx="8" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="126" y="16" width="62" height="14" fill="#047857" />
      <rect x="126" y="24" width="62" height="6" fill="#047857" />
      <rect x="134" y="38" width="46" height="28" rx="3" fill="#6ee7b7" />
      <rect x="134" y="72" width="32" height="4" rx="2" fill="#064e3b" opacity="0.7" />
      <rect x="134" y="80" width="40" height="3" rx="1.5" fill="#a7f3d0" />
      <rect x="134" y="90" width="22" height="7" rx="2" fill="#059669" />
    </svg>
  );
}

export function LaunchIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-28" aria-hidden="true">
      <rect x="34" y="22" width="110" height="80" rx="10" fill="white" stroke="#a7f3d0" strokeWidth="2" />
      <rect x="34" y="22" width="110" height="16" rx="10" fill="#047857" />
      <rect x="34" y="30" width="110" height="8" fill="#047857" />
      <circle cx="46" cy="30" r="2.4" fill="#d1fae5" />
      <circle cx="54" cy="30" r="2.4" fill="#a7f3d0" />
      <rect x="46" y="48" width="46" height="40" rx="4" fill="#6ee7b7" />
      <rect x="98" y="50" width="34" height="5" rx="2" fill="#064e3b" />
      <rect x="98" y="60" width="32" height="3" rx="1.5" fill="#a7f3d0" />
      <rect x="98" y="67" width="26" height="3" rx="1.5" fill="#a7f3d0" />
      <rect x="98" y="78" width="20" height="8" rx="2" fill="#059669" />
      <circle cx="156" cy="34" r="22" fill="#10b981" />
      <circle cx="156" cy="34" r="22" fill="none" stroke="#d1fae5" strokeWidth="3" />
      <path d="M146 34.5 153 41.5 167 27" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="28" r="3" fill="#34d399" />
      <circle cx="176" cy="96" r="3" fill="#6ee7b7" />
      <circle cx="18" cy="78" r="2" fill="#a7f3d0" />
    </svg>
  );
}
