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
          
          <Link  smooth to="about" spy={true} duration={500} className="cursor-pointer pt-3 hover:opacity-80 group relative ">About
            {/* underline  */}
            <span className=" absolute block left-0 right-0 bottom-0  h-[0.75px]  bg-aboutText scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
          </Link>
          
          <Link  smooth to="projects" spy={true} duration={500} className="cursor-pointer pt-3 hover:opacity-80 relative group">Projects
          {/* underline  */}
          <span className=" absolute block left-0 right-0 bottom-0  h-[0.75px]  bg-aboutText scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
           
          </Link>
          <Link  smooth to="contact" spy={true} duration={500} className="cursor-pointer pt-3 hover:opacity-80 relative group">Contact
          {/* underline  */}
          <span className=" absolute block left-0 right-0 bottom-0  h-[0.75px]  bg-aboutText scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
           
          </Link>
          <Link classID=""><button className=" bg-gradient-to-r from-button-color1  to-button-color2 text-white px-6 py-3  text-base  font-sans rounded-3xl">Download CV</button></Link>
        </nav>
      </header>
    
      <main>
        <Outlet />
      </main>
    </div>
  )
}