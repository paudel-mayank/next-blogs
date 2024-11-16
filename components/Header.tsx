import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="py-2 px-5 md:px-12 lg:px-29 ">
      <div className="flex justify-between items-center">
        <Image
          src={logo}
          width={120}
          alt="logo of the site"
          priority={false}
          className="w-[100px] sm:w-auto"
        />
        <button
          className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-solid border-2 
          shadow-lg"
        >
          Get Started
          <FaArrowRight />
        </button>
      </div>
      <div className="text-center mt-4 mb-20">
        <h1 className="text-2xl sm:text-4xl">Latest Blogs</h1>
        <p className="mt-6 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam rem, architecto ipsum enim fugit corporis dignissimos cupiditate! Dicta, omnis.{" "}
        </p>
      </div>
    </div>
  );
};

export default Header;
