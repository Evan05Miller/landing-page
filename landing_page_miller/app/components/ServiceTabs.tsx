'use client';

import { useState } from 'react';

const services = [
  {
    id: 'websites',
    title: 'Custom Websites',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    description:
      'Beautiful, responsive websites built with modern technologies and optimized for performance.',
    highlights: ['Mobile-first layouts', 'Fast load times', 'Brand-aligned design'],
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    description:
      'Built-in search engine optimization to help your business get found online.',
    highlights: ['Local SEO setup', 'Meta & structure', 'Analytics ready'],
  },
  {
    id: 'support',
    title: 'Ongoing Support',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
    ),
    description:
      'Maintenance and updates to keep your website running smoothly and securely.',
    highlights: ['Security updates', 'Content changes', 'Performance monitoring'],
  },
];

export default function ServiceTabs() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 flex flex-col gap-2">
        {services.map((service, i) => (
          <button
            key={service.id}
            type="button"
            onClick={() => setActive(i)}
            className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
              active === i
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-100'
            }`}
          >
            <span
              className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                active === i ? 'bg-white/20' : 'bg-emerald-100'
              }`}
            >
              <svg
                className={`w-6 h-6 ${active === i ? 'text-white' : 'text-emerald-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {service.icon}
              </svg>
            </span>
            <span className="font-semibold">{service.title}</span>
          </button>
        ))}
      </div>

      <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 card-interactive min-h-[280px]">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{current.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{current.description}</p>
        <ul className="space-y-3">
          {current.highlights.map((item) => (
            <li key={item} className="flex items-center text-gray-700">
              <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
