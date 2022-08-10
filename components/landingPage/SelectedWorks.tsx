import React from "react";
import SelectedWorksItem from "./SelectedWorksItem";
import SelectedWorks from "../../models/SelectedWorks";

const projectData: SelectedWorks[] = [
    {
        name: "Mosa - Twitter Management Dashboard",
        techStack: "REACT.JS, REDUX, TYPESCRIPT, SCSS, NODE.JS, EXPRESS.JS",
    },
    {
        name: "Beludia Chrome Extension",
        techStack: "CSS, HTML, JAVASCRIPT, CHROME API",
    },
    {
        name: "Mosa - Twitter Management Dashboard",
        techStack: "REACT.JS, REDUX, TYPESCRIPT, SCSS, NODE.JS, EXPRESS.JS",
    },
    {
        name: "Beludia Chrome Extension",
        techStack: "CSS, HTML, JAVASCRIPT, CHROME API",
    },
];

const SelectedWorks = () => {
    return (
        <div className="py-48">
            <h1 className="text-transparent text-10xl text-stroke-md leading-[.75] px-32 pb-6">SELECTED WORK</h1>
            <div className="mx-32 hover:highlight-top-border">
                {projectData.map((item, index) => {
                    return <SelectedWorksItem key={index} index={index + 1} data={item} />;
                })}
            </div>
        </div>
    );
};

export default SelectedWorks;
