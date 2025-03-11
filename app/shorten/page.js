"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
const shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-purple-100 rounded-lg mx-auto max-w-lg my-16 p-10 gap-4">
      <h1 className="text-3xl font-extrabold flex justify-center items-center py-3">
        Generate your short URLs
      </h1>
      <div className="flex flex-col justify-center items-center bg-purple-100">
        <input
          className="bg-purple-50 px-4 py-2 rounded-md"
          type="text"
          value={url}
          placeholder="Enter your URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <input
          className="bg-purple-50 px-4 py-2 my-3 rounded-md"
          type="text"
          value={shorturl}
          placeholder="Enter your desired URL"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />
        <button
          onClick={generate}
          className="flex bg-purple-500 p-3 shadow-lg rounded-lg font-bold text-white"
        >
          Generate
        </button>
      </div>
      <br />
      <br />
      {generated && (
        <>
          <span className="font-bold p-5">Your Link : </span>
          <code>
            <Link className="p-2" target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default shorten;
