import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import TechSkills from "./components/TechSkills";
import Metrics from "./components/Metrics";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiences />
        <TechSkills />
        <Metrics />
      </main>
      <Footer />
    </>
  );
}
