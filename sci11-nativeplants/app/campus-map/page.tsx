"use client";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useState } from "react";
import { PLANTS } from "../type";
// Icons
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function CampusMap() {
  const [pins, setPins] = useState([
    {
      id: 1,
      x: 70.02,
      y: 30.8,
      name: PLANTS[0]?.n || "Plant 1",
      question:
        "What kind of environment does Agubangbang typically thrive in?",
      options: [
        "Sunny Areas",
        "Mossy Forests and Damp Habitats",
        "Sandy Beach",
        "Deep Water",
      ],
      correctAnswer: "Mossy Forests and Damp Habitats",
      isUnlocked: true,
      isCompleted: false,
    },
    {
      id: 2,
      x: 62.27,
      y: 23.8,
      name: PLANTS[1]?.n || "Plant 2",
      question: "What kind of flower does Oriental Hawkweed produce?",
      options: [
        "White Flower Heads",
        "Yellow Flower Heads",
        "Purple Flower Heads",
        "No flower",
      ],
      correctAnswer: "Yellow Flower Heads",
      isUnlocked: false,
      isCompleted: false,
    },
    {
      id: 3,
      x: 63.4,
      y: 25.8,
      name: PLANTS[2]?.n || "Plant 3",
      question:
        "What physical features characterize the growth of Acystopteris fern?",
      options: [
        "A creeping underground rhizome with finely divided, three-pinnate fronds",
        "A woody trunk with thick, needle-like leaves",
        "Floating pads with bulbous, water-storing stems",
        " Long hanging clusters of dark purplish berries",
      ],
      correctAnswer:
        "A creeping underground rhizome with finely divided, three-pinnate fronds",
      isUnlocked: false,
      isCompleted: false,
    },
    {
      id: 4,
      x: 60.52,
      y: 50.8,
      name: PLANTS[3]?.n || "Plant 4",
      question: "What are the primary uses for the pine tree?",
      options: [
        "Furniture upholstery, fabric weaving, and natural food coloring",
        "Construction, timber, particleboard, paper pulp, and commercial oleoresin collection",
        "Medicinal extractions, roofing thatch, and basketry",
        "Ornamental landscaping, biofuel refining, and musical instruments",
      ],
      correctAnswer:
        "Construction, timber, particleboard, paper pulp, and commercial oleoresin collection",
      isUnlocked: false,
      isCompleted: false,
    },
    {
      id: 5,
      x: 48.9,
      y: 54.8,
      name: PLANTS[4]?.n || "Plant 5",
      question:
        "Does the Christella Fern have spores in the undersides of its fronds?",
      options: ["True", "False"],
      correctAnswer: "True",
      isUnlocked: false,
      isCompleted: false,
    },
    {
      id: 6,
      x: 15.52,
      y: 38.8,
      name: PLANTS[5]?.n || "Plant 6",
      question:
        "Dryopteris helps provide _____________ on the forest floor and contributes to suitable ___________ for small organisms.",
      options: [
        "Forage, nesting materials",
        "Soil compaction, wind barriers",
        "Structural support, drainage channels",
        "Vegetation cover, microhabitats",
      ],
      correctAnswer: "Vegetation cover, microhabitats",
      isUnlocked: false,
      isCompleted: false,
    },
    {
      id: 7,
      x: 75.9,
      y: 67.92,
      name: PLANTS[6]?.n || "Plant 7",
      question:
        "What are the defining physical characteristics of the clump-forming Dianella?",
      options: [
        "Broad, rounded leaves with bright red berries and edible roots",
        "Long, narrow, sword-shaped leaves with shiny blue-purple berries and pale bluish-purple flowers",
        "Needle-like leaves with yellow flowers and woody seed pods",
        "Rhizomatous fern with clustered fronds",
      ],
      correctAnswer:
        "Long, narrow, sword-shaped leaves with shiny blue-purple berries and pale bluish-purple flowers",
      isUnlocked: false,
      isCompleted: false,
    },
    {
      id: 8,
      x: 81.65,
      y: 64.8,
      name: PLANTS[7]?.n || "Plant 8",
      question:
        "Mayana is known for its colorful foliage, which may have combinations of _____, _____, _____, _____, and _____.",
      options: [
        "white, red, pink, purle, and blue",
        "green, red, pink, blue, and yellow",
        "green, red, pink, orange, and yellow",
        "green, red, pink, purple, and yellow",
      ],
      correctAnswer: "green, red, pink, purple, and yellow",
      isUnlocked: false,
      isCompleted: false,
    },
    {
      id: 9,
      x: 58.4,
      y: 18.8,
      name: PLANTS[8]?.n || "Plant 9",
      question:
        "Impatiens has flowers that can serve as a source of nectar and pollen for visiting insects and other flower visitors. It also contributes to the diversity of forest understory vegetation.",
      options: [
        "First statement is true",
        "Second statement is true",
        "Both are true",
        "Neither is true",
      ],
      correctAnswer: "Both are true",
      isUnlocked: false,
      isCompleted: false,
    },
    {
      id: 10,
      x: 61.02,
      y: 20.55,
      name: PLANTS[9]?.n || "Plant 10",
      question: "What is Bayabang commonly used for?",
      options: ["Medicine", "Food", "Dye", "Ornament"],
      correctAnswer: "Ornament",
      isUnlocked: false,
      isCompleted: false,
    },
  ]);

  const [activePinId, setActivePinId] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const activePin = pins.find((p) => p.id === activePinId);
  const activePlant = activePin ? PLANTS[activePin.id - 1] : undefined;

  const handleAnswerSubmit = (option: string) => {
    if (!activePin) return;

    if (option === activePin.correctAnswer) {
      setFeedback("Correct, next location unlocked!");

      setPins((prevPins) =>
        prevPins.map((p, index) => {
          if (p.id === activePin.id) {
            return { ...p, isCompleted: true };
          }
          if (prevPins[index - 1]?.id === activePin.id) {
            return { ...p, isUnlocked: true };
          }
          return p;
        }),
      );

      setTimeout(() => {
        setActivePinId(null);
        setFeedback("");
        setIsQuizOpen(false);
      }, 1200);
    } else {
      setFeedback("Incorrect answer. Try again!");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col text-[#3D2B20] font-sans antialiased selection:bg-[#C99545]/40 relative"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 8%, rgba(183,191,114,.28), transparent 38%), radial-gradient(circle at 92% 30%, rgba(201,149,69,.18), transparent 40%)",
        backgroundColor: "#F5F0E1",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar foundPlants={{}} />
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-5 py-10">
        <div className="mb-5">
          <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#3D2B20] m-0">
            Locate the Plants
          </h2>
          <p className="text-sm text-[#5A4739] m-0 mt-1 max-w-[60ch]">
            Find the plants in our campus; who knows, maybe you'll find
            something more?
          </p>
        </div>

        <div className="relative block mx-auto rounded-[26px] border-2 border-[#3D2B20] overflow-hidden max-w-4xl w-full shadow-[0_10px_24px_rgba(61,43,32,0.18)]">
          <img src="/map2.png" alt="UPB Campus Map" className="w-full h-auto" />

          {pins.map((pin) => {
            let bgClass = "bg-[#9A7A45] cursor-not-allowed";
            if (pin.isCompleted) {
              bgClass = "bg-[#68752B] cursor-pointer animate-pulse";
            } else if (pin.isUnlocked) {
              bgClass =
                "bg-[#C99545] cursor-pointer hover:scale-110 transition-transform";
            }

            return (
              <button
                key={pin.id}
                disabled={!pin.isUnlocked}
                onClick={() => {
                  setActivePinId(pin.id);
                  setFeedback("");
                  setIsQuizOpen(false);
                }}
                style={{
                  position: "absolute",
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className={`${bgClass} text-[#3D2B20] border-2 border-[#3D2B20] rounded-full w-5 h-5 text-[9px] md:w-8 md:h-8 md:text-sm flex items-center justify-center font-bold shadow-lg`}
                title={
                  pin.isUnlocked
                    ? `${pin.id}: ${pin.name}`
                    : `Locked (Complete previous level first)`
                }
              >
                {pin.isCompleted ? <FaCheck /> : pin.id}
              </button>
            );
          })}
        </div>
      </main>
      <Footer />

      {activePin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-[#F5F0E1] backdrop-blur p-6 rounded-[26px] shadow-2xl border-2 border-[#3D2B20] max-w-lg w-full max-h-[85vh] overflow-y-auto relative">
            <button
              onClick={() => {
                setActivePinId(null);
                setIsQuizOpen(false);
                setFeedback("");
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 font-bold text-sm px-2 py-1"
              aria-label="Close plant popup"
            >
              <IoClose size={20} />
            </button>

            <h3 className="mb-2 flex items-baseline justify-between gap-3 pr-6">
              <span className="text-lg font-bold text-[#3D2B20]">
                {isQuizOpen
                  ? `Location ${activePin.id}: ${activePin.name}`
                  : activePin.name}
              </span>
              {!isQuizOpen && activePlant && (
                <span className="text-m italic font-normal text-[#68752B]">
                  {activePlant.s}
                </span>
              )}
            </h3>

            {!isQuizOpen ? (
              <div className="space-y-4 text-sm text-[#5A4739]">
                {activePlant && (
                  <>
                    <section className="mt-4">
                      <h4 className="font-semibold text-[#3D2B20]">
                        Description
                      </h4>
                      <p>{activePlant.d}</p>
                    </section>
                    <section>
                      <h4 className="font-semibold text-[#3D2B20]">
                        Ecological Function
                      </h4>
                      <p>{activePlant.e}</p>
                    </section>
                    <section>
                      <h4 className="font-semibold text-[#3D2B20]">Uses</h4>
                      <p>{activePlant.u}</p>
                    </section>
                    <section>
                      <h4 className="font-semibold text-[#3D2B20]">Location</h4>
                      <p>{activePlant.l}</p>
                      <p>{activePlant.c}</p>
                    </section>
                  </>
                )}
                <button
                  onClick={() => setIsQuizOpen(true)}
                  className="w-full rounded-xl bg-[#68752B] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#536022]"
                >
                  {activePin.isCompleted ? "Review the quiz" : "Take the quiz"}
                </button>
              </div>
            ) : (
              <div>
                <p className="text-xs sm:text-sm font-medium mb-4 text-[#5A4739]">
                  {activePin.question}
                </p>
                {activePin.isCompleted ? (
                  <div className="font-medium text-sm text-[#5A4739]">
                    <p>Answer: {activePin.correctAnswer}</p>
                    <img
                      src={`/fairy/fairy${activePin.id}.png`}
                      alt={`${activePin.name} Fairy`}
                      className="mx-auto max-h-64 w-auto"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    {activePin.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSubmit(opt)}
                        className="p-2.5 text-left text-xs sm:text-sm rounded-xl border-2 border-[#9A7A45]/40 hover:bg-[#B7BF72]/30 transition-colors font-medium text-[#3D2B20]"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => {
                    setIsQuizOpen(false);
                    setFeedback("");
                  }}
                  className="mt-4 text-sm font-semibold text-[#68752B] underline underline-offset-2"
                >
                  Back to plant information
                </button>
              </div>
            )}

            {feedback && (
              <p
                className={`mt-3 text-center text-xs font-semibold ${feedback.includes("Correct") ? "text-green-600" : "text-amber-600"}`}
              >
                {feedback}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
