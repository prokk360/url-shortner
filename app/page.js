"use client";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl font-bold ${poppins.className}`}>
            The best URL shortner!
          </p>
          <p className="px-25">
            We are the most straight forward URL shortner in the world. Most of
            the URL shortners will track you or ask you to give your details for
            login. We understand your needs and hence we have created this URL
            shortner.
          </p>
          <li className="flex gap-3">
            <Link href="/shorten">
              <button className="flex bg-purple-500 p-2 shadow-lg rounded-lg font-bold hover:bg-purple-400">
                Try now
              </button>
            </Link>
          </li>
        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            src={"/vector.jpg"}
            alt="An image of vector"
            fill={true}
          />
        </div>
      </section>

      <div className="flex justify-center">
        <Image
          className="mix-blend-darken"
          src={"/homepage.png"}
          alt="An image of vector"
          height={1000}
          width={1000}
        />
      </div>
      <footer class="bg-purple-600 text-white">
        <div class="container mx-auto text-center">
          <p class="text-sm p-0.5">&copy; 2025 Sniply. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
