"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Link from "next/link";

const OUTLINE = "#2B140C";

function Sparkle({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.5 C12.8 8.2 15.8 11.2 21.5 12 C15.8 12.8 12.8 15.8 12 21.5 C11.2 15.8 8.2 12.8 2.5 12 C8.2 11.2 11.2 8.2 12 2.5 Z"
        fill="#D2B14E"
        stroke={OUTLINE}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const FAIRIES = [
  { src: "/fairy/fairy1.png", box: [195, 19, 681, 995], delay: "0s" },     // Agubangbang
  { src: "/fairy/fairy2.png", box: [223, 167, 737, 773], delay: "1.1s" },  // Oriental Hawkweed
  { src: "/fairy/fairy3.png", box: [156, 31, 770, 847], delay: "2.2s" },   // Acystopteris Fern
  { src: "/fairy/fairy4.png", box: [257, 100, 703, 913], delay: "3.3s" },  // Benguet Pine
];
const FAIRY_SCALE = 0.15;

function Fairy({ src, box, delay }: { src: string; box: number[]; delay: string }) {
  const [x0, y0, x1, y1] = box;
  const w = x1 - x0;
  const h = y1 - y0;
  return (
    <div className="relative shrink-0" style={{ width: w * FAIRY_SCALE, height: h * FAIRY_SCALE }}>
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[80%] h-2 rounded-full bg-[#2B140C]/25 blur-[2px]" />
      <div className="absolute inset-0 animate-bob" style={{ animationDelay: delay }}>
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={src}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              maxWidth: "none",
              width: `${(1000 / w) * 100}%`,
              left: `${(-x0 / w) * 100}%`,
              top: `${(-y0 / h) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

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
        html { scroll-behavior: smooth; }
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
        <i className="absolute top-[-30px] w-3.5 h-[22px] bg-[#7C8E34] border-2 border-[#2B140C] rounded-bl-full rounded-tr-full opacity-70 animate-fall" style={{ left: "8%", animationDuration: "19s" }} />
        <i className="absolute top-[-30px] w-3.5 h-[22px] bg-[#6B4A2E] border-2 border-[#2B140C] rounded-bl-full rounded-tr-full opacity-70 animate-fall" style={{ left: "24%", animationDuration: "25s", animationDelay: "-6s" }} />
        <i className="absolute top-[-30px] w-3.5 h-[22px] bg-[#D2B14E] border-2 border-[#2B140C] rounded-bl-full rounded-tr-full opacity-70 animate-fall" style={{ left: "41%", animationDuration: "21s", animationDelay: "-12s" }} />
      </div>

      <Navbar foundPlants={foundPlants} />

      <main className="flex-1 relative z-10 -mb-12">
        <div>
          <div className="relative px-5 pt-12 pb-24">
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(232,216,192,0) 38%, rgba(232,216,192,.85) 76%, #E8D8C0 100%), linear-gradient(to right, #F5F0E1 0%, rgba(245,240,225,.9) 30%, rgba(245,240,225,0) 68%), linear-gradient(to bottom, rgba(245,240,225,.7) 0%, rgba(245,240,225,0) 18%), url('/oble-1.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "70% center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(245,240,225,.55)_0%,rgba(245,240,225,.55)_55%,rgba(245,240,225,0)_85%)] md:hidden" aria-hidden="true" />
            <Sparkle className="absolute w-6 h-6 animate-twinkle" style={{ left: "6%", top: "12%" }} />
            <Sparkle className="absolute w-6 h-6 animate-twinkle" style={{ left: "48%", top: "6%", animationDelay: "1s" }} />
            <Sparkle className="absolute w-6 h-6 animate-twinkle" style={{ right: "7%", bottom: "14%", animationDelay: "2s" }} />
            
            <div className="relative max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 pt-2 rounded-full bg-[#E8D8C0]/70 border-2 border-[#3D2B20] text-[#3D2B20] text-xs font-bold tracking-widest uppercase">
                  University of the Philippines Baguio
                </span>
                <h1 className="font-fraunces text-4xl sm:text-6xl font-bold text-[#3D2B20] leading-[1.02]">
                  Native Plants <br />of <span className="font-medium text-[#68752B] italic">UP Baguio</span>
                </h1>
                <p className="text-[#5A4739] text-base leading-relaxed max-w-[60ch]">
                  Wander the coldest campus, find the plants hiding along the paths, and answer questions to test your knowledge.
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
                <div className="absolute left-0 bottom-[2%] w-[36%] aspect-[3/4] bg-[#F5F0E1] p-1.5 shadow-[0_8px_20px_rgba(61,43,32,0.22)] animate-bob -rotate-6 border-2 border-[#3D2B20]/40">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/plants/1.2.jpg"
                      alt="Agubangbang"
                      fill
                      sizes="170px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute right-0 top-[10%] w-[36%] aspect-[3/4] bg-[#F5F0E1] p-1.5 shadow-[0_8px_20px_rgba(61,43,32,0.22)] animate-bob rotate-6 border-2 border-[#3D2B20]/40" style={{ animationDelay: "1.5s" }}>
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/plants/8.2.jpg"
                      alt="Christella Fern"
                      fill
                      sizes="170px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute left-[32%] top-[34%] z-10 w-[30%] aspect-[3/4] bg-[#F5F0E1] p-1.5 shadow-[0_8px_20px_rgba(61,43,32,0.22)] animate-bob rotate-2 border-2 border-[#3D2B20]/40" style={{ animationDelay: "0.7s" }}>
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/plants/5.1.jpg"
                      alt="Mayana"
                      fill
                      sizes="140px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="relative overflow-hidden bg-[#E8D8C0] px-6 pt-10 pb-40 text-center sm:px-12">
            <div className="absolute -left-12 top-8 h-32 w-32 rounded-full bg-[#B7BF72]/35 blur-2xl" />
            <div className="absolute -right-12 bottom-24 h-40 w-40 rounded-full bg-[#C99545]/25 blur-2xl" />
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

          {/* Plant fairies standing on the edge of the meadow */}
          <div className="relative z-20 -mt-36 h-36 flex items-end justify-center gap-4 sm:gap-12 px-4 pointer-events-none" aria-hidden="true">
            {FAIRIES.map((f) => (
              <Fairy key={f.src} {...f} />
            ))}
          </div>

          {/* Meadow Section: torn top edge overlaps the story band, flat bottom meets the footer */}
          <div className="relative -mt-16 bg-gradient-to-b from-[#B7BF72] to-[#68752B] pt-24 pb-20 px-5 text-[#3D2B20] overflow-hidden" style={{ clipPath: "polygon(0 6%, 5% 2%, 12% 5%, 20% 1%, 30% 4%, 42% 0, 55% 4%, 68% 1%, 80% 5%, 90% 2%, 100% 5%, 100% 100%, 0 100%)" }}>
            <div className="absolute w-[110px] h-8 bg-[#F5F0E1] border-2 border-[#2B140C]/70 rounded-full opacity-90 animate-drift left-[6%] top-[22%]" />
            <div className="absolute w-[110px] h-8 bg-[#F5F0E1] border-2 border-[#2B140C]/70 rounded-full opacity-90 animate-drift right-[8%] top-[30%] scale-125" style={{ animationDelay: "2s" }} />
            
            <div className="relative max-w-[1100px] mx-auto text-center space-y-3">
              <h2 className="font-fraunces text-3xl sm:text-5xl font-bold text-[#3D2B20]">idk what</h2>
              <p className="max-w-[60ch] mx-auto text-[#3D2B20]/80">
                Get to know the plants of your campus with{" "}
                <span className="font-fraunces font-bold text-ybrown italic">Floracle!</span>
              </p>
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