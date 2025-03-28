import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className="h-16 bg-purple-600 flex justify-between px-3 items items-center text-white">
        <div className="text-3xl logo font-bold">
          <Link href={"/"}>Sniply</Link>
        </div>
        <ul className="flex justify-between px-3 items items-center gap-4">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/shorten">
            <li>Shorten</li>
          </Link>
          <Link href="/contact">
            <li>Contact us</li>
          </Link>
          <li>
            <Link href="https://github.com/prokk360/url-shortner">
              <button className="flex bg-purple-400 p-2 shadow-lg rounded-lg font-extrabold hover:bg-purple-500">
                GitHub
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
