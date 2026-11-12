"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { PLANTS, Plant } from "../type";
import { X } from "lucide-react";

const photo = (plantIdx: number, n: 1 | 2) => `/plants/${plantIdx + 1}.${n}.jpg`;

export default function PlantsPage() {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const selectedPlantIndex = selectedPlant ? PLANTS.indexOf(selectedPlant) : -1;

  useEffect(() => {
    if (!selectedPlant) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPlant(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPlant]);

  return (
    <div className="min-h-screen flex flex-col text-[#3D2B20] font-sans antialiased selection:bg-[#C99545]/40"
      style={{
        backgroundImage: "radial-gradient(circle at 10% 8%, rgba(183,191,114,.28), transparent 38%), radial-gradient(circle at 92% 30%, rgba(201,149,69,.18), transparent 40%)",
        backgroundColor: "#F5F0E1",
        backgroundAttachment: "fixed"
      }}
    >
      <Navbar foundPlants={{}} />
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-5 py-10 space-y-6">
        <div>
          <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#3D2B20] m-0">Plant directory</h2>
          <p className="text-sm text-[#5A4739] m-0 mt-1 max-w-[60ch]">
            Every plant in the guide. Open one to see its details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLANTS.map((p, i) => (
            <div
              key={i}
              className="bg-[#F5F0E1] border-2 border-[#3D2B20] rounded-[26px] p-3.5 shadow-[0_8px_20px_rgba(61,43,32,0.14)] flex flex-col gap-2.5 hover:-translate-y-1 transition-transform"
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
                <h3 className="font-fraunces font-bold text-lg text-[#3D2B20] m-0">{p.n}</h3>
                <em className="text-xs text-[#5A4739] not-italic">{p.s}</em>
              </div>

              <div className="flex gap-2 mt-auto pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedPlant(p)}
                  aria-label={`View details for ${p.n}`}
                  className="px-4 py-2 cursor-pointer border-2 border-transparent rounded-full bg-[#68752B] text-[#F5F0E1] font-bold text-xs shadow-[0_3px_0_#3D2B20] no-underline hover:bg-[#E8D8C0] hover:text-ybrown hover:shadow-[0_3px_0_#9A7A45] hover:border-2 hover:border-ybrown/50 transition-all"
                >
                  Details
                </button>
                <a
                  href="/campus-map"
                  className="px-4 py-2 border-2 border-transparent rounded-full bg-[#E8D8C0] text-[#3D2B20] font-bold text-xs shadow-[0_3px_0_#9A7A45] no-underline hover:bg-[#68752B] hover:text-[#F5F0E1] hover:shadow-[0_3px_0_#3D2B20] hover:border-2 hover:border-ybrown/50 transition-all"
                >
                  Locate
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />

      {selectedPlant && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#273523]/70 p-5"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedPlant(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="plant-modal-title"
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[26px] border-2 border-[#3D2B20] bg-[#F5F0E1] p-6 text-[#3D2B20] shadow-[0_16px_40px_rgba(61,43,32,0.3)]"
          >
            <button
              type="button"
              onClick={() => setSelectedPlant(null)}
              aria-label="Close plant details"
              className="absolute cursor-pointer right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#E8D8C0] text-xl font-bold text-[#3D2B20] shadow-[0_2px_0_#9A7A45] hover:bg-[#68752B] hover:text-[#F5F0E1] hover:shadow-[0_2px_0_#3D2B20] transition-all"
            >
              <X size={16} />
            </button>

            <div className="pr-10">
              <p className="m-0 text-xs font-bold uppercase tracking-[0.16em] text-[#68752B]">
                Plant details
              </p>
              <h2 id="plant-modal-title" className="m-0 mt-1 font-fraunces text-3xl font-bold text-[#3D2B20]">
                {selectedPlant.n}
              </h2>
              <p className="m-0 mt-1 text-sm italic text-[#53614E]">{selectedPlant.s}</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white bg-[#DFD5BE] shadow-[0_6px_16px_rgba(42,64,39,0.18)]">
                <Image
                  src={photo(selectedPlantIndex, 1)}
                  alt={`${selectedPlant.n} photo 1`}
                  fill
                  sizes="(min-width: 672px) 280px, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white bg-[#DFD5BE] shadow-[0_6px_16px_rgba(42,64,39,0.18)]">
                <Image
                  src={photo(selectedPlantIndex, 2)}
                  alt={`${selectedPlant.n} photo 2`}
                  fill
                  sizes="(min-width: 672px) 280px, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-5">
              <Detail label="Description" value={selectedPlant.d} />
              <Detail label="Ecological importance" value={selectedPlant.e} />
              <Detail label="Uses" value={selectedPlant.u} />
              <Detail label="Location" value={selectedPlant.l} />
              <Detail label="Coordinates" value={selectedPlant.c} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h3 className="m-0 font-fraunces text-lg font-bold text-[#3D2B20]">{label}</h3>
      <p className="m-0 mt-1 text-sm leading-6 text-[#5A4739]">{value}</p>
    </div>
  );
}