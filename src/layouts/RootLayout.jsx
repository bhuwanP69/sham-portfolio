import { useEffect, useRef, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function RootLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [initialScroll, setInitialScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0 && !initialScroll) {
      console.log("Scrolled");
      setScrolled(true);
      setInitialScroll(true);
    } else if (window.scrollY === 0) {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  const logo =
    "https://live.staticflickr.com/65535/53376127502_d37656a920_n.jpg";

  const handleDownload = () => {
    const pdfUrl = "./src/images/Shamar_Morrison_Web_Developer_Resume.pdf";
    // Open a new tab/window to display the PDF.
    window.open(pdfUrl);
  };

  const [showNav, setShowNav] = useState(false);
  // Ref to the more-info container
  const moreInfoRef = useRef(null);

  function handleMoreClick() {
    setShowNav(!showNav);
  }

  // Function to handle clicks outside
  const handleClickOutside = (event) => {
    const button = document.querySelector(".fa-bars");
    if (button && button.contains(event.target)) {
      return;
    }

    if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
      setShowNav(false);
    }
  };

  // Attach click event listener to detect clicks outside the more-info section
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <header
        className={`root-layout  fixed w-full flex pl-20   bg-body-color justify-between items-center pr-28 transition-all duration-1000 z-20   ${
          scrolled ? "bg-white h-20 py-8" : "bg-body-color  h-24 py-0"
        }`}
      >
        <Link
          smooth
          to="first"
          spy={true}
          duration={500}
          className="cursor-pointer w-28"
        >
          <img src={logo} alt="logo" />
        </Link>
        <button
          onClick={handleMoreClick}
          className={`block lg:hidden z-30  absolute   right-10  `}
        >
          <i
            className={`fa-solid fa-bars   text-2xl  w-14 cursor-pointer px-2 py-1 rounded-lg ${
              showNav
                ? "border-black border-4 pointer-events-none"
                : " border-none"
            }}`}
          ></i>
        </button>

        {/* sidebar  */}
        {showNav && (
          <nav
            ref={moreInfoRef}
            className={`sidebar flex flex-col gap-5 w-48 h-full bg-black text-white fixed  top-0 left-0 opacity-100 transition-all duration-500  `}
          >
            {/* home  */}

            <Link
              smooth
              to="home"
              spy={true}
              duration={500}
              className="cursor-pointer py-6  bg-white text-black text-lg   text-center  "
            >
              Home
            </Link>
            <Link
              smooth
              to="about"
              spy={true}
              duration={500}
              className=" relative cursor-pointer  text-lg text-center  pb-5"
            >
              About
              {/* underline  */}
              <span className="absolute left-0 right-0 bottom-0  h-[0.75px]  bg-aboutText scale-x-100  opacity-50"></span>
            </Link>

            <Link
              smooth
              to="projects"
              spy={true}
              duration={500}
              className="cursor-pointer    relative   text-lg   text-center  pb-5"
            >
              Projects
              {/* underline  */}
              <span className="absolute left-0 right-0 bottom-0  h-[0.75px]  bg-aboutText scale-x-100 opacity-50 "></span>
            </Link>
            <Link
              smooth
              to="contact"
              spy={true}
              duration={500}
              className="cursor-pointer   relative text-lg text-center  pb-5"
            >
              Contact
              {/* underline  */}
              <span className="absolute left-0 right-0 bottom-0  h-[0.75px]  bg-aboutText scale-x-100 opacity-50 "></span>
            </Link>
            <a className="relative">
              <button
                onClick={handleDownload}
                className=" text-text-color cursor-pointer  text-lg pl-8  pb-5 "
              >
                Download CV
                <span className="absolute left-0 right-0 bottom-0  h-[0.75px]  bg-aboutText scale-x-100 opacity-50 "></span>
              </button>
            </a>
          </nav>
        )}
        {showNav && (
          <div
            className={`fixed inset-0 left-48 bg-black cursor-pointer z-10 opacity-50  ${
              scrolled ? "top-20" : "top-0"
            } `}
          />
        )}

        {/* big screen  */}

        <nav
          className={` lg:flex hidden justify-between font-semibold text-gray-800  w-[500px]  z-40 `}
        >
          <Link
            smooth
            to="about"
            spy={true}
            duration={500}
            className="cursor-pointer pt-3 hover:opacity-80 group relative "
          >
            About
            {/* underline  */}
            <span className=" absolute block left-0 right-0 bottom-0  h-[0.75px]  bg-aboutText scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
          </Link>

          <Link
            smooth
            to="projects"
            spy={true}
            duration={500}
            className="cursor-pointer pt-3 hover:opacity-80 relative group"
          >
            Projects
            {/* underline  */}
            <span className=" absolute block left-0 right-0 bottom-0  h-[0.75px]  bg-aboutText scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
          </Link>
          <Link
            smooth
            to="contact"
            spy={true}
            duration={500}
            className="cursor-pointer pt-3 hover:opacity-80 relative group"
          >
            Contact
            {/* underline  */}
            <span className=" absolute block left-0 right-0 bottom-0  h-[0.75px]  bg-aboutText scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
          </Link>
          <a>
            <button
              onClick={handleDownload}
              className=" relative bg-gradient-to-r from-button-color1  to-button-color2 text-white px-6 py-3  text-base  font-sans rounded-3xl overflow-hidden shadow-lg shadow-shadowColor group "
            >
              Download CV
              <span class="absolute -top-2 -right-2 transform rotate-45 rounded-full opacity-20 h-24 w-12 bg-white group-hover:w-24 transition-all duration-1000 overflow-hidden"></span>
              {/* 
          <span class="absolute top-4 rotate-6 -right-5 rounded-full opacity-20 h-8 w-1/2 bg-white hover:w-32 transition-all duration-1000"></span> */}
            </button>
          </a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
