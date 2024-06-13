import { Element } from "react-scroll";
import Hero from "./components/Hero";
import Header from "./components/Header";
import CTA from "./components/CTA";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Element name="hero">
        <Hero />
      </Element>
      <CTA />
      <Element name="about">
        <About />
      </Element>
      <Element name="tokenomics">
        <Tokenomics />
      </Element>
      <Element name="roadmap">
        <Roadmap />
      </Element>
      <Footer />
    </>
  );
}

export default App;
