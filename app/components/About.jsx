import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <>
      <div className="container flex justify-between h-screen items-center px-4 md:px-[80px]">
        <div className="content w-[250px] md:w-[450px] pr-5">
          <h2 className="md:text-3xl text-xl font-bold text-slate-800 py-3">About</h2>
          <p className="text-slate-600 text-[12px] md:text-xl">
            iG Downloader is a website where you can download the different type
            of vidoes and images in high quailty. I provide the fast downloading
            speed. You can downoad your favorite in few seconds or mintus. It is
            also suitable for downloading long videos. To download the vidoes or
            images samply paste the link upper box and press the download button
            the start downloading of your video.
          </p>
          <Link href="/contact">
            <button className="bg-slate-800 text-[12px] text-slate-200 py-2 px-4 mt-4 rounded-md md:text-xl">
              Contact
            </button>
          </Link>
        </div>
        <div className="image">
          <Image
            src="/about.jpg"
            width={450}
            height={450}
            alt="About"
            className="rounded-2xl w-[200px] h-[150px] md:w-[450px] md:h-[300px] "
          />
        </div>
      </div>
    </>
  );
};

export default About;
