import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="lg:mx-44 lg:mt-40 h-auto xxs:mt-10">
        <h1 className="lg:text-7xl sm:text-5xl xxs:text-5xl mb-5">Projects</h1>
      </div>

      <div className="lg:flex justify-between lg:mx-44 lg:mt-20 items-center  xxs:mt-10">
        <div>
          <h1 className="lg:text-5xl sm:text-2xl xxs:text-2xl mb-5">
            Ankit Cinemas <br />
            (Full-Stack Development)
          </h1>
          <span className="text-3xl xxs:text-xl sm:text-3xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text">
            Development and testing of a personal project- the Movie App
            <br />
            <a
              href="https://movie-app-liart.vercel.app/"
              className="text-white text-xl ml-4"
            >
              *movie-app-liart.vercel.app👈
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
        <a href="https://movie-app-liart.vercel.app/" className="">
          <Image
            src={"/MovieApp.png"}
            width={600}
            height={350}
            alt="movieapp"
          />
        </a>
      </div>

      <div className="lg:flex justify-between lg:mx-44 lg:mt-20 items-center  xxs:mt-10">
        <div>
          <h1 className="lg:text-5xl sm:text-2xl xxs:text-2xl mb-5">
            Pounders Burger
            <br /> (Developing and Testing Lead)
          </h1>
          <span className="text-3xl xxs:text-xl sm:text-3xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text">
            Development and testing of a client’s burger shop website
            <br />
            <a
              href="https://pounders.com.au/"
              className="text-white text-xl ml-4"
            >
              pounders-burger.web.app👈
            </a>
            <br />• Designed and created the prototypes of the entire website
            using Figma. <br />• Used CSS, HTML5, JavaScript and React framework
            for the website development. <br />• Used Jira, and confluence for
            project management and major <br />
            discussions. <br />• Used google firebase for creating the Log-in
            and Sign-up
            <br /> pages.
          </span>
        </div>
        <a href="https://pounders.com.au/" className="">
          <Image
            src={"/Pounders.png"}
            width={700}
            height={350}
            alt="pounders"
          />
        </a>
      </div>
      <div className="lg:flex justify-between lg:mx-44 lg:mt-20 items-center  xxs:mt-10">
        <div>
          <h1 className="lg:text-5xl sm:text-2xl xxs:text-2xl mb-5">
            MomoWest <br />
            (Front-end Development)
          </h1>
          <span className="text-3xl xxs:text-xl sm:text-3xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text">
            Development and testing of a client’s Nepalese restaurant
            <br /> website
            <br />
            <a
              href="https://momos-ankitsharda28.vercel.app/"
              className="text-white text-xl ml-4"
            >
              momos-ankitsharda28.vercel.app👈
            </a>
            <br />• Designed and created the prototypes of the entire <br />
            website using Figma. <br />• Used Next.js for the website
            development <br />• Used TailwindCSS for implementing the design
            <br />• Used Vercel to deploy the website globally.
          </span>
        </div>
        <a href="https://momos-ankitsharda28.vercel.app/" className="">
          <Image
            src={"/MomoWest.png"}
            width={600}
            height={350}
            alt="momowest"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}
