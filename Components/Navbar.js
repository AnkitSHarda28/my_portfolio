import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center text-white p-5 bg-gradient-to-r from-left to-right">
        <div className="lg:text-4xl sm:text-3xl xxs:text-3xl">
          <Link href="/">&lt;Ankit Sharda/&gt;</Link>
        </div>
        <div className="lg:space-x-10 sm:space-x-10 xxs:space-x-5  lg:text-3xl sm:text-3xl">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </>
  );
}
