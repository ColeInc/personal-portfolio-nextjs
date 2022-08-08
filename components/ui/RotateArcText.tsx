import React, { useEffect, useRef, useState } from "react";

const RotateArcText = () => {
    const spinnerRef = useRef<HTMLDivElement>();

    // as user scrolls assign the corresponding window.pageYOffset equal to the transform rotate css style on the arched text circle:
    useEffect(() => {
        const onScroll = () => {
            window.addEventListener("scroll", function () {
                spinnerRef.current.style.transform = "rotate(-" + window.pageYOffset / 5 + "deg)";
            });
        };
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="bottom-0 right-0 w-60 h-60 absolute" ref={spinnerRef}>
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
                <text width="100" className="fill-white text-[5.1pt]">
                    <textPath xlinkHref="#curve">COLE MCCONNELL - FRONT END DEVELOPER -</textPath>
                </text>
                <circle cx="50" cy="50" r="1" className="fill-white" />
            </svg>
        </div>
    );
};

export default RotateArcText;
