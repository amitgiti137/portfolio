'use client';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaTools } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiPostman, SiVercel, SiMongodb, SiVisualstudio } from 'react-icons/si';
import { Splide, SplideSlide } from '@splidejs/react-splide';  // Import Splide and SplideSlide
import '@splidejs/react-splide/css'; // Make sure to import the CSS for the slider

export default function Skills() {
  // Skills data
  const skills = [
    { icon: <FaHtml5 className="text-5xl text-orange-500" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-5xl text-blue-500" />, name: 'CSS3' },
    { icon: <FaJsSquare className="text-5xl text-yellow-400" />, name: 'JavaScript' },
    { icon: <FaReact className="text-5xl text-blue-400" />, name: 'React.js' },
    { icon: <SiNextdotjs className="text-5xl text-black dark:text-white" />, name: 'Next.js' },
    { icon: <FaNodeJs className="text-5xl text-green-600" />, name: 'Node.js' },
    { icon: <SiMongodb className="text-5xl text-green-500" />, name: 'MongoDB' },
    { icon: <SiTailwindcss className="text-5xl text-teal-400" />, name: 'TailwindCSS' },
    { icon: <SiVercel className="text-5xl text-black dark:text-white" />, name: 'Vercel' },
    { icon: <SiPostman className="text-5xl text-orange-600" />, name: 'Postman' },
    { icon: <FaGithub className="text-5xl text-black dark:text-white" />, name: 'GitHub' },
  ];

  return (
    <section id="skills" className="py-8 bg-white dark:bg-gray-800 transition-colors duration-500 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white"> <FaTools className="mr-2" />Skills</h2>

        {/* Splide Slider */}
        <Splide
          options={{
            type: 'loop',
            perPage: 7,  // Show two items per page
            gap: '2rem',
            autoplay: true,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
            breakpoints: {
              768: { perPage: 4 },  // On smaller screens, show one item per page
              1024: { perPage: 6 }, // On larger screens, show two items per page
            },
          }}
        >
          {/* Map through the skills */}
          {skills.map((skill, index) => (
            <SplideSlide key={index}>
              <div className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-300">
                <div className="text-5xl">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
