import React from 'react'
import Card from '../components/Card'

const YouTube = () => {
  return (
    <>
      <div className="link flex justify-start h-[70vh] ">
        <div
          className="bg-gradient-to-tl from-red-700 to-red-400 w-[100%] 
        h-[70vh] flex items-center justify-center flex-col mt-[-36px]"
        >
          <h1 className="text-gray-200 text-[25px] md:text-3xl font-bold">
            YouTube Downloader
          </h1>
          <p className="text-[13px] py-3 text-gray-400">
            Paste the Link below here to download the Videos/Images
          </p>
          <div className="outer">
            <input
              // value={url}
              // onChange={onChange}
              type="text"
              className="h-12 bg-slate-200"
              placeholder="Paste the URL"
            />
            <button
              // onClick={handler}
              className="bg-slate-800 hover:bg-slate-950 transition text-white px-5 py-3"
            >
              Get video
            </button>
          </div>

          <a
            target="_blank"
            href="https://www.youtube.com/"
            className="text-red-300 pt-2 font-bold"
          >
            How to download the Videos/Images?
          </a>
        </div>
      </div>
      <Card title="Download Free YouTube Videos" src="/youtube1.png"
        color="bg-gradient-to-r from-red-500 to-slate-200 bg-clip-text text-transparent" />

    </>
  )
}

export default YouTube