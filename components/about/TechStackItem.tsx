import React from "react";
import TechStack from "../../models/TechStack";

const TechStackItem: React.FC<{ data: TechStack }> = props => {
    return (
        <div className="pb-8 md:pb-10 xl:pb-14">
            <h1 className="font-serif text-[40px] md:text-[46px] xl:text-[61px] !leading-[.80] pb-3 md:pb-4 xl:pb-5">
                {props.data.name.toUpperCase()}
            </h1>
            <div className="flex flex-wrap">
                {props.data.techList.map(item => {
                    return (
                        <div
                            className="flex justify-center items-center font-sans font-extralight xl:font-light text-xs md:text-base xl:text-[20px] border border-secondary-color hover:text-main-background-color hover:bg-white rounded-full py-[5px] xl:py-[10px] px-[26px] md:px-[32px] xl:px-[42px] mr-3 xl:mr-4 mb-2 md:mb-3 xl:mb-4 hover:cursor-pointer"
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
