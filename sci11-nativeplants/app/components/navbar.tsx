import { PageId, PLANTS } from "../type";

interface NavbarProps {
  currentPage: PageId;
  foundPlants: Record<number, boolean>;
  onNavigate: (page: PageId) => void;
}

export function Navbar({ currentPage, foundPlants, onNavigate }: NavbarProps) {
  const foundCount = Object.keys(foundPlants).length;

  return (
    <header className="sticky top-0 z-20 bg-[#ECE5D2]/90 backdrop-blur-md border-b-2 border-dashed border-[#8FA876]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-2.5 px-5 py-2.5 flex-wrap">
        <button 
          onClick={() => onNavigate("landing")} 
          className="font-fraunces font-bold text-[#2A4027] text-lg no-underline bg-transparent border-0 cursor-pointer text-left"
        >
          ✿ UP BAGUIO FLORACLE
        </button>
        <nav className="flex gap-1 items-center flex-wrap" aria-label="Main">
          <button 
            onClick={() => onNavigate("landing")} 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${currentPage === "landing" ? "bg-[#4D683E] text-white" : "text-[#53614E] hover:bg-[#D5E2C8] hover:text-[#2A4027]"}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate("map")} 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${currentPage === "map" || currentPage === "quiz" ? "bg-[#4D683E] text-white" : "text-[#53614E] hover:bg-[#D5E2C8] hover:text-[#2A4027]"}`}
          >
            Map & Quiz
          </button>
          <button 
            onClick={() => onNavigate("plants")} 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${currentPage === "plants" || currentPage === "plant" ? "bg-[#4D683E] text-white" : "text-[#53614E] hover:bg-[#D5E2C8] hover:text-[#2A4027]"}`}
          >
            Plants
          </button>
          <button 
            onClick={() => onNavigate("about")} 
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${currentPage === "about" ? "bg-[#4D683E] text-white" : "text-[#53614E] hover:bg-[#D5E2C8] hover:text-[#2A4027]"}`}
          >
            About
          </button>
          <span className="ml-1.5 px-3 py-1 rounded-full bg-[#C25936] text-white font-bold text-xs" title="Plants discovered">
            ✿ {foundCount}/{PLANTS.length}
          </span>
        </nav>
      </div>
    </header>
  );
}