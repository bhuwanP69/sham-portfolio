import BackToTop from "../components/BackToTop";
import About from "./About";
import Contact from "./Contact";
import First from "./First";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
    <div className="main-home grid" id='home'>
        <First/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
    <BackToTop/>
       
    </>
  )
}