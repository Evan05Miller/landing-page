import Image from 'next/image';
import type { StaticImageData } from 'next/image';

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  image?: StaticImageData;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white rounded-2xl shadow-xl shadow-black/20 overflow-hidden border border-emerald-800/40 card-interactive group h-full flex flex-col">
      <div className="relative h-52 w-full bg-emerald-900 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} website preview`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center">
            <p className="text-white text-xl font-bold px-6 text-center">{project.title}</p>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

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

        <ul className="space-y-2 mb-6">
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

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center btn-primary text-white py-2.5 px-4 rounded-xl text-sm font-semibold mt-auto"
        >
          View Live Site
        </a>
      </div>
    </article>
  );
}
