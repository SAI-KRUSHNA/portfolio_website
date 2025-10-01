import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Internships } from "./components/Internships";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NavigationProvider } from "./components/NavigationContext";
import { ThemeProvider } from "./components/ThemeProvider";
import { ScrollProgress } from "./components/AnimationUtils";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <NavigationProvider>
        <div className="min-h-screen">
          <ScrollProgress />
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Internships />
            <Contact />
          </main>
          <Footer />
        </div>
      </NavigationProvider>
    </ThemeProvider>
  );
}