import React from "react";
import Image from "next/image";
const contact = () => {
  return (
    <div>
      <div className="flex justify-end">
        <p className=" flex font-extrabold text-2xl pt-30 m-25 justify-items-center col-end-2">
          Contact Us At Sniply,
          We’d love to hear from you! Whether you have a question, need assistance, or want to share feedback about our URL shortener, we’re here to help.
        </p>

        <Image
          className="mix-blend-darken flex justify-end"
          src={"/contact_us.jpg"}
          alt="An image of vector"
          width={500}
          height={500}
        />
      </div>
      <p className="font-bold flex  text-xl justify-center ">
        Email: goswamikrrish67@gmail.com
      </p>
      <p className="font-bold flex  text-xl justify-center">
        Phone: 9608594360
      </p>
      <p className="font-extrabold flex justify-center p-16 text-xl">
        We're always happy to hear from our users and improve your experience.
        Your input matters to us!
      </p>
    </div>
  );
};

export default contact;
