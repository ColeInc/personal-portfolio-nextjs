import Link from "next/link";
import React from "react";

const NavBar = () => {
    return (
        <div className="w-full flex justify-between items-center px-6 pt-6 pb-16 sm:px-12 sm:pt-12 bg-transparent text-white sticky top-0 z-50">
            <Link href="/">
                <button className="text-xs sm:text-lg font-sans cursor-pointer link link-underline">
                    COLE MCCONNELL
                </button>
            </Link>
            <div className="w-[6.5rem] xl:w-36 flex justify-between items-center text-xs sm:text-base font-sans">
                <Link href="/work">
                    <button className="link link-underline ">WORK</button>
                </Link>
                <p className="cursor-default">&#8226;</p>
                <Link href="/about">
                    <button className="link link-underline">ABOUT</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
