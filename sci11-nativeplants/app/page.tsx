"use client";

import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Link from "next/link";

export default function Home() {
  const [foundPlants, setFoundPlants] = useState<Record<number, boolean>>({});

  return (
    <div className="min-h-screen flex flex-col text-[#273523] font-sans antialiased selection:bg-[#8FA876]/40"
      style={{
        background: "radial-gradient(circle at 10% 8%, rgba(143,168,118,.25), transparent 38%), radial-gradient(circle at 92% 30%, rgba(176,199,152,.45), transparent 40%), #ECE5D2",
        backgroundAttachment: "fixed"
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,700;1,500&family=Montserrat:wght@400;500;700&display=swap');
        .font-fraunces { font-family: 'Fraunces', Georgia, serif; }
        @keyframes fall { to { transform: translate(60px, 110vh) rotate(420deg); } }
        @keyframes twinkle { 50% { opacity: 0.25; transform: scale(0.7); } }
        @keyframes bob { 50% { transform: translateY(-8px); } }
        @keyframes drift { to { transform: translateX(40px); } }
        .animate-fall { animation: fall linear infinite; }
        .animate-twinkle { animation: twinkle 2.6s ease-in-out infinite; }
        .animate-bob { animation: bob 5s ease-in-out infinite; }
        .animate-drift { animation: drift 12s ease-in-out infinite alternate; }
      `}</style>

      {/* Falling Leaves Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <i className="absolute top-[-30px] w-3.5 h-[22px] bg-[#637D4D] rounded-bl-full rounded-tr-full opacity-50 animate-fall" style={{ left: "8%", animationDuration: "19s" }} />
        <i className="absolute top-[-30px] w-3.5 h-[22px] bg-[#C25936] rounded-bl-full rounded-tr-full opacity-40 animate-fall" style={{ left: "24%", animationDuration: "25s", animationDelay: "-6s" }} />
        <i className="absolute top-[-30px] w-3.5 h-[22px] bg-[#9BB286] rounded-bl-full rounded-tr-full opacity-55 animate-fall" style={{ left: "41%", animationDuration: "21s", animationDelay: "-12s" }} />
      </div>

      <Navbar foundPlants={foundPlants} />

      <main className="flex-1 relative z-10">
        <div>
          <div className="relative px-5 pt-12 pb-20">
            <span className="absolute text-[#C25936] animate-twinkle text-xl" style={{ left: "6%", top: "12%" }}>✦</span>
            <span className="absolute text-[#C25936] animate-twinkle text-xl" style={{ left: "48%", top: "6%", animationDelay: "1s" }}>✦</span>
            <span className="absolute text-[#C25936] animate-twinkle text-xl" style={{ right: "7%", bottom: "14%", animationDelay: "2s" }}>✦</span>
            
            <div className="max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 pt-2 rounded-full bg-[#D5E2C8]/10 border border-[#8FA876] text-[#2A4027] text-xs font-bold tracking-widest uppercase">
                  University of the Philippines Baguio
                </span>
                <h1 className="font-fraunces text-4xl sm:text-6xl font-bold text-[#2A4027] leading-[1.02]">
                  Native Plants <br />of <span className="font-medium text-[#4D683E] italic">UP Baguio</span>
                </h1>
                <p className="text-[#53614E] text-base leading-relaxed max-w-[60ch]">
                  Wander the pine-crested campus, find the plants hiding along the paths, and fill your field journal. Explore the cloud sanctuary inspired by your hand-painted map.
                </p>
                {/* <div className="flex flex-wrap gap-3.5 pt-2">
                  <Link href="/campus-map" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-b from-[#5E7B4E] to-[#425C34] text-white font-bold text-xs shadow-[0_4px_0_#2E4122,0_8px_18px_rgba(42,64,39,0.25)] hover:-translate-y-0.5 transition-transform no-underline">
                    Map / Explore ✦
                  </Link>
                  <Link href="/plants" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C25936] text-white font-bold text-xs shadow-[0_4px_0_#8C3B20,0_8px_18px_rgba(194,89,54,0.2)] hover:-translate-y-0.5 transition-transform no-underline">
                    Plant Directory
                  </Link>
                  <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF5E6] text-[#2A4027] font-bold text-xs shadow-[0_4px_0_#8FA876,0_8px_18px_rgba(42,64,39,0.15)] hover:-translate-y-0.5 transition-transform no-underline">
                    About
                  </Link>
                </div> */}
              </div>

              <div className="relative aspect-square max-w-[470px] mx-auto w-full">
                <div className="absolute left-[19%] top-0 w-[62%] h-[88%] rounded-[999px_999px_28px_28px] border-4 border-white shadow-[0_14px_30px_rgba(42,64,39,0.2)] bg-[repeating-linear-gradient(135deg,#DFD5BE_0_14px,#ECE5D2_14px_28px)] border-dashed border-[#8FA876] grid place-items-center text-center text-[#53614E] text-xs p-4">
                  [ Photo placeholder: Oblation statue ]
                </div>
                <div className="absolute left-0 bottom-[2%] w-[36%] aspect-[3/4] bg-white p-1.5 shadow-[0_8px_20px_rgba(42,64,39,0.22)] text-[11px] animate-bob -rotate-6 flex items-center justify-center text-center border border-[#8FA876]/30">
                  [ flower ]
                </div>
                <div className="absolute right-0 top-[10%] w-[36%] aspect-[3/4] bg-white p-1.5 shadow-[0_8px_20px_rgba(42,64,39,0.22)] text-[11px] animate-bob rotate-6 flex items-center justify-center text-center border border-[#8FA876]/30" style={{ animationDelay: "1.5s" }}>
                  [ flower ]
                </div>
              </div>
            </div>
          </div>

          {/* Meadow Section */}
          <div className="relative bg-gradient-to-b from-[#A4BA8F] to-[#73925B] py-20 px-5 text-[#1B2B18] overflow-hidden" style={{ clipPath: "polygon(0 6%, 5% 2%, 12% 5%, 20% 1%, 30% 4%, 42% 0, 55% 4%, 68% 1%, 80% 5%, 90% 2%, 100% 5%, 100% 94%, 92% 98%, 82% 95%, 70% 99%, 58% 96%, 45% 100%, 33% 96%, 20% 99%, 10% 95%, 0 98%)" }}>
            <div className="absolute w-[110px] h-8 bg-[#F5F0E1] rounded-full opacity-85 animate-drift left-[6%] top-[14%]" />
            <div className="absolute w-[110px] h-8 bg-[#F5F0E1] rounded-full opacity-85 animate-drift right-[8%] top-[26%] scale-125" style={{ animationDelay: "2s" }} />
            
            <div className="relative max-w-[1100px] mx-auto text-center space-y-3">
              <h2 className="font-fraunces text-3xl sm:text-5xl font-bold text-[#1B2B18]">Choose your quest</h2>
              <p className="max-w-[60ch] mx-auto text-[#1B2B18]/80">Three ways to meet the plants of campus. Start anywhere.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5.5 mt-8 text-left">
                <Link href="/campus-map" className="block text-left text-[#273523] bg-[#FAF5E6] border-3 border-white rounded-[26px] p-6 shadow-[0_10px_24px_rgba(42,64,39,0.18)] hover:rotate-0 hover:-translate-y-1.5 transition-all -rotate-1 no-underline">
                  <b className="grid place-items-center w-10 h-10 rounded-full bg-[#C25936] font-fraunces text-lg text-white mb-2.5">1</b>
                  <h3 className="font-fraunces font-bold text-lg text-[#2A4027] mb-1">Explore the map</h3>
                  <p className="text-xs text-[#53614E] m-0">Follow the glowing pins and discover each plant.</p>
                </Link>
                <Link href="/plant-list" className="block text-left text-[#273523] bg-[#FAF5E6] border-3 border-white rounded-[26px] p-6 shadow-[0_10px_24px_rgba(42,64,39,0.18)] hover:rotate-0 hover:-translate-y-1.5 transition-all no-underline">
                  <b className="grid place-items-center w-10 h-10 rounded-full bg-[#C25936] font-fraunces text-lg text-white mb-2.5">2</b>
                  <h3 className="font-fraunces font-bold text-lg text-[#2A4027] mb-1">Plant directory</h3>
                  <p className="text-xs text-[#53614E] m-0">Browse all cataloged native species.</p>
                </Link>
                <Link href="/about-us" className="block text-left text-[#273523] bg-[#FAF5E6] border-3 border-white rounded-[26px] p-6 shadow-[0_10px_24px_rgba(42,64,39,0.18)] hover:rotate-0 hover:-translate-y-1.5 transition-all rotate-1 no-underline">
                  <b className="grid place-items-center w-10 h-10 rounded-full bg-[#C25936] font-fraunces text-lg text-white mb-2.5">3</b>
                  <h3 className="font-fraunces font-bold text-lg text-[#2A4027] mb-1">About the project</h3>
                  <p className="text-xs text-[#53614E] m-0">Why these plants matter to the ecosystem.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}