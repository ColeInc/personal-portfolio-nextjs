import React from "react";
import TechStack from "../../models/TechStack";

const TechStackItem: React.FC<{ data: TechStack }> = props => {
    return (
        <div className="pb-8 md:pb-10">
            <h1 className="font-serif text-[40px] md:text-[46px] xl:text-[61px] !leading-[.80] pb-3">
                {props.data.name.toUpperCase()}
            </h1>
            <div className="flex flex-wrap">
                {props.data.techList.map(item => {
                    return (
                        <div
                            className="flex justify-center items-center font-sans font-extralight text-xs md:text-base xl:text-[20px] border hover:text-red-500 hover:fill-white rounded-full py-[5px] px-[26px] md:px-[32px] mr-3 mb-2 md:mb-3"
                            key="item"
                        >
                            {item.toUpperCase()}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechStackItem;
