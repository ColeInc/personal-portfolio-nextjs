import Head from "next/head";
import AboutParagraph from "../../components/about/AboutParagraph";
import Socials from "../../components/about/Socials";
import TechStack from "../../components/about/TechStack";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";

const repoUrl = process.env.NEXT_PUBLIC_REPO_URL || "";

const About = () => {
    const { scrollY } = useScroll();
    // As the value of the vertical viewpoint moves from 0 to 100, map this increase value to a corresponding decreasing value from 0 down to -20, and do it perpetually for every 100px scrolled (clamp=false does this)
    const scrollLeft = useTransform(scrollY, [0, 100], [0, 20], { clamp: false });
    const scrollRight = useTransform(scrollY, [0, 100], [0, -20], { clamp: false });

    return (
        <>
            <Head>
                <title>ABOUT</title>
                <meta name="description" content="About me - Cole McConnell" />
                <link rel="icon" href={`${repoUrl}/assets/icons/C-icon-180x180.ico`} />
            </Head>
            <Layout>
                <>
                    <div className="flex flex-col text-transparent text-[56px] sm:text-[164px] xl:text-[268px] text-stroke-sm xl:text-stroke-md leading-[.80] sm:leading-[.73] xl:leading-[.75] mx-8 md:mx-16 pt-28 md:pt-16 xl:pt-20 pb-28 sm:pb-52 xl:pb-80">
                        <motion.h1 style={{ x: scrollRight }}>COLE</motion.h1>
                        <motion.h1 style={{ x: scrollLeft }} className="self-end">
                            MCCONNELL
                        </motion.h1>
                    </div>

                    <AboutParagraph />
                    <TechStack />
                    <Socials />
                    <Footer />
                </>
            </Layout>
        </>
    );
};

export default About;
