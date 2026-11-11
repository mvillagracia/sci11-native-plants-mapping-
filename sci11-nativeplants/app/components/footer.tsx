import { Trees } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#DFD5BE] border-t-2 border-dashed border-[#8FA876] py-6 px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-[#2A4027]">
            <Trees className="w-4 h-4 text-[#4D683E]" />
            <span>UP Baguio Native Flora Initiative</span>
          </div>
          <p className="mt-1 text-xs text-[#53614E] max-w-md">
            University of the Philippines Baguio · Governor Pack Road, Baguio City, Benguet, Philippines.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-end lg:items-center gap-2 text-[11px] text-[#697863]">
          <div>
            © {new Date().getFullYear()} University of the Philippines Baguio · Cordillera Native Flora Herbarium Project.
          </div>
          <div className="font-mono text-[10px] text-[#7A8A74]">
            Digital Herbarium Specimen Archive · Minimalist Natural Edition
          </div>
        </div>
      </div>
    </footer>
  );
}