
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="">
      <nav className="w-full bg-slate-800 fixed top-0 left-0 right-0 z-10 shadow-lg">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-2 px-3">
              {/* LOGO */}
              <Link href="/" >
                <Image
                src="/igLogo.png"
                width={150}
                height={100}
                alt="Logo"
                className="w-[100px] md:w-[130px]"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto  md:flex ">
              <li
                  className=" text-[16px] text-white py-4 md:px-6 text-center border-b-2 
                md:border-b-0  hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent"
                >
                  <Link href="/facebook" onClick={() => setNavbar(!navbar)}>
                    
                  </Link>
                </li>
                <li
                  className=" text-[16px] text-white py-4 md:px-6 text-center border-b-2 
                md:border-b-0  hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent"
                >
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Instagram
                  </Link>
                </li>
                <li
                  className=" text-[16px] text-white py-4 md:px-6 text-center border-b-2 
                md:border-b-0  hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent"
                >
                  <Link href="/facebook" onClick={() => setNavbar(!navbar)}>
                    FaceBook
                  </Link>
                </li>
                <li
                  className=" text-[16px] text-white py-4 px-6 text-center  border-b-2 md:border-b-0 
                 hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent"
                >
                  <Link href="/youtube" onClick={() => setNavbar(!navbar)}>
                    YouTube
                  </Link>
                </li>
                <li
                  className=" text-[16px] text-white py-4 px-6 text-center  border-b-2 md:border-b-0 
                 hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent"
                >
                  <Link href="/tiktok" onClick={() => setNavbar(!navbar)}>
                    TikTok
                  </Link>
                </li>
                <li
                  className=" text-[16px] text-white py-4 px-6 text-center  border-b-2 md:border-b-0 
                 hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent"
                >
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
