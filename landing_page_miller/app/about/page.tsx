import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ScaleUp
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Passionate web development focused on helping small businesses succeed online
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet the Developer
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hi, I&apos;m Evan Miller, the founder and lead developer at ScaleUp. With a passion for creating 
                beautiful, functional websites, I specialize in helping small businesses establish their online presence.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I believe every business, regardless of size, deserves a professional website that reflects 
                their brand and helps them connect with customers. My approach combines modern web technologies 
                with a personal touch to deliver solutions that work.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I’m passionate about effective advertising and marketing strategies that drive 
                sales growth and strengthen the community around a company.
              </p>
            </div>

            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Approach</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Listen First</h4>
                    <p className="text-gray-600">I take time to understand your business goals and target audience before proposing solutions.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Design with Purpose</h4>
                    <p className="text-gray-600">Every element is crafted to serve your business objectives and improve user experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Deliver Quality</h4>
                    <p className="text-gray-600">Clean, fast, and secure websites built with the latest technologies and best practices.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Support Always</h4>
                    <p className="text-gray-600">Ongoing maintenance and support to keep your website running smoothly and securely.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
<section className="py-20 bg-blue-600">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
      Feel free to reach out via email or connect with me on LinkedIn. I&apos;m always open to discussing new projects, collaborations, or ideas.
    </p>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
      <a
        href="mailto:evan05miller@gmail.com"
        className="bg-white text-blue-600 text-lg font-semibold py-3 px-8 rounded-lg shadow hover:bg-blue-100 transition flex flex-col items-center"
      >
        <span>Email Me</span>
        <span className="text-sm font-normal text-blue-500">evan05miller@gmail.com</span>
      </a>
      <a
        href="https://www.linkedin.com/in/evan-miller-896b26301"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-600 text-lg font-semibold py-3 px-8 rounded-lg shadow hover:bg-blue-100 transition"
      >
        LinkedIn
      </a>
    </div>
  </div>
</section>


      {/* Skills & Technologies */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Skills & Technologies
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        I work with modern technologies to create fast, secure, and scalable web solutions
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="w-full h-24 bg-blue-100 rounded-lg flex items-center justify-center mx-auto text-blue-800 text-lg font-semibold px-4 text-center">
          React & Next.js
        </div>
      </div>

      <div className="text-center">
        <div className="w-full h-24 bg-green-100 rounded-lg flex items-center justify-center mx-auto text-green-800 text-lg font-semibold px-4 text-center">
          WordPress
        </div>
      </div>

      <div className="text-center">
        <div className="w-full h-24 bg-purple-100 rounded-lg flex items-center justify-center mx-auto text-purple-800 text-lg font-semibold px-4 text-center">
          Responsive Web Design
        </div>
      </div>

      <div className="text-center">
        <div className="w-full h-24 bg-orange-100 rounded-lg flex items-center justify-center mx-auto text-orange-800 text-lg font-semibold px-4 text-center">
          SEO Strategies
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            My Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            To bridge the gap between small businesses and the digital world by creating affordable, 
            professional websites that help them compete and thrive in today&apos;s online marketplace.
          </p>
          
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss your project and create something amazing for your business.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
