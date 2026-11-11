import React from 'react';
import { Trees } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E3DCce] bg-[#F4EFE6] text-[#475A4E] text-xs py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

            <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#14281D] font-heading">
                <Trees className="w-4 h-4 text-[#2E5B42]" />
                <span>UP BAGUIO FLORACLE</span>
                </div>
                <p className="mt-1 text-xs text-[#6B5E4F] max-w-md">
                University of the Philippines Baguio · Governor Pack Road, Baguio City, Benguet, Philippines.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-end lg:items-center gap-2 text-[11px] text-[#7A6F5E]">
                <div>
                © 2026 University of the Philippines Baguio · Science 11 Z Students.
                </div>
            </div>
        </div>
    </footer>
  );
};
