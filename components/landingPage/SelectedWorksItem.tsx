import React from "react";
import Image from "next/image";
import SelectedWorks from "../../models/SelectedWorks";
import { motion } from "framer-motion";

const repoUrl = process.env.NEXT_PUBLIC_REPO_URL || "";

const itemVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
    },
};

const lineVariant = {
    hidden: {
        width: 0,
    },
    visible: {
        width: "100%",
        transition: { duration: 0.3 },
    },
};

const headingVariant = {
    hidden: {
        x: 10,
    },
    visible: {
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
    },
};

const SelectedWorksItem: React.FC<{ data: SelectedWorks; index: number }> = props => {
    const techStackList = props.data.techStack.split(",").join(" \u2022 ");

    const imagePath = `${repoUrl}/assets/images/${props.data.imageArray[0]}`;
    const previewImage = (
        <Image
            src={imagePath}
            alt="screenshot preview of project"
            layout="fill"
            sizes="(min-width: 1024px) 25vw,
            (min-width: 768px) 33vw,
            100vw"
        />
    );

    return (
        <>
            <motion.div
                className="w-full h-[1px] border-t border-secondary-color group hover:border-secondary-hover-color hover:text-secondary-hover-color hover:fill-secondary-hover-color highlight-top-border last:border-b last:border-secondary-color last:hover:border-b"
                variants={lineVariant}
                layout
            />
            <motion.div
                className="flex justify-between pt-4 pb-3 md:py-6 group hover:text-secondary-hover-color hover:fill-secondary-hover-color last:border-b last:border-secondary-color last:hover:border-b"
                variants={itemVariant}
            >
                <div className="flex flex-col justify-between md:pr-6 w-full">
                    <motion.h1
                        className="text-3xl sm:text-[40px] xl:text-6xl group-hover:!font-gray-300 !leading-[.75] md:pb-6"
                        variants={headingVariant}
                    >
                        {props.data.name.toUpperCase()}
                    </motion.h1>
                    <div className="md:hidden w-full h-[52vw] my-3 relative bg-black">{previewImage}</div>
                    <div className="flex flex-row justify-between md:justify-start items-end">
                        <h2 className="text-[42px] md:text-[90px] xl:text-9xl text-transparent text-stroke-sm !leading-[.70] group-hover:text-stroke-hovered mr-7">
                            {props.index.toString().padStart(2, "0")}
                        </h2>
                        <p className="text-[7pt] sm:text-[13px] xl:text-base font-sans !leading-[1]">{techStackList}</p>
                    </div>
                </div>
                <div className="hidden md:flex w-[30vw] xl:w-[25vw] h-[17vw] xl:h-[14vw] xl:max-w-[55rem] xl:max-h-[32rem] shrink-0 bg-black relative">
                    {previewImage}
                </div>
            </motion.div>
        </>
    );
};

export default SelectedWorksItem;
