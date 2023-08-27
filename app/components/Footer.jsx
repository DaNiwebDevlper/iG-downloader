import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-800 h-[200px] flex items-center justify-center flex-col">
        <Link href="/">
          <Image
            src="/igLogo.png"
            width={150}
            height={100}
            alt="Logo"
            className="w-[120px] md:w-[180px]"
          />
        </Link>
        <p className="py-3 text-sky-600 text-[12px] md:text-xl">
          &copy; 2023 iG Downloader. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
