'use client'
import Link from 'next/link';

export default function Header({ setActiveSection }) {
    return (
        <section className='conatiner mx-auto'>
            <header className="flex justify-between items-center py-3 px-10 bg-white dark:bg-gray-600 shadow-md fixed top-0 left-0 w-full z-20 ">
                <h1 className="text-2xl hidden lg:flex font-bold text-gray-800 dark:text-white">My Portfolio</h1>
                <nav className="lg:space-x-10 space-x-7 lg:me-24">
                    <Link href="/" onClick={() => setActiveSection('about')} className='text-gray-800 dark:text-white'>Home</Link>
                    <Link href="/" onClick={() => setActiveSection('work')} className='text-gray-800 dark:text-white'>Projects</Link>
                    <Link href="/#skills" onClick={() => setActiveSection('about')} className='text-gray-800 dark:text-white'>Skills</Link>
                    <Link href="/" onClick={() => setActiveSection('contact')} className='text-gray-800 dark:text-white'>Contact</Link>
                </nav>
            </header>
        </section>
    );
}
