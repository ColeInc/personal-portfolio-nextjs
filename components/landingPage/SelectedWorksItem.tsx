import React, { ReactElement } from "react";
import SelectedWorks from "../../models/SelectedWorks";

const SelectedWorksItem: React.FC<{ data: SelectedWorks; index: number }> = props => {
    const techStackList = props.data.techStack.split(",").join(" \u2022 ");

    return (
        <div className="flex flex-col justify-between py-6 border-y border-white group hover:border-gray-300 hover:text-gray-300 hover:fill-gray-300">
            <h1 className="text-6xl group-hover:font-gray-300">{props.data.name.toUpperCase()}</h1>
            <div className="flex flex-row items-end">
                <h2 className="text-9xl text-transparent text-stroke-sm leading-[.70] group-hover:text-stroke-hovered">
                    {props.index.toString().padStart(2, "0")}
                </h2>
                <p className="font-sans text-base">{techStackList}</p>
            </div>
        </div>
    );
};

export default SelectedWorksItem;
