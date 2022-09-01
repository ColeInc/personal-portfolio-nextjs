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
        description: `A twitter management dashboard which aims to basically help twitter users automate certain tasks like scheduling future tweets, as well as view analytics of their account’s performance on a dashboard view. I’m building it using React.js, SCSS, Typescript and Redux for the frontend, and building the backend using Express.js working hand in hand with a Firebase firestore database.`,
        techStack: "REACT.JS, REDUX, TYPESCRIPT, SCSS, NODE.JS, EXPRESS.JS",
        imageArray: ["dashboard_screenshot_1.png", "dashboard_screenshot_2.png", "dashboard_screenshot_1.png"],
    },
    {
        mainHeading: "Beludia",
        subHeading: "Chrome Extension",
        description: `A small, but very handy chrome extension I built which allows users to save all their currently open chrome tabs with a single click, allowing them to quickly re-open their tabs back up exactly where they left off.

        - Beludia allows you to save tabs in multiple windows, remembers the order your tabs were arranged in, and remembers whether your chrome window was regular or incognito.

        - It has the ability to periodically save all your currently tabs. An input box which allows the user to specify the auto save frequency in which they'd like their tabs to automatically be saved.
    
        - You can now also export all currently open Chrome tabs into your Chrome Bookmarks.

        
        Written in HTML, CSS and vanilla Javascript.`,
        techStack: "CSS, HTML, JAVASCRIPT, CHROME API",
        imageArray: ["save_all_tabs_1280x690.png"],
    },
    {
        mainHeading: "LIFE PLANNER",
        subHeading: "React Native / Express.js Full Stack App",
        description: `A project I’m a part of at the moment is a group project I’m working on with 2 fellow compsci grads from uni. It is a “life planner” app which aims to help people increase their day to day productivity, set goals, and essentially help them track the improvement of their life over time. We are designing the UI in Figma, then building it out using React Native (with Typescript), Redux, Node.js/Express, and Firebase firestore.`,
        techStack: "REACT NATIVE, REDUX, TYPESCRIPT, NODE.JS, EXPRESS.JS, OAUTH, FIREBASE",
        imageArray: ["lifeplanner_preview.png"],
    },
    {
        mainHeading: "Personal Portfolio",
        subHeading: "Personal Portfolio Site",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing.`,
        techStack: "NEXT.JS, TYPESCRIPT, TAILWIND.CSS, FRAMER MOTION",
        imageArray: ["personal_portfolio_landing.png"],
    },
    {
        mainHeading: "Instagram Bot",
        subHeading: "Python Automated Instagram Bot",
        description: `I created this instagram bot as a side project to see if I could get it to complete numerous tasks automatically for me on Instagram.
        
        The bot is written in Python, using the Selenium library as a webscraper to carry out tasks. The bot’s functions are exposed as a REST API using Flask.
        
        Also hosted this bot on an AWS EC2 ubuntu instance, in a docker container which is setup with an Nginx server hosting flask API. It also has a Selenium Grid with a firefox node running with it to carry out the webscraping tasks.
        `,
        techStack: "PYTHON, FLASK, SELENIUM, HEADLESS CHROME, AWS EC2, DOCKER",
        imageArray: ["dashboard_screenshot_1.png"],
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
