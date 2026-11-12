"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PLANTS } from "../type";
import { Flower } from "lucide-react";

interface NavbarProps {
  foundPlants: Record<number, boolean>;
}

export function Navbar({ foundPlants }: NavbarProps) {
  const pathname = usePathname();
  const foundCount = Object.keys(foundPlants).length;

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-20 bg-ybeige/70 backdrop-blur-md border-b-2 border-dashed border-[#9A7A45]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-2.5 px-5 py-2.5 flex-wrap">
        <Link 
          href="/" 
          className="font-fraunces font-bold text-[#3D2B20] text-lg no-underline bg-transparent border-0 cursor-pointer text-left flex items-center gap-2"
          >
            <Flower className="w-5 h-5 text-[#68752B] shrink-0" /> 
            <span>UP BAGUIO FLORACLE</span>
        </Link>
        <nav className="flex gap-1 items-center flex-wrap" aria-label="Main">
          <Link 
            href="/" 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all no-underline border border-ybrown ${isActive("/") ? "bg-[#68752B] text-[#F5F0E1]" : "text-[#5A4739] hover:bg-[#B7BF72]/40 hover:text-[#3D2B20] hover:border hover:border-ybrown"}`}
          >
            Home
          </Link>
          <Link 
            href="/plant-list" 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all no-underline border border-ybrown ${isActive("/plant-list") ? "bg-[#68752B] text-[#F5F0E1]" : "text-[#5A4739] hover:bg-[#B7BF72]/40 hover:text-[#3D2B20] hover:border hover:border-ybrown"}`}
          >
            Plants
          </Link>
          <Link 
            href="/campus-map" 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all no-underline border border-ybrown ${isActive("/campus-map") ? "bg-[#68752B] text-[#F5F0E1]" : "text-[#5A4739] hover:bg-[#B7BF72]/40 hover:text-[#3D2B20] hover:border hover:border-ybrown"}`}
          >
            Campus Map
          </Link>
          <Link
            href="/references"
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all no-underline border border-ybrown ${isActive("/references") ? "bg-[#68752B] text-[#F5F0E1]" : "text-[#5A4739] hover:bg-[#B7BF72]/40 hover:text-[#3D2B20] hover:border hover:border-ybrown"}`}
          >
            References
          </Link>

          {/* <Link 
            href="/about-us" 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all no-underline border border-ybrown ${isActive("/about-us") ? "bg-[#68752B] text-[#F5F0E1]" : "text-[#5A4739] hover:bg-[#B7BF72]/40 hover:text-[#3D2B20] hover:border hover:border-ybrown"}`}
          >
            About
          </Link> */}
        </nav>
      </div>
    </header>
  );
}