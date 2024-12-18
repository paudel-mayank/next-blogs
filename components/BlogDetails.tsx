"use client";
import React, { useEffect } from "react";
import blogs from "@/assets/blogs";
import logo from "@/assets/logo.png";
import Image from "next/image";
import author from "@/assets/author.jpg";
import { FaArrowRight } from "react-icons/fa6";
const BlogDetails = ({ slug }: { slug: string }) => {
  const [data, setData] = React.useState({});
  const fetchData = async () => {
    const findData = blogs.find((item) => item.id == Number(slug));

    setData(findData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={logo}
          width={100}
          alt="logo of the site"
          height={100}
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
      <div className="text-center my`-20">
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
          {data?.title}
        </h1>
        <Image
          src={author}
          className="mx-auto mt-6 border border-white rounded-full object-cover"

          width={60}
          height={60}
          alt=""
        />
        <p className="mt-1 pb-2 text-lg max-w-[7]"> {data?.author}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
