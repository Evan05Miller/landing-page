import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BuildIllustration,
  DesignIllustration,
  DiscoveryIllustration,
  LaunchIllustration,
  ProcessEvolution,
} from '../components/DesignProcessArt';
import DesignProcessGraphic from '../components/DesignProcessGraphic';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Design Process | ScaleUp',
  description:
    'ScaleUp design process for small business websites. Discovery, design, development, and launch with direct communication every step.',
};

const steps = [
  {
    title: 'Discovery & Planning',
    description:
      'We discuss your goals, audience, and content needs, then outline the site structure and timeline together.',
    art: DiscoveryIllustration,
  },
  {
    title: 'Design & Feedback',
    description:
      'You review layouts and visual direction before anything is built, so the final site matches your vision.',
    art: DesignIllustration,
  },
  {
    title: 'Development & Review',
    description:
      'We build your site with modern tools, share progress along the way, and refine based on your input.',
    art: BuildIllustration,
  },
  {
    title: 'Launch & Support',
    description:
      'Once everything is tested and approved, we go live and stay available for updates and ongoing support.',
    art: LaunchIllustration,
  },
];

export default function DesignProcessPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-16 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-16 -left-10 w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ScrollReveal className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Design Process</h1>
              <p className="text-xl text-emerald-100/90 leading-relaxed mb-6">
                A clear, collaborative path from idea to live website
              </p>
              <p className="text-base md:text-lg text-emerald-100/75 leading-relaxed">
                Every project follows a structured process so you always know what&apos;s happening
                next. ScaleUp keeps things simple, transparent, and focused on your business goals.
                No confusing jargon, and no surprises.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <DesignProcessGraphic />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">How We Work</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  A great website starts with understanding your business. Before any design work
                  begins, we learn about your customers, your brand, and what you want the site to
                  accomplish.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From there, we move through design and development in clear stages, with your
                  feedback at every step, until your site is ready to launch and start working for
                  you.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
                <ProcessEvolution />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-emerald-50/70 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">What We Do</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              From first conversation to launch day, here is how ScaleUp brings your site to life.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-emerald-200" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Art = step.art;
                return (
                  <ScrollReveal key={step.title} delay={index * 70}>
                    <article className="h-full flex flex-col">
                      <div className="flex md:justify-center mb-4">
                        <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-emerald-200 shadow-sm flex items-center justify-center text-emerald-700">
                          <span className="text-lg font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden">
                        <div className="bg-[radial-gradient(circle,_#a7f3d0_1px,_transparent_1px)] [background-size:14px_14px] bg-emerald-50 px-3 pt-4 flex items-end justify-center">
                          <Art />
                        </div>
                        <div className="p-5">
                          <p className="text-xs font-semibold tracking-wide text-emerald-700 mb-1">
                            Step {index + 1}
                          </p>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-100 text-center">
        <ScrollReveal className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-emerald-950 mb-4">Ready to Start Your Project?</h2>
          <Link
            href="/#contact"
            className="inline-block btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold mt-6"
          >
            Get a Free Quote
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
