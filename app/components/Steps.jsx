import React from "react";
import Image from "next/image";
import "@/app/styles/steps.css";
const Steps = () => {
  return (
    //linear-gradient(to right,#3f5efb,#fc466b)
    <>
      <div className="container  mt-2">
        <div className="content px-9">
          <h2 className="text-2xl text-slate-800 md:text-3xl pt-[80px] pb-5 font-bold">
            How to Download the Videos/Images
          </h2>
          <p className="text-slate-700 text-[18px] py-8">
            <span
              className="font-semibold bg-slate-800 p-1 rounded-sm
             text-white text-xl mr-2"
            >
              Step 1:
            </span>{" "}
            First paste the vidoe link/URL in input box to download the video
          </p>
          <p className="text-slate-700 text-[18px] py-8">
            <span
              className="font-semibold bg-slate-800 p-1 rounded-sm
             text-white text-xl mr-2"
            >
              Step 2:
            </span>
            Click the adjust button to select the video resolution/quality
          </p>
          <p className="text-slate-700 text-[18px] py-8">
            <span
              className="font-semibold bg-slate-800 p-1 rounded-sm
             text-white text-xl mr-2"
            >
              Step 3:
            </span>{" "}
            Click the download the button to start the downloading
          </p>
        </div>
        <div className="image">
          <Image
            src="/instImage.webp"
            width={700}
            height={300}
            alt="Instram Images"
            className="hidden md:block md:w-[500px] md:h-[500px]  "
          />
        </div>
      </div>
    </>
  );
};

export default Steps;
