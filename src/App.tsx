import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./sections/AboutMe";
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
      </main>
      {/* <Test/> */}
    </>
  );
};

export default App;
