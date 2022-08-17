import Image from "next/image";
import React from "react";
import Grid from "../layout/Grid";

const LandingParagraph = () => {
    return (
        <div className="h-[50rem] flex flex-col justify-center">
            <Grid>
                <>
                    <h1 className="col-start-2 text-4xl sm:text-5xl text-transparent text-stroke-sm">ABOUT</h1>
                    <p className="col-start-4 col-span-6 text-lg sm:text-3xl leading-[1.2] sm:leading-9 font-sans font-light">
                        HI THERE I&rsquo;M COLE, A FRONT END DEVELOPER CURRENTLY LIVING IN AUCKLAND, NEW ZEALAND. WITH
                        NEARLY 3 YEARS OF DEVELOPMENT EXPERIENCE, I LOVE TAKING THE SKILLS, EXPERIENCE AND KNOW-HOW
                        I&rsquo;VE ACQUIRED AND PUTTING THEM TO USE BY CREATING AMAZING DESIGNS AND EXPERIENCES.
                    </p>
                    {/* <div className="col-start-4 xl:col-start-10 xl:col-span-2 flex justify-end items-end">
                        <Image
                            src="/assets/icons/noun-cat-2316865.svg"
                            alt="Stencil of cat"
                            // layout="fill"
                            // objectFit="cover"
                            height={150}
                            width={150}
                        />
                    </div> */}
                    <div className="col-start-4 xl:col-start-10 xl:col-span-2 flex justify-end items-end">
                        <div className="w-20 h-20 sm:w-40 sm:h-40 relative">
                            <Image
                                src="/assets/icons/noun-cat-2316865.svg"
                                alt="Stencil of cat"
                                layout="fill"
                                objectFit="contain"
                                // height={150}
                                // width={150}
                            />
                        </div>
                    </div>
                </>
            </Grid>
        </div>
    );
};

export default LandingParagraph;
