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
    <div className="min-h-screen flex flex-col text-[#3D2B20] font-sans antialiased selection:bg-[#C99545]/40"
      style={{
        backgroundImage: "radial-gradient(circle at 10% 8%, rgba(183,191,114,.28), transparent 38%), radial-gradient(circle at 92% 30%, rgba(201,149,69,.18), transparent 40%)",
        backgroundColor: "#F5F0E1",
        backgroundAttachment: "fixed"
      }}
    >
      <Navbar foundPlants={{}} />
      <main className="flex-1 w-full max-w-[800px] mx-auto px-5 py-12 space-y-10 text-center">
        {/* header*/}
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-[#E8D8C0] border-2 border-[#3D2B20] text-[#3D2B20] text-xs font-bold tracking-widest uppercase">
            Epilogue
          </span>
          <h2 className="font-fraunces text-3xl sm:text-5xl font-bold text-[#3D2B20] leading-[1.08] mt-3 mb-0">
            The mystery ends. <br />
            <span className="font-medium italic text-[#68752B]">The story continues.</span>
          </h2>
        </div>

        {/* content */}
        <div className="relative bg-[#F5F0E1] border-2 border-[#3D2B20] rounded-[26px] p-6 sm:p-10 shadow-[0_10px_24px_rgba(61,43,32,0.14)] space-y-5 text-left">
          <p className="text-[#5A4739] text-base sm:text-lg leading-relaxed m-0 text-center">
            You followed the clues. You uncovered the plants. But the greatest discovery was never simply finding where they grow—it was understanding why they matter.
          </p>
          <p className="text-[#5A4739] text-base sm:text-lg leading-relaxed m-0 text-center">
            Flora’s journal has led you to one final truth: the campus is more than buildings and pathways. It is a living ecosystem, rooted in stories of nature, connection, and survival.
          </p>
          <p className="text-[#5A4739] text-base sm:text-lg leading-relaxed m-0 text-center">
            The investigation may be over, but the responsibility remains. Every plant deserves to be known. Every species deserves a place to grow.
          </p>

          <div className="mt-4 rounded-[20px] bg-[#B7BF72]/45 border-2 border-[#68752B] p-6 text-center">
            <p className="font-fraunces font-bold text-lg sm:text-xl text-[#3D2B20] leading-snug m-0">
              The map ends here. But the roots run deeper.
            </p>
            <p className="font-fraunces italic text-lg sm:text-xl text-[#68752B] m-0 mt-1">
              Keep the story growing.
            </p>
          </div>
        </div>

        {/* people */}
        <div className="pt-4 space-y-6 text-center border-t-2 border-dashed border-[#9A7A45]/50">
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
      </main>
      <Footer />
    </div>
  );
}