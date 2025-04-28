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
      link: "https://auto-front-git-master-amits-projects-069343dc.vercel.app/",
    },
    {
        title: "Kam Pay Karo",
        description: "Shopping web app with affiliate marketing",
        techStack: "Next.js, TailwindCSS, Node.js, MongoDB",
        status: "Live on Devlopment Mode",
        link: "https://paykaro-frontend-git-main-amits-projects-069343dc.vercel.app/",
      },
  ];

  return (
    <section id="projects" className="">
      <div className="">
        <h2 className="text-4xl font-bold ">Projects</h2>

        <Splide 
          options={{
            type: "loop",
            perPage: 2,
            gap: '1rem',
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
              <div className="bg-white p-4 rounded-2xl flex flex-col justify-between h-full hover:shadow-2xl transition-all">
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
                    className="mt-2 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 text-sm"
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
