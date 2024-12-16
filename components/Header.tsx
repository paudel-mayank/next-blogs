'use client';
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import logo from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa6";
import { z } from "zod";

export const newsLetterEmail = z.string().email("Invalid Email Addess");

const Header = () => {
  const [email, setEmail] = useState<string>("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //this will check for if zodSchema is satisfied
    const validation = newsLetterEmail.safeParse(email);
    // if false validation - {success: false}
    // if true validation - {success: true, data :email }
  };

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
      <div className="text-center mt-4 mb-10">
        <h1 className="text-2xl sm:text-4xl">Latest Blogs</h1>
        <p className="mt-6 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam rem, architecto ipsum enim fugit corporis dignissimos cupiditate! Dicta, omnis.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex justify-between max-w-[500px] 
          scale-75 sm:scale-100 
          mx-auto mt-6 border
           shadow-[-4px_4px_4px_4px_#000000]"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
            placeholder="Enter your email"
            className="pl-4 outline-none "
          />
          <button
            type="submit"
            className="py-4 px-6 hover:bg-gray-600 hover:text-white"
          >
            Subscribe{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
