import React, { ReactElement } from "react";

const Grid: React.FC<{ children: ReactElement; className?: string }> = props => {
    return (
        <div
            className={`mx-8 sm:mx-16 grid grid-cols-8 md:grid-cols-12 gap-3 md:gap-6 ${
                props.className && props.className
            }`}
        >
            {props.children}
        </div>
    );
};

export default Grid;
