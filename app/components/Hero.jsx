'use client'

import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram, FaPhone, FaEnvelope, FaBirthdayCake } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="w-[100%] container mx-auto rounded-4xl flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-6 relative">

      {/* Glow Backgrounds */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      {/* Profile Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">

        {/* Left Section */}
        <div className="flex flex-col items-start">
          <Image 
            src="/assets/amit-dp.jpg" 
            width={200} 
            height={200} 
            alt="Amit Kumar" 
            className="rounded-full border-4 border-yellow-400 object-cover"
          />
          <h1 className="text-4xl font-bold mt-6">Amit Kumar</h1>
          <p className="text-lg text-gray-200 mt-2">Full Stack Web Developer</p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4 text-2xl">
            <a href="https://linkedin.com" target="_blank" className="hover:text-yellow-300"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" className="hover:text-yellow-300"><FaGithub /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-yellow-300"><FaInstagram /></a>
            <a href="https://naukri.com" target="_blank" className="hover:text-yellow-300"><FaBriefcase /></a> {/* ✅ Naukri link */}
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-sm space-y-2">
            <p className="flex items-center gap-2"><FaPhone /> +91 91356 19017</p>
            <p className="flex items-center gap-2"><FaEnvelope /> amit1317jmp@gmail.com</p>
            <p className="flex items-center gap-2"><FaBirthdayCake /> 17 May 1994</p>
          </div>
        </div>

        {/* Middle About Section */}
        {/* <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-200 leading-relaxed">
            Passionate Web Developer with hands-on experience at DigitalWolf Kolkata since August 2024.
            Specialized in designing user-centric, scalable web solutions using Next.js, Node.js, and MongoDB.
            Focused on combining creativity, technical expertise, and business needs to deliver high-quality results.
          </p>
        </div> */}

      </div>
    </section>
  );
}
