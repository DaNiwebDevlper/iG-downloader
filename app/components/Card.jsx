import React from "react";
import Image from "next/image";
const Card = ({ title, color, src }) => {
  return (
    <>
      <div
        className="container w-[100%] h-[100vh] flex flex-col-reverse 
      md:flex-row md:justify-between  justify-center items-center md:px-10"
      >
        <div className="content md:w-[500px] w-[500px] py-5">
          <h1 className={`text-xl md:text-3xl font-bold ${color}  py-3`}>{title}</h1>
          <p className="text-[14px] md:text-xl text-slate-700">
            To download the Videos and Images, simply paste the url of videos or
            image that you want to download. It provide the high speed
            downloading. You can downoad your favorite in few seconds or mintus.
            It is also suitable for downloading long videos.
          </p>
        </div>
        <div className="image">
          <Image src={src} width={500} height={500} alt="Tiktok"
          className="md:w-[550px] w-[300px]" />
        </div>
      </div>
    </>
  );
};

export default Card;
