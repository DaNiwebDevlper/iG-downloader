import React from "react";
import Image from "next/image";
import Link from "next/link";
const LogoCloud = () => {
  return (
    <>
      <div className="h-[88vh] flex flex-col items-center justify-center">
        <div className=" w-[80%] min-h-[70%] md:max-h-[60%] bg-gray-100 rounded-2xl flex flex-col items-center py-7">
          <h2 className="font-bold text-xl bg-gradient-to-l from-pink-600 to-blue-600 bg-clip-text text-transparent md:text-4xl">
            OUR SERVICES
          </h2>
          <p className="text-[10px] py-3 md:text-[16px]">
            It download the videos/images in high quality. it support fast
            downloading
          </p>

          <div className="flex gap-5 py-5 md:gap-7 justify-center min-h-[500px] flex-wrap">
            <div
              className="w-[100px] h-[100px] md:w-[200px] md:h-[150px]
               bg-gray-100 flex items-center justify-center rounded-lg 
          shadow-md hover:bg-slate-200"
            >
              <Link href="/youtube">
                <Image
                  src="/youtube.png"
                  width={150}
                  height={150}
                  alt="Instram Logo"
                  className="w-[100px]"
                />
              </Link>
            </div>

            <div
              className=" w-[100px] h-[100px] md:w-[200px] md:h-[150px]
               bg-gray-100 flex items-center justify-center rounded-lg 
          shadow-md hover:bg-slate-200"
            >
              <Link href="/facebook">
                <Image
                  src="/facebook.png"
                  width={100}
                  height={150}
                  alt="Instram Logo"
                  className="w-[60px]"
                />
              </Link>
            </div>

            <div
              className=" w-[100px] h-[100px] md:w-[200px] md:h-[150px]
               bg-gray-100 flex items-center justify-center rounded-lg 
          shadow-md hover:bg-slate-200"
            >
              <Link href="/">
                <Image
                  src="/instagramLogo.png"
                  width={110}
                  height={100}
                  alt="Instram Logo"
                  className="w-[70px] "
                />
              </Link>
            </div>

            <div
              className=" w-[100px] h-[100px] md:w-[200px] md:h-[150px]
               bg-gray-100 flex items-center justify-center rounded-lg 
          shadow-md hover:bg-slate-200"
            >
              <Link href="/tiktok">
                <Image
                  src="/tiktok.png"
                  width={170}
                  className="w-[100px]"
                  height={150}
                  alt="Instram Logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoCloud;
