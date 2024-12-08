"use client";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black text-white text-sm py-2">
      <div className="container mx-auto flex justify-between items-center px-1">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <FaCheck />
          <span className="font-semibold">Summer Sale:</span> Free Delivery on
          Orders Over $50!
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <select className="bg-[#000000d0] text-white border-none outline-none">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
          <FaCheck />
          {/* Buttons */}
          <button className="hover:underline p-2 rounded transition duration-200">
            FAQs
          </button>
          <button className="hover:underline p-2 rounded transition duration-200">
            Help
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center px-[300px] py-[30px] gap-[798px] w-[1920px] h-[84px] bg-slate-300">
        <div className="w-[166px] h-[40px] mt-[20] " ></div>
        <h1 className="w-[118px] h-[31px] text-4xl relative left-[-70rem]  text-[#272343]">
          Comforty
        </h1>
      </div>
      <div className="hidden sm:flex justify-between items-center sm:px-12 md:px-28 h-[74px] bg-white ">
        
        {/* navlinks */}
        <ul className="flex justify-center items-center gap-8">
          <Link href="/">
            <li className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]">
              Home
            </li>
          </Link>
          <Link href="/pages/shop">
            <li className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]">
              Shop
            </li>
          </Link>
          <Link href="/pages/product">
            <li className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]">
              Product
            </li>
          </Link>
          <Link href="/pages/product-page">
            <li className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]">
              Pages
            </li>
          </Link>
          <Link href="/pages/about">
            <li className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]">
              About
            </li>
          </Link>
        </ul>

        {/* contact no: */}
        <div className=" w-[168px] h-[15px]flex justify-center gap-2">
          <h1 className=" text-[#636270] text-[14px] font-inter">Contact:(808) 555-0111 </h1>
          <p className="text-[#272343] text-[14px] font-semibold font-Inter"></p>
        </div>
      </div>
  
    </div>
  );
}


// text-xs: Extra small text
// text-sm: Small text
// text-base: Default (16px)
// text-lg: Larger than base
// text-xl: Extra large
// text-2xl: 2x larger than text-xl
// text-3xl: 3x larger than text-xl
// text-4xl: 4x larger than text-xl
// text-5xl: 5x larger than text-xl
// text-6xl: 6x larger than text-xl
// text-7xl: 7x larger than text-xl
