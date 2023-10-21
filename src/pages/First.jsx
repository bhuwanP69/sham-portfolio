export default function First() {
    return (
      <div className="first h-screen pt-24 bg-body-color" id="first">
       <h1>Hi, i'm Shamar</h1>
       <h5>I build web and mobile apps.</h5>
       <div className="buttons flex">
        <button className="flex items-center  text-white gap-2 bg-gradient-to-r from-button-color1  to-button-color2 px-5 py-3 rounded-full ">
          <p>My Projects</p>
          <i class="fa-solid fa-chevron-right text-sm pt-1 left-to-right-bounce "></i>
        </button>
        <button className="flex items-center  text-white gap-2 bg-gradient-to-r from-button-color1  to-button-color2 px-5 py-3 rounded-full ">
          <p>My Projects</p>
          <i class="fa-regular fa-comment text-sm pt-1  "></i>
        </button>
       
       </div>
      </div>
    )
  }