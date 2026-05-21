'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most small business websites are delivered within 2-4 weeks, depending on scope and content readiness. I keep you updated at every milestone.',
  },
  {
    q: 'What is included in a free quote?',
    a: 'Your quote covers design approach, page structure, timeline, and transparent pricing with no obligation and no hidden fees.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes. I offer maintenance packages for updates, security, and performance so your site stays fast and reliable.',
  },
  {
    q: 'Will my site work on mobile devices?',
    a: 'Every site is built mobile-first and tested across phones, tablets, and desktops for a consistent professional experience.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.q}
            className={`rounded-xl border transition-colors ${
              isOpen ? 'border-emerald-300 bg-emerald-50/50' : 'border-gray-200 bg-white hover:border-emerald-200'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-gray-900">{faq.q}</span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-emerald-100 text-emerald-700'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
              <div className="accordion-inner">
                <p className="px-5 pb-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
