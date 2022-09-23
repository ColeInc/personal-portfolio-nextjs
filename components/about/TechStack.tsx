import React, { useEffect } from "react";
import TechStack from "../../models/TechStack";
import TechStackItem from "./TechStackItem";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
            "Framer Motion",
        ],
    },
    {
        name: "Back End",
        techList: [
            "node.js",
            "express.js",
            "Apollo GraphQL",
            "Python",
            "Databases (MySQL, Oracle, MongoDB)",
            "Zod",
            "Jest",
            "OAuth",
        ],
    },
    {
        name: "Tools",
        techList: ["git", "jwt", "figma", "webpack"],
    },
];

const headerVariant = {
    hidden: {
        opacity: 0.2,
    },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
    },
};

const TechStack = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        inView ? control.start("visible") : control.start("hidden");
    }, [control, inView]);

    return (
        <div className="flex justify-center">
            <div className="mx-10 sm:mx-16 xl:mx-[8%] xl:max-w-[96rem]">
                <motion.h1
                    className="text-transparent text-[54px] sm:text-[96px] xl:text-[120px] text-stroke-sm leading-[.80] sm:leading-[.73] xl:leading-[.75] pb-8 md:pb-12"
                    ref={ref}
                    variants={headerVariant}
                    initial="hidden"
                    animate={control}
                >
                    TECH STACK & TOOLS
                </motion.h1>

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
