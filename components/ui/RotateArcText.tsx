import React, { useEffect, useRef, useState } from "react";

const RotateArcText: React.FC<{
    text: string;
    textSize: string; // must pass width in Tailwind CSS styling format. This is to allow for dynamic text sizing via media queries!
    width: string; // must pass width in Tailwind CSS styling format. E.g. w-60 md:w-[200px] xl:w-[350px]
    height: string; // must pass width in Tailwind CSS styling format. E.g. h-60 md:h-[200px] xl:h-[350px]
    rotationSpeed: number;
    className?: string;
}> = props => {
    const spinnerRef = useRef<HTMLDivElement>();
    const { rotationSpeed } = props;

    // as user scrolls, assign the corresponding window.pageYOffset equal to the transform rotate css style on the arched text circle:
    useEffect(() => {
        const onScroll = () => {
            window.addEventListener("scroll", function () {
                spinnerRef.current.style.transform = "rotate(-" + window.pageYOffset / rotationSpeed + "deg)";
            });
        };
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [rotationSpeed]);

    return (
        <div
            className={`${props.width} ${props.height} ${props.className && props.className}`}
            // style={{ width: `${props.width}px`, height: `${props.height}px` }}
            ref={spinnerRef}
        >
            <svg viewBox="0 0 100 100">
                <path
                    id="curve"
                    className="fill-transparent"
                    d="
                    M 25, 50
                    a 25,25 0 1,1 50,0
                    a 25,25 0 1,1 -50,0
                    "
                />
                <text
                    width="100"
                    className={`fill-white ${props.textSize}`}
                    // style={{ fontSize: props.textSize }}
                >
                    <textPath xlinkHref="#curve">{props.text}</textPath>
                </text>
                <circle cx="50" cy="50" r="1" className="fill-white" />
            </svg>
        </div>
    );
};

export default RotateArcText;
