import Link from "next/link";
import juleshullfrontpage from "./images/juleshullfrontpage.png"
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Jules Hull Plumbing and Art",
      description:
        "A responsive website for a plumber featuring his plumbing buisness along with his personal artwork",
      image: juleshullfrontpage,
      technologies: ["Wordpress"],
      features: [
        "Integrated Emailing System",
        "Personalized Site",
        "Art Gallery",
        "Mobile Responsive"
      ],
      category: "Plumbing Business",
      liveUrl: "https://juleshull.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Explore our recent projects and see how we&apos;ve helped small
              businesses establish their online presence
            </p>
          </div>
        </div>
      </section>


{/* Portfolio Grid */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          {/* Project Image */}
          <div className="relative h-48 w-full">
            <Image
              src={project.image}
              alt={project.title}
              priority
            />
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Key Features:
              </h4>
              <ul className="space-y-1">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-gray-600 flex items-center"
                  >
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
            >
              View Live Site
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Testimonial */}
<section className="py-20 bg-blue-600">
  <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      What Our Clients Say
    </h2>
    <p className="text-xl text-blue-100 mb-12">
      Don&apos;t just take our word for it - hear from the businesses we&apos;ve helped
    </p>

    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-center text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-600 mb-4">
        &quot;The site looks terrific! You have far exceeded my experctations. I love that you didn&apos;t use stock photos, it make it more professional and personal&quot;
      </p>

      <p className="font-semibold text-gray-900">Jules Hull</p>
      <p className="text-sm text-gray-600">Owner, Hull&apos;s Plumbing and Heating</p>
    </div>
  </div>
</section>



{/* Call to Action */}
<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
      Ready to Start Your Project?
    </h2>
    <p className="text-xl text-blue-500 mb-8">
      Let&apos;s create something amazing for your business. Get your free quote today.
    </p>
    <Link
      href="/#contact"
      className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
    >
      Get Your Free Quote
    </Link>
  </div>
</section>
    </div>
  );
}

