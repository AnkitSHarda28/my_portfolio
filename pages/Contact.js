import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="mx-44 mt-40 h-auto">
        <h1 className="lg:text-7xl md:text-5xl mb-5">Contact</h1>
      </div>
      <div className="text-center mt-20">
        <h1 className="lg:text-5xl md:text-3xl mb-10">Let's Get In Touch</h1>
        <span className="lg:text-2xl md:text-xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text ">
          I am looking for a job as a Front-end/
          <br />
          Full-stack Developer. You can contact me <br />
          on my socials. Hit me up if you have any <br />
          questions, want a collaboration or just
          <br /> play a game of LUDO. I’ll try to get back
          <br /> to you as soon as I can.
        </span>
        <h1 className=" lg:text-5xl md:text-3xl mb-10 mt-10">
          Here are my Socials
        </h1>
        <div className="flex space-x-10 items-center justify-center ">
          <a
            href="https://www.linkedin.com/in/ankit-sharda-7878541a2/"
            className="hover:animate-pulse"
          >
            <img src="/Linkedin.svg" />
          </a>
          <a
            href="https://github.com/AnkitSHarda28"
            className="hover:animate-pulse"
          >
            <img src="/Github.svg" />
          </a>
          <a
            href="https://twitter.com/AnkitSharda19"
            className="hover:animate-pulse"
          >
            <img src="/Twitter.svg" />
          </a>
          <a
            href="https://www.instagram.com/ankit_sharda28/"
            className="hover:animate-pulse"
          >
            <img src="/Insta.svg" />
          </a>
          <a
            href="mailto:Ankitsharda68@gmail.com"
            className="hover:animate-pulse"
          >
            <img src="/Gmail.svg" />
          </a>
          <a
            href="https://www.facebook.com/ankit.sharda.77/"
            className="hover:animate-pulse"
          >
            <img src="/Facebook.svg" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
