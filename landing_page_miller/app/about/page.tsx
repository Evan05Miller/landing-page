import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import SkillBar from '../components/SkillBar';

const approach = [
  { title: 'Listen First', desc: 'I take time to understand your business goals and target audience before proposing solutions.' },
  { title: 'Design with Purpose', desc: 'Every element is crafted to serve your business objectives and improve user experience.' },
  { title: 'Deliver Quality', desc: 'Clean, fast, and secure websites built with the latest technologies and best practices.' },
  { title: 'Support Always', desc: 'Ongoing maintenance and support to keep your website running smoothly and securely.' },
];

const skills = [
  { label: 'React & Next.js', level: 90 },
  { label: 'WordPress', level: 85 },
  { label: 'Responsive Design', level: 95 },
  { label: 'SEO Strategies', level: 80 },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="hero-mesh text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ScaleUp</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Passionate web development focused on helping small businesses succeed online
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet the Developer</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hi, I&apos;m Evan Miller, the founder and lead developer at ScaleUp. With a passion for creating
                beautiful, functional websites, I specialize in helping small businesses establish their online presence.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I believe every business, regardless of size, deserves a professional website that reflects
                their brand and helps them connect with customers. My approach combines modern web technologies
                with a personal touch to deliver solutions that work.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I&apos;m passionate about effective advertising and marketing strategies that drive
                sales growth and strengthen the community around a company.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Approach</h3>
                <div className="space-y-5">
                  {approach.map((item) => (
                    <div key={item.title} className="flex items-start group">
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
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
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

      <section className="py-20 bg-gradient-to-b from-emerald-50/80 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600">
              Modern tools to create fast, secure, and scalable web solutions
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 space-y-6">
              {skills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} level={skill.level} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">My Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To bridge the gap between small businesses and the digital world by creating affordable,
            professional websites that help them compete and thrive in today&apos;s online marketplace.
          </p>
        </ScrollReveal>
      </section>

      <section className="py-20 hero-mesh text-white">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let&apos;s discuss your project and create something amazing for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:-translate-y-0.5 shadow-lg"
          >
            Get Started Today
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
