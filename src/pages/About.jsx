export default function About() {
  const img1 = './src/images/tech.svg'
  const img2 = './src/images/design.svg'
    return (
      <main>

      <div className="about h-screen flex justify-between px-20 pt-20" id="about">
        <div className="left ">
          <h3 className="text-4xl font-bold text-text-Black">About Me</h3>
          <p className="w-[410px] text-aboutText text-lg pt-5 ">I love to design and build engaging user interfaces in both web and mobile apps. I was a Graphic Designer before I started to learn about the world of software development, since then I have been practicing everyday, building, breaking and then fixing what I broke. I learn by doing and I love to learn and try new technologies. I find making websites and mobile apps very fun, and I'm always up to try and get better at it.</p>
          <div className="last flex items-center gap-5 h-20">
            <h5 className="text-text-Black font-semibold">Check me out</h5>
            <div class="border-t border-gray-500 w-9 mt-1"></div>
            <i class="fa-brands fa-twitter hover:text-text-color cursor-pointer hover:pb-1 pt-1 text-xl text-aboutText transition-all"></i>
            <i class="fa-brands fa-github hover:text-text-color pt-1 text-xl text-aboutText hover:pb-1 cursor-pointer transition-all "></i>
            <i class="fa-brands fa-linkedin hover:text-text-color pt-1 text-xl text-aboutText hover:pb-1 cursor-pointer transition-all "></i>


          </div>

        </div>
        <div className="right flex gap-10">
          <div className="first group overflow-hidden relative  border rounded-lg border-borderColor h-[385px] w-[270px] pt-12 flex flex-col text-center items-center shadow-lg duration-500 transform transition-transform hover:-translate-y-2  ">
          <span className=" absolute left-0 right-0 bottom-0 h-1  underline bg-gradient-to-r from-underPurple  via-underIndigo to-underBlue scale-x-0 transform  transition-transform ease-in-out duration-1000 origin-left  group-hover:scale-x-100"></span>
            <img src={img1} alt="img 1" className="w-20" />
            <h4 className="text-2xl font-bold text-text-Black pt-5 tracking-wider">Design Toolkit</h4>
            <div className="text text-aboutText text-lg tracking-wide pt-5">
            <p>Adobe PhotoShop</p>
            <p>Adobe Illustrator</p>
            <p>Adobe XD</p>
            <p>Sketch</p>
            </div>
          </div>

          <div className="second group border relative overflow-hidden rounded-lg border-borderColor h-[400px] w-[270px] pt-12 flex flex-col text-center items-center shadow-lg duration-500 transform transition-transform hover:-translate-y-2   ">
          <span className=" absolute left-0 right-0 bottom-0 h-1  underline bg-gradient-to-r from-underPurple  via-underIndigo to-underBlue scale-x-0 transform  transition-transform ease-in-out duration-1000 origin-left  group-hover:scale-x-100"></span>
            <img src={img2} alt="img2" className="w-20" />
            <h4 className="text-2xl font-bold text-text-Black pt-5 tracking-wider">Dev Toolkit</h4>
            <div className="text text-aboutText text-lg tracking-wide pt-5">
            <p>Typescript</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>React Native</p>
            <p>Next.js</p>
            </div>
          </div>
          </div>

        </div>
       
      </main>
    )
  }