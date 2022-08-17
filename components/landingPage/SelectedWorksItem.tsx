import Image from "next/image";
import React, { ReactElement } from "react";
import SelectedWorks from "../../models/SelectedWorks";

const SelectedWorksItem: React.FC<{ data: SelectedWorks; index: number }> = props => {
    const techStackList = props.data.techStack.split(",").join(" \u2022 ");

    const previewImage = (
        <Image
            src="/assets/images/dashboard_screenshot_1.png"
            alt="screenshot preview of project"
            layout="fill"
            sizes="(min-width: 1024px) 25vw,
            (min-width: 768px) 33vw,
            100vw"
        />
    );

    return (
        <div className="flex justify-between pt-4 pb-3 sm:py-6 border-t border-white group hover:border-gray-300 hover:text-gray-300 hover:fill-gray-300 highlight-top-border last:border-b last:border-white last:hover:border-b cursor-pointer">
            <div className="flex flex-col justify-between sm:pr-6">
                <h1 className="text-3xl sm:text-[40px] xl:text-6xl group-hover:font-gray-300 !leading-[.75]">
                    {props.data.name.toUpperCase()}
                </h1>
                <div className="sm:hidden w-full h-[50vw] bg-black my-3 relative">{previewImage}</div>
                <div className="flex flex-row justify-between sm:justify-start items-end">
                    <h2 className="text-[42px] sm:text-[90px] xl:text-9xl text-transparent text-stroke-sm !leading-[.70] group-hover:text-stroke-hovered mr-7">
                        {props.index.toString().padStart(2, "0")}
                    </h2>
                    <p className="text-[7pt] sm:text-[13px] xl:text-base font-sans !leading-[1]">{techStackList}</p>
                </div>
            </div>
            <div className="hidden sm:inline-block w-[30vw] xl:w-[25vw] h-[17vw] xl:h-[14vw] shrink-0 bg-black relative">
                {previewImage}
            </div>
        </div>
    );
};

export default SelectedWorksItem;
