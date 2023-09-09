import React from "react";
import Image from "next/image";
const Card = ({ title, color, src }) => {
  return (
    <>
      <div
        className="container w-[100%] h-[100vh] flex flex-col-reverse 
      md:flex-row md:justify-between items-center md:px-10 md:mt-1 mt-[50px]"
      >
        <div className="content md:w-[500px] max-w-[450px] py-5">
          <h1 className={`text-xl md:text-3xl font-bold ${color}  py-3`}>{title}</h1>
          <p className="text-[14px] md:text-xl text-slate-700">
            To download the Videos and Images, simply paste the url of videos or
            image that you want to download. It provide the high speed
            downloading. You can downoad your favorite in few seconds or mintus.
            It is also suitable for downloading long videos.
          </p>
        </div>
        <div >
          <Image src={src} width={700} height={700} alt="Tiktok"
          className="md:w-[400px] w-[400px] rounded-lg " />
        </div>
      </div>
    </>
  );
};

export default Card;
