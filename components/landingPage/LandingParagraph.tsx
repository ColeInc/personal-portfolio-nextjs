import Image from "next/image";
import Grid from "../layout/Grid";
import CatSvg from "../ui/CatSvg";

const LandingParagraph = () => {
    return (
        <div className="flex flex-col justify-center pt-32 sm:pt-5 xl:pt-64">
            <Grid className="!inline-block sm:!grid sm:gap-y-0">
                <>
                    <h1 className="col-start-2 text-4xl sm:text-4xl xl:text-[40px] text-transparent text-stroke-sm pb-1 sm:pb-0">
                        ABOUT
                    </h1>
                    <p className="!col-start-4 col-span-4 xl:col-span-6 text-lg sm:text-xl xl:text-[29px] leading-[1.2] sm:leading-[1.1] sm:text-right xl:text-left font-sans !font-extralight">
                        HI THERE I&rsquo;M COLE, A FRONT END DEVELOPER CURRENTLY LIVING IN AUCKLAND, NEW ZEALAND. WITH
                        NEARLY 3 YEARS OF DEVELOPMENT EXPERIENCE, I LOVE TAKING THE SKILLS, EXPERIENCE AND KNOW-HOW
                        I&rsquo;VE ACQUIRED AND PUTTING THEM TO USE BY CREATING AMAZING DESIGNS AND EXPERIENCES.
                    </p>
                    <div className="col-start-4 sm:col-start-7 xl:col-start-10 xl:col-span-2 flex justify-end items-end">
                        <div className="w-20 h-20 sm:w-36 sm:h-36 relative">
                            <CatSvg />
                        </div>
                    </div>
                </>
            </Grid>
        </div>
    );
};

export default LandingParagraph;
