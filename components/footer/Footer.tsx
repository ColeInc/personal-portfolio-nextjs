import Image from "next/image";
import React from "react";
import Grid from "../layout/Grid";
import ScrollingText from "./ScrollingText";

const Footer = () => {
    return (
        <div>
            <ScrollingText />

            <Grid className="py-36 sm:py-44 xl:py-80">
                <>
                    <div className="flex justify-between items-center col-span-4 sm:col-span-8 xl:col-start-3">
                        <div className="hidden sm:flex justify-end items-end">
                            <Image
                                src="/assets/icons/noun-cat-2316865.svg"
                                alt="Stencil of cat"
                                height={150}
                                width={150}
                            />
                        </div>
                        <div className="flex flex-col sm:w-[39rem] xl:w-[42rem] text-right">
                            <p className="font-sans text-sm sm:text-[22px] xl:text-2xl font-light cursor-default !leading-[1] xl:pb-2">
                                IF YOU&rsquo;D LIKE TO CONTACT ME FOR ANY QUESTIONS OR QUERIES, FLICK ME AN EMAIL AT
                            </p>
                            <a
                                className="font-serif text-[37px] sm:text-6xl xl:text-7xl !leading-[1.1] underline underline-offset-8 decoration-2 cursor-pointer"
                                href="mailto:hello@colemcconnell.co"
                            >
                                hello@colemcconnell.co
                            </a>
                        </div>
                    </div>
                </>
            </Grid>

            <div className="flex justify-between items-end w-full bottom-0 px-6 pb-6 sm:px-12 sm:pb-12">
                <div className="flex flex-col sm:flex-row justify-between sm:w-[35vw] xl:w-[24vw] font-sans text-base sm:text-[21px] font-extralight underline underline-offset-2 sm:underline-offset-4 decoration-[.5px] sm:decoration-1">
                    <a className="pb-[3px] sm:pb-0" href="https://github.com/ColeInc">
                        GITHUB
                    </a>
                    <a className="pb-[3px] sm:pb-0" href="https://linkedin.com/in/cole-mcconnell">
                        LINKEDIN
                    </a>
                    <a className="" href="https://twitter.com/developer_cole">
                        TWITTER
                    </a>
                </div>
                <p className="font-sans text-[8px] sm:text-[10px] xl:text-xs text-gray-400">
                    &copy; 2022. COLE MCCONNELL. ALL RIGHTS RESERVED.
                </p>
            </div>
        </div>
    );
};

export default Footer;
