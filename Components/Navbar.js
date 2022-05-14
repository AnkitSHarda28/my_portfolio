import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-screen flex lg:justify-between items-center text-white p-5 bg-gradient-to-r from-left to-right">
        <div className="text-4xl">
          <Link href="/">&lt;Ankit Sharda/&gt;</Link>
        </div>
        <div className="space-x-10  text-3xl sm:flex-row">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </>
  );
}
