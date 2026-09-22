import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AccessModesGraphic,
  AccessibilityPreview,
  AltTextIllustration,
  ContrastIllustration,
  KeyboardIllustration,
  ReadableIllustration,
} from '../components/AccessibilityArt';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Accessibility | ScaleUp',
  description:
    'Accessible web design for small businesses. ScaleUp builds websites that work for everyone, including screen readers, keyboard navigation, and WCAG best practices.',
};

const steps = [
  {
    title: 'Readable & Navigable',
    description:
      'Clear heading structure, descriptive link text, and logical page layout so screen readers and users can find what they need.',
    art: ReadableIllustration,
  },
  {
    title: 'Keyboard & Focus Support',
    description:
      'All interactive elements work with a keyboard, with visible focus states so nothing is trapped or hidden.',
    art: KeyboardIllustration,
  },
  {
    title: 'Color & Contrast',
    description:
      'Text and buttons meet contrast guidelines so content is legible for users with low vision or color blindness.',
    art: ContrastIllustration,
  },
  {
    title: 'Alt Text & Labels',
    description:
      'Images include meaningful alt text and form fields have proper labels so assistive technology can describe your content accurately.',
    art: AltTextIllustration,
  },
];

export default function AccessibilityPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility</h1>
              <p className="text-xl text-emerald-100/90 leading-relaxed mb-6">
                Websites that work for everyone, on every device
              </p>
              <p className="text-base md:text-lg text-emerald-100/75 leading-relaxed">
                An accessible website means more people can use your site, including users with
                disabilities, older visitors, and anyone on a phone in bright sunlight. ScaleUp builds
                accessibility into every project from the start, not as an afterthought.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <AccessibilityPreview />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">What Is Web Accessibility?</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Web accessibility means designing and building sites so people of all abilities can
                  perceive, navigate, and interact with your content. That includes users who rely on
                  screen readers, keyboard-only navigation, or high-contrast displays.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Beyond being the right thing to do, accessible sites reach a wider audience, perform
                  better in search, and reduce legal risk for businesses serving the public online.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <AccessModesGraphic />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-emerald-50/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">What We Do</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Every ScaleUp site is built with accessibility standards in mind.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Art = step.art;
              return (
                <ScrollReveal key={step.title} delay={index * 70}>
                  <article className="h-full bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden">
                    <div className="bg-[radial-gradient(circle,_#a7f3d0_1px,_transparent_1px)] [background-size:14px_14px] bg-emerald-50 px-3 pt-4 flex items-end justify-center">
                      <Art />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
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
          <h2 className="text-3xl font-bold text-emerald-950 mb-4">Ready for an Accessible Site?</h2>
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
