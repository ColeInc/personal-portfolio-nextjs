import Image from "next/image";
import React from "react";
import Grid from "../layout/Grid";
import ScrollingText from "./ScrollingText";

const Footer = () => {
    return (
        <div>
            <ScrollingText />

            <Grid className="py-56">
                <>
                    <div className="flex justify-between items-center col-start-3 col-span-8">
                        <div className="flex justify-end items-end">
                            <Image
                                src="/assets/icons/noun-cat-2316865.svg"
                                alt="Stencil of cat"
                                height={150}
                                width={150}
                            />
                        </div>
                        <div className="flex flex-col w-[42rem]">
                            <p className="font-sans text-2xl font-light cursor-default leading-[1] pb-2">
                                IF YOU&rsquo;D LIKE TO CONTACT ME FOR ANY QUESTIONS OR QUERIES, FLICK ME AN EMAIL AT
                            </p>
                            <a
                                className="font-serif text-7xl underline underline-offset-8 decoration-2 cursor-pointer"
                                href="mailto:hello@colemcconnell.co"
                            >
                                hello@colemcconnell.co
                            </a>
                        </div>
                    </div>
                </>
            </Grid>

            <div className="flex justify-between items-center w-full bottom-0 p-12">
                <div className="flex justify-between w-[22vw] font-sans font-light underline underline-offset-4 decoration-1">
                    <a className="" href="https://github.com/ColeInc">
                        GITHUB
                    </a>
                    <a className="" href="https://linkedin.com/in/cole-mcconnell">
                        LINKEDIN
                    </a>
                    <a className="" href="https://twitter.com/developer_cole">
                        TWITTER
                    </a>
                </div>
                <p className="font-sans text-xs text-gray-400">&copy; 2022. COLE MCCONNELL. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;
