import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Element } from 'react-scroll';
import ScrollToTopButton from "./components/scroll/ScrollToTopButton";

function App() {
  return (
    <div>
      <Navbar />
    
        <Home />

      <Element id='about'>
        <About />
      </Element>
      <Element id='education'>
        <Education />
      </Element>
      <Element id='skills'>
        <Skills />
      </Element>
      <Element id='project'>
        <Project />
      </Element>
      <Element id='contact'>
        <Contact />
      </Element>
      <Footer />
      <ScrollToTopButton />
      
    </div>
  );
}

export default App;

