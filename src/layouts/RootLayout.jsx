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
  // useEffect(() =>{
  //   window.addEventListener('scroll',handleScroll);
  //   return () =>{
  //     window.removeEventListener('scroll',handleScroll);
  //   }
  // },[])
  window.addEventListener('scroll', handleScroll);
  const logo = './src/images/logo.png'
  return (
    <div className=''>
      <header className= {`root-layout  fixed w-full flex pl-20  bg-indigo-400 justify-between items-center h-24 pr-28   ${scrolled ?'bg-white':'bg-body-color'}`}>
        <Link smooth to="first" spy={true} duration={500} className="cursor-pointer w-28">
        <img src={logo} alt="logo"  />
        </Link>
        <nav className=" flex justify-between w-[500px]">
          <Link  smooth to="about" spy={true} duration={500} className="cursor-pointer pt-3">About</Link>
          <Link  smooth to="services" spy={true} duration={500} className="cursor-pointer pt-3">Projects</Link>
          <Link  smooth to="contact" spy={true} duration={500} className="cursor-pointer pt-3">Contact</Link>
          <Link classID=""><button className="bg-button-color2 text-white px-6 py-3  text-base font-semibold font-sans rounded-3xl">Download CV</button></Link>
        </nav>
      </header>
    
      <main>
        <Outlet />
      </main>
    </div>
  )
}