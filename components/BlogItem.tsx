'use client';
import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa6";

type BlogItemProps = {
  title: string;
  description: string;
  id: number;
  image: StaticImageData;
  category: string;
};
const BlogItem: React.FC<BlogItemProps> = ({
  title,
  description,
  image,
  id,
  category,
}) => {
  return (
    <div
      className="max-w-[330px]
               sm:max-w-[300px]
                bg-white 
                border border-black
                  hover:shadow-md"
      key={id}
    >
      <Image
        src={image}
        width={"340"}
        height={"340"}
        alt="items.image"
        style={{ objectFit: "cover", padding: "8px" }}
      />
      <p
        className="ml-5 mt-5 px-4
                inline-block
                rounded-lg
               bg-black text-white text-sm"
      >
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {" "}
          {title}
        </h5>
        <p className="mb-3 text-small tracking-tight text-gray-700">
          {" "}
          {description}
        </p>
      </div>
      <div
        className="inline-flex  ml-5 px-5
                  
                 items-center gap-2 font-semibold  hover:bg-black hover:text-white"
      >
        Read More
        <FaArrowRight />
      </div>
    </div>
  );
};

export default BlogItem;
