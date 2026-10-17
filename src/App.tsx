import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import FAQSection from "./sections/Faq";
import SideNav from "./Components/SideNav";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <Navbar />
      <SideNav />

      {/* 1. Hero is full width */}
      <Hero />

      {/* 2. About Me is pushed right so the side menu doesn't cover it */}
      <div className="md:pl-[280px]">
        <AboutMe />
      </div>

      {/* 3. Projects is OUTSIDE the padded wrapper so its dark background goes full width.
          (Projects.tsx handles its own inner padding so text/cards clear the side menu). */}
      <Projects />

      {/* 4. Contact & FAQ are pushed right again */}
      <div className="md:pl-[280px]">
        <Contact />
        <FAQSection />
      </div>
    </div>
  );
};

export default App;
