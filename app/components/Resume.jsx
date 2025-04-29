'use client';

import { FaGraduationCap, FaBriefcase, FaClipboardList, FaLanguage } from 'react-icons/fa';
import Projects from "./Projects";
import Skills from "./Skills";

export default function Resume() {
    return (
        <>
            <section className="container mx-auto rounded-3xl p-2 lg:p-8 bg-amber-50 dark:bg-gray-900">
                <div>
                    <h1 className="text-4xl mb-4 text-gray-900 dark:text-white">Resume</h1>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl mb-3 flex items-cente text-gray-800 dark:text-gray-200"><FaGraduationCap className="mr-2" />Education</h2>
                    <div className="flex flex-wrap space-y-2 space-x-4">
                        <div className="bg-white rounded-xl w-[100%] lg:w-[48%] p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-400">Bachelor of Engineering</h3>
                            <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">Radharaman Institute Of Technology And Science</p>
                            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                <p>Mechanical Engineering</p>
                                <p>2013 - 2017</p>
                                <p>75%</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl w-[100%] lg:w-[48%] p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-400">Higher Secondary School</h3>
                            <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">K N Memo Academy Asarganj Munger</p>
                            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                <p>July 2010 - Mar 2012</p>
                                <p>72.2</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl w-[100%] lg:w-[48%] p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-400">Secondary School</h3>
                            <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">Kendriya vidyalaya Jamalpur Munger</p>
                            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                <p>April 2009 - Mar 2010</p>
                                <p>CGPA- 9</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl mb-3 flex items-cente text-gray-800 dark:text-gray-200"><FaBriefcase className="mr-2" />Experience</h2>
                    <div className="bg-white rounded-xl w-[100%] p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-400">DIGITAL WOLF</h3>
                        <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">Kolkata</p>
                        <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">Aug 2024 - Present</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-400">
                            <li>Developed static dynamic and E-commerce website that ensured high traffic, page view and user friendly.</li>
                            <li>Managed web design projects from start to finish using React.js, HTML 5, JavaScript and CSS 3 with 100% client satisfaction.</li>
                            <li>Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed.</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 p-6 mb-3 bbg-white dark:bg-gray-800 rounded-xl">
                    <Skills />
                </div>
                <div className="mt-4 p-6 mb-3 bg-white rounded-xl">
                    <Projects />
                </div>
                <div>
                    <h2 className="text-2xl mb-3 flex items-cente text-gray-800 dark:text-gray-200"><FaLanguage className="mr-2" />Languages</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-xl w-[100%] p-6">
                        <p className="text-sm mb-1 text-gray-700 dark:text-gray-300">English (Working Proficient)</p>
                        <p className="text-sm mb-1 text-gray-700 dark:text-gray-300">Hindi (Fluent)</p>
                    </div>
                </div>
                <div>
                <a href="/amit-resume.pdf" download className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Download Resume</a>
                </div>
            </section>
        </>

    );
}