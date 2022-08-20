import React from "react";
import RotateArcText from "../ui/RotateArcText";

const HeroText = () => {
    return (
        <div className="sm:h-screen relative">
            <h1 className="text-transparent text-[58px] sm:text-9xl xl:!text-[204px] text-stroke-sm xl:text-stroke-md !leading-[.75] px-6 xl:px-24">
                HI I&rsquo;M COLE MCCONNELL.
                <br />A FRONT END DEVELOPER IN AUCKLAND, NEW ZEALAND.
            </h1>
            <RotateArcText
                text="COLE MCCONNELL - FRONT END DEVELOPER -"
                textSize="5.1pt"
                width="240"
                height="240"
                rotationSpeed={5}
                className="hidden sm:inline-block bottom-0 right-0 absolute"
            />
        </div>
    );
};

export default HeroText;
