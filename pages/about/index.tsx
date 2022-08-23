import Head from "next/head";
import AboutParagraph from "../../components/about/AboutParagraph";
import TechStack from "../../components/about/TechStack";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";

const About = () => {
    return (
        <>
            <Head>
                <title>ABOUT</title>
                <meta name="description" content="About me - Cole McConnell" />
                <link rel="icon" href="/assets/icons/C-icon-180x180.ico" />
            </Head>
            <Layout>
                <>
                    <div className="flex flex-col text-transparent text-[56px] sm:text-[164px] xl:text-[268px] text-stroke-sm leading-[.80] sm:leading-[.73] xl:leading-[.75] mx-8 md:mx-16 pt-14 xl:pt-20 pb-28 md:pt-6 sm:pb-52 xl:pb-40">
                        <h1 className="">COLE</h1>
                        <h1 className="self-end">MCCONNELL</h1>
                    </div>

                    {/* <AboutParagraph /> */}

                    <TechStack />

                    {/* <Footer /> */}
                </>
            </Layout>
        </>
    );
};

export default About;
