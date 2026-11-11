"use client";

import React from 'react';

export type PageId = 'landing' | 'map' | 'plants' | 'about' | 'quiz';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E3DCce] shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-8">
        <button
          onClick={() => onNavigate('landing')}
          className="text-lg sm:text-xl font-bold tracking-tight text-darkgreen font-heading whitespace-nowrap shrink-0 hover:text-green transition-colors cursor-pointer text-left flex items-center gap-2"
          title="Return to Landing Page"
        >
          <span>UP Baguio Floracle</span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#4D6053]">
          <button
            onClick={() => onNavigate('map')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-darkgreen cursor-pointer ${
              currentPage === 'map'
                ? 'text-darkgreen font-bold border-b-2 border-green'
                : ''
            }`}
          >
            Campus Map
          </button>
          <button
            onClick={() => onNavigate('plants')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-darkgreen cursor-pointer ${
              currentPage === 'plants'
                ? 'text-darkgreen font-bold border-b-2 border-green'
                : ''
            }`}
          >
            Plant Directory
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-darkgreen cursor-pointer ${
              currentPage === 'about'
                ? 'text-darkgreen font-bold border-b-2 border-green'
                : ''
            }`}
          >
            About & Conservation
          </button>
          <button
            onClick={() => onNavigate('quiz')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-darkgreen cursor-pointer ${
              currentPage === 'quiz'
                ? 'text-darkgreen font-bold border-b-2 border-green'
                : ''
            }`}
          >
            Identification Challenge
          </button>
        </nav>

         
      </div>
    </header>
  );
};
