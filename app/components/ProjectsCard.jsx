'use client';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';

export default function ProjectsFlex() {
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
      status: "Live on Test Mode",
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
    <section id="projects-flex" className="py-3 lg:py-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
      <div className="max-w-7xl mx-auto px-2 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 lg:mb-8 flex items-center text-gray-900 dark:text-white"><FaProjectDiagram className="mr-2" />Projects</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all basis-full md:basis-[48%]"
            >
              <div>
                <h3 className="text-xl font-bold text-indigo-600 mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-2"><strong>Tech Stack:</strong> {project.techStack}</p>
                <p className="text-xs text-gray-400">{project.status}</p>
              </div>
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 text-sm"
                >
                  View Project <FaExternalLinkAlt />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
