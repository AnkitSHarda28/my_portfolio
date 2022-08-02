import Head from "next/head";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="sm:justify-center xxs:justify-center">
      <>
        <div className="flex md:flex-row sm:flex-col xxs:flex-col justify-between items-center text-white p-5 bg-gradient-to-r from-left to-right">
          <div className="text-4xl sm:text-3xl xxs:text-3xl">
            <Link href="/">&lt;Ankit Sharda/&gt;</Link>
          </div>
          <div className="lg:space-x-10 sm:space-x-10 xxs:text-sm xxs:space-x-3 lg:text-3xl sm:text-3xl flex ">
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Projects">Projects</Link>
            <Link href="/Contact">Contact</Link>
          </div>
        </div>
      </>
      <div className="lg:flex lg:text-left  justify-between lg:mx-44 lg:mt-40 sm:mt-10 xxs:mt-10 sm:text-center xxs:text-center">
        <div className="space-y-20">
          <div>
            <h1 className="lg:text-8xl sm:text-5xl xxs:text-5xl text-white">
              Hi, I am Ankit
            </h1>
          </div>
          <div>
            <span className="lg:text-4xl sm:text-3xl xxs:text-3xl bg-gradient-to-r from-left1 to-right1 text-transparent bg-clip-text">
              I am a Front-End/ Full-Stack Developer.
              <br /> Currently I am working on some
              <br /> personal projects.
            </span>
          </div>
          <div className="lg:flex space-x-10 items-center ">
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
          </div>
          <div className="animate-bounce">
            <a href="/AnkitResume.pdf" target="_blank">
              <button className="text-4xl h-20 w-64 rounded-lg  bg-gradient-to-r from-left1 to-right1">
                <h1 className="text-white">Resume</h1>
              </button>
            </a>
          </div>
        </div>
        <div className="lg:visible sm:m-10 xxs:m-10">
          <Image src={"/Homepage.svg"} width={500} height={500} alt="me" />
        </div>
      </div>
      <div className="bottom-0 fixed text-center items-center  w-screen text-white p-3 bg-gradient-to-r from-right to-left ">
        <h1>&copy; All Rights Reserved by Ankit Sharda</h1>
      </div>
    </div>
  );
}
