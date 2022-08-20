import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import ProjectItem from "../../components/projects/ProjectItem";
import RotateArcText from "../../components/ui/RotateArcText";
import Project from "../../models/Project";

const projectData: Project[] = [
    {
        mainHeading: "Mosa",
        subHeading: "Twitter Management Dashboard",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing.`,
        techStack: "REACT.JS, REDUX, TYPESCRIPT, SCSS, NODE.JS, EXPRESS.JS",
        imageArray: ["dashboard_screenshot_1.png", "dashboard_screenshot_2.png", "dashboard_screenshot_1.png"],
    },
    {
        mainHeading: "Beludia",
        subHeading: "Chrome Extension",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing.`,
        techStack: "CSS, HTML, JAVASCRIPT, CHROME API",
        imageArray: ["dashboard_screenshot_1.png", "dashboard_screenshot_2.png", "dashboard_screenshot_1.png"],
    },
    {
        mainHeading: "Mosa",
        subHeading: "Twitter Management Dashboard",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing.`,
        techStack: "REACT.JS, REDUX, TYPESCRIPT, SCSS, NODE.JS, EXPRESS.JS",
        imageArray: ["dashboard_screenshot_1.png", "dashboard_screenshot_2.png", "dashboard_screenshot_1.png"],
    },
    {
        mainHeading: "Beludia",
        subHeading: "Chrome Extension",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing.`,
        techStack: "CSS, HTML, JAVASCRIPT, CHROME API",
        imageArray: ["dashboard_screenshot_1.png", "dashboard_screenshot_2.png", "dashboard_screenshot_1.png"],
    },
];

const Projects = () => {
    return (
        <Layout>
            <>
                <div className="flex flex-col text-transparent text-[72px] sm:text-20xl xl:text-[268px] text-stroke-sm xl:text-stroke-md !leading-[.75] mx-8 md:mx-16 pt-14 xl:pt-20 pb-28 md:pt-6 md:pb-28 xl:pb-40">
                    <h1 className="">PREVIOUS</h1>
                    <h1 className="self-end">WORKS</h1>
                </div>

                <div className="flex justify-center">
                    <div className="px-6 md:px-16 xl:px-[8%] hover:highlight-top-border xl:max-w-[130rem]">
                        {projectData.map((item, index) => {
                            return <ProjectItem key={index} index={index + 1} data={item} />;
                        })}
                    </div>
                </div>

                <div className="md:px-6 xl:px-[5%] w-full flex justify-end pb-40 xl:pb-60">
                    <RotateArcText
                        text="COLE MCCONNELL - FRONT END DEVELOPER -"
                        textSize="text-[6.8px]"
                        width="w-[120px] md:w-[180px] xl:w-[240px]"
                        height="h-[120px] md:h-[180px] xl:h-[240px]"
                        rotationSpeed={5}
                    />
                </div>

                <Footer />
            </>
        </Layout>
    );
};

export default Projects;
