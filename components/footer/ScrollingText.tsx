import React from "react";

const ScrollingText = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap inline-block max-w-full">
            <div className="flex flex-nowrap  text-transparent text-[65px] sm:text-[180px] xl:text-[19rem] text-stroke-sm xl:text-stroke-md !leading-[.75] hover:infinite-scroll-hovered select-none">
                <h1 className="px-2 sm:px-5 xl:px-7 infinite-scroll">GET IN TOUCH.</h1>
                <h1 className="px-2 sm:px-5 xl:px-7 infinite-scroll">GET IN TOUCH.</h1>
            </div>
        </div>
    );
};

export default ScrollingText;
