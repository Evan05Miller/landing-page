import type { Metadata } from 'next';
import SearchRankAnimation from '../components/SearchRankAnimation';
import SEOBody from '../components/SEOBody';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'SEO Services | ScaleUp',
  description:
    'Search engine optimization for small businesses. ScaleUp builds fast, structured websites with keyword-optimized metadata that help you rank and get found on Google.',
};

export default function SEOPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-16 bg-emerald-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ScrollReveal className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Search Engine Optimization (SEO)
              </h1>
              <p className="text-xl text-emerald-100/90 leading-relaxed mb-6">
                Get found on Google when customers search for what you offer
              </p>
              <p className="text-base md:text-lg text-emerald-100/75 leading-relaxed">
                Most customers start with a search. If your business doesn&apos;t show up,  or your site
                loads slowly and looks outdated, you lose leads before they ever call. ScaleUp builds SEO
                into every website from day one.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <SearchRankAnimation />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SEOBody />
    </div>
  );
}
