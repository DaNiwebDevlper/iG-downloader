import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <>
      <div className="container flex md:justify-between h-screen items-center px-4 
      md:px-[80px] flex-col-reverse md:flex-row my-5 justify-center">
        <div className="content  md:w-[450px] ">
          <h2 className="md:text-3xl text-2xl font-bold py-3 bg-gradient-to-b from-pink-600 to-blue-600 bg-clip-text text-transparent">About</h2>
          <p className="text-slate-600 text-[12px] md:text-xl px-4">
            iG Downloader is a website where you can download the different type
            of vidoes and images in high quailty. I provide the fast downloading
            speed. You can downoad your favorite in few seconds or mintus. It is
            also suitable for downloading long videos. To download the vidoes or
            images samply paste the link upper box and press the download button
            the start downloading of your video.
          </p>
          <Link href="/contact">
            <button className="bg-gradient-to-l from-pink-600 to-blue-600 text-[12px] text-slate-200 py-2 px-4 mt-4 rounded-md md:text-xl">
              Contact
            </button>
          </Link>
        </div>
        <div className="image">
          <Image
            src="/about2.jpg"
            width={500}
            height={500}
            alt="About"
            className="rounded-2xl w-[350px] h-[250px] md:w-[450px] md:h-[350px] shadow-lg "
          />
        </div>
      </div>
    </>
  );
};

export default About;
