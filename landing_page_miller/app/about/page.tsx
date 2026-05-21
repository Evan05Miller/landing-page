import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

const approach = [
  { title: 'Listen First', desc: 'I take time to understand your business goals and target audience before proposing solutions.' },
  { title: 'Design with Purpose', desc: 'Every element is crafted to serve your business objectives and improve user experience.' },
  { title: 'Deliver Quality', desc: 'Clean, fast, and secure websites built with the latest technologies and best practices.' },
  { title: 'Support Always', desc: 'Ongoing maintenance and support to keep your website running smoothly and securely.' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-16 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              <div className="flex-shrink-0 mt-8 sm:mt-12">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-[3px] border-white/80 shadow-lg shadow-black/30">
                  <Image
                    src="/evan-miller.png"
                    alt="Evan Miller"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                    priority
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet the Developer</h2>
                <p className="text-lg text-emerald-100/90 mb-6 leading-relaxed">
                  Hi, I&apos;m Evan Miller, the founder and lead developer at ScaleUp. With a passion for creating
                  beautiful, functional websites, I specialize in helping small businesses establish their online presence.
                  I&apos;m currently a Junior CS major at the University of Delaware looking for opportunities to learn and grow in this field.
                </p>
                <p className="text-lg text-emerald-100/90 mb-6 leading-relaxed">
                  I believe every business, regardless of size, deserves a professional website that reflects
                  their brand and helps them connect with customers. My approach combines modern web technologies
                  with a personal touch to deliver solutions that work.
                </p>
                <p className="text-lg text-emerald-100/90 leading-relaxed">
                  I&apos;m passionate about effective advertising and marketing strategies that drive
                  sales growth and strengthen the community around a company.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-emerald-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">My Approach</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {approach.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start group bg-white rounded-xl p-5 border border-emerald-100 shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                    <svg
                      className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors"
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
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Feel free to reach out via email or connect with me on LinkedIn. I&apos;m always open to discussing new projects, collaborations, or ideas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="mailto:evan05miller@gmail.com"
                className="bg-white text-emerald-800 text-lg font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col items-center min-w-[220px]"
              >
                <span>Email Me</span>
                <span className="text-sm font-normal text-emerald-600">evan05miller@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/evan-miller-896b26301"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white text-lg font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-all min-w-[220px]"
              >
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-emerald-800/90 mb-8">
            Let&apos;s discuss your project and create something amazing for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-block btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:-translate-y-0.5 shadow-lg"
          >
            Get Started Today
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
