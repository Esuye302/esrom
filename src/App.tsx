
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import FAQSection from "./sections/Faq";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <FAQSection />
      </main>
      {/* <Test/> */}
    </>
  );
};

export default App;
