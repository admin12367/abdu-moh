import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          {/* Uncomment and use this if you have a logo */}
          {/* <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> */}
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Abdu{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Moh{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-3 mb-2">
        {Socials.map((social) => (
          <Link key={social.name} href={social.link} aria-label={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              width={37}
              height={37}
              className="transition-transform transform hover:scale-110" // Optional hover effect
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
