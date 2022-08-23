import React from "react";
import TechStack from "../../models/TechStack";
import TechStackItem from "./TechStackItem";

const techStackData: TechStack[] = [
    {
        name: "Front End",
        techList: ["css", "html", "javascript", "react.js", "redux", "typescript", "gatsby.js", "prismic CMS"],
    },
    {
        name: "Back End",
        techList: ["css", "html", "javascript", "react.js", "redux", "typescript", "gatsby.js"],
    },
    {
        name: "Tools",
        techList: ["git", "html", "javascript", "webpack", "grunt", "gulp"],
    },
];

const TechStack = () => {
    return (
        <div className="mx-6 sm:mx-16 xl:mx-[8%]">
            <h1 className="text-transparent text-[54px] sm:text-[96px] xl:text-[120px] text-stroke-sm leading-[.80] sm:leading-[.73] xl:leading-[.75] pb-8 md:pb-12">
                TECH STACK & TOOLS
            </h1>

            <>
                {techStackData.map(techStackItem => {
                    return <TechStackItem data={techStackItem} key={techStackItem.name} />;
                })}
            </>
        </div>
    );
};

export default TechStack;
