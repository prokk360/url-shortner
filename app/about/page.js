import Image from "next/image";
import React from "react";
const about = () => {
  return (
    <div>
      <div className="flex">
        <Image
          className="mix-blend-darken flex justify-end"
          src={"/about_us.jpg"}
          alt="An image of vector"
          width={500}
          height={400}
        />
        <p className="p-10 my-20 font-bold text-2xl grid grid-cols-1 h-[20vh]">
        Welcome to Sniply—your gateway to a cleaner, more efficient online
        presence. Our tool exists to transform lengthy, unwieldy URLs into
        sleek, memorable links designed for effortless sharing. We believe that
        every link you share matters, and we’re here to ensure that your digital
        footprint is as streamlined as it is functional.
      </p>
      </div>
      {/* <b className="px-1 pt-2 text-xl font-extrabold ">About Us</b> */}

      
      {/* <div className="flex justify-end"> */}

      {/* </div> */}
      <b className="px-2 text-xl font-extrabold">Our Mission</b>
      <p className="p-3 font-medium">
        At Sniply, we’re driven by a simple idea: simplify online communication.
        We know that every character counts in today’s fast-paced digital world.
        By condensing long URLs into compact forms, we help you save space,
        boost clarity, and enhance your brand’s image—all while maintaining a
        high standard of reliability and security.
      </p>
      <b className="px-2 text-xl font-extrabold">What We Do</b>
      <p className="p-3 font-medium">
        <i className="font-semibold">Effortless Link Transformation:</i> Convert
        your long URLs into neat, shareable links in just a few clicks.
      </p>
      <p className="p-3 font-medium">
        <i className="font-semibold">User-Friendly Interface:</i> Enjoy a
        distraction-free, intuitive experience designed with you in mind.
      </p>
      <p className="p-3 font-medium">
        <i className="font-semibold">Insightful Analytics:</i> Monitor your link
        performance with real-time tracking and detailed insights.
      </p>
      <p className="p-3 font-medium">
        <i className="font-semibold">Robust Security:</i> Trust that your data
        is handled with the utmost care and protection.
      </p>
      <b className="px-2 text-xl font-extrabold">Our Story</b>
      <p className="p-3 font-medium">
        Born from a passion to cut through the digital clutter, Sniply started
        as a personal project aimed at overcoming the frustrations of clunky,
        hard-to-share links. Over time, we evolved into a full-fledged service
        focused on empowering creators, entrepreneurs, and everyday users alike.
        Every feature we build is rooted in our commitment to help you share
        your world with ease and precision.
      </p>

      <b className="px-2 text-xl font-extrabold">Why Choose Us?</b>
      <p className="p-3 font-medium">
        In an era where simplicity is the new sophistication, our URL shortener
        is more than just a tool—it’s a partner in your digital journey. Whether
        you’re a seasoned marketer, a blogger, or someone just looking to tidy
        up your personal links, our platform is built to empower you. We take
        pride in offering a seamless experience, backed by the promise of
        innovation, reliability, and continuous improvement.
      </p>

      <span className="p-3 font-medium flex">
        Thank you for choosing Sniply-one short link at a time.
      </span>
    </div>
  );
};

export default about;
