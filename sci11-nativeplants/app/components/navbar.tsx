"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PLANTS } from "../type";

interface NavbarProps {
  foundPlants: Record<number, boolean>;
}

export function Navbar({ foundPlants }: NavbarProps) {
  const pathname = usePathname();
  const foundCount = Object.keys(foundPlants).length;

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-20 bg-[#ECE5D2]/90 backdrop-blur-md border-b-2 border-dashed border-[#8FA876]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-2.5 px-5 py-2.5 flex-wrap">
        <Link 
          href="/" 
          className="font-fraunces font-bold text-[#2A4027] text-lg no-underline bg-transparent border-0 cursor-pointer text-left"
        >
          ✿ UP BAGUIO FLORACLE
        </Link>
        <nav className="flex gap-1 items-center flex-wrap" aria-label="Main">
          <Link 
            href="/" 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors no-underline ${isActive("/") ? "bg-[#4D683E] text-white" : "text-[#53614E] hover:bg-[#D5E2C8] hover:text-[#2A4027]"}`}
          >
            Home
          </Link>
          <Link 
            href="/campus-map" 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors no-underline ${isActive("/campus-map") ? "bg-[#4D683E] text-white" : "text-[#53614E] hover:bg-[#D5E2C8] hover:text-[#2A4027]"}`}
          >
            Campus Map
          </Link>
          <Link 
            href="/plant-list" 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors no-underline ${isActive("/plant-list") ? "bg-[#4D683E] text-white" : "text-[#53614E] hover:bg-[#D5E2C8] hover:text-[#2A4027]"}`}
          >
            Plants
          </Link>
          <Link 
            href="/about-us" 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors no-underline ${isActive("/about") ? "bg-[#4D683E] text-white" : "text-[#53614E] hover:bg-[#D5E2C8] hover:text-[#2A4027]"}`}
          >
            About
          </Link>
          <span className="ml-1.5 px-3 py-1 rounded-full bg-[#C25936] text-white font-bold text-xs" title="Plants discovered">
            ✿ {foundCount}/{PLANTS.length}
          </span>
        </nav>
      </div>
    </header>
  );
}