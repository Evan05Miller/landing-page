'use client';

import { useEffect, useState } from 'react';

const competitors = [
  { title: 'Generic Website', url: 'www.generic-template.io' },
  { title: 'Other Web Designers', url: 'www.otherdesigners.com' },
  { title: 'Uninspired Home Page', url: 'www.uninspired.site' },
  { title: 'Basic Builder Site', url: 'www.basicbuilder.wix' },
];

type Phase = 'idle' | 'pull' | 'rise' | 'top';

const ROW_HEIGHT = 76;
const SCALEUP_START_SLOT = 3;

export default function SearchRankAnimation() {
  const [phase, setPhase] = useState<Phase>('idle');

  useEffect(() => {
    const sequence: { phase: Phase; delay: number }[] = [
      { phase: 'idle', delay: 1200 },
      { phase: 'pull', delay: 900 },
      { phase: 'rise', delay: 1100 },
      { phase: 'top', delay: 0 },
    ];

    let step = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const run = () => {
      setPhase(sequence[step].phase);
      if (step >= sequence.length - 1) return;

      timeout = setTimeout(() => {
        step += 1;
        run();
      }, sequence[step].delay);
    };

    run();
    return () => clearTimeout(timeout);
  }, []);

  const isRanked = phase === 'rise' || phase === 'top';
  const scaleUpTop = isRanked ? 0 : SCALEUP_START_SLOT * ROW_HEIGHT;
  const scaleUpPullX = phase === 'pull' ? 24 : phase === 'rise' ? 10 : 0;
  const scaleUpScale = phase === 'pull' || phase === 'rise' || phase === 'top' ? 1.04 : 1;
  const showGhost = phase === 'pull';
  const showBadge = phase === 'top';

  const getCompetitorSlot = (index: number) => (index < 3 ? index : index + 1);

  const getCompetitorOffset = (index: number) => {
    const slot = getCompetitorSlot(index);
    if (isRanked && slot < SCALEUP_START_SLOT) {
      return ROW_HEIGHT;
    }
    return 0;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 flex items-center gap-3 border border-white/20 mb-5">
        <svg className="w-5 h-5 text-emerald-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-emerald-100/80 text-sm">web designer near me</span>
      </div>

      <div
        className="relative bg-white/5 rounded-2xl border border-white/10 p-4 overflow-hidden"
        style={{ height: ROW_HEIGHT * 5 + 16 }}
      >
        <div className="relative" style={{ height: ROW_HEIGHT * 5 }}>
          {competitors.map((result, i) => {
            const slotIndex = getCompetitorSlot(i);
            const translateY = getCompetitorOffset(i);

            return (
              <div
                key={result.title}
                className="absolute left-0 right-0 px-3 transition-all duration-700 ease-in-out"
                style={{
                  top: slotIndex * ROW_HEIGHT,
                  transform: `translateY(${translateY}px)`,
                }}
              >
                <div className="bg-white/10 rounded-xl px-4 py-3 border border-white/10">
                  <p className="text-white/90 text-sm font-medium truncate">{result.title}</p>
                  <p className="text-emerald-400/60 text-xs truncate mt-0.5">{result.url}</p>
                </div>
              </div>
            );
          })}

          {showGhost && (
            <div
              className="absolute left-0 right-0 px-3 transition-opacity duration-500"
              style={{ top: SCALEUP_START_SLOT * ROW_HEIGHT, opacity: 0.2 }}
            >
              <div className="rounded-xl px-4 py-3 border border-dashed border-white/20 h-[52px]" />
            </div>
          )}

          <div
            className="absolute left-0 right-0 px-3 z-10 transition-all duration-700 ease-in-out"
            style={{
              top: scaleUpTop,
              transform: `translateX(${scaleUpPullX}px) scale(${scaleUpScale})`,
            }}
          >
            <div
              className={`rounded-xl px-4 py-3 border transition-all duration-500 ${
                phase === 'pull' || phase === 'rise' || phase === 'top'
                  ? 'bg-emerald-600 border-emerald-400 shadow-xl shadow-emerald-900/50'
                  : 'bg-emerald-700/80 border-emerald-500/50 shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-white text-sm font-semibold truncate">Professionally Made ScaleUp Site</p>
                {showBadge && (
                  <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wide bg-white text-emerald-700 px-2 py-0.5 rounded-full animate-fadeInUp">
                    #1
                  </span>
                )}
              </div>
              <p className="text-emerald-200 text-xs truncate mt-0.5">www.scaleup.dev</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-emerald-300/70 text-xs mt-4">
        {phase === 'top'
          ? 'Ranking at the top of search results'
          : phase === 'pull' || phase === 'rise'
            ? 'Climbing the rankings...'
            : 'SEO moves you ahead of the competition'}
      </p>
    </div>
  );
}
