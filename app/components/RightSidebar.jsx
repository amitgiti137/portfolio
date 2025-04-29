'use client'

import { FaUser, FaFileAlt, FaBriefcase, FaAddressBook } from 'react-icons/fa';

export default function RightSidebar({ setActiveSection }) {
  return (
    <>
      {/* Desktop Sidebar (Vertical, Right side) */}
      <div className="hidden lg:flex flex-col gap-8 fixed top-1/6 right-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-lg shadow-lg z-50 transition-colors duration-500">
        {[
          { icon: <FaUser size={24} />, label: 'About', section: 'about' },
          { icon: <FaFileAlt size={24} />, label: 'Resume', section: 'resume' },
          { icon: <FaBriefcase size={24} />, label: 'Work', section: 'work' },
          { icon: <FaAddressBook size={24} />, label: 'Contact', section: 'contact' },
        ].map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSection(item.section)}
            className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Mobile Bottom Bar (Horizontal) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md flex justify-around items-center p-2 shadow-lg z-50 lg:hidden transition-colors duration-500">
        {[
          { icon: <FaUser size={24} />, label: 'About', section: 'about' },
          { icon: <FaFileAlt size={24} />, label: 'Resume', section: 'resume' },
          { icon: <FaBriefcase size={24} />, label: 'Work', section: 'work' },
          { icon: <FaAddressBook size={24} />, label: 'Contact', section: 'contact' },
        ].map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSection(item.section)}
            className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
