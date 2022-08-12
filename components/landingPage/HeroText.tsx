import React from "react";
import RotateArcText from "../ui/RotateArcText";

const HeroText = () => {
    return (
        <div className="h-screen relative">
            <h1 className="text-transparent text-20xl text-stroke-lg leading-[.75] px-24">
                HI I&rsquo;M COLE MCCONNELL.
                <br />A FRONT END DEVELOPER IN AUCKLAND, NEW ZEALAND.
            </h1>
            <RotateArcText />
        </div>
    );
};

export default HeroText;
