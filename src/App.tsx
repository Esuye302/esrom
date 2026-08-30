
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Test from "./sections/Test";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Contact/>
      </main>
      {/* <Test/> */}
    </>
  );
};

export default App;
