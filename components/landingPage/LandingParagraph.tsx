import { useEffect } from "react";
import Grid from "../layout/Grid";
import CatSvg from "../ui/CatSvg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariant = {
    hidden: { opacity: 0, y: 200 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.14 },
    },
};

const itemVariant = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const LandingParagraph = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    return (
        <motion.div
            className="flex flex-col justify-center items-center pt-32 sm:pt-64 xl:pt-[37vh]"
            ref={ref}
            variants={containerVariant}
            initial="hidden"
            animate={control}
        >
            <Grid className="!inline-block sm:!grid sm:gap-y-0 xl:max-w-[120rem]">
                <>
                    <motion.h1
                        className="col-start-2 text-4xl sm:text-4xl xl:text-[40px] text-transparent text-stroke-sm pb-1 sm:pb-0"
                        variants={itemVariant}
                    >
                        ABOUT
                    </motion.h1>
                    <motion.p
                        className="!col-start-4 col-span-4 xl:col-span-6 text-lg sm:text-xl xl:text-[29px] leading-[1.2] sm:leading-[1.1] sm:text-right xl:text-left font-sans !font-extralight"
                        variants={itemVariant}
                    >
                        HI THERE I&rsquo;M COLE, A FRONT END DEVELOPER CURRENTLY LIVING IN AUCKLAND, NEW ZEALAND.
                        <br />
                        WITH NEARLY 3 YEARS OF DEVELOPMENT EXPERIENCE, I LOVE TAKING THE SKILLS, EXPERIENCE AND KNOW-HOW
                        I&rsquo;VE ACQUIRED AND PUTTING THEM TO USE BY CREATING AMAZING DESIGNS AND EXPERIENCES.
                    </motion.p>
                    <motion.div
                        className="col-start-4 sm:col-start-7 xl:col-start-10 xl:col-span-2 flex justify-end items-end"
                        variants={itemVariant}
                    >
                        <div className="w-20 h-20 sm:w-36 sm:h-36 relative">
                            <CatSvg />
                        </div>
                    </motion.div>
                </>
            </Grid>
        </motion.div>
    );
};

export default LandingParagraph;
