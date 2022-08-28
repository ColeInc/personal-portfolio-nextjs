import Head from "next/head";
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
        subHeading: "LIFE PLANNER",
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
        <>
            <Head>
                <title>WORK</title>
                <meta name="description" content="Selected Works - Cole McConnell" />
                <link rel="icon" href="/assets/icons/C-icon-180x180.ico" />
            </Head>
            <Layout>
                <>
                    <div className="flex flex-col text-transparent text-[72px] sm:text-20xl xl:text-[268px] text-stroke-sm xl:text-stroke-md !leading-[.75] mx-8 md:mx-16 pt-16 md:pt-20 xl:pt-20 pb-28 md:pb-28 xl:pb-28">
                        <h1 className="">PREVIOUS</h1>
                        <h1 className="self-end">WORKS</h1>
                    </div>

                    <div className="flex justify-center">
                        <div className="px-6 md:px-16 xl:px-[8%] xl:max-w-[130rem]">
                            <div className="hover:highlight-top-border">
                                {projectData.map((item, index) => {
                                    return <ProjectItem key={index} index={index + 1} data={item} />;
                                })}
                            </div>

                            <div className="flex justify-end w-full pt-6 md:pt-12 xl:pt-18 pb-40 md:pb-60">
                                <RotateArcText
                                    text="COLE MCCONNELL - FRONT END DEVELOPER -"
                                    textSize="text-[6.8px]"
                                    width="w-[120px] xl:w-[160px]"
                                    height="h-[120px] xl:h-[160px]"
                                    rotationSpeed={5}
                                />
                            </div>
                        </div>
                    </div>

                    <Footer />
                </>
            </Layout>
        </>
    );
};

export default Projects;
