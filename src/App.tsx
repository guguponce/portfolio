import "./styles/App.scss";
import Hello from "./components/Hello";
import AboutMe from "./components/AboutMe";
import Knowledge from "./components/Knowledge";
import { useEffect } from "react";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {
    
  var userLang = navigator.language; 
  
  }, [])
  

  return (
    <>
      <Hello></Hello>
      <section id="skills-about-projects">
        <Knowledge />
        <article id="aboutme-projects">
        <AboutMe></AboutMe>
        <Projects></Projects>
        </article>
      </section>
    </>
  );
}

export default App;
