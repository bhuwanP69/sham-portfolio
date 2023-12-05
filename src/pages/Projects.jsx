import React, { useState } from "react";

export function ProjectsLists() {
  const project1 =
    "https://live.staticflickr.com/65535/53377379819_ea85d284b2_z.jpg";
  const project2 =
    "https://live.staticflickr.com/65535/53377389124_4aa5ccd8ba_z.jpg";
  const project3 =
    "https://live.staticflickr.com/65535/53377248143_16693b3b8f_z.jpg";
  const project4 =
    "https://live.staticflickr.com/65535/53377068586_465d478707_z.jpg";
  const project5 =
    "https://live.staticflickr.com/65535/53377517810_34ecdf0aba.jpg";
  const project6 =
    "https://live.staticflickr.com/65535/53377391464_5c76aae0f2_z.jpg";
  return (
    <div className="projects">
      <p className="text-aboutText lg:px-52 px-20 text-lg">
        These are some of the websites I have built for clients and myself. I
        have used a variety of technologies to build these websites including
        JavaScript, TypeScript, HTML and CSS. I have also used a variety of
        frameworks and libraries including React, Next JS, Bootstrap and
        Tailwind CSS.
      </p>

      <div className="projects grid lg:grid-cols-2 grid-cols-1 items-center justify-center  gap-y-20 pr-2  pt-8">
        {/* project 1 */}
        <div className="project1 transition-all  duration-500 px-10">
          <div className="img relative lg:w-[510px]  w-full overflow-hidden   ">
            <img
              src={project1}
              alt="project1"
              className="hover:scale-105 w-full rounded-lg transition-transform duration-300"
            />
            <div className=" firstProject absolute  items-center justify-center  top-0  w-full  h-full  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg ">
              <h5 className="font-semibold text-base sm:text-lg text-center w-96">
                Stream and download Movies, TV Shows & Anime and view info such
                as trailers, cast, photos, etc.
              </h5>
              <h5 className="font-semibold text-base sm:text-lg">
                Built With:
              </h5>
              <div className="lists  flex gap-5 font-sans font-semibold text-base sm:text-lg ">
                <li className="list-none">HTML</li>
                <li className="list-disc">CSS</li>
                <li className="list-disc">JavaScript</li>
                <li className="list-disc">React JS</li>
                <li className="list-disc">Web API</li>
              </div>

              <div className="button flex gap-5 ">
                <button className=" button1 border border-white font-bold px-4 sm:px-5 py-1 sm:py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-sm md:text-base ">
                  View Project
                  <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs  p-1 duration-500"></i>
                </button>
                <button className=" button2 border border-white font-bold sm:px-5 px-4 sm:py-2 py-1 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base text-sm ">
                  View Code
                  <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
                </button>
              </div>
            </div>
          </div>

          <h4 className="text-start text-lg sm:text-xl font-bold text-text-Black pt-2">
            Horizon - Stream Movies, TV Shows & Anime
          </h4>
          <p className="text-start text-aboutText text-base sm:text-lg">
            Web Application
          </p>
        </div>

        {/* project 2 */}
        <div className="project2 transition-all duration-500 px-10">
          <div className="img relative lg:w-[510px] w-full overflow-hidden transition-all duration-500   ">
            <img
              src={project2}
              alt="project1"
              className="rounded-lg transition-all duration-500"
            />
            <div className=" firstProject absolute  items-center justify-center  top-0 w-full h-full  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg transition-all duration-500 ">
              <h5 className="font-semibold sm:text-lg text-base text-center w-96">
                Sekrio allows you to track your workouts and record them
                directly in your browser.
              </h5>
              <h5 className="font-semibold sm:text-lg text-base">
                Built With:
              </h5>
              <div className="lists  flex gap-5 font-sans font-semibold sm:text-lg text-base ">
                <li className="list-none">HTML</li>
                <li className="list-disc">CSS</li>
                <li className="list-disc">JavaScript</li>
                <li className="list-disc">Web API</li>
              </div>

              <div className="button flex gap-5 ">
                <button className=" button1 border border-white font-bold sm:px-5 px-4 sm:py-2 py-1 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base text-sm ">
                  View Project
                  <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
                </button>
                <button className=" button2 border border-white font-bold sm:px-5 px-4 sm:py-2 py-1 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base text-sm  ">
                  View Code
                  <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
                </button>
              </div>
            </div>
          </div>

          <h4 className="text-start sm:text-xl text-lg  font-bold text-text-Black pt-2">
            Sekiro - Workout Tracker
          </h4>
          <p className="text-start text-aboutText sm:text-lg text-base ">
            Web Application
          </p>
        </div>

        {/* project 3 */}
        <div className="project3 transition-all duration-500 px-10">
          <div className="img relative lg:w-[510px] w-full transition-all duration-500   ">
            <img
              src={project3}
              alt="project1"
              className="rounded-lg transition-all duration-500"
            />
            <div className=" firstProject absolute  items-center justify-center  top-0 w-full h-full  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg transition-all duration-500 ">
              <h5 className="font-semibold sm:text-lg text-base text-center w-96">
                Savory is a contemporary restaurant website which features a
                full carousel menu and reservation functionality.
              </h5>
              <h5 className="font-semibold sm:text-lg tex-base">Built With:</h5>
              <div className="lists  flex gap-5 font-sans font-semibold sm:text-lg text-base ">
                <li className="list-none">HTML</li>
                <li className="list-disc">CSS</li>
                <li className="list-disc">JavaScript</li>
                <li className="list-disc">React JS</li>
                <li className="list-disc">Web API</li>
              </div>

              <div className="button flex gap-5 ">
                <button className=" button1 border border-white font-bold sm:px-5 px-4 sm:py-2 py-1 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base text-sm ">
                  View Project
                  <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
                </button>
                <button className=" button2 border border-white font-bold sm:px-5 px-4 sm:py-2 py-1 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base  text-sm">
                  View Code
                  <i className="fa-brands fa-github  ml-2 rounded-full text-white text-xl p-1 duration-500"></i>
                </button>
              </div>
            </div>
          </div>

          <h4 className="text-start sm:text-xl text-lg font-bold text-text-Black pt-2">
            Savory Restaurant
          </h4>
          <p className="text-start text-aboutText sm:text-lg text-base">
            Web Application
          </p>
        </div>

        {/* project 4 */}
        <div className="project4 transition-all duration-500 px-10">
          <div className="img relative lg:w-[510px] w-full transition-all duration-500   ">
            <img
              src={project4}
              alt="project1"
              className="rounded-lg transition-all duration-500"
            />
            <div className=" firstProject absolute  items-center justify-center  top-0 w-full h-full  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg transition-all duration-500 ">
              <h5 className="font-semibold text-lg text-center w-full">
                Dunn Construction Inc. is a construction company website landing
                page built with usability first in mind.
              </h5>
              <h5 className="font-semibold sm:text-lg text-base">
                Built With:
              </h5>
              <div className="lists  flex gap-5 font-sans font-semibold sm:text-lg text-base ">
                <li className="list-none">HTML</li>
                <li className="list-disc">CSS</li>
                <li className="list-disc">JavaScript</li>
                <li className="list-disc">React JS</li>
                <li className="list-disc">Web API</li>
              </div>

              <div className="button flex gap-5 ">
                <button className=" button1 border border-white font-bold sm:px-5 px-4 sm:py-2 py-1 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base text-sm ">
                  View Project
                  <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
                </button>
                <button className=" button2 border border-white font-bold sm:px-5 px-4 sm:py-2 py-1 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base text-sm ">
                  View Code
                  <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
                </button>
              </div>
            </div>
          </div>

          <h4 className="text-start sm:text-xl text-lg font-bold text-text-Black pt-2">
            Dunn Construction
          </h4>
          <p className="text-start text-aboutText sm:text-lg text-base">
            Web Application
          </p>
        </div>
        {/* project 5 */}
        <div className="project5 transition-all duration-500 px-10">
          <div className="img relative lg:w-[510px] w-full transition-all duration-500   ">
            <img
              src={project5}
              alt="project1"
              className="rounded-lg transition-all duration-500"
            />
            <div className=" firstProject absolute  items-center justify-center  top-0 w-full h-full  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg transition-all duration-500 ">
              <h5 className="font-semibold sm:text-lg text-base text-center w-96">
                Search for over 1,000,000 different recipes with Ichiraku. Also
                upload and save your own recipes.
              </h5>
              <h5 className="font-semibold sm:text-lg text-base">
                Built With:
              </h5>
              <div className="lists  flex gap-5 font-sans font-semibold sm:text-lg text-base ">
                <li className="list-none">HTML</li>
                <li className="list-disc">CSS</li>
                <li className="list-disc">JavaScript</li>
                <li className="list-disc">React JS</li>
                <li className="list-disc">Web API</li>
              </div>

              <div className="button flex gap-5 ">
                <button className=" button1 border border-white font-bold sm:px-5 px-4 sm:py-2 py-1 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base text-xs ">
                  View Project
                  <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
                </button>
                <button className=" button2 border border-white font-bold sm:px-5 px-4 sm:py-2 py-1 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base text-xs ">
                  View Code
                  <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
                </button>
              </div>
            </div>
          </div>

          <h4 className="text-start sm:text-xl text-lg font-bold text-text-Black pt-2">
            Ichiraku - Create & Search for Recipes
          </h4>
          <p className="text-start text-aboutText sm:text-lg text-base">
            Web Application
          </p>
        </div>
        {/* project 6 */}
        <div className="project6 transition-all duration-500 px-10">
          <div className="img relative lg:w-[510px] w-full transition-all duration-500   ">
            <img
              src={project6}
              alt="project1"
              className="rounded-lg transition-all duration-500"
            />
            <div className=" firstProject absolute  items-center justify-center  top-0 w-full h-full  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg transition-all duration-500 ">
              <h5 className="font-semibold sm:text-lg text-base text-center w-96">
                Search for Github users and view information such as their
                repos, company, followers, gists, location, etc.
              </h5>
              <h5 className="font-semibold sm:text-lg text-base">
                Built With:
              </h5>
              <div className="lists  flex gap-5 font-sans font-semibold sm:text-lg text-base ">
                <li className="list-none">HTML</li>
                <li className="list-disc">CSS</li>
                <li className="list-disc">JavaScript</li>
                <li className="list-disc">React JS</li>
                <li className="list-disc">Web API</li>
              </div>

              <div className="button flex gap-5 ">
                <button className=" button1 border border-white font-bold sm:px-5 sm:py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base text-sm ">
                  View Project
                  <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
                </button>
                <button className=" button2 border border-white font-bold sm:px-5 sm:py-2  rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base text-sm ">
                  View Code
                  <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
                </button>
              </div>
            </div>
          </div>

          <h4 className="text-start sm:text-xl text-lg font-bold text-text-Black pt-2">
            Github Finder - Search for Github Users & Repos
          </h4>
          <p className="text-start text-aboutText sm:text-lg text-base">
            Web Application
          </p>
        </div>
      </div>
    </div>
  );
}
// Mobile apps
export function ProjectsLists2() {
  const project1 =
    "https://live.staticflickr.com/65535/53377378809_5c46b25c41.jpg";

  return (
    <div className="projects">
      <p className="text-aboutText sm:px-52 px-10 sm:text-lg text-base">
        These are some of the mobile applications I have built for clients and
        myself. I have used a variety of technologies to build these
        applications, including React Native, Java and Styled Components.
      </p>

      <div className="projects grid lg:grid-cols-2 grid-cols-1 gap-y-20 lg:px-20 px-5 pt-8">
        {/* project 1 */}
        <div className="project1 transition-all duration-500 ">
          <div className="img relative lg:w-[510px] w-full overflow-hidden   ">
            <img
              src={project1}
              alt="project1"
              className="hover:scale-105  rounded-lg transition-transform duration-300"
            />
            <div className=" firstProject absolute  items-center justify-center  top-0 w-full h-full  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg ">
              <h5 className="font-semibold sm:text-lg text-base text-center ">
                Browse, Search and Download movie torrents from the YTS API, as
                well as watch movie trailers directly from the app.
              </h5>
              <h5 className="font-semibold sm:text-lg text-base">
                Built With:
              </h5>
              <div className="lists  flex gap-5 font-sans font-semibold sm:text-lg ">
                <li className="list-none">React Native</li>
              </div>

              <div className="button flex gap-5 ">
                <button className=" button1 border border-white font-bold sm:px-5 px-4 sm:py-2 py-1 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base  text-sm">
                  View Project
                  <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
                </button>
                <button className=" button2 border border-white font-bold sm:px-5 px-4  sm:py-2 py-1 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 sm:text-base text-sm ">
                  View Code
                  <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
                </button>
              </div>
            </div>
          </div>

          <h4 className="text-start sm:text-xl text-base font-bold text-text-Black pt-2">
            Movie Downloader - YTS Torrent
          </h4>
          <p className="text-start text-aboutText sm:text-lg text-base">
            Mobile Application
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [showWebsite, setShowWebsite] = useState(true);
  const [showMobile, setShowMobile] = useState(false);

  function handleWebsite() {
    if (!showWebsite) {
      setShowWebsite(true);
      setShowMobile(false);
    }
  }
  function handleMobile() {
    if (!showMobile) {
      setShowMobile(!showMobile);
      setShowWebsite(false);
    }
  }
  return (
    <div
      className="services py-20 bg-gradient-to-t from-projectBg1  to-projectBg2"
      id="projects"
    >
      <div className="top pb-10  text-center flex  flex-col justify-center items-center gap-10">
        <h2 className="text-4xl font-bold text-text-Black">
          Cool Stuff I've Built
        </h2>
        <div className="buttons flex gap-10">
          <button
            onClick={handleWebsite}
            className={`text-aboutText hover:text-button-color4  ${
              showWebsite ? "bg-button-color4 text-white hover:text-white" : ""
            } font-bold text-lg px-8 py-2 rounded-full`}
          >
            Websites
          </button>
          <button
            onClick={handleMobile}
            className={`text-aboutText  hover:text-button-color4 ${
              showMobile ? "bg-button-color4 text-white hover:text-white" : ""
            } font-bold text-lg px-8 py-2 rounded-full`}
          >
            Mobile Apps
          </button>
        </div>
      </div>
      {showWebsite && <ProjectsLists />}
      {showMobile && <ProjectsLists2 />}
    </div>
  );
}
