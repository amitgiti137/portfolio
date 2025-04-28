'use client'

import { FaUser, FaFileAlt, FaBriefcase, FaBlog, FaAddressBook } from 'react-icons/fa';

export default function RightSidebar({ setActiveSection }) {
  return (
    <>
    {/* Desktop Sidebar (Vertical, Right side) */}
    <div className="hidden lg:flex flex-col gap-8 fixed top-1/6 right-6 bg-white/30 backdrop-blur-md p-4 rounded-lg shadow-lg z-50">
      {/* Sidebar Buttons */}
      <button onClick={() => setActiveSection('about')} className="flex flex-col items-center hover:text-blue-600 transition-all">
        <FaUser size={24} />
        <span className="text-xs mt-1">About</span>
      </button>

      <button onClick={() => setActiveSection('resume')} className="flex flex-col items-center hover:text-blue-600 transition-all">
        <FaFileAlt size={24} />
        <span className="text-xs mt-1">Resume</span>
      </button>

      <button onClick={() => setActiveSection('work')} className="flex flex-col items-center hover:text-blue-600 transition-all">
        <FaBriefcase size={24} />
        <span className="text-xs mt-1">Work</span>
      </button>

      <button onClick={() => setActiveSection('contact')} className="flex flex-col items-center hover:text-blue-600 transition-all">
        <FaAddressBook size={24} />
        <span className="text-xs mt-1">Contact</span>
      </button>
    </div>

    {/* Mobile Bottom Bar (Horizontal) */}
    <div className="fixed bottom-0 left-0 right-0 bg-white/30 backdrop-blur-md flex justify-around items-center p-2 shadow-lg z-50 lg:hidden">
      {/* Sidebar Buttons */}
      <button onClick={() => setActiveSection('about')} className="flex flex-col items-center hover:text-blue-600 transition-all">
        <FaUser size={24} />
        <span className="text-xs mt-1">About</span>
      </button>

      <button onClick={() => setActiveSection('resume')} className="flex flex-col items-center hover:text-blue-600 transition-all">
        <FaFileAlt size={24} />
        <span className="text-xs mt-1">Resume</span>
      </button>

      <button onClick={() => setActiveSection('work')} className="flex flex-col items-center hover:text-blue-600 transition-all">
        <FaBriefcase size={24} />
        <span className="text-xs mt-1">Work</span>
      </button>

      <button onClick={() => setActiveSection('contact')} className="flex flex-col items-center hover:text-blue-600 transition-all">
        <FaAddressBook size={24} />
        <span className="text-xs mt-1">Contact</span>
      </button>
    </div>
    </>
  );
}
