'use client';

import { useState } from 'react';

const services = [
  {
    id: 'websites',
    title: 'Custom Websites',
    description:
      'Responsive websites built with modern technologies and optimized for performance.',
    highlights: ['Mobile-first layouts', 'Fast load times', 'Brand-aligned design'],
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description:
      'Built-in search engine optimization to help your business get found online.',
    highlights: ['Local SEO setup', 'Meta & structure', 'Web performance improvements'],
  },
  {
    id: 'support',
    title: 'Ongoing Client Support',
    description:
      'Maintenance and updates to keep your website running smoothly and securely.',
    highlights: ['Less than 24-hour response time', 'Content changes', 'Performance monitoring'],
  },
];

export default function ServiceTabs() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:items-stretch">
      <div className="lg:col-span-2 flex flex-col gap-2 justify-center">
        {services.map((service, i) => (
          <button
            key={service.id}
            type="button"
            onClick={() => setActive(i)}
            className={`p-4 rounded-xl text-left font-semibold cursor-pointer transition-all duration-200 border ${
              active === i
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/80 hover:shadow-sm'
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div className="lg:col-span-3 bg-emerald-950 rounded-2xl p-8 shadow-lg border border-emerald-800/60 card-interactive min-h-[280px] flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-white mb-3 text-center">{current.title}</h3>
        <p className="text-emerald-100/90 mb-6 leading-relaxed max-w-lg mx-auto text-center">{current.description}</p>
        <ul className="space-y-3 text-left">
          {current.highlights.map((item) => (
            <li key={item} className="flex items-center text-emerald-50/90">
              <span className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
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
