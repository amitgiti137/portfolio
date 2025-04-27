'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Hitech Animation Studio Website",
      description: "Frontend website built solo for a studio using Next.js and TailwindCSS. Completed in 15 days.",
      techStack: "Next.js, TailwindCSS",
      status: "Local Project",
      link: null,
    },
    {
      title: "Tutopia E-commerce Website",
      description: "Live e-commerce platform with full frontend development, API integration, and ongoing maintenance.",
      techStack: "Next.js, TailwindCSS, API Integration",
      status: "Live Project",
      link: "https://shop.tutopialearningapp.com",
    },
    {
      title: "Task Management System",
      description: "Full-stack Task Management platform with real-time chat, role-based permissions, smart filters, and subscription system.",
      techStack: "Next.js 15, TailwindCSS, Node.js, MongoDB, Socket.IO",
      status: "Internal Project",
      link: null,
    },
    {
      title: "E-commerce Platform (General)",
      description: "Shopping web app with dynamic products, filters, and cart functionalities.",
      techStack: "Next.js, TailwindCSS",
      status: "Completed",
      link: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <Splide 
          options={{
            type: "loop",
            perPage: 2,
            gap: '2rem',
            autoplay: true,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
            breakpoints: {
                768: { perPage: 1 },
                1024: { perPage: 2 },
            },
          }}
        >
          {projects.map((project, index) => (
            <SplideSlide key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-between h-full hover:shadow-2xl transition-all">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600 mb-4">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-2"><strong>Tech Stack:</strong> {project.techStack}</p>
                  <p className="text-xs text-gray-400">{project.status}</p>
                </div>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 text-sm"
                  >
                    View Project <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
