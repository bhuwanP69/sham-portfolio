import React, { useState } from 'react'

export  function ProjectsLists() {
  const project1 = './src/images/project1.jpg'
  return (
    <div className="projects">
        <div className="project1">
          <div className="img relative w-96">
          <img src={project1} alt="project1" />
          <div className=" firstProject absolute top-0 hidden  text-white gap-2 bg-gradient-to-r from-button-color2  to-text-color2 h-44 w-96">
            <h5>
            Stream and download Movies, TV Shows & Anime and view info such as trailers, cast, photos, etc.
            </h5>
            <h5>Built With:</h5>
            <h5>HTML CSS JavaScript React JS Web API</h5>
          </div>
          </div>
          
          <h4 className='text-start'>Horizon - Stream Movies, TV Shows & Anime</h4>
              <p className='text-start'>Web Application</p>
        </div>

      </div>
  )
}


export default function Projects() {
  return (

    <div className="services h-screen pt-20 bg-gradient-to-t from-projectBg1  to-projectBg2" id='projects'>
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
