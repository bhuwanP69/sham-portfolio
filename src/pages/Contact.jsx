import React from 'react'

export default function Contact() {
  return (
    <div className="contact text-center pt-20" id='contact'>
      <div className="top flex flex-col gap-10 py-20">
        <h2 className='text-4xl font-bold  text-text-Black'>Have any Questions? Reach out.</h2>
        <p className='text-lg text-aboutText font-sans '>Send me a
           <span className=' relative text-button-color4 cursor-pointer group pb-1 px-1'>tweet
          {/* underline  */}
           <span className=" absolute block left-0 right-0 bottom-0  h-[0.75px] bg-gradient-to-r bg-button-color4 scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
           
           </span>
         or you can email me at:
         <span className=' relative text-button-color4 cursor-pointer group pb-1 px-1'>shamar.webdev@gmail.com
         {/* underline  */}
           <span className=" absolute block left-0 right-0 bottom-0  h-[0.75px] bg-gradient-to-r bg-button-color4 scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>

           </span></p>
      </div>
      {/* line */}
      <div className="border-t h-[1px] bg-gray-200">

      </div>
      <div className="bottom pb-10">
        <div className="icons flex gap-16 items-center justify-center py-1 h-28 ">
          <i class="fa-brands fa-twitter hover:text-text-color cursor-pointer hover:pb-1 pt-1 text-3xl text-aboutText transition-all duration-500 "></i>
               <i class="fa-brands fa-github hover:text-text-color pt-1 text-3xl text-aboutText hover:pb-1 cursor-pointer transition-all duration-500 "></i>
            <i class="fa-brands fa-linkedin hover:text-text-color pt-1 text-3xl text-aboutText hover:pb-1 cursor-pointer transition-all duration-500 "></i>
        </div>
          <p className='text-aboutText'>Copyright © 2021 - 2023 Shamar Morrison. All Rights Reserved.</p>
      </div>
    </div>
  )
}
