import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function RootLayout() {
  const [scrolled,setScrolled] =useState(false);
  const [initialScroll, setInitialScroll] = useState(false);
  const handleScroll = () =>{
    if(window.scrollY>0 && !initialScroll){
      console.log("Scrolled");
      setScrolled(true);
      setInitialScroll(true);
    }else if (window.scrollY ===0 ){
      setScrolled(false)
    }
  };
 
  window.addEventListener('scroll', handleScroll);
  const logo = './src/images/logo.png'
  return (
    <div className=''>
      <header className= {`root-layout  fixed w-full flex pl-20  bg-body-color justify-between items-center pr-28 transition-all duration-500 z-20   ${scrolled ?'bg-white h-20':'bg-body-color  h-24'}`}>
        <Link smooth to="first" spy={true} duration={500} className="cursor-pointer w-28">
        <img src={logo} alt="logo"  />
        </Link>
        <nav className=" flex justify-between font-semibold text-gray-800  w-[500px]">
          <Link  smooth to="about" spy={true} duration={500} className="cursor-pointer pt-3 hover:opacity-80">About</Link>
          <Link  smooth to="projects" spy={true} duration={500} className="cursor-pointer pt-3 hover:opacity-80">Projects</Link>
          <Link  smooth to="contact" spy={true} duration={500} className="cursor-pointer pt-3 hover:opacity-80">Contact</Link>
          <Link classID=""><button className=" bg-gradient-to-r from-button-color1  to-button-color2 text-white px-6 py-3  text-base  font-sans rounded-3xl">Download CV</button></Link>
        </nav>
      </header>
    
      <main>
        <Outlet />
      </main>
    </div>
  )
}