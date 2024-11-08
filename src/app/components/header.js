"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Header with logo and bottom border */}
      <header className="flex items-center justify-between h-[70px] w-full px-4 sm:px-8 border-b-2 border-[#323231]">
        <link href="/" className="text-2xl font-bold">
          <image src="/E.G.svg" alt="Logo" className="h-[40px]" />
        </link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </header>

      {/* Desktop Horizontal Menu Below Header */}
      <nav className="hidden sm:flex space-x-8 mt-4 ml-8">
        <link
          href="/home"
          className={`text-lg italic ${
            pathname === '/home' ? 'text-black underline underline-offset-4' : 'text-gray-500'
          } hover:underline underline-offset-4`}
        >
          Home
        </link>
        <link
          href="/blog"
          className={`text-lg italic ${
            pathname === '/blog' ? 'text-black underline underline-offset-4' : 'text-gray-500'
          } hover:underline underline-offset-4`}
        >
          Blog
        </link>
      </nav>

      {/* Mobile Menu Overlay Positioned Below Header */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#FAF9F6] bg-opacity-95 flex flex-col items-center p-8 z-50">
          {/* Scrollable Menu Container */}
          <div className="flex flex-col items-center space-y-6 mt-[100px] overflow-y-auto max-h-[calc(100vh-100px)] w-full px-8">
            <link
              href="/home"
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl italic ${
                pathname === '/home' ? 'text-black underline' : 'text-gray-500'
              } hover:underline`}
            >
              Home
            </link>
            <link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl italic ${
                pathname === '/blog' ? 'text-black underline' : 'text-gray-500'
              } hover:underline`}
            >
              Blog
            </link>
          </div>

          {/* Close Button at the Bottom */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-lg mb-8 px-4 py-2 border border-black rounded-full"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
