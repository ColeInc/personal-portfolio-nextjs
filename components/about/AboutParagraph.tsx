import React from "react";
import Grid from "../layout/Grid";
import RotateArcText from "../ui/RotateArcText";
import { motion } from "framer-motion";

const paragraphVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.4, ease: "easeOut" },
    },
};

const AboutParagraph = () => {
    return (
        <Grid className="!inline-block sm:!grid sm:gap-y-0 mx-6 sm:mx-0 pb-40 md:pb-52 xl:pb-[19rem] overflow-hidden">
            <>
                {/* <div className="overflow-hidden"> */}
                <motion.div
                    className="sm:col-start-4 xl:col-start-6 col-span-4 xl:col-span-5 text-lg sm:text-xl xl:text-[24px] leading-[1.2] sm:leading-[1.1] sm:text-right xl:text-left font-sans !font-extralight "
                    variants={paragraphVariant}
                    initial="hidden"
                    animate="visible"
                >
                    <p className="indent-16 sm:indent-[25px] xl:indent-20">
                        I&rsquo;M COLE, A FRONT END DEVELOPER CURRENTLY WORKING ON DELIVERING EFFICIENT, RESPONSIVE AND
                        MEMORABLE DESIGNS & EXPERIENCES.
                    </p>
                    <p className="pt-8">
                        I LOVE KEEPING UP TO DATE WITH LATEST TOOLS & TECHNOLOGY BEING USED IN THE INDUSTRY, AND AM ON A
                        CONSTANT LEARNING CURVE TO CONTINUE BUILDING UP MY KNOWLEDGE.
                    </p>
                    <p className="pb-4">
                        CURRENTLY I AM USING TECHNOLOGIES SUCH AS REACT.JS, REDUX, TYPESCRIPT & TAILWIND CSS TO CRAFT MY
                        PROJECTS.
                    </p>
                </motion.div>
                {/* </div> */}

                <RotateArcText
                    text="COLE MCCONNELL - FRONT END DEVELOPER -"
                    textSize="text-[6.8px]"
                    width="w-[80px] md:w-[120px] xl:w-[160px]"
                    height="h-[80px] md:h-[120px] xl:h-[160px]"
                    rotationSpeed={5}
                    className="sm:col-start-2 sm:row-start-1 xl:col-start-3"
                />
            </>
        </Grid>
    );
};

export default AboutParagraph;
