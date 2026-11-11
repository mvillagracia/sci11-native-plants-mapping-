import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export default function PlantsPage() {
  return (
    <div className="min-h-screen flex flex-col text-[#273523] font-sans antialiased selection:bg-[#8FA876]/40"
      style={{
        background: "radial-gradient(circle at 10% 8%, rgba(143,168,118,.25), transparent 38%), radial-gradient(circle at 92% 30%, rgba(176,199,152,.45), transparent 40%), #ECE5D2",
        backgroundAttachment: "fixed"
      }}
    >
      <Navbar foundPlants={{}} />
      <main className="flex-1 flex items-center justify-center p-5">
        plant
      </main>
      <Footer />
    </div>
  );
}