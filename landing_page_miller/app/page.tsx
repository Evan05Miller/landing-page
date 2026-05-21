import ContactForm from './components/ContactForm';
import ScrollReveal from './components/ScrollReveal';
import ServiceTabs from './components/ServiceTabs';
import FAQ from './components/FAQ';
import HeroSection from './components/HeroSection';
import Link from 'next/link';

const features = [
  { title: 'Affordable Pricing', desc: 'Competitive rates designed for small business budgets' },
  { title: 'Fast Turnaround', desc: 'Quick delivery without compromising on quality' },
  { title: 'Personal Touch', desc: 'Direct communication and personalized service' },
  { title: 'Mobile-First Design', desc: 'Responsive websites that work perfectly on all devices' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection>
        <div className="text-center max-w-7xl mx-auto animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight max-w-6xl mx-auto">
            Professional Web Development
            <span className="block text-emerald-200 mt-2">for Small Businesses</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-emerald-50/90 max-w-2xl mx-auto leading-relaxed">
            Transform your business with a modern, responsive website that drives growth and connects with your customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
            >
              Get Your Free Quote
            </a>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white/40 hover:bg-white/10 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/80 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What ScaleUp Offers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development services tailored for small business growth
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <ServiceTabs />
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose ScaleUp?</h2>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group flex items-start p-4 rounded-xl hover:bg-emerald-900/60 transition-colors cursor-default"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                      <svg
                        className="w-5 h-5 text-emerald-300 group-hover:text-white transition-colors"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                      <p className="text-emerald-100/80">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-emerald-900/80 border border-emerald-700/50 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  Let&apos;s discuss your project and create a custom solution that fits your business needs and budget.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Free consultation', 'Custom quote', 'No hidden fees'].map((item) => (
                    <li key={item} className="flex items-center">
                      <svg className="w-5 h-5 text-emerald-300 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block w-full text-center bg-white text-emerald-800 hover:bg-emerald-50 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Start Your Project
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-emerald-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions about working with us</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FAQ />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote Today</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your online presence? Let&apos;s talk about your project.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
