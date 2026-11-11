import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

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

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col text-[#273523] font-sans antialiased selection:bg-[#8FA876]/40"
      style={{
        background: "radial-gradient(circle at 10% 8%, rgba(143,168,118,.25), transparent 38%), radial-gradient(circle at 92% 30%, rgba(176,199,152,.45), transparent 40%), #ECE5D2",
        backgroundAttachment: "fixed"
      }}
    >
      <Navbar foundPlants={{}} />
      <main className="flex-1 w-full max-w-[800px] mx-auto px-5 py-12 space-y-10 text-center">
        {/* header*/}
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-[#D5E2C8] border border-[#8FA876] text-[#2A4027] text-xs font-bold tracking-widest uppercase">
            Epilogue
          </span>
          <h2 className="font-fraunces text-3xl sm:text-5xl font-bold text-[#2A4027] leading-[1.08] mt-3 mb-0">
            The mystery ends. <br />
            <span className="font-medium italic text-[#4D683E]">The story continues.</span>
          </h2>
        </div>

        {/* content */}
        <div className="relative bg-[#FAF5E6] border-3 border-white rounded-[26px] p-6 sm:p-10 shadow-[0_10px_24px_rgba(42,64,39,0.14)] space-y-5 text-left">
          <p className="text-[#53614E] text-base sm:text-lg leading-relaxed m-0 text-center">
            You followed the clues. You uncovered the plants. But the greatest discovery was never simply finding where they grow—it was understanding why they matter.
          </p>
          <p className="text-[#53614E] text-base sm:text-lg leading-relaxed m-0 text-center">
            Flora’s journal has led you to one final truth: the campus is more than buildings and pathways. It is a living ecosystem, rooted in stories of nature, connection, and survival.
          </p>
          <p className="text-[#53614E] text-base sm:text-lg leading-relaxed m-0 text-center">
            The investigation may be over, but the responsibility remains. Every plant deserves to be known. Every species deserves a place to grow.
          </p>

          <div className="mt-4 rounded-[20px] bg-[#D5E2C8] border-2 border-[#8FA876]/40 p-6 text-center">
            <p className="font-fraunces font-bold text-lg sm:text-xl text-[#2A4027] leading-snug m-0">
              The map ends here. But the roots run deeper.
            </p>
            <p className="font-fraunces italic text-lg sm:text-xl text-[#4D683E] m-0 mt-1">
              Keep the story growing.
            </p>
          </div>
        </div>

        {/* people */}
        <div className="pt-4 space-y-6 text-center border-t border-[#8FA876]/30">
          <div>
            <h4 className="font-fraunces font-bold text-base text-[#2A4027] mb-3 uppercase tracking-wider">
              Group Members
            </h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#53614E]">
              {MEMBERS.map((name) => (
                <span key={name} className="inline-block">
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <h4 className="font-fraunces font-bold text-xs sm:text-sm text-[#2A4027] mb-1 uppercase tracking-wider">
              Facilitator / Professor
            </h4>
            <p className="text-xs sm:text-sm text-[#53614E] m-0 font-medium">
              Racquel C. Barcelo, Ph.D.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}