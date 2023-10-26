export default function First() {
    return (
      <div className="first h-screen text-center pt-48 bg-body-color" id="first">
       <h1 className="text-[95px] font-extrabold font-sans text-transparent bg-clip-text bg-gradient-to-r from-text-color from-40% via-text-color via-50%   to-text-color2 to-1%">Hi, i'm Shamar</h1>
       <h5 className="text-3xl font-medium text-text-colorBlack pb-14">I build web and mobile apps.</h5>
       <div className="buttons flex gap-5 justify-center">
        <button className="flex items-center  text-white gap-2 bg-gradient-to-r from-button-color1  to-button-color2 px-8 py-4 rounded-full ">
          <p className="text-lg">My Projects</p>
          <i class="fa-solid fa-chevron-right text-sm pt-1 left-to-right-bounce "></i>
        </button>
        <button className="flex items-center  text-white gap-2 bg-gradient-to-r from-button-color2  to-text-color2 px-8 py-4  rounded-full ">

          <p className="text-lg">Let's Talk</p>
          <i class="fa-solid fa-comment text-sm pt-1  "></i>
        </button>
       
       </div>
      </div>
    )
  }