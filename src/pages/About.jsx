export default function About() {
  const img1 = './src/images/tech.svg'
  const img2 = './src/images/design.svg'
    return (
      <main>

      <div className="about h-screen flex justify-between" id="about">
        <div className="left">
          <h3>About Me</h3>
          <p className="w-96">I love to design and build engaging user interfaces in both web and mobile apps. I was a Graphic Designer before I started to learn about the world of software development, since then I have been practicing everyday, building, breaking and then fixing what I broke. I learn by doing and I love to learn and try new technologies. I find making websites and mobile apps very fun, and I'm always up to try and get better at it.</p>
          <div className="last">
            <h5>Check me out</h5>
            <div class="border-t border-gray-500 w-5"></div>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>


          </div>

        </div>
        <div className="right">
          <div className="first">
            <img src={img1} alt="img 1" className="w-52" />
            <h4>Design Toolkit</h4>
            <p>Adobe PhotoShop</p>
            <p>Adobe Illustrator</p>
            <p>Adobe XD</p>
            <p>Sketch</p>
          </div>
          <div className="second"></div>

        </div>
       
      </div>
      </main>
    )
  }