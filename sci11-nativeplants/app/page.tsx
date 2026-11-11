"use client";

import { useState } from "react";
import { ArrowRight, BookOpen, HelpCircle, Map, Trees } from "lucide-react";
import { Navbar, PageId } from "./components/navbar";
import { Footer } from "./components/footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageId>("landing");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E2E24]">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="flex-1">
        <section className="relative min-h-[calc(100vh-3.5rem)] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/oble-1.jpeg"
              alt="UP Baguio Oblation statue"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C1B12]/95 via-[#0C1B12]/75 to-[#0C1B12]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B12] via-transparent to-[#0C1B12]/30" />
          </div>

          <div className="relative z-10 mx-auto my-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-2xl space-y-6">

              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Native Plants of{" "}
                <span className="font-serif font-normal italic text-[#A8C4B0]">UP Baguio</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-[#DDE7E0] sm:text-lg">
                Discover the native plants, ecological stories, and living mountain
                sanctuary of the University of the Philippines Baguio.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setCurrentPage("map")}
                  className="flex items-center gap-2 rounded-lg border border-[#48765A] bg-[#2A523A] px-6 py-3.5 text-xs font-bold text-white transition-colors hover:bg-[#1E3E2B] sm:text-sm"
                >
                  <Map className="h-4 w-4 text-[#C5D9CD]" />
                  <span>MAP / EXPLORE</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrentPage("quiz")}
                  className="flex items-center gap-2 rounded-lg border border-[#E08568] bg-[#C86A4B] px-5 py-3.5 text-xs font-bold text-white transition-colors hover:bg-[#B3583A] sm:text-sm"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span>QUIZ ME</span>
                </button>
                <button
                  onClick={() => setCurrentPage("about")}
                  className="flex items-center gap-2 rounded-lg border border-white bg-white/90 px-5 py-3.5 text-xs font-bold text-[#192E21] transition-colors hover:bg-white sm:text-sm"
                >
                  <BookOpen className="h-4 w-4 text-[#54685A]" />
                  <span>ABOUT PROJECT</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative z-10 border-t border-white/15 bg-[#0C1B12]/80 px-4 py-4 text-xs text-[#C5D9CD] backdrop-blur-md sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-2">
                <Trees className="h-4 w-4 text-[#A8C2AC]" />
                <span className="font-mono font-medium pt-1">University of the Philippines Baguio</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
