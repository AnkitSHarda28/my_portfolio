import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="mx-44 mt-40 h-auto">
        <h1 className="lg:text-7xl md:text-5xl mb-5">Projects</h1>
      </div>

      <div className="flex justify-between mx-44 mt-20 items-center">
        <div>
          <h1 className="lg:text-5xl md:text-2xl mb-5">
            Ankit Cinemas <br />
            (Full-Stack Development)
          </h1>
          <span className="lg:text-3xl md:text-xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text">
            Development and testing of a personal project- the Movie App
            <br />
            <a
              href="https://movie-app-liart.vercel.app/"
              className="text-white text-xl ml-4"
            >
              (movie-app-liart.vercel.app) 👈
            </a>
            <br />• Used Next.js for the website development <br />• Responsive
            Design to make it mobile-friendly <br />• Used TailwindCSS for
            implementing the design <br />• Designed and created the prototypes
            of the entire website
            <br /> using Figma. <br />• Used external Api from themoviedb.org to
            update the latest
            <br /> movies into my Movie application
          </span>
        </div>
        <a
          href="https://movie-app-liart.vercel.app/"
          className="lg:visible sm:invisible"
        >
          <img src="/MovieApp.png" width={600} />
        </a>
      </div>

      <div className="flex justify-between mx-44 mt-52 items-center">
        <div>
          <h1 className="lg:text-5xl md:text-2xl mb-5">
            Pounders Burger
            <br /> (Developing and Testing Lead)
          </h1>
          <span className="lg:text-3xl md:text-xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text">
            Development and testing of a client’s burger shop website
            <br />
            <a
              href="https://pounders.com.au/"
              className="text-white text-xl ml-4"
            >
              (pounders-burger.web.app) 👈
            </a>
            <br />• Designed and created the prototypes of the entire website
            using
            <br /> Figma. <br />• Used CSS, HTML5, JavaScript and React
            framework for the website
            <br /> development. <br />• Used Jira, and confluence for project
            management and major <br />
            discussions. <br />• Used google firebase for creating the Log-in
            and Sign-up
            <br /> pages.
          </span>
        </div>
        <a href="https://pounders.com.au/" className="lg:visible sm:invisible">
          <img src="/Pounders.png" width={600} />
        </a>
      </div>
      <div className="flex justify-between mx-44 mt-52 items-center mb-52">
        <div>
          <h1 className="lg:text-5xl md:text-2xl mb-5">
            MomoWest <br />
            (Front-end Development)
          </h1>
          <span className="lg:text-3xl md:text-xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text">
            Development and testing of a client’s Nepalese restaurant
            <br /> website
            <br />
            <a
              href="https://momos-ankitsharda28.vercel.app/"
              className="text-white text-xl ml-4"
            >
              (momos-ankitsharda28.vercel.app) 👈
            </a>
            <br />• Designed and created the prototypes of the entire <br />
            website using Figma. <br />• Used Next.js for the website
            development <br />• Used TailwindCSS for implementing the design
            <br />• Used Vercel to deploy the website globally.
          </span>
        </div>
        <a
          href="https://momos-ankitsharda28.vercel.app/"
          className="lg:visible sm:invisible"
        >
          <img src="/MomoWest.png" width={600} />
        </a>
      </div>
      <Footer />
    </div>
  );
}
