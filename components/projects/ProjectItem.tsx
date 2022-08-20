import Image from "next/image";
import React from "react";
import Project from "../../models/Project";

const ProjectItem: React.FC<{ data: Project; index: number }> = props => {
    const techStackList = props.data.techStack.split(",").join(" \u2022 ");

    const imagePath = `/assets/images/${props.data.imageArray[0]}`;
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
        <div className="flex justify-between pt-4 pb-3 md:py-8 xl:py-14 border-t border-white group hover:border-gray-300 hover:text-gray-300 hover:fill-gray-300 highlight-top-border last:border-b last:border-white last:hover:border-b cursor-pointer">
            <div className="flex flex-col justify-start w-full md:pr-6">
                <div className="flex flex-row justify-between md:justify-start items-end">
                    <div className="flex-col">
                        <h1 className="text-[36pt] sm:text-[56px] xl:text-[78px] group-hover:!font-gray-300 !leading-[.9]">
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
                    <h3 className="text-[70px] md:text-[52px] hidden md:flex text-transparent text-stroke-sm !leading-[.70] group-hover:text-stroke-hovered self-start md:pr-5">
                        {props.index.toString().padStart(2, "0")}
                    </h3>
                    <p className="text-[8pt] md:text-[9px] xl:text-base !leading-[1]">{techStackList}</p>
                </div>
            </div>
            <div className="hidden md:flex w-[42vw] h-[24vw] xl:w-[37vw] xl:h-[22vw] xl:max-w-[55rem] xl:max-h-[32rem] shrink-0 bg-black relative">
                {previewImage}
            </div>
        </div>
    );
};

export default ProjectItem;
