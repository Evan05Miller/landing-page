'use client';

import { useEffect, useState, type ReactNode } from 'react';

const stages = [
  { label: 'Discover', note: 'Goals, audience, and structure' },
  { label: 'Design', note: 'Layouts you review before we build' },
  { label: 'Build', note: 'A working site, refined with you' },
  { label: 'Launch', note: 'Live, tested, and supported' },
];

export default function DesignProcessGraphic() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % stages.length);
    }, 2600);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="The design process moves from discovery, to design, to build, to launch."
    >
      <div className="flex items-center mb-4 px-1">
        {stages.map((stage, index) => (
          <div key={stage.label} className="flex items-center flex-1 last:flex-none min-w-0">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                index === active
                  ? 'bg-emerald-400 text-emerald-950 scale-110 shadow-lg shadow-emerald-900/40'
                  : index < active
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white/10 text-emerald-200/70 border border-white/15'
              }`}
            >
              {index + 1}
            </div>
            {index < stages.length - 1 && (
              <div className="flex-1 h-0.5 mx-1.5 bg-white/15 relative overflow-hidden rounded-full">
                <div
                  className={`absolute inset-y-0 left-0 bg-emerald-400 transition-all duration-700 ${
                    index < active ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-300/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-200/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300/80" />
          <span className="ml-2 text-[11px] text-emerald-100/70 truncate">
            {active === 3 ? 'yoursite.com' : 'project preview'}
          </span>
          <span className="ml-auto text-[10px] uppercase tracking-wide font-semibold text-emerald-200/80">
            {stages[active].label}
          </span>
        </div>

        <div className="relative h-56">
          <Scene show={active === 0}>
            <DiscoverScene />
          </Scene>
          <Scene show={active === 1}>
            <DesignScene />
          </Scene>
          <Scene show={active === 2}>
            <BuildScene />
          </Scene>
          <Scene show={active === 3}>
            <LaunchScene />
          </Scene>
        </div>
      </div>

      <p className="text-center text-emerald-200/80 text-xs mt-4 min-h-4">
        <span className="font-semibold text-emerald-100">{stages[active].label}.</span> {stages[active].note}
      </p>
    </div>
  );
}

function Scene({ show, children }: { show: boolean; children: ReactNode }) {
  return (
    <div
      className={`absolute inset-0 p-4 transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}

function DiscoverScene() {
  const items = ['Who are your customers?', 'What should the site do?', 'Which pages do you need?'];

  return (
    <div className="h-full flex flex-col justify-center gap-2.5">
      {items.map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2.5 border border-white/10"
        >
          <span
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
              index < 2 ? 'bg-emerald-400 border-emerald-400' : 'border-emerald-300/60'
            }`}
          >
            {index < 2 && (
              <svg className="w-2.5 h-2.5 text-emerald-950" viewBox="0 0 12 12" fill="none">
                <path d="M2 6.2 4.6 8.8 10 3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </span>
          <span className="text-sm text-emerald-50/90">{item}</span>
        </div>
      ))}
    </div>
  );
}

function DesignScene() {
  return (
    <div className="h-full rounded-xl border border-dashed border-white/30 p-3 flex flex-col gap-2">
      <div className="h-5 rounded bg-white/15" />
      <div className="flex-1 grid grid-cols-5 gap-2 min-h-0">
        <div className="col-span-3 rounded-md bg-white/10 border border-white/10" />
        <div className="col-span-2 flex flex-col gap-2 py-1">
          <div className="h-2.5 w-full rounded bg-white/25" />
          <div className="h-1.5 w-full rounded bg-white/15" />
          <div className="h-1.5 w-4/5 rounded bg-white/15" />
          <div className="mt-auto h-6 w-16 rounded-md bg-emerald-400/50" />
        </div>
      </div>
    </div>
  );
}

function BuildScene() {
  return (
    <div className="h-full rounded-xl bg-white overflow-hidden flex flex-col shadow-lg">
      <div className="h-7 bg-emerald-800 flex items-center px-3 gap-1.5">
        <div className="w-12 h-2 rounded-full bg-white/80" />
        <div className="ml-auto flex gap-2">
          <div className="w-6 h-1.5 rounded-full bg-white/40" />
          <div className="w-6 h-1.5 rounded-full bg-white/40" />
          <div className="w-6 h-1.5 rounded-full bg-white/40" />
        </div>
      </div>
      <div className="flex-1 grid grid-cols-5 gap-2 p-3 bg-emerald-50 min-h-0">
        <div className="col-span-3 rounded-md bg-gradient-to-br from-emerald-200 to-emerald-400" />
        <div className="col-span-2 flex flex-col gap-1.5 justify-center">
          <div className="h-2.5 w-full rounded bg-emerald-900/70" />
          <div className="h-1.5 w-full rounded bg-emerald-900/20" />
          <div className="h-1.5 w-4/5 rounded bg-emerald-900/20" />
          <div className="mt-1 h-5 w-14 rounded bg-emerald-600" />
        </div>
      </div>
    </div>
  );
}

function LaunchScene() {
  return (
    <div className="h-full relative">
      <BuildScene />
      <div className="absolute -top-1 -right-1 flex items-center gap-1.5 bg-white text-emerald-800 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Live
      </div>
    </div>
  );
}
