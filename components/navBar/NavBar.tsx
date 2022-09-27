import React, { useState, useCallback, useContext } from "react";
import { CursorContext } from "../ui/Cursor";
import CatSvg from "../ui/CatSvg";
import Link from "next/link";
import Theme from "../../models/Theme";
import { themeColors } from "../../styles/themeColors";

const NavBar = () => {
    const [currentTheme, setCurrentTheme] = useState(1);
    const [, setCursor] = useContext(CursorContext);

    const toggleCursor = useCallback(() => {
        setCursor(prevState => !prevState);
    }, [setCursor]);

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
        document.documentElement.style.setProperty("--cat-hover-color", themeColors[currentTheme].catHoverColor);
        document.documentElement.style.setProperty(
            "--footer-copyright-color",
            themeColors[currentTheme].footerCopyrightColor
        );
    };

    return (
        <div
            className="w-full flex justify-between items-center px-6 pt-6 sm:px-12 sm:pt-6 bg-transparent sticky top-0 z-50"
            // style={{
            //     backgroundImage:
            //         "url(https://thumbs.dreamstime.com/b/beautiful-multicolored-bokeh-lights-holiday-glitter-background-christmas-new-year-birthday-celebration-high-resolution-image-133585052.jpg)",
            // }}
        >
            <Link href="/">
                <button
                    className="text-xs sm:text-lg font-sans cursor-pointer link link-underline"
                    onMouseEnter={toggleCursor}
                    onMouseLeave={toggleCursor}
                >
                    COLE MCCONNELL
                </button>
            </Link>
            <div className="flex justify-between gap-3 items-center text-xs sm:text-base font-sans select-none">
                <div
                    className="w-[62px] h-[62px] hidden sm:flex justify-center items-center hover:bg-cat-hover-color rounded-full cursor-pointer transition ease-in-out"
                    onClick={catHandler}
                    onMouseEnter={toggleCursor}
                    onMouseLeave={toggleCursor}
                >
                    <div className="w-[42px] h-[42px] -scale-x-100 hover:text-secondary-color hover:fill-secondary-color">
                        <CatSvg />
                    </div>
                </div>

                <Link href="/work">
                    <button
                        className="link link-underline ml-3"
                        onMouseEnter={toggleCursor}
                        onMouseLeave={toggleCursor}
                    >
                        WORK
                    </button>
                </Link>
                <p className="cursor-default">&#8226;</p>
                <Link href="/about">
                    <button className="link link-underline" onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>
                        ABOUT
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
