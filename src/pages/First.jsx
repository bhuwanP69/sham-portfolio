import { Link } from "react-scroll";

export default function First() {
    return (
      <div className="first h-screen text-center md:text-start lg:text-center pt-24 md:pt-48 pl-10 sm:pl-40 md:pl-20 bg-body-color" id="first">
       <h1 className="text-[95px] md:w-full w-96 font-extrabold font-sans text-transparent bg-clip-text bg-gradient-to-r from-text-color from-40% via-text-color via-50%   to-text-color2 to-1%">Hi, i'm shamar</h1>
       <h5 className=" text-2xl md:text-3xl md:w-full w-96 font-medium text-text-Black pb-14">I build web and mobile apps.</h5>
       <div className="buttons flex gap-5 justify-start lg:justify-center">
        <Link to="projects" smooth>
        <button className="flex items-center  text-white gap-2 bg-gradient-to-r from-button-color1  to-button-color2 px-8 py-4 rounded-full  group relative overflow-hidden shadow-lg shadow-shadowColor">
        <span class="absolute -top-2 -right-2 transform rotate-45 rounded-full opacity-20 h-24 w-14 bg-white group-hover:w-28 group-hover:rotate-12 transition-all duration-1000 overflow-hidden"></span>
        
          <p className="text-lg">My Projects</p>
          <i class="fa-solid fa-chevron-right text-sm pt-1 left-to-right-bounce "></i>
        </button>
        </Link>
        <Link to="contact" smooth>
        <button className="flex items-center  text-white gap-2 bg-gradient-to-r from-button-color2  to-text-color2 px-8 py-4  rounded-full relative group overflow-hidden shadow-lg shadow-shadowColor ">
        <span class="absolute -top-2 -right-5 transform rotate-45 rounded-full opacity-20 h-24 w-14 bg-white group-hover:w-28 group-hover:rotate-12 transition-all duration-1000 overflow-hidden"></span>

          <p className="text-lg">Let's Talk</p>
          <i class="fa-solid fa-comment text-sm  "></i>
        </button>
        </Link>
       
       </div>
      </div>
    )
  }