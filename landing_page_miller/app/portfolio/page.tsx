import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";
import PortfolioPatternSection from "../components/PortfolioPatternSection";
import juleshullfrontpage from "./images/juleshullfrontpage.png";
import ewbfrontpage from "./images/ewbfrontpage.png";
import henhacksfrontpage from "./images/henhacksfrontpage.png";

const projects = [
    {
    id: 1,
    title: "University of Delaware Engineers Without Borders",
    description:
      "A website for the UD chapter of Engineers Without Borders, showcasing their projects, team, and impact.",
    technologies: ["Next.JS", "Tailwind CSS", "React"],
    features: [
      "Project Showcases",
      "Ongoing Support and Updates",
      "Mobile Responsive",
    ],
    liveUrl: "https://ud-ewb.org",
    image: ewbfrontpage,
  },
  {
    id: 2,
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
    liveUrl: "https://juleshull.com",
    image: juleshullfrontpage,
  },
    {
    id: 3,
    title: "HenHacks",
    description:
      "A website for UD's annual HenHacks hackathon, featuring event information, schedule, and updates for attendees and sponsors.",
    technologies: ["Next.JS", "Tailwind CSS", "React"],
    features: [
      "Event Information",
      "Schedule and Updates",
      "Mobile Responsive",
    ],
    liveUrl: "https://www.henhackshackathon.com/",
    image: henhacksfrontpage,
  },
];

const testimonials = [
  {
    quote:
      "The site looks terrific! You have far exceeded my expectations. I love that you didn't use stock photos — it makes it more professional and personal.",
    author: "Jules Hull",
    role: "Owner, Hull's Plumbing and Heating",
  },
  {
    quote:
      "The website is phenomenal Evan. Truly thankful for your hard work and passion for EWB. It has been a pleasure working with you and I look forward to continuing to work together in the future.",
    author: "Water Team Project Manager",
    role: "University of Delaware Student Chapter",
  },
];

function StarRating() {
  return (
    <div className="flex justify-center text-amber-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <PortfolioPatternSection className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </PortfolioPatternSection>

      <section className="py-20 bg-emerald-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-emerald-100 mb-12">
              Hear from the businesses and organizations I&apos;ve helped
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((review, i) => (
              <ScrollReveal key={review.author} delay={i * 80}>
                <div className="bg-white p-8 rounded-2xl shadow-xl text-left hover:shadow-2xl transition-shadow h-full flex flex-col">
                  <StarRating />
                  <p className="text-gray-600 mb-4 leading-relaxed italic flex-1">
                    &quot;{review.quote}&quot;
                  </p>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
