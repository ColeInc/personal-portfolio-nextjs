import Image from "next/image";
import Grid from "../layout/Grid";
import CatSvg from "../ui/CatSvg";
import ScrollingText from "./ScrollingText";

const Footer = () => {
    return (
        <div>
            <ScrollingText />

            <Grid className="py-36 sm:py-44 xl:py-72">
                <>
                    <div className="flex justify-between items-center col-span-4 sm:col-span-8 xl:col-start-3">
                        <div className="w-[150px] h-[150px] hidden sm:flex justify-end items-end">
                            <CatSvg />
                        </div>
                        <div className="flex flex-col sm:w-[39rem] xl:w-[42rem] text-right">
                            <p className="font-sans text-sm sm:text-[22px] xl:text-2xl font-light !leading-[1] xl:pb-2">
                                IF YOU&rsquo;D LIKE TO CONTACT ME FOR ANY QUESTIONS OR QUERIES, FLICK ME AN EMAIL AT
                            </p>
                            <a
                                className="font-serif text-[37px] sm:text-6xl xl:text-7xl hover:text-secondary-hover-color !leading-[1.1] underline underline-offset-8 decoration-2 cursor-pointer"
                                href="mailto:hello@colemcconnell.co"
                            >
                                hello@colemcconnell.co
                            </a>
                        </div>
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
                    >
                        GITHUB
                    </a>
                    <a
                        className="pb-[3px] sm:pb-0 hover:text-secondary-hover-color"
                        href="https://linkedin.com/in/cole-mcconnell"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LINKEDIN
                    </a>
                    <a
                        className=" hover:text-secondary-hover-color"
                        href="https://twitter.com/developer_cole"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        TWITTER
                    </a>
                </div>
                <p className="font-sans text-[8px] sm:text-[10px] xl:text-xs text-footer-copyright-color">
                    &copy; 2022. COLE MCCONNELL. ALL RIGHTS RESERVED.
                </p>
            </div>
        </div>
    );
};

export default Footer;
