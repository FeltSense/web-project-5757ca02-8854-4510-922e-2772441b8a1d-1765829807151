'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 border-b border-blue-500/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-blue-400/70 transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z M19 3H1v14h18V3z M17 15H3V5h14v10z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent">TechBiz</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-blue-300 transition-colors duration-200 relative group">
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            
            <button className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-blue-300 transition-colors duration-200 relative group">
              Solutions
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            
            <button className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-blue-300 transition-colors duration-200 relative group">
              Resources
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            
            <button className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-blue-300 transition-colors duration-200 relative group">
              Pricing
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-500/20 transition-colors duration-200 text-slate-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-950/95 border-t border-blue-500/20">
            <div className="px-6 py-4 space-y-2">
              <Link href="/" className="block px-4 py-2 text-sm font-medium text-slate-200 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors duration-200">
                Home
              </Link>
              <button className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-200 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors duration-200">
                Solutions
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-200 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors duration-200">
                Resources
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-200 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors duration-200">
                Pricing
              </button>
              <a href="#contact" className="block px-4 py-2 mt-2 text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        )}

        {/* Animated accent line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16" />
    </>
  );
}
