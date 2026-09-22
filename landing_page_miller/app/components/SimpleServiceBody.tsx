import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';

type Props = {
  whatIsTitle: string;
  whatIsContent: string[];
  whatWeDoTitle?: string;
  whatWeDoIntro?: string;
  whatWeDoItems: { title: string; description: string }[];
  ctaTitle?: string;
  ctaText?: string;
};

export default function SimpleServiceBody({
  whatIsTitle,
  whatIsContent,
  whatWeDoTitle = 'What We Do',
  whatWeDoIntro,
  whatWeDoItems,
  ctaTitle = 'Ready to Get Started?',
  ctaText = 'Get a Free Quote',
}: Props) {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">{whatIsTitle}</h2>
            <div className="space-y-4">
              {whatIsContent.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">{whatWeDoTitle}</h2>
            {whatWeDoIntro && (
              <p className="text-emerald-100/85 text-lg leading-relaxed max-w-2xl mx-auto">
                {whatWeDoIntro}
              </p>
            )}
          </ScrollReveal>

          <div className="space-y-5">
            {whatWeDoItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-emerald-100/75 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-100 text-center">
        <ScrollReveal className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-emerald-950 mb-4">{ctaTitle}</h2>
          <Link
            href="/#contact"
            className="inline-block btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold mt-6"
          >
            {ctaText}
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
