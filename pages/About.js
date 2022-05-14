import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="lg:mx-44 lg:mt-40 h-auto xxs:mt-10">
        <h1 className="lg:text-7xl sm:text-5xl xxs:text-5xl mb-5">About</h1>
        <div className="text-center xxs:text-left ">
          <span className="text-3xl xxs:text-2xl sm:text-3xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text ">
            Hi There! My name is Ankit Sharda. I am a Software Engineer from
            Melbourne Australia 🇦🇺 .<br /> Currently, I am currently working on
            some personal projects such as an E-commerce
            <br /> Website, MovieApp, and NewsApp. I have also contributed to
            several open source projects and built
            <br /> some of my own which are all available on my GitHub.
          </span>
        </div>
      </div>

      <div className="lg:flex justify-between lg:mx-44 lg:mt-20 items-center  xxs:mt-10">
        <div>
          <h1 className="lg:text-5xl sm:text-2xl xxs:text-2xl mb-5">
            Software Engineering💻
          </h1>
          <span className="text-3xl xxs:text-xl sm:text-3xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text">
            Ever since my childhood I have been interested in Tehnology
            <br /> and alway wanted to learn how the Technology works. And so
            <br /> I knew that i had to pursue computers when I grew up. I
            <br />
            managed to get admission and pursue undergraduate in
            <br /> Software Engineering. I got hooked to Javascript when I
            <br />
            started oding and was fasinated about the eosystem.
            <br /> ReactJS is what i love to work with
          </span>
        </div>
        <a>
          <Image
            src={"/AboutSoftware.svg"}
            width={400}
            height={400}
            alt="computer"
          />
        </a>
      </div>

      <div className="lg:flex justify-between lg:mx-44 lg:mt-20 items-center  xxs:mt-10">
        <div>
          <h1 className="lg:text-5xl sm:text-2xl xxs:text-2xl mb-5">
            Basketball 🏀
          </h1>
          <span className="text-3xl xxs:text-xl sm:text-3xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text">
            Atively pursued basketball for more than 9 years. I have
            <br /> been playing it since year 2007 till date. I played
            <br /> Nationals Under 17 in year 2017 (Represented Punjab).
          </span>
        </div>
        <a>
          <Image
            src={"/AboutBasketball.svg"}
            width={400}
            height={400}
            alt="basketball"
          />
        </a>
      </div>

      <div className="lg:flex justify-between lg:mx-44 lg:mt-20 items-center  xxs:mt-10">
        <div>
          <h1 className="lg:text-5xl sm:text-2xl xxs:text-2xl mb-5">
            Other Interests 🌍📷📉
          </h1>
          <span className="text-3xl xxs:text-xl sm:text-3xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text">
            I love travelling and planes. My first flight to Italy
            <br /> made me fall in love with travelling. I love to travel in
            <br />
            different Airlines ✈️ and experience different aircrafts. I
            <br />
            love recording good moments and love watching them after
            <br /> couple of years. Another thing i enjoy is the Crypto
            <br /> Market. I love to learn about how the crypto world works.
          </span>
        </div>
        <a>
          <Image
            src={"/AboutTravelling.svg"}
            width={400}
            height={400}
            alt="travel"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}
