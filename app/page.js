'use client'

import { useState } from 'react';
import { SiNextdotjs, SiNodejs, SiMongodb, SiTailwindcss, SiPostman, SiVercel } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import RightSidebar from './components/RightSidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';
import Skills from './components/Skills';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about'); // default About section

  // Define the "What I Do" cards data
  const skills = [
    {
      icon: <SiNextdotjs size={40} />,
      title: 'Frontend Development',
      description: 'Experienced frontend web developer proficient in HTML5, CSS3, and JavaScript, with a strong knowledge of modern JavaScript libraries and frameworks such as React.js & Next.js.'
    },
    {
      icon: <FaNodeJs size={40} />,
      title: 'Backend Development',
      description: 'Skilled in building robust server-side applications using Node.js, Express.js, and working with databases like MongoDB to create scalable APIs and web services.'
    },
    {
      icon: <SiTailwindcss size={40} />,
      title: 'CSS Framework',
      description: 'Proficient in using TailwindCSS to create responsive, utility-first designs with ease.'
    },
    {
      icon: <SiMongodb size={40} />,
      title: 'Database Management',
      description: 'Experience in working with MongoDB to manage scalable data storage solutions.'
    },
    {
      icon: <SiPostman size={40} />,
      title: 'API Testing',
      description: 'Expertise in using Postman for testing RESTful APIs and ensuring smooth integration.'
    },
    {
      icon: <SiVercel size={40} />,
      title: 'Deployment',
      description: 'Familiar with deploying applications on Vercel for efficient, scalable hosting.'
    }
  ];

  return (
    <>
      <Header />
      <div className="flex">

        {/* Left Profile */}

        <div className="w-[25%]">
          <Hero />
        </div>

        {/* Center Content */}
        <div className="w-[70%] p-8">
          {activeSection === 'about' && (
            <section className="py-3">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-700 leading-relaxed">
                Passionate Web Developer with hands-on experience at DigitalWolf Kolkata since August 2024.
                Specialized in designing user-centric, scalable web solutions using Next.js, Node.js, and MongoDB.
                Focused on combining creativity, technical expertise, and business needs to deliver high-quality results.
              </p>
              <div>
                <p className="whatIDo text-2xl font-bold mt-4 mb-6">What I Do!</p>
                
                {/* Splide Slider */}
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
                  {skills.map((skill, index) => (
                    <SplideSlide key={index}>
                      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between h-full hover:shadow-2xl transition-all">
                        <div>
                          <div className="mb-4">
                            {skill.icon}
                          </div>
                          <p className="card-title text-xl font-semibold">{skill.title}</p>
                          <p className="text-gray-700 mb-4">{skill.description}</p>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              
              <Skills />
            </section>
          )}

          {activeSection === 'resume' && <Resume />}
          {activeSection === 'work' && <Projects />}
          {activeSection === 'contact' && <Contact />}
        </div>

        {/* Right Sidebar */}
        <RightSidebar setActiveSection={setActiveSection} />
      </div>
      <Projects />
      <Skills />
    </>
  );
}
