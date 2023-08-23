import Head from "next/head";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import ProjectItem from "../../components/projects/ProjectItem";
import RotateArcText from "../../components/ui/RotateArcText";
import Project from "../../models/Project";
import { motion, useScroll, useTransform } from "framer-motion";

const repoUrl = process.env.NEXT_PUBLIC_REPO_URL || "";

const projectData: Project[] = [
    {
        mainHeading: "Mosa",
        subHeading: "Twitter Management Dashboard",
        description: `A Twitter Management Dashboard which aims to help twitter users automate certain tasks such as scheduling future tweets, as well as view analytics of their account’s performance in a dashboard view. 
        
        The front end for this project is built using React.js, SCSS, Typescript and Redux. I designed the UI concepts in Figma. 
        
        I’m also building the backend using Node.js (Express.js) with Typescript, which is talking to a Firebase firestore database. It uses OAuth 2.0 to interact with Twitter's APIs, Zod schema validation, and Jest/Supertest for unit testing.
        `,

        techStack: "REACT.JS, REDUX, TYPESCRIPT, SCSS, NODE.JS, EXPRESS.JS, TWITTER API",
        imageArray: ["dashboard_screenshot_1.png", "dashboard_screenshot_2.png", "dashboard_screenshot_1.png"],
        githubUrl: "https://github.com/ColeInc/mosa-twitter-dashboard-frontend",
    },
    {
        mainHeading: "Nardium",
        subHeading: "Chrome Extension",
        description: `A handy Google Chrome Extension which helps you navigate your Google Docs document with ease!

        I was getting frustrated with the look and functionality of the default heading outline tool in Google Docs, so I decided to make one myself. 
        It provides you with an extra navigation panel which shows alongside your google docs, allowing you to navigate around easier.

        It uses the Google Docs API to fetch a list of your document's headings, and displays them in an easy to use, and customizable UI. Allowing users to alter which headings are shown, zoom in out, etc.
        `,

        techStack: "REACT.JS, CHROME EXTENSION, OAUTH, GOOGLE DOCS API",
        imageArray: ["nardium_screenshot_v4.png"],
        githubUrl: "https://github.com/ColeInc/nardium-google-docs-outliner",
    },
    {
        mainHeading: "Beludia",
        subHeading: "Chrome Extension",
        description: `A small, but very handy chrome extension I built which allows users to save all their currently open chrome tabs with a single click, allowing them to quickly re-open their tabs back up exactly where they left off.

        - Allows you to save tabs in multiple windows, remembers the order your tabs were arranged in, and remembers whether your chrome window was regular or incognito.

        - Has the ability to periodically save all your currently tabs. An input box which allows the user to specify the auto save frequency in which they'd like their tabs to automatically be saved.
    
        - Allows you to export all currently open Chrome tabs into your Chrome Bookmarks.

        
        Written in HTML, CSS and vanilla Javascript.`,
        techStack: "CSS, HTML, JAVASCRIPT, CHROME API",
        imageArray: ["save_all_tabs_1280x690.png"],
        githubUrl: "https://github.com/ColeInc/save_all_tabs",
    },
    {
        mainHeading: "LIFE PLANNER",
        subHeading: "React Native / Express.js Full Stack App",
        description: `A group project that I’m a part of at the moment with a two of my fellow compsci grads from uni. 
        
        This app aims to be a “life planner” application which has the goal of helping people increase their day to day productivity, set goals, and essentially help them track the improvement of their life over time.
        
        We are designing the UI in Figma. Front end built using React Native (with Typescript) and Redux.
        
        The backend is created with Node.js/Express.js.`,
        techStack: "REACT NATIVE, REDUX, TYPESCRIPT, NODE.JS, EXPRESS.JS, OAUTH, FIREBASE",
        imageArray: ["lifeplanner_preview.png"],
    },
    {
        mainHeading: "Personal Portfolio",
        subHeading: "Personal Portfolio Site",
        description: `A Personal Portfolio Website built to showcase my past projects and experiences.
        
        UI designed in Figma. Frontend built using Next.js, Typescript, Tailwind CSS and animated with Framer Motion!
        
        Hosted on Vercel.`,
        techStack: "NEXT.JS, TYPESCRIPT, TAILWIND.CSS, FRAMER MOTION",
        imageArray: ["personal_portfolio_landing.png"],
        githubUrl: "https://github.com/ColeInc/personal-portfolio-nextjs",
    },
    {
        mainHeading: "Instagram Bot",
        subHeading: "Python Automated Instagram Bot",
        description: `I created this instagram bot as a side project to see if I could get it to complete numerous tasks automatically for me on Instagram.
        
        The bot is written in Python, using the Selenium library as a webscraper to carry out tasks. The bot’s functions are exposed as a REST API using Flask. Persistant data stored with a MySQL Database.
        
        This bot is hosted on an AWS EC2 ubuntu instance, in a docker container which is setup with an Nginx server hosting the python flask API. It also has a Selenium Grid with a firefox node running with it to carry out the webscraping tasks.
        `,
        techStack: "PYTHON, FLASK, MYSQL, AWS EC2, SELENIUM, HEADLESS CHROME, DOCKER",
        imageArray: ["instagram_bot_1.png", "dashboard_screenshot_1.png"],
        githubUrl: "https://github.com/ColeInc/instagram-post-scheduler-bot",
    },
];

const headingVariant = {
    hidden: {
        opacity: 0.2,
    },
    visible: {
        opacity: 1,
        transition: { duration: 1 },
    },
};

const Projects = () => {
    const { scrollY } = useScroll();
    // As the value of the vertical viewpoint moves from 0 to 100, map this increase value to a corresponding decreasing value from 0 down to -20, and do it perpetually for every 100px scrolled (clamp=false does this)
    const scrollLeft = useTransform(scrollY, [0, 100], [0, 20], { clamp: false });
    const scrollRight = useTransform(scrollY, [0, 100], [0, -20], { clamp: false });

    return (
        <>
            <Head>
                <title>WORK</title>
                <meta name="description" content="Selected Works - Cole McConnell" />
                <link rel="icon" href={`${repoUrl}/assets/icons/C-icon-180x180.ico`} />
            </Head>
            <Layout>
                <>
                    <div className="flex flex-col text-transparent text-[72px] sm:text-20xl xl:text-[268px] text-stroke-sm xl:text-stroke-md !leading-[.75] px-8 md:px-16 3xl:px-[15%] pt-16 md:pt-20 xl:pt-20 pb-28 md:pb-28 xl:pb-28 overflow-hidden">
                        <motion.h1
                            style={{ x: scrollRight }}
                            variants={headingVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            PREVIOUS
                        </motion.h1>
                        <motion.h1
                            style={{ x: scrollLeft }}
                            variants={headingVariant}
                            initial="hidden"
                            animate="visible"
                            className="self-end"
                        >
                            WORKS
                        </motion.h1>
                    </div>

                    <div className="flex justify-center">
                        <div className="px-6 md:px-16 xl:px-[8%] xl:max-w-[130rem]">
                            <div className="hover:highlight-top-border">
                                {projectData.map((item, index) => {
                                    return <ProjectItem key={index} index={index + 1} data={item} />;
                                })}
                            </div>

                            <div className="flex w-full justify-end pt-6 md:pt-12 xl:pt-18 pb-40 md:pb-60 overflow-hidden">
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
