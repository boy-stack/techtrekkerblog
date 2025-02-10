"use client";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

export const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async (paramsId) => {
    const response = await axios.get("/api/blog", {
      params: {
        id: paramsId,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    (async () => {
      const resolvedParams = await params;
      fetchBlogData(resolvedParams.id);
    })();
  }, [params]);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo_TechTrekker}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto border border-black shadow-[-7px_7px_0px_#000000]"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
            <Image
              className="mx-auto mt-6 border border-white rounded-full"
              src={data.authorImg}
              width={60}
              height={60}
              alt=""
            />
          </h1>
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <p>{data.description}</p>
        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex gap-4">
            <FacebookShareButton url={window.location.href}>
              <Image
                src={assets.facebook_icon}
                width={50}
                alt=""
                className="rounded-full hover:scale-110 transition-transform duration-300"
              />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href}>
              <Image
                src={assets.twitter_icon}
                width={50}
                alt=""
                className="rounded-full hover:scale-110 transition-transform duration-300"
              />
            </TwitterShareButton>
            <LinkedinShareButton url={window.location.href}>
              <Image
                src={assets.googleplus_icon}
                width={50}
                alt=""
                className="rounded-full hover:scale-110 transition-transform duration-300"
              />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
