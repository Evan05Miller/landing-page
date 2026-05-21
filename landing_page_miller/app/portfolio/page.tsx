import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Jules Hull Plumbing and Art",
    description:
      "A responsive website for a plumber featuring his plumbing business along with his personal artwork.",
    technologies: ["WordPress"],
    features: [
      "Integrated Emailing System",
      "Personalized Site",
      "Art Gallery",
      "Mobile Responsive",
    ],
    category: "Plumbing Business",
    liveUrl: "https://juleshull.com",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <section className="hero-mesh text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Explore our recent projects and see how we&apos;ve helped small businesses establish their online presence
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-emerald-50/80 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-emerald-100 mb-12">
              Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-xl text-left hover:shadow-2xl transition-shadow">
              <div className="flex justify-center text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed italic">
                &quot;The site looks terrific! You have far exceeded my expectations. I love that you didn&apos;t use stock photos — it makes it more professional and personal.&quot;
              </p>

              <p className="font-semibold text-gray-900">Jules Hull</p>
              <p className="text-sm text-gray-500">Owner, Hull&apos;s Plumbing and Heating</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s create something amazing for your business. Get your free quote today.
          </p>
          <Link
            href="/#contact"
            className="inline-block btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Get Your Free Quote
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
