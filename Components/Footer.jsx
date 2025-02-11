import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <div className="animate-logo">
        <Image
          src={assets.logo_TechTrekker}
          alt="TechTrekker Logo"
          width={120}
        />
      </div>
      <p className="text-sm text-white">
        All right reserved. Copyright @TechTrekker
      </p>
      <div className="flex gap-2">
        <div className="hover:scale-110 transition-transform">
          <Image
            src={assets.facebook_icon}
            alt="facebook"
            width={40}
            onClick={() => handleShare("facebook")}
            className="cursor-pointer"
          />
        </div>
        <div className="hover:scale-110 transition-transform">
          <Image
            src={assets.twitter_icon}
            alt="twitter"
            width={40}
            onClick={() => handleShare("twitter")}
            className="cursor-pointer"
          />
        </div>
        <div className="hover:scale-110 transition-transform">
          <Image
            src={assets.googleplus_icon}
            alt="googleplus"
            width={40}
            onClick={() => handleShare("googleplus")}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
