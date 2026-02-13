import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative w-full bg-[#121212]">
      <Navbar />

      {/* Scroll Section */}
      <section id="home" className="relative">
        <ScrollyCanvas />
      </section>

      {/* Content Section */}
      <section id="work">
        <Projects />
      </section>

      {/* Footer / Contact */}
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
