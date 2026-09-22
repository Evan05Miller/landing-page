import Link from 'next/link';
import {
  KeywordIllustration,
  LocalAnalyticsIllustration,
  SearchResultAnatomy,
  StructureIllustration,
} from './SEOArt';
import ScrollReveal from './ScrollReveal';

const whatWeDo = [
  {
    title: 'Keyword & Metadata',
    description:
      "We research what your customers search for and place those keywords in every page's title tags, meta descriptions, and Open Graph data.",
    art: KeywordIllustration,
  },
  {
    title: 'On-Page Structure',
    description:
      'Clear headings, fast load times, and mobile-first layouts so Google understands and ranks your content.',
    art: StructureIllustration,
  },
  {
    title: 'Local & Analytics',
    description:
      "Local business setup and analytics tracking so you show up nearby and can see what's working.",
    art: LocalAnalyticsIllustration,
  },
];

export default function SEOBody() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">What Is SEO?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Search Engine Optimization (SEO) improves your website so Google can understand, index,
                and rank your pages. When done well, your site appears higher for the terms your
                customers actually use.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Good SEO means fast performance, clear structure, and metadata that targets the right
                keywords, not tricks or shortcuts. Google rewards sites that are helpful, trustworthy,
                and built for real people.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <SearchResultAnatomy />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-emerald-50/70 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">What We Do</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Every ScaleUp site is built to rank. We research the keywords your customers use and
              build them into your page metadata, including title tags, meta descriptions, and Open
              Graph data, so search engines know exactly what you offer.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeDo.map((item, i) => {
              const Art = item.art;
              return (
                <ScrollReveal key={item.title} delay={i * 70}>
                  <article className="h-full bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden">
                    <div className="bg-[radial-gradient(circle,_#a7f3d0_1px,_transparent_1px)] [background-size:14px_14px] bg-emerald-50 px-3 pt-4 flex items-end justify-center">
                      <Art />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-100 text-center">
        <ScrollReveal className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-emerald-950 mb-4">Ready to Rank Higher?</h2>
          <p className="text-emerald-800/90 text-lg mb-8 leading-relaxed">
            Let&apos;s build a site with the right keywords in the right places so customers find you first.
          </p>
          <Link
            href="/#contact"
            className="inline-block btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Get a Free Quote
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
