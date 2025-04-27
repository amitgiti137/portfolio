'use client'
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-3 px-10 bg-white shadow-md">
      <h1 className="text-2xl hidden lg:flex font-bold text-gray-800">Amit Kumar</h1>
      <nav className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}
