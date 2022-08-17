import React, { ReactElement } from "react";

const Grid: React.FC<{ children: ReactElement; className?: string }> = props => {
    return (
        <div
            className={`mx-8 sm:mx-16 sm:grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-12 gap-3 sm:gap-6 ${
                props.className && props.className
            }`}
        >
            {props.children}
        </div>
    );
};

export default Grid;
