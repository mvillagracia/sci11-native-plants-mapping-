import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { PLANTS } from "../type";

const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const photo = (plantIdx: number, n: 1 | 2) => `/plants/${plantIdx + 1}.${n}.jpg`;

export default function PlantsPage() {
  return (
    <div className="min-h-screen flex flex-col text-[#273523] font-sans antialiased selection:bg-[#8FA876]/40"
      style={{
        background: "radial-gradient(circle at 10% 8%, rgba(143,168,118,.25), transparent 38%), radial-gradient(circle at 92% 30%, rgba(176,199,152,.45), transparent 40%), #ECE5D2",
        backgroundAttachment: "fixed"
      }}
    >
      <Navbar foundPlants={{}} />
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-5 py-10 space-y-6">
        <div>
          <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#2A4027] m-0">Plant directory</h2>
          <p className="text-sm text-[#53614E] m-0 mt-1 max-w-[60ch]">
            Every plant in the guide. Open one to see its details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLANTS.map((p, i) => (
            <div
              key={i}
              className="bg-[#FAF5E6] border-3 border-white rounded-[26px] p-3.5 shadow-[0_8px_20px_rgba(42,64,39,0.14)] flex flex-col gap-2.5 hover:-translate-y-1 transition-transform"
            >
              <div className="relative w-full aspect-[4/3] mb-2">
                {/* main photo*/}
                <div className="absolute inset-0 rounded-[999px_999px_18px_18px] overflow-hidden border-2 border-white bg-[#DFD5BE] shadow-[0_6px_16px_rgba(42,64,39,0.18)]">
                  <Image
                    src={photo(i, 1)}
                    alt={`${p.n} photo 1`}
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                {/* small pjoto */}
                <div className="absolute -bottom-2 -right-1 w-[34%] aspect-[3/4] bg-white p-1.5 shadow-[0_6px_14px_rgba(42,64,39,0.25)] rotate-6 z-10 rounded-sm">
                  <div className="relative w-full h-full overflow-hidden bg-[#DFD5BE]">
                    <Image
                      src={photo(i, 2)}
                      alt={`${p.n} photo 2`}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-fraunces font-bold text-lg text-[#2A4027] m-0">{p.n}</h3>
                <em className="text-xs text-[#53614E] not-italic">{p.s}</em>
              </div>

              <div className="flex gap-2 mt-auto pt-1">
                <Link
                  href={`/plants/${slugify(p.n)}`}
                  className="px-4 py-2 rounded-full bg-gradient-to-b from-[#5E7B4E] to-[#425C34] text-white font-bold text-xs shadow-[0_3px_0_#2E4122] no-underline"
                >
                  Details
                </Link>
                <Link
                  href="/campus-map"
                  className="px-4 py-2 rounded-full bg-[#ECE5D2] text-[#2A4027] font-bold text-xs shadow-[0_3px_0_#8FA876] no-underline"
                >
                  Locate
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}