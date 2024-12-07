import React from "react";
import Link from "next/link";

export default function Navbar(){
    return(
        <div>
        <div className="w-[367px] h-[24px] gap-[48px] justify-between ">
            <Link className="ml-[23px]" href="/">Home</Link>
            <Link className="ml-[23px]" href="/Contact">Contact</Link>
            <Link className="ml-[23px]" href="/About">About</Link>
            {/* <Link className="ml-[23px]" href="/SignUp">Sign Up</Link> */}
          </div>
        </div>
    )
}