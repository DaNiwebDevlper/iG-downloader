"use client";
import { useState } from "react";
import '@/app/styles/LinkComp.css'

const Instagram = () => {
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
      "https://ueso.000webhostapp.com/media/instagram",
      {
        method: "POST",
        body: JSON.stringify({ url }),
      }
    );
    const a = await d_url.json();
    setLink(a.url);
    console.log(a.url);
    setStep(2);
  };
  return (
    <>
      <div className="link pt-7 flex justify-start h-screen mt-[-33px]">
        <div
          className={`bg-gradient-to-l from-[#3f5efb] to-[#fc466b] w-[100%] h-[70vh] flex items-center justify-center flex-col`}
        >
          <h1 className="text-gray-200 text-[25px] md:text-3xl font-bold">
            Instagram Downloader
          </h1>
          <p className="text-[13px] py-3 text-gray-400">
            Paste the Link below here to download the Videos/Images
          </p>
          <div className="outer">
            <input
              value={url}
              onChange={onChange}
              type="text"
              className="h-12 bg-slate-200"
              placeholder="Paste the URL"
            />
            <button
              onClick={handler}
              className="bg-slate-800 hover:bg-slate-950 transition text-white px-5 py-3"
            >
              Get video
            </button>
          </div>

          <a
            target="_blank"
            href="https://www.youtube.com/"
            className="text-sky-500 pt-2"
          >
            How to download the Videos/Images?
          </a>
        </div>
      </div>

      <div className="">
        {step == 2 &&
          link.map((videourl) => {
            return (
              <div class="bg-video p-2 flex justify-center items-center flex-col">
                <h1 className="text-xl md:text-3xl font-bold pb-[20px] bg-gradient-to-l from-pink-600 to-blue-700 bg-clip-text text-transparent">Video Page</h1>
                <p className="pb-[20px]">Press the three dots and samply select the download option to download the video</p>
                <div className="w-[300px] bg-gradient-to-t from-pink-600 to-blue-700 px-[50px] rounded-lg">
                  <video class="bg-video__content" controls>
                    <source
                      src={
                        "https://ueso.000webhostapp.com/media/instagram/" +
                        videourl
                      }
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Instagram;
