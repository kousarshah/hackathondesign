"use client";

import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <div className="absolute w-[1927px] h-[418px] left-[-12px] top-[4480px] bg-white shadow-lg border-t-4 border-gray-200">
      <footer className="bg-white py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="col-span-1">
              <h2 className="text-lg font-extrabold mb-4 text-[#272343]">
                <Image src={"/imgs/logoicon.png"} alt="pic" width={20} height={21} className=" mr-10" />
                Comforty
              </h2>
              <p className="w-[200px] h-[72px] text-[#272343]">
                
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum.Cras egestas purus
              </p>
              
              <div className="w-[206px] h-[38px] mt-20 mb-15 flex bg-[#ffffff]">
                <div className="w-[38px] h-[38px]">
                    <Link href={"https://www.facebook.com/"}> <FaFacebook /></Link>
                </div>
                <div className="w-[38px] h-[38px] flex-row">
                <Link href={"https://en.wikipedia.org/wiki/Twitter"}><TiSocialTwitter /></Link>
                
                </div>
                <div className="w-[38px] h-[38px] ">
                <Link href={"https://www.instagram.com/"}><FaInstagram /> </Link>
                
                </div>
                <div className="w-[38px] h-[38px]">
                <Link href={"https://www.youtube.com/"}> <IoLogoYoutube /></Link>
                
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <h3 className="text-sx font-light mb-4 text-[#9A9CAA]">
                CATEGORY
              </h3>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Sofa
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Armchair
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Wing Chair
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Desk Chair
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    wooden Chair
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Park Bench
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-lg font-light mb-4  text-[#9A9CAA]">
                SUPPORT
              </h3>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Help & Support
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-lg font-light mb-4 text-[#9A9CAA]">
                NEWSLETTER
              </h3>
              <form onSubmit={handleSubmit} className="subscribe-form">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 flex-20"
                  required
                />
                <p className="w-[300px] h-[46px]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam tincidunt erat enim.
                </p>
              </form>
            </div>
            <div>
              <button
                type="submit"
                className= "mt-11 mb-8 bg-blue-500 text-[#FFFFFF] rounded-md p-2">
                Subscribe
              </button>
            </div>
          </div>
          <div className=" w-[341px] h-[21px] mt-8">
            <p>
              &copy; {new Date().getFullYear()} @ 2021 - Blogy - Designed & Develop <Link href={"/"}  className="text-[#5f87b4]">by Zakirsoft</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;


