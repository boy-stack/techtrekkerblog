import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

export const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10 overflow-x-auto whitespace-nowrap">
        {["All", "Technology", "Lifestyle", "Newsroom", "Wintech"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setMenu(category)}
              className={`py-1 px-4 rounded-sm ${
                menu === category ? "bg-black text-white" : ""
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>
      <div className="flex flex-wrap justify-around gap-4 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => (
            <BlogItem
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
