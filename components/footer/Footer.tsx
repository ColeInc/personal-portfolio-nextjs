import React, { useCallback, useContext, useEffect } from "react";
import Image from "next/image";
import Grid from "../layout/Grid";
import CatSvg from "../ui/CatSvg";
import ScrollingText from "./ScrollingText";
import { CursorContext } from "../ui/Cursor";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const callToActionVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

// MAH EMAIL:
const email = "clmccnnll@gmail.com";

const Footer = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const [, setCursor] = useContext(CursorContext);

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const toggleCursor = useCallback(() => {
        setCursor(prevState => !prevState);
    }, [setCursor]);

    return (
        <div>
            <ScrollingText />

            <Grid className="py-36 sm:py-44 xl:py-72">
                <>
                    <div className="flex justify-between items-center col-span-4 sm:col-span-8 xl:col-start-3 overflow-hidden md:overflow-visible">
                        <motion.div
                            className="w-[150px] h-[150px] hidden sm:flex justify-end items-end cursor-pointer"
                            whileHover={{ rotate: 360 }}
                            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                            drag
                            // dragConstraints={{
                            //     top: 0,
                            //     right: 0,
                            //     bottom: 0,
                            //     left: 0,
                            // }}
                            whileTap={{ cursor: "grabbing" }}
                        >
                            <CatSvg />
                        </motion.div>
                        <motion.div
                            className="flex flex-col sm:w-[39rem] xl:w-[42rem] text-right"
                            ref={ref}
                            variants={callToActionVariant}
                            initial="hidden"
                            animate={control}
                        >
                            <p className="font-sans text-sm sm:text-[22px] xl:text-2xl font-light !leading-[1] xl:pb-2">
                                IF YOU&rsquo;D LIKE TO CONTACT ME FOR ANY QUESTIONS OR QUERIES, FLICK ME AN EMAIL AT
                            </p>
                            <a
                                className="font-serif text-[8vw] sm:text-6xl xl:text-7xl hover:text-secondary-hover-color !leading-[1.1] underline underline-offset-8 decoration-2 cursor-pointer"
                                href={`mailto:${email}`}
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                            >
                                {email}
                            </a>
                        </motion.div>
                    </div>
                </>
            </Grid>

            <div className="flex justify-between items-end w-full bottom-0 px-6 pb-6 sm:px-12 sm:pb-12">
                <div className="flex flex-col sm:flex-row justify-between sm:w-[35vw] xl:w-[24vw] font-sans text-base sm:text-[21px] font-extralight underline underline-offset-2 sm:underline-offset-4 decoration-[.5px] sm:decoration-1">
                    <a
                        className="pb-[3px] sm:pb-0 hover:text-secondary-hover-color"
                        href="https://github.com/ColeInc"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={toggleCursor}
                        onMouseLeave={toggleCursor}
                    >
                        GITHUB
                    </a>
                    <a
                        className="pb-[3px] sm:pb-0 hover:text-secondary-hover-color"
                        href="https://linkedin.com/in/cole-mcconnell"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={toggleCursor}
                        onMouseLeave={toggleCursor}
                    >
                        LINKEDIN
                    </a>
                    <a
                        className="hover:text-secondary-hover-color"
                        href="https://twitter.com/developer_cole"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={toggleCursor}
                        onMouseLeave={toggleCursor}
                    >
                        TWITTER
                    </a>
                </div>
                <p className="font-sans text-[8px] sm:text-[10px] xl:text-xs text-footer-copyright-color cursor-pointer hover:invert">
                    &copy; 2022. COLE MCCONNELL. ALL RIGHTS RESERVED.
                </p>
            </div>
        </div>
    );
};

export default Footer;
