import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import type { ReactNode } from 'react';

type Benefit = {
  title: string;
  description: string;
};

type ServicePageLayoutProps = {
  title: string;
  subtitle: string;
  intro: string;
  whatIsTitle: string;
  whatIsContent: string[];
  benefits: Benefit[];
  includes: string[];
  ctaText?: string;
  heroAnimation?: ReactNode;
};

export default function ServicePageLayout({
  title,
  subtitle,
  intro,
  whatIsTitle,
  whatIsContent,
  benefits,
  includes,
  ctaText = 'Get a Free Quote',
  heroAnimation,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-16 bg-emerald-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${heroAnimation ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center' : 'text-center max-w-4xl mx-auto'}`}>
            <ScrollReveal className={heroAnimation ? 'text-left' : 'text-center'}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-emerald-100/90 leading-relaxed">{subtitle}</p>
            </ScrollReveal>
            {heroAnimation && (
              <ScrollReveal delay={120}>
                {heroAnimation}
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-lg text-gray-600 leading-relaxed">{intro}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-emerald-50/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{whatIsTitle}</h2>
            <div className="space-y-4">
              {whatIsContent.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              How ScaleUp Helps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical optimization built into every project — not bolted on as an afterthought.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 60}>
                <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm h-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What&apos;s Included</h2>
            <ul className="space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start text-emerald-100/90">
                  <svg
                    className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <ScrollReveal className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let&apos;s build a site that works for search engines, AI agents, and the customers you want to reach.
          </p>
          <Link
            href="/#contact"
            className="inline-block btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold"
          >
            {ctaText}
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
