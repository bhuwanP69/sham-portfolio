import React, { useState } from 'react'

export  function ProjectsLists() {
  const project1 = './src/images/project1.jpg'
  const project2 = './src/images/project2.png'
  const project3 = './src/images/project3.jpg'
  const project4 = './src/images/project4.jpg'
  const project5 = './src/images/project5.png'
  const project6 = './src/images/project6.png'
  return (
    <div className="projects grid grid-cols-2 gap-y-20 px-20 pt-8">
      
      {/* project 1 */}
        <div className="project1 transition-all duration-500">
          <div className="img relative w-[510px]    ">
          <img src={project1} alt="project1" className='hover:scale-105 w-full rounded-lg transition-transform duration-300' />
          <div className=" firstProject absolute  items-center justify-center  top-0 w-[510px] h-[240px]  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg ">
            <h5 className='font-semibold text-lg text-center w-96'>
            Stream and download Movies, TV Shows & Anime and view info such as trailers, cast, photos, etc.
            </h5>
            <h5 className='font-semibold text-lg'>Built With:</h5>
            <div className="lists  flex gap-5 font-sans font-semibold text-lg ">
              <li className='list-none'>HTML</li>
              <li className='list-disc'>CSS</li>
              <li className='list-disc'>JavaScript</li>
              <li className='list-disc'>React JS</li>
              <li className='list-disc'>Web API</li>
            </div>
           
            <div className="button flex gap-5 ">
              <button className=' button1 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Project 
              <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
              </button>
              <button className=' button2 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Code
              <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
              </button>
            </div>
          </div>
          </div>
          
          <h4 className='text-start text-xl font-bold text-text-Black pt-2'>Horizon - Stream Movies, TV Shows & Anime</h4>
              <p className='text-start text-aboutText text-lg'>Web Application</p>
        </div>
      
      {/* project 2 */}
        <div className="project2 transition-all duration-500">
          <div className="img relative w-[510px] transition-all duration-500   ">
          <img src={project2} alt="project1" className='rounded-lg transition-all duration-500' />
          <div className=" firstProject absolute  items-center justify-center  top-0 w-[510px] h-[243px]  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg transition-all duration-500 ">
            <h5 className='font-semibold text-lg text-center w-96'>
            Sekrio allows you to track your workouts and record them directly in your browser.
            </h5>
            <h5 className='font-semibold text-lg'>Built With:</h5>
            <div className="lists  flex gap-5 font-sans font-semibold text-lg ">
              <li className='list-none'>HTML</li>
              <li className='list-disc'>CSS</li>
              <li className='list-disc'>JavaScript</li>
              <li className='list-disc'>Web API</li>
            </div>
           
            <div className="button flex gap-5 ">
              <button className=' button1 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Project 
              <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
              </button>
              <button className=' button2 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Code
              <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
              </button>
            </div>
          </div>
          </div>
          
          <h4 className='text-start text-xl font-bold text-text-Black pt-2'>Sekiro - Workout Tracker</h4>
              <p className='text-start text-aboutText text-lg'>Web Application</p>
        </div>
      {/* project 3 */}
        <div className="project3 transition-all duration-500">
          <div className="img relative w-[510px] transition-all duration-500   ">
          <img src={project3} alt="project1" className='rounded-lg transition-all duration-500' />
          <div className=" firstProject absolute  items-center justify-center  top-0 w-[510px] h-[250px]  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg transition-all duration-500 ">
            <h5 className='font-semibold text-lg text-center w-96'>
            Savory is a contemporary restaurant website which features a full carousel menu and reservation functionality.
            </h5>
            <h5 className='font-semibold text-lg'>Built With:</h5>
            <div className="lists  flex gap-5 font-sans font-semibold text-lg ">
              <li className='list-none'>HTML</li>
              <li className='list-disc'>CSS</li>
              <li className='list-disc'>JavaScript</li>
              <li className='list-disc'>React JS</li>
              <li className='list-disc'>Web API</li>
            </div>
           
            <div className="button flex gap-5 ">
              <button className=' button1 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Project 
              <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
              </button>
              <button className=' button2 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Code
              <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
              </button>
            </div>
          </div>
          </div>
          
          <h4 className='text-start text-xl font-bold text-text-Black pt-2'>Savory Restaurant</h4>
              <p className='text-start text-aboutText text-lg'>Web Application</p>
        </div>
      {/* project 4 */}
        <div className="project4 transition-all duration-500">
          <div className="img relative w-[510px] transition-all duration-500   ">
          <img src={project4} alt="project1" className='rounded-lg transition-all duration-500' />
          <div className=" firstProject absolute  items-center justify-center  top-0 w-[510px] h-[242px]  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg transition-all duration-500 ">
            <h5 className='font-semibold text-lg text-center w-96'>
            Dunn Construction Inc. is a construction company website landing page built with usability first in mind.
            </h5>
            <h5 className='font-semibold text-lg'>Built With:</h5>
            <div className="lists  flex gap-5 font-sans font-semibold text-lg ">
              <li className='list-none'>HTML</li>
              <li className='list-disc'>CSS</li>
              <li className='list-disc'>JavaScript</li>
              <li className='list-disc'>React JS</li>
              <li className='list-disc'>Web API</li>
            </div>
           
            <div className="button flex gap-5 ">
              <button className=' button1 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Project 
              <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
              </button>
              <button className=' button2 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Code
              <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
              </button>
            </div>
          </div>
          </div>
          
          <h4 className='text-start text-xl font-bold text-text-Black pt-2'>Dunn Construction</h4>
              <p className='text-start text-aboutText text-lg'>Web Application</p>
        </div>
      {/* project 5 */}
        <div className="project5 transition-all duration-500">
          <div className="img relative w-[510px] transition-all duration-500   ">
          <img src={project5} alt="project1" className='rounded-lg transition-all duration-500' />
          <div className=" firstProject absolute  items-center justify-center  top-0 w-[510px] h-[254px]  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg transition-all duration-500 ">
            <h5 className='font-semibold text-lg text-center w-96'>
            Search for over 1,000,000 different recipes with Ichiraku. Also upload and save your own recipes.
            </h5>
            <h5 className='font-semibold text-lg'>Built With:</h5>
            <div className="lists  flex gap-5 font-sans font-semibold text-lg ">
              <li className='list-none'>HTML</li>
              <li className='list-disc'>CSS</li>
              <li className='list-disc'>JavaScript</li>
              <li className='list-disc'>React JS</li>
              <li className='list-disc'>Web API</li>
            </div>
           
            <div className="button flex gap-5 ">
              <button className=' button1 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Project 
              <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
              </button>
              <button className=' button2 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Code
              <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
              </button>
            </div>
          </div>
          </div>
          
          <h4 className='text-start text-xl font-bold text-text-Black pt-2'>Ichiraku - Create & Search for Recipes</h4>
              <p className='text-start text-aboutText text-lg'>Web Application</p>
        </div>
      {/* project 6 */}
        <div className="project6 transition-all duration-500">
          <div className="img relative w-[510px] transition-all duration-500   ">
          <img src={project6} alt="project1" className='rounded-lg transition-all duration-500' />
          <div className=" firstProject absolute  items-center justify-center  top-0 w-[510px] h-[254px]  hidden  text-white gap-2 bg-gradient-to-r from-text-color   to-button-color4   rounded-lg transition-all duration-500 ">
            <h5 className='font-semibold text-lg text-center w-96'>
            Search for Github users and view information such as their repos, company, followers, gists, location, etc.
            </h5>
            <h5 className='font-semibold text-lg'>Built With:</h5>
            <div className="lists  flex gap-5 font-sans font-semibold text-lg ">
              <li className='list-none'>HTML</li>
              <li className='list-disc'>CSS</li>
              <li className='list-disc'>JavaScript</li>
              <li className='list-disc'>React JS</li>
              <li className='list-disc'>Web API</li>
            </div>
           
            <div className="button flex gap-5 ">
              <button className=' button1 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Project 
              <i className="fa-solid fa-arrow-right bg-white ml-2 rounded-full text-gray-500 text-xs p-1 duration-500"></i>
              </button>
              <button className=' button2 border border-white font-bold px-5 py-2 rounded-3xl hover:bg-white hover:text-text-color transition-all duration-500 text-base '>View Code
              <i className="fa-brands fa-github  ml-2 rounded-full text-white text-lg p-1 duration-500"></i>
              </button>
            </div>
          </div>
          </div>
          
          <h4 className='text-start text-xl font-bold text-text-Black pt-2'>Github Finder - Search for Github Users & Repos</h4>
              <p className='text-start text-aboutText text-lg'>Web Application</p>
        </div>

      </div>
  )
}


export default function Projects() {
  return (

    <div className="services py-20 bg-gradient-to-t from-projectBg1  to-projectBg2" id='projects'>
      <div className="top pb-10  text-center flex  flex-col justify-center items-center gap-10">
        <h1 className='text-4xl font-bold text-text-Black'>Cool Stuff I've Built</h1>
        <div className="buttons flex gap-10">
        <button className='text-white bg-button-color4 font-bold text-lg px-8 py-2 rounded-full'>Websites</button>
        <button className='text-aboutText  font-bold text-lg px-8 py-2 rounded-full'>Mobile Apps</button>
        </div>
        <p className='text-aboutText px-52 text-lg'>These are some of the websites I have built for clients and myself. I have used a variety of technologies to build these websites including JavaScript, TypeScript, HTML and CSS. I have also used a variety of frameworks and libraries including React, Next JS, Bootstrap and Tailwind CSS.</p>
      </div>
      <ProjectsLists/>
    

    </div>
  )
}
