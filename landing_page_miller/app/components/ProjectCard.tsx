'use client';

import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  category: string;
  liveUrl: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100 card-interactive group">
      <div className="relative h-52 bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
        <div className="relative text-center px-6">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-emerald-100 text-xs font-medium mb-3 backdrop-blur-sm">
            {project.category}
          </span>
          <p className="text-white text-2xl font-bold">{project.title}</p>
        </div>
        <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-emerald-50 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="text-sm font-medium text-emerald-700 hover:text-emerald-900 flex items-center gap-1 mb-4 transition-colors"
        >
          {expanded ? 'Hide details' : 'Show details'}
          <svg
            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className={`accordion-content ${expanded ? 'open' : ''}`}>
          <div className="accordion-inner">
            <ul className="space-y-2 mb-4">
              {project.features.map((feature) => (
                <li key={feature} className="text-sm text-gray-600 flex items-center">
                  <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center btn-primary text-white py-2.5 px-4 rounded-xl text-sm font-semibold"
        >
          View Live Site
        </a>
      </div>
    </article>
  );
}
