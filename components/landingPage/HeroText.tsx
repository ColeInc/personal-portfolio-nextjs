import React from "react";
import RotateArcText from "../ui/RotateArcText";

const HeroText = () => {
    return (
        <div className="overflow-hidden">
            <h1 className="text-transparent text-[12vw] sm:text-[11vw] xl:!text-[10.5vw] text-stroke-sm xl:text-stroke-md !leading-[.75] px-6 sm:px-14 xl:px-24 pt-14 sm:pt-6 xl:pt-5">
                HI I&rsquo;M COLE MCCONNELL.
                <br />A FRONT END DEVELOPER IN AUCKLAND, NEW ZEALAND.
            </h1>
            <div className="sm:h-screen w-full absolute top-0">
                <RotateArcText
                    text="COLE MCCONNELL - FRONT END DEVELOPER -"
                    textSize="text-[6.8px]"
                    width="w-[100px] xl:w-[130px]"
                    height="h-[100px] xl:h-[130px]"
                    rotationSpeed={5}
                    className="hidden sm:inline-block portrait:hidden bottom-0 right-6 sm:right-10 sm:bottom-10 xl:right-12 xl:bottom-12 absolute"
                />
            </div>
        </div>
    );
};

export default HeroText;
