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
                <button
                  type="button"
                  onClick={() => setSelectedPlant(p)}
                  aria-label={`View details for ${p.n}`}
                  className="px-4 py-2 cursor-pointer rounded-full bg-gradient-to-b from-[#5E7B4E] to-[#425C34] text-white font-bold text-xs shadow-[0_3px_0_#2E4122] no-underline"
                >
                  Details
                </button>
                <a
                  href="/campus-map"
                  className="px-4 py-2 rounded-full bg-[#ECE5D2] text-[#2A4027] font-bold text-xs shadow-[0_3px_0_#8FA876] no-underline"
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
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[26px] border-3 border-white bg-[#FAF5E6] p-6 text-[#273523] shadow-[0_16px_40px_rgba(42,64,39,0.3)]"
          >
            <button
              type="button"
              onClick={() => setSelectedPlant(null)}
              aria-label="Close plant details"
              className="absolute cursor-pointer right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#ECE5D2] text-xl font-bold text-[#2A4027] shadow-[0_2px_0_#8FA876]"
            >
              <X size={16} />
            </button>

            <div className="pr-10">
              <p className="m-0 text-xs font-bold uppercase tracking-[0.16em] text-[#5E7B4E]">
                Plant details
              </p>
              <h2 id="plant-modal-title" className="m-0 mt-1 font-fraunces text-3xl font-bold text-[#2A4027]">
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
      <h3 className="m-0 font-fraunces text-lg font-bold text-[#2A4027]">{label}</h3>
      <p className="m-0 mt-1 text-sm leading-6 text-[#53614E]">{value}</p>
    </div>
  );
}