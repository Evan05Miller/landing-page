import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AgentAnswerGraphic,
  AnswerCopyIllustration,
  FactExtractionGraphic,
  FutureVisibilityIllustration,
  SchemaIllustration,
  StructuredContentIllustration,
} from '../components/AEOArt';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'AEO Services | ScaleUp',
  description:
    'Agent Engine Optimization for small businesses. ScaleUp builds websites structured for AI search agents, chatbots, and answer engines.',
};

const benefits = [
  {
    title: 'Structured Content for AI',
    description:
      'We organize your pages with clear sections, semantic HTML, and structured data so AI agents can extract accurate information about your business.',
    art: StructuredContentIllustration,
  },
  {
    title: 'Answer-Ready Copy',
    description:
      'Content is written to directly answer common questions about services, pricing approach, service areas, and differentiators, in formats AI systems prefer to quote.',
    art: AnswerCopyIllustration,
  },
  {
    title: 'Schema & Metadata',
    description:
      'Business schema, FAQ markup, and rich metadata help agents understand your offerings without guessing or pulling outdated information.',
    art: SchemaIllustration,
  },
  {
    title: 'Future-Proof Visibility',
    description:
      'As more customers use AI to discover businesses, AEO keeps your site ready for current search engines and for the agents people use next.',
    art: FutureVisibilityIllustration,
  },
];

const includes = [
  'Semantic HTML and clear page structure for machine readability',
  'JSON-LD structured data for business and services',
  'FAQ sections formatted for answer extraction',
  'Concise, factual service descriptions AI can cite accurately',
  'Consistent name, address, and phone across all pages',
  'Open Graph and meta tags for rich previews',
  'Content organized around real customer questions',
  'Combined with SEO best practices for full search coverage',
];

export default function AEOPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agent Engine Optimization (AEO)</h1>
              <p className="text-xl text-emerald-100/90 leading-relaxed mb-6">
                Be discoverable when AI agents search on behalf of your customers
              </p>
              <p className="text-base md:text-lg text-emerald-100/75 leading-relaxed">
                Search is changing. More people use AI assistants such as ChatGPT, Perplexity, and
                Google AI Overviews to find businesses, compare services, and get recommendations.
                AEO prepares your website so these systems can accurately read, understand, and cite
                your business.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <AgentAnswerGraphic />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">What Is AEO?</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Agent Engine Optimization (AEO) is the practice of structuring your website so AI
                  agents and answer engines can easily retrieve, interpret, and recommend your
                  business. Unlike traditional SEO, which targets search engine result pages, AEO
                  focuses on how machines read and summarize your content for users.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  AI agents look for clear, factual, well-organized information: who you are, what
                  you offer, where you operate, and why someone should choose you. Sites with vague
                  copy, poor structure, or missing business details often get skipped or
                  misrepresented in AI-generated answers.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  AEO is especially valuable for small businesses because it levels the playing
                  field: a well-structured local site can be cited alongside much larger competitors
                  when an AI agent answers a question like &quot;Who is a good web developer for small
                  businesses in my area?&quot;
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <FactExtractionGraphic />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-emerald-50/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">How ScaleUp Helps</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Practical optimization built into every project, not bolted on as an afterthought.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Art = benefit.art;
              return (
                <ScrollReveal key={benefit.title} delay={index * 70}>
                  <article className="h-full bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden">
                    <div className="bg-[radial-gradient(circle,_#a7f3d0_1px,_transparent_1px)] [background-size:14px_14px] bg-emerald-50 px-3 pt-4 flex items-end justify-center">
                      <Art />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">What&apos;s Included</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-emerald-100/90">
                  <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      <section className="py-20 bg-emerald-100 text-center">
        <ScrollReveal className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-emerald-950 mb-4">Ready to Get Started?</h2>
          <p className="text-emerald-800/90 text-lg mb-8 leading-relaxed">
            Let&apos;s build a site that works for search engines, AI agents, and the customers you want to reach.
          </p>
          <Link
            href="/#contact"
            className="inline-block btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Get a Free Quote
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
