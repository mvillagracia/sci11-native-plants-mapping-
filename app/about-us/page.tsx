"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import Link from "next/link";

const OUTLINE = "#2B140C";

const MEMBERS = [
  "Capule, Xyrus Yosef D.",
  "Franza, Meg B.",
  "Graneta, Mahalia Jasmine G.",
  "Martinez, John Benedicto S.",
  "Ramos, Chachary M.",
  "Sibayan, Martin Paul C.",
  "Tulic, Janine Irish B.",
  "Villagracia, Marionne T.",
];

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

const LEFT_FAIRIES = [
  { src: "/fairy/fairy1.png", box: [195, 19, 681, 995], delay: "0s" },
  { src: "/fairy/fairy2.png", box: [223, 167, 737, 773], delay: "1.1s" },
];

const RIGHT_FAIRIES = [
  { src: "/fairy/fairy3.png", box: [156, 31, 770, 847], delay: "2.2s" },
  { src: "/fairy/fairy4.png", box: [257, 100, 703, 913], delay: "3.3s" },
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

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col text-[#3D2B20] font-sans antialiased selection:bg-[#C99545]/40"
      style={{
        backgroundImage: "radial-gradient(circle at 10% 8%, rgba(183,191,114,.28), transparent 38%), radial-gradient(circle at 92% 30%, rgba(201,149,69,.18), transparent 40%)",
        backgroundColor: "#f2e9d5",
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

      <Navbar foundPlants={{}} />

      <main className="flex-1 relative z-10 -mb-12">
        <div>
          {/* Story & Members Section */}
          <section className="relative overflow-hidden bg-[#f2e9d5] px-6 pt-10 pb-32 text-center sm:px-12 border-t-2 border-dashed border-[#9A7A45]/50">
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

              {/* Group Members and Facilitator Section */}
              <div className="pt-4 mt-4 space-y-3 text-center border-t-2 border-dashed border-[#9A7A45]/50">
                <div>
                  <h4 className="font-fraunces font-bold text-base text-[#3D2B20] mb-3 uppercase tracking-wider">
                    Group Members
                  </h4>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#5A4739]">
                    {MEMBERS.map((name) => (
                      <span key={name} className="inline-block">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="font-fraunces font-bold text-xs sm:text-sm text-[#3D2B20] mb-1 uppercase tracking-wider">
                    Facilitator / Professor
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A4739] m-0 font-medium">
                    Racquel C. Barcelo, Ph.D.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Plant Fairies split to both sides and moved much higher up */}
          <div className="relative z-20 -mt-20 max-w-[1000px] mx-auto flex justify-between px-6 pointer-events-none" aria-hidden="true">
            <div className="flex gap-4">
              {LEFT_FAIRIES.map((f) => (
                <Fairy key={f.src} {...f} />
              ))}
            </div>
            <div className="flex gap-4">
              {RIGHT_FAIRIES.map((f) => (
                <Fairy key={f.src} {...f} />
              ))}
            </div>
          </div>

          {/* Meadow Section */}
          <div className="relative -mt-10 bg-gradient-to-b from-[#B7BF72] to-[#68752B] pt-20 pb-20 px-5 text-[#3D2B20] overflow-hidden" style={{ clipPath: "polygon(0 6%, 5% 2%, 12% 5%, 20% 1%, 30% 4%, 42% 0, 55% 4%, 68% 1%, 80% 5%, 90% 2%, 100% 5%, 100% 100%, 0 100%)" }}>
            <div className="absolute w-[110px] h-8 bg-[#F5F0E1] border-2 border-[#2B140C]/70 rounded-full opacity-90 animate-drift left-[6%] top-[22%]" />
            <div className="absolute w-[110px] h-8 bg-[#F5F0E1] border-2 border-[#2B140C]/70 rounded-full opacity-90 animate-drift right-[8%] top-[30%] scale-125" style={{ animationDelay: "2s" }} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}