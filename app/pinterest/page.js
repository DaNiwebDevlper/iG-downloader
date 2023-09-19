"use client"
import "@/app/styles/LinkComp.css";
import Card from "../components/Card";
import { useState } from "react";

const Pinterest = () => {
  const [url, setUrl] = useState("");
  const [link, setLink] = useState("");
  const [step, setStep] = useState(1);
  const onChange = (e) => {
    setUrl(e.target.value);
  };

  const handler = async () => {
    // https://www.instagram.com/reel/Ctw8mXnApZA/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==
    console.log(url);
    const d_url = await fetch(
      "https://lazy-teal-katydid-slip.cyclic.app/mediaapi",
      {
        method: "POST",
        body: JSON.stringify({ url }),
        headers:{
          "Content-Type":"application/json",
        }
      }
    );
    const a = await d_url.json();
    setLink(a.url);
    // console.log(a);
    setStep(2);
  };
  return (
    <>
      <div className="link pt-7 flex justify-start h-[70vh] mt-[-33px]">
        <div
          className="bg-gradient-to-r from-rose-400 to-red-500 w-[100%] 
        h-[70vh] flex items-center justify-center flex-col"
        >
          <h1 className="text-gray-200 text-[25px] md:text-[40px] font-bold">
            Pinterest Downloader
          </h1>
          <p className="text-[13px] py-3 text-gray-400">
            Paste the Link below here to download the Videos/Images
          </p>
          <div className="flex">
            <input
              value={url}
              onChange={onChange}
              type="text"
              className="h-12 bg-slate-200 md:w-[500px] w-[200px] 
              outline-none px-4 rounded-tl-md rounded-bl-md"
              placeholder="Paste the URL"
            />
            <button
              onClick={handler}
              className="bg-slate-800 text-[14px] md:text-[16px] 
              hover:bg-slate-950 transition text-white px-3  
              md:px-5 py-3 rounded-tr-md rounded-br-md"
            >
              Get video
            </button>
          </div>

          <a
            target="_blank"
            href="https://www.youtube.com/"
            className="text-slate-600 pt-2 font-bold"
          >
            How to download the Videos/Images?
          </a>
        </div>
      </div>

      {/* ///////////////////////////---Video Potion---/////////////////////////////// */}
      <div>
        {step == 2 && (<div class="bg-video p-2 flex justify-center items-center flex-col">
                <h1 className="text-xl md:text-3xl font-bold pb-[20px] bg-gradient-to-r from-rose-600 to-slate-200 bg-clip-text text-transparent">Video Page</h1>
                <p className="pb-[20px]">Press the three dots and samply select the download option to download the video</p>
                <div className="w-[300px] bg-gradient-to-t from-slate-900 to-slate-600 px-[50px] rounded-lg">
                  <video class="bg-video__content" controls>
                    <source
                      src={link}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            )}
      </div>

      {/* ////////////////////////////----Card----////////////////////////////// */}

      <Card title="Download Free Pinterest Videos" color="bg-gradient-to-r from-rose-600 to-slate-200 bg-clip-text text-transparent"
        src="/pinterest.jpg" />
    </>
  );
}


export default Pinterest;
