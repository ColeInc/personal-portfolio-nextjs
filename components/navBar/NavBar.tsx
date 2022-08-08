import Link from "next/link";
import React from "react";

const NavBar = () => {
    return (
        <div className="w-full flex justify-between items-center px-12 pt-12 pb-5 bg-transparent text-white sticky top-0 z-50">
            <Link href="/">
                <button className="text-lg font-sans cursor-pointer link link-underline">COLE MCCONNELL</button>
            </Link>
            <div className="w-36 flex justify-between items-center">
                <Link href="/work">
                    <button className="link link-underline font-sans">WORK</button>
                </Link>
                <p className="cursor-default">&#8226;</p>
                <Link href="/about">
                    <button className="link link-underline font-sans">ABOUT</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
