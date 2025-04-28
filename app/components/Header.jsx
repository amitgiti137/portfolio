'use client'
import Link from 'next/link';

export default function Header({ setActiveSection }) {
  return (
    <section className=''>
        <header className="flex justify-between items-center py-3 px-10 bg-white shadow-md fixed top-0 left-0 w-full z-20 ">
      <h1 className="text-2xl hidden lg:flex font-bold text-gray-800">My Portfolio</h1>
      <nav className="space-x-6">
        <Link href="/" onClick={() => setActiveSection('about')}>Home</Link>
        <Link href="/" onClick={() => setActiveSection('work')}>Projects</Link>
        <Link href="/#skills" onClick={() => setActiveSection('about')}>Skills</Link>
        <Link href="/" onClick={() => setActiveSection('contact')}>Contact</Link>
      </nav>
    </header>
    </section>
  );
}
