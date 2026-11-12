"use client";

import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Link from "next/link";

export default function Home() {
  const [foundPlants, setFoundPlants] = useState<Record<number, boolean>>({});

  return (
    <div className="min-h-screen flex flex-col text-[#3D2B20] font-sans antialiased selection:bg-[#C99545]/40"
      style={{
        backgroundImage: "radial-gradient(circle at 10% 8%, rgba(183,191,114,.28), transparent 38%), radial-gradient(circle at 92% 30%, rgba(201,149,69,.18), transparent 40%)",
        backgroundColor: "#F5F0E1",
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
        <i className="absolute top-[-30px] w-3.5 h-[22px] bg-[#68752B] rounded-bl-full rounded-tr-full opacity-50 animate-fall" style={{ left: "8%", animationDuration: "19s" }} />
        <i className="absolute top-[-30px] w-3.5 h-[22px] bg-[#8C4B2D] rounded-bl-full rounded-tr-full opacity-40 animate-fall" style={{ left: "24%", animationDuration: "25s", animationDelay: "-6s" }} />
        <i className="absolute top-[-30px] w-3.5 h-[22px] bg-[#C99545] rounded-bl-full rounded-tr-full opacity-55 animate-fall" style={{ left: "41%", animationDuration: "21s", animationDelay: "-12s" }} />
      </div>

      <Navbar foundPlants={foundPlants} />

      <main className="flex-1 relative z-10">
        <div>
          <div className="relative px-5 pt-12 pb-20">
            <span className="absolute text-[#C99545] animate-twinkle text-xl" style={{ left: "6%", top: "12%" }}>✦</span>
            <span className="absolute text-[#C99545] animate-twinkle text-xl" style={{ left: "48%", top: "6%", animationDelay: "1s" }}>✦</span>
            <span className="absolute text-[#C99545] animate-twinkle text-xl" style={{ right: "7%", bottom: "14%", animationDelay: "2s" }}>✦</span>
            
            <div className="max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 pt-2 rounded-full bg-[#E8D8C0]/70 border-2 border-[#3D2B20] text-[#3D2B20] text-xs font-bold tracking-widest uppercase">
                  University of the Philippines Baguio
                </span>
                <h1 className="font-fraunces text-4xl sm:text-6xl font-bold text-[#3D2B20] leading-[1.02]">
                  Native Plants <br />of <span className="font-medium text-[#68752B] italic">UP Baguio</span>
                </h1>
                <p className="text-[#5A4739] text-base leading-relaxed max-w-[60ch]">
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
                <div className="absolute left-[19%] top-0 w-[62%] h-[88%] rounded-[999px_999px_28px_28px] border-4 border-[#3D2B20] shadow-[0_14px_30px_rgba(61,43,32,0.2)] bg-[repeating-linear-gradient(135deg,#E8D8C0_0_14px,#F5F0E1_14px_28px)] border-dashed border-[#9A7A45] grid place-items-center text-center text-[#5A4739] text-xs p-4">
                  [ Photo placeholder: Oblation statue ]
                </div>
                <div className="absolute left-0 bottom-[2%] w-[36%] aspect-[3/4] bg-[#F5F0E1] p-1.5 shadow-[0_8px_20px_rgba(61,43,32,0.22)] text-[11px] animate-bob -rotate-6 flex items-center justify-center text-center border-2 border-[#3D2B20]/40">
                  [ flower ]
                </div>
                <div className="absolute right-0 top-[10%] w-[36%] aspect-[3/4] bg-[#F5F0E1] p-1.5 shadow-[0_8px_20px_rgba(61,43,32,0.22)] text-[11px] animate-bob rotate-6 flex items-center justify-center text-center border-2 border-[#3D2B20]/40" style={{ animationDelay: "1.5s" }}>
                  [ flower ]
                </div>
              </div>
            </div>
          </div>

          <section className="relative mx-5 mb-16 overflow-hidden rounded-[30px] border-2 border-[#3D2B20] bg-[#E8D8C0] px-6 py-12 text-center shadow-[0_10px_24px_rgba(61,43,32,0.14)] sm:px-12">
            <div className="absolute -left-12 top-8 h-32 w-32 rounded-full bg-[#B7BF72]/35 blur-2xl" />
            <div className="absolute -right-12 bottom-8 h-40 w-40 rounded-full bg-[#C99545]/25 blur-2xl" />
            <div className="relative mx-auto max-w-[850px] space-y-4">
              <h2 className="font-fraunces m-0 text-3xl font-bold leading-none text-[#3D2B20] sm:text-5xl">
                Every leaf has a story. <br />
                <span className="font-medium italic text-[#68752B]">Every discovery has a purpose.</span>
              </h2>
              <p className="font-fraunces m-0 pt-5 text-xl font-bold text-[#8C4B2D]">
                Ten plants. Ten clues. One living campus.
              </p>
              <p className="m-0 py-5 text-base leading-relaxed text-[#5A4739]">
                Floracle is a Science 11 project that transforms the University of the Philippines Baguio into a living botanical exploration. Through an interactive map, we uncover ten native plant species, discovering their unique characteristics, ecological importance, and documented uses.
              </p>
              <p className="m-0 text-base leading-relaxed text-[#5A4739]">
                What begins as an investigation becomes a journey of discovery—revealing the biodiversity hidden in familiar places and reminding us that even the smallest plants have stories worth protecting.
              </p>
              <p className="font-fraunces m-0 text-lg font-bold italic text-[#68752B]">
                Look closer. Discover deeper. Let nature speak.
              </p>
            </div>
          </section>

          {/* Meadow Section */}
          <div className="relative bg-gradient-to-b from-[#B7BF72] to-[#68752B] py-20 px-5 text-[#3D2B20] overflow-hidden" style={{ clipPath: "polygon(0 6%, 5% 2%, 12% 5%, 20% 1%, 30% 4%, 42% 0, 55% 4%, 68% 1%, 80% 5%, 90% 2%, 100% 5%, 100% 94%, 92% 98%, 82% 95%, 70% 99%, 58% 96%, 45% 100%, 33% 96%, 20% 99%, 10% 95%, 0 98%)" }}>
            <div className="absolute w-[110px] h-8 bg-[#F5F0E1] rounded-full opacity-85 animate-drift left-[6%] top-[14%]" />
            <div className="absolute w-[110px] h-8 bg-[#F5F0E1] rounded-full opacity-85 animate-drift right-[8%] top-[26%] scale-125" style={{ animationDelay: "2s" }} />
            
            <div className="relative max-w-[1100px] mx-auto text-center space-y-3">
              <h2 className="font-fraunces text-3xl sm:text-5xl font-bold text-[#3D2B20]">Choose your quest</h2>
              <p className="max-w-[60ch] mx-auto text-[#3D2B20]/80">Three ways to meet the plants of campus. Start anywhere.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5.5 mt-8 text-left">
                <Link href="/campus-map" className="block text-left text-[#3D2B20] bg-[#F5F0E1] border-2 border-[#3D2B20] rounded-[26px] p-6 shadow-[0_10px_24px_rgba(61,43,32,0.18)] hover:rotate-0 hover:-translate-y-1.5 transition-all -rotate-1 no-underline">
                  <b className="grid place-items-center w-10 h-10 rounded-full bg-[#C99545] font-fraunces text-lg text-[#3D2B20] mb-2.5">1</b>
                  <h3 className="font-fraunces font-bold text-lg text-[#3D2B20] mb-1">Explore the map</h3>
                  <p className="text-xs text-[#5A4739] m-0">Follow the glowing pins and discover each plant.</p>
                </Link>
                <Link href="/plant-list" className="block text-left text-[#3D2B20] bg-[#F5F0E1] border-2 border-[#3D2B20] rounded-[26px] p-6 shadow-[0_10px_24px_rgba(61,43,32,0.18)] hover:rotate-0 hover:-translate-y-1.5 transition-all no-underline">
                  <b className="grid place-items-center w-10 h-10 rounded-full bg-[#C99545] font-fraunces text-lg text-[#3D2B20] mb-2.5">2</b>
                  <h3 className="font-fraunces font-bold text-lg text-[#3D2B20] mb-1">Plant directory</h3>
                  <p className="text-xs text-[#5A4739] m-0">Browse all cataloged native species.</p>
                </Link>
                <Link href="/about-us" className="block text-left text-[#3D2B20] bg-[#F5F0E1] border-2 border-[#3D2B20] rounded-[26px] p-6 shadow-[0_10px_24px_rgba(61,43,32,0.18)] hover:rotate-0 hover:-translate-y-1.5 transition-all rotate-1 no-underline">
                  <b className="grid place-items-center w-10 h-10 rounded-full bg-[#C99545] font-fraunces text-lg text-[#3D2B20] mb-2.5">3</b>
                  <h3 className="font-fraunces font-bold text-lg text-[#3D2B20] mb-1">About the project</h3>
                  <p className="text-xs text-[#5A4739] m-0">Why these plants matter to the ecosystem.</p>
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