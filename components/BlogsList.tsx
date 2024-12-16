"use client";
import blogs from "@/assets/blogs";
import React from "react";
import BlogItem from "./BlogItem";
const menus = ["All", "Technology", "Startups", "LifeStyle"];
//
const BlogsList = () => {
  const [menu, setMenu] = React.useState<string>("All");
  return (
    <div>
      <div className="flex justify-center gap-6  mb-10 ">
        {menus.map((item) => {
          return (
            <button
              key={item}
              onClick={() => setMenu(item)}
              className={
                item === menu
                  ? `bg-activeButton text-white py-1 px-4 rounded-sm`
                  : `bg-inactiveButton text-black py-1 px-4 rounded-sm`
              }
            >
              {item}
            </button>
          );
        })}
      </div>
      <div
        className="flex flex-wrap
          justify-around gap-1 gap-y-10 mb-16 xl:mx-24"
      >
        {blogs.map((blog) => {
          return <BlogItem key={blog.id} {...blog} />;
        })}
      </div>
    </div>
  );
};

export default BlogsList;
