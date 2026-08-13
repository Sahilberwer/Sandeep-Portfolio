import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import JourneyTimeline from "./components/JourneyTimeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import BuildingToward from "./components/BuildingToward";
import Vision from "./components/Vision";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <Story />
        <JourneyTimeline />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <BuildingToward />
        <Vision />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
