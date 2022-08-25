import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Theme from "../../models/Theme";
import { themeColors } from "../../styles/themeColors";

const NavBar = () => {
    const [currentTheme, setCurrentTheme] = useState(1);

    const catHandler = () => {
        // If we're at the last theme in our themeColors list, set it back to index 0, otherwise set the theme to next one in our list:
        currentTheme == themeColors.length - 1
            ? setCurrentTheme(0)
            : setCurrentTheme(s => {
                  return s + 1;
              });

        // Update our real CSS variables globally:
        document.documentElement.style.setProperty(
            "--main-background-color",
            themeColors[currentTheme].mainBackgroundColor
        );
        document.documentElement.style.setProperty("--secondary-color", themeColors[currentTheme].secondaryColor);
        document.documentElement.style.setProperty("--text-stroke-color", themeColors[currentTheme].secondaryColor);
        document.documentElement.style.setProperty(
            "--secondary-hover-color",
            themeColors[currentTheme].secondaryHoverColor
        );
    };
    return (
        <div className="w-full flex justify-between items-center px-6 pt-6 sm:px-12 sm:pt-6 bg-transparent sticky top-0 z-50">
            <Link href="/">
                <button className="text-xs sm:text-lg font-sans cursor-pointer link link-underline">
                    COLE MCCONNELL
                </button>
            </Link>
            <div className="flex justify-between gap-3 items-center text-xs sm:text-base font-sans">
                <div
                    className="w-[62px] h-[62px] pl-3 flex justify-center items-center hover:bg-cat-hover-color rounded-full cursor-pointer transition ease-in-out"
                    onClick={catHandler}
                >
                    <div className="w-[50px] h-[50px] relative mr-3 -scale-x-100">
                        <Image
                            src="/assets/icons/noun-cat-2316865.svg"
                            alt="Stencil of cat"
                            layout="fill"
                            objectFit="contain"
                            className="hover:opacity-8"
                        />
                    </div>
                </div>

                <Link href="/work">
                    <button className="link link-underline ml-3">WORK</button>
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
