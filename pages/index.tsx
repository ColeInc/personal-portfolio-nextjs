import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import HeroText from "../components/landingPage/HeroText";
import LandingParagraph from "../components/landingPage/LandingParagraph";
import SelectedWorks from "../components/landingPage/SelectedWorks";
import Footer from "../components/footer/Footer";

export default function Home() {
    return (
        <div className="bg-slate-700 overflow-hidden">
            <Head>
                <title>Cole McConnell</title>
                <meta name="description" content="Cole McConnell's Personal Web Portfolio 🌱" />
                <link rel="icon" href="/assets/icons/C-icon-180x180.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            </Head>

            <Layout>
                <>
                    <HeroText />
                    <LandingParagraph />
                    <SelectedWorks />
                    <Footer />
                </>
            </Layout>
        </div>
    );
}
