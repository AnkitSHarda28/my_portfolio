import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen justify-between ">
      <div>
        <Navbar />
        <div className="lg:mx-44 lg:mt-40 xxs:text-center xxs:mt-10 sm:text-center sm:mt-10 h-auto">
          <h1 className="lg:text-7xl sm:text-5xl xxs:text-5xl mb-5">
            <a
              href="https://ankitsharda28.github.io/contactMe/"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </h1>
        </div>
        <div className="text-center lg:mt-20 xxs:mt-10">
          <h1 className="lg:text-5xl md:text-3xl xxs:text-3xl mb-10">
            Let Us Get In Touch
          </h1>
          <span className="lg:text-2xl md:text-xl xxs:text-xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text ">
            I am looking for a job as a Front-end/
            <br />
            Full-stack Developer. You can contact me <br />
            on my socials. Hit me up if you have any <br />
            questions, want a collaboration or just
            <br /> play a game of LUDO. I’ll try to get back
            <br /> to you as soon as I can.
          </span>
          <h1 className="lg:text-5xl md:text-3xl xxs:text-3xl mb-10 mt-10">
            Here are my Socials
          </h1>
          <div className="flex space-x-10 items-center justify-center p-5 ">
            <a
              href="https://www.linkedin.com/in/ankit-sharda-7878541a2/"
              className="hover:animate-pulse"
            >
              <Image
                src={"/Linkedin.svg"}
                width={70}
                height={70}
                alt="linkdin"
              />
            </a>
            <a
              href="https://github.com/AnkitSHarda28"
              className="hover:animate-pulse"
            >
              <Image src={"/Github.svg"} width={70} height={70} alt="github" />
            </a>
            <a
              href="https://twitter.com/AnkitSharda19"
              className="hover:animate-pulse"
            >
              <Image
                src={"/Twitter.svg"}
                width={70}
                height={70}
                alt="twitter"
              />
            </a>
            <a
              href="https://www.instagram.com/ankit_sharda28/"
              className="hover:animate-pulse"
            >
              <Image src={"/Insta.svg"} width={80} height={80} alt="insta" />
            </a>
            <a
              href="mailto:Ankitsharda68@gmail.com"
              className="hover:animate-pulse"
            >
              <Image src={"/Gmail.svg"} width={70} height={70} alt="mail" />
            </a>
            <a
              href="https://www.facebook.com/ankit.sharda.77/"
              className="hover:animate-pulse"
            >
              <Image src={"/facebook.svg"} width={70} height={70} alt="fb" />
            </a>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
