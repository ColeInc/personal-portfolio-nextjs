import React, { useEffect, useState } from "react";
import Image from "next/image";
import Project from "../../models/Project";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const repoUrl = process.env.NEXT_PUBLIC_REPO_URL || "";

const lineVariant = {
    hidden: {
        marginRight: "100%",
    },
    visible: {
        marginRight: 0,
        transition: {
            duration: 0.6,
            once: true,
        },
    },
};

const ProjectItem: React.FC<{ data: Project; index: number }> = props => {
    const [desktopView, setDesktopView] = useState(false);

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    useEffect(() => {
        // If media query is more than 768px wide (anything above tailwind "md" default breakpoint), then setDesktopView state to true so we can set custom framer motion variant for tablet/mobile
        const media = window.matchMedia("(min-width: 768px)");
        if (media.matches === desktopView) {
            setDesktopView(media.matches);
        }
        const listener = () => {
            setDesktopView(media.matches);
        };
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [desktopView]);

    const itemVariant = desktopView
        ? {
              hidden: {
                  opacity: 0.3,
                  x: 50,
              },
              visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                      duration: 1,
                      ease: "easeOut",
                  },
              },
          }
        : {
              hidden: {
                  opacity: 0.3,
              },
              visible: {
                  opacity: 1,
                  transition: {
                      duration: 1,
                      ease: "easeOut",
                  },
              },
          };

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
        <motion.div
            className="flex flex-wrap justify-between pb-3 md:pb-8 xl:pb-14 group hover:text-secondary-hover-color highlight-top-border last:border-b last:border-secondary-color last:hover:border-b last:hover:border-secondary-hover-color overflow-hidden"
            ref={ref}
            variants={itemVariant}
            initial="hidden"
            animate={control}
        >
            <motion.div
                className="!w-full flex-grow pb-4 md:pb-6 xl:pb-14 border-t border-secondary-color group-hover:border-secondary-hover-color group-hover:fill-secondary-hover-color group-hover:text-secondary-hover-color"
                variants={lineVariant}
            />
            <div className="flex flex-col flex-1 justify-start w-full md:pr-6">
                <div className="flex flex-row justify-between md:justify-start items-end">
                    <div className="flex-col">
                        <h1 className="text-[36pt] sm:text-[56px] xl:text-[78px] group-hover:!font-gray-300 !leading-[.9] xl:!leading-[.95]">
                            {props.data.mainHeading.toUpperCase()}
                        </h1>
                        <h2 className="text-sm sm:text-[15px] xl:text-[22px] group-hover:!font-gray-300 font-sans !leading-[.75] md:pb-5">
                            {props.data.subHeading.toUpperCase()}
                        </h2>
                    </div>
                    <h3 className="text-[70px] md:hidden text-transparent text-stroke-sm !leading-[.70] group-hover:text-stroke-hovered self-start">
                        {props.index.toString().padStart(2, "0")}
                    </h3>
                </div>

                <div className="md:hidden w-full h-[52vw] my-3 relative bg-black">{previewImage}</div>

                <p className="font-sans text-[11px] md:text-sm xl:text-[15px] !leading-[1] pb-5 whitespace-pre-line">
                    {props.data.description}
                </p>

                <div className="flex items-end md:mt-auto">
                    <h3 className="text-[70px] md:text-[52px] hidden md:flex text-transparent text-stroke-sm !leading-[.70] group-hover:text-stroke-hovered self-start md:pr-5 xl:pr-7">
                        {props.index.toString().padStart(2, "0")}
                    </h3>
                    <p className="text-[8pt] md:text-[9px] xl:text-base !leading-[1] font-sans">{techStackList}</p>
                </div>
            </div>
            <div className="hidden md:flex flex-grow-0 w-[42vw] h-[24vw] xl:w-[37vw] xl:h-[21.2vw] xl:max-w-[55rem] xl:max-h-[32rem] shrink-0 bg-black relative">
                {previewImage}
            </div>
        </motion.div>
    );
};

export default ProjectItem;
