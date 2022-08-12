import React from "react";

const ScrollingText = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap inline-block max-w-full">
            <div className="flex flex-nowrap infinite-scroll text-transparent text-[19rem] text-stroke-sm leading-[.75] hover:infinite-scroll-hovered">
                <h1 className="px-7">GET IN TOUCH.</h1>
                <h1 className="px-7">GET IN TOUCH.</h1>
            </div>
        </div>
    );
};

export default ScrollingText;
