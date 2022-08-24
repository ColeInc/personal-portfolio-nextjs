import React from "react";
import RotateArcText from "../ui/RotateArcText";

const Socials = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 mx-10 sm:mx-[20%] xl:mx-[20%] xl:max-w-[100rem] py-32 md:py-52 xl:py-72">
                <h1 className="text-transparent text-stroke-sm leading-[.80] text-[46px] md:text-[86px] xl:text-[120px] pb-10">
                    SOCIAL
                </h1>

                <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-1 md:justify-self-end">
                    <div className="flex flex-col justify-start font-sans text-2xl xl:text-[30px] font-extralight md:text-right underline underline-offset-[4px] sm:underline-offset-4 decoration-[.5px] sm:decoration-1">
                        <a className="pb-[6px] xl:pb-3" href="https://github.com/ColeInc">
                            GITHUB
                        </a>
                        <a className="pb-[6px] xl:pb-3" href="https://linkedin.com/in/cole-mcconnell">
                            LINKEDIN
                        </a>
                        <a className="" href="https://twitter.com/developer_cole">
                            TWITTER
                        </a>
                    </div>
                </div>

                <RotateArcText
                    text="COLE MCCONNELL - FRONT END DEVELOPER -"
                    textSize="text-[6.8px]"
                    width="w-[80px] md:w-[120px] xl:w-[160px]"
                    height="h-[80px] md:h-[120px] xl:h-[160px]"
                    rotationSpeed={5}
                    className="justify-self-end self-end col-start-2 row-start-2 md:col-start-1 md:justify-self-start"
                />
            </div>
        </div>
    );
};

export default Socials;
