import { Trees } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#E8D8C0] border-t-2 border-dashed border-[#9A7A45] py-6 px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-[#3D2B20]">
            <Trees className="w-4 h-4 text-[#68752B]" />
            <span>UP Baguio Floracle</span>
          </div>
          <p className="mt-1 text-xs text-[#5A4739] max-w-md">
            University of the Philippines Baguio · Governor Pack Road, Baguio City, Benguet, Philippines.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-end lg:items-center gap-2 text-[11px] text-[#6D5948]">
          <div>
            <b>© 2026 University of the Philippines Baguio</b> · SCIENCE 11 Z Students.
          </div>
        </div>
      </div>
    </footer>
  );
}