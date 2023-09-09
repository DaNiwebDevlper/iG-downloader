import "@/app/styles/LinkComp.css";


const FaceBook = () => {
  return (
    <>
      <div className="link pt-7 flex justify-start h-[70vh]">
        <div
          className="bg-gradient-to-b from-blue-700 to-sky-400 w-[100%] 
        h-[70vh] flex items-center justify-center flex-col"
        >
          <h1 className="text-gray-200 text-[25px] md:text-[30px] font-bold">
            FaceBook Downloader
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
            className="text-slate-600 pt-2 font-bold"
          >
            How to download the Videos/Images?
          </a>
        </div>
      </div>
      {/* <div className="">
        {step == 2 &&
          link.map((videourl) => {
            return (
              <div class="bg-video p-2 flex justify-center items-center ">
                <div className="w-[300px] bg-slate-900 px-[50px] rounded-lg">
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
      </div> */}
    </>
  );
};

export default FaceBook;
