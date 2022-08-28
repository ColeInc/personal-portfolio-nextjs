import React from "react";
import TechStack from "../../models/TechStack";
import TechStackItem from "./TechStackItem";

const techStackData: TechStack[] = [
    {
        name: "Front End",
        techList: [
            "css",
            "html",
            "javascript",
            "react.js",
            "redux",
            "typescript",
            "react native",
            "next.js",
            "prismic CMS",
            "gatsby.js",
            "SASS/SCSS",
            "Tailwind CSS",
        ],
    },
    {
        name: "Back End",
        techList: [
            "node.js",
            "express.js",
            "Apollo GraphQL",
            "Python",
            "databases (MySQL, Oracle, MongoDB)",
            "Jest",
            "Zod",
            "OAuth",
        ],
    },
    {
        name: "Tools",
        techList: ["git", "jwt", "figma", "webpack"],
    },
];

const TechStack = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-10 sm:mx-16 xl:mx-[8%] xl:max-w-[96rem]">
                <h1 className="text-transparent text-[54px] sm:text-[96px] xl:text-[120px] text-stroke-sm leading-[.80] sm:leading-[.73] xl:leading-[.75] pb-8 md:pb-12">
                    TECH STACK & TOOLS
                </h1>

                <>
                    {techStackData.map(techStackItem => {
                        return <TechStackItem data={techStackItem} key={techStackItem.name} />;
                    })}
                </>
            </div>
        </div>
    );
};

export default TechStack;
