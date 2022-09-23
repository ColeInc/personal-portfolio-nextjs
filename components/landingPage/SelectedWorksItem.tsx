import React, { useEffect } from "react";
import Image from "next/image";
import SelectedWorks from "../../models/SelectedWorks";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        marginRight: "100%",
    },
    visible: {
        marginRight: 0,
        transition: {
            duration: 0.6,
        },
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
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

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

    const techStackList = props.data.techStack.split(",").join(" \u2022 ");

    return (
        <>
            <motion.div
                className="flex flex-wrap justify-between pb-3 md:pb-6 group hover:text-secondary-hover-color hover:fill-secondary-hover-color last:border-b last:border-secondary-color last:hover:border-b last:hover:border-secondary-hover-color highlight-top-border"
                ref={ref}
                variants={itemVariant}
                initial="hidden"
                animate={control}
            >
                <motion.div
                    className="w-full h-5 flex-grow pb-4 md:pb-6 border-t border-secondary-color group-hover:border-secondary-hover-color group-hover:fill-secondary-hover-color group-hover:text-secondary-hover-color"
                    variants={lineVariant}
                />
                <div className="flex flex-col flex-1 justify-between md:pr-6 w-full">
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
                <div className="hidden flex-grow-0 md:flex w-[30vw] xl:w-[25vw] h-[17vw] xl:h-[14vw] xl:max-w-[55rem] xl:max-h-[32rem] shrink-0 bg-black relative">
                    {previewImage}
                </div>
            </motion.div>
        </>
    );
};

export default SelectedWorksItem;
