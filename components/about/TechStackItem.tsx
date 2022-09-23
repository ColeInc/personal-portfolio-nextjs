import React, { useEffect } from "react";
import TechStack from "../../models/TechStack";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const headerVariant = {
    hidden: {
        opacity: 0.2,
    },
    visible: {
        opacity: 1,
        transition: { duration: 1.2, ease: "easeInOut" },
    },
};

const containerVariant = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.07 },
    },
};

const itemsVariant = {
    hidden: {
        opacity: 0.3,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.4, ease: "easeInOut" },
    },
};

const TechStackItem: React.FC<{ data: TechStack }> = props => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        inView ? control.start("visible") : control.start("hidden");
    }, [control, inView]);

    return (
        <motion.div className="pb-8 md:pb-10 xl:pb-14">
            <motion.h1
                className="font-serif text-[40px] md:text-[46px] xl:text-[61px] !leading-[.80] pb-3 md:pb-4 xl:pb-5"
                variants={headerVariant}
                initial="hidden"
                animate={control}
            >
                {props.data.name.toUpperCase()}
            </motion.h1>
            <motion.div
                className="flex flex-wrap"
                ref={ref}
                variants={containerVariant}
                initial="hidden"
                animate={control}
            >
                {props.data.techList.map(item => {
                    return (
                        <motion.div
                            className="flex justify-center items-center font-sans font-extralight xl:font-light text-xs md:text-base xl:text-[20px] border border-secondary-color hover:text-main-background-color hover:bg-white rounded-full py-[5px] xl:py-[10px] px-[26px] md:px-[32px] xl:px-[42px] mr-3 xl:mr-4 mb-2 md:mb-3 xl:mb-4 hover:cursor-pointer"
                            variants={itemsVariant}
                            key={item}
                        >
                            {item.toUpperCase()}
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default TechStackItem;
