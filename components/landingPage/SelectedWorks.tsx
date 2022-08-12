import React from "react";
import SelectedWorksItem from "./SelectedWorksItem";
import SelectedWorks from "../../models/SelectedWorks";
import Link from "next/link";

const projectData: SelectedWorks[] = [
    {
        name: "Mosa - Twitter Management Dashboard",
        techStack: "REACT.JS, REDUX, TYPESCRIPT, SCSS, NODE.JS, EXPRESS.JS",
    },
    {
        name: "Beludia Chrome Extension",
        techStack: "CSS, HTML, JAVASCRIPT, CHROME API",
    },
    {
        name: "Mosa - Twitter Management Dashboard",
        techStack: "REACT.JS, REDUX, TYPESCRIPT, SCSS, NODE.JS, EXPRESS.JS",
    },
    {
        name: "Beludia Chrome Extension",
        techStack: "CSS, HTML, JAVASCRIPT, CHROME API",
    },
];

const SelectedWorks = () => {
    return (
        <div className="py-48 mx-[8%]">
            <h1 className="text-transparent text-10xl text-stroke-md leading-[.75] pb-6">SELECTED WORK</h1>
            <div className="hover:highlight-top-border">
                {projectData.map((item, index) => {
                    return <SelectedWorksItem key={index} index={index + 1} data={item} />;
                })}
            </div>
            <div className="flex justify-end">
                <Link href="/work">
                    <div className="flex items-center group py-6 hover:text-gray-300">
                        <button className="font-sans text-xl mr-6">VIEW ALL PROJECTS</button>
                        <svg width="124" height="8" viewBox="0 0 124 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M123.354 4.35355C123.549 4.15829 123.549 3.84171 123.354 3.64645L120.172 0.464466C119.976 0.269204 119.66 0.269204 119.464 0.464466C119.269 0.659728 119.269 0.976311 119.464 1.17157L122.293 4L119.464 6.82843C119.269 7.02369 119.269 7.34027 119.464 7.53553C119.66 7.7308 119.976 7.7308 120.172 7.53553L123.354 4.35355ZM0 4.5H123V3.5H0V4.5Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SelectedWorks;