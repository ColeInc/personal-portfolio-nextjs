import React from "react";
import SelectedWorksItem from "./SelectedWorksItem";
import SelectedWorks from "../../models/SelectedWorks";
import Link from "next/link";

const projectData: SelectedWorks[] = [
    {
        name: "Mosa - Twitter Management Dashboard",
        techStack: "REACT.JS, REDUX, TYPESCRIPT, SCSS, NODE.JS, EXPRESS.JS",
        imageArray: ["dashboard_screenshot_1.png", "dashboard_screenshot_2.png", "dashboard_screenshot_1.png"],
    },
    {
        name: "Beludia Chrome Extension",
        techStack: "CSS, HTML, JAVASCRIPT, CHROME API",
        imageArray: ["dashboard_screenshot_1.png", "dashboard_screenshot_2.png", "dashboard_screenshot_1.png"],
    },
    {
        name: "Mosa - Twitter Management Dashboard",
        techStack: "REACT.JS, REDUX, TYPESCRIPT, SCSS, NODE.JS, EXPRESS.JS",
        imageArray: ["dashboard_screenshot_1.png", "dashboard_screenshot_2.png", "dashboard_screenshot_1.png"],
    },
    {
        name: "Beludia Chrome Extension",
        techStack: "CSS, HTML, JAVASCRIPT, CHROME API",
        imageArray: ["dashboard_screenshot_1.png", "dashboard_screenshot_2.png", "dashboard_screenshot_1.png"],
    },
];

const SelectedWorks = () => {
    return (
        <div className="flex justify-center">
            <div className="py-36 sm:py-64 xl:py-80 mx-6 sm:mx-[6%] xl:mx-[8%] xl:max-w-[130rem]">
                <h1 className="text-transparent text-[48px] sm:text-8xl xl:text-10xl text-stroke-sm xl:text-stroke-md !leading-[.75] pb-4 sm:pb-5 xl:pb-6">
                    SELECTED WORK
                </h1>
                <div className="hover:highlight-top-border">
                    {projectData.map((item, index) => {
                        return <SelectedWorksItem key={index} index={index + 1} data={item} />;
                    })}
                </div>
                <div className="flex justify-end">
                    <Link href="/work">
                        <div className="flex items-center group pt-3 sm:pt-4 xl:pt-6 group hover:text-secondary-hover-color">
                            <button className="font-sans text-base text-secondary-color sm:text-xl xl:text-xl mr-3 sm:mr-4 xl:mr-6 group-hover:text-secondary-hover-color">
                                VIEW ALL PROJECTS
                            </button>
                            <svg
                                className="w-[80px] sm:w-[124px]"
                                height="8"
                                viewBox="0 0 124 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M123.354 4.35355C123.549 4.15829 123.549 3.84171 123.354 3.64645L120.172 0.464466C119.976 0.269204 119.66 0.269204 119.464 0.464466C119.269 0.659728 119.269 0.976311 119.464 1.17157L122.293 4L119.464 6.82843C119.269 7.02369 119.269 7.34027 119.464 7.53553C119.66 7.7308 119.976 7.7308 120.172 7.53553L123.354 4.35355ZM0 4.5H123V3.5H0V4.5Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SelectedWorks;
