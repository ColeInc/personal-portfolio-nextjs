import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import RotateArcText from "../components/ui/RotateArcText";
import LandingParagraph from "../components/landingPage/LandingParagraph";
import SelectedWorks from "../components/landingPage/SelectedWorks";

export default function Home() {
    return (
        <div className="bg-slate-700">
            <Head>
                <title>Cole McConnell</title>
                <meta name="description" content="Cole McConnell's Personal Web Portfolio 🌱" />
                <link rel="icon" href="/assets/icons/C-icon-180x180.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            </Head>

            <Layout>
                <>
                    {/* <main className="h-screen relative">
                        <h1 className="text-transparent text-20xl text-stroke-lg leading-[.75] px-24">
                            HI I&rsquo;M COLE MCCONNELL.
                            <br />A FRONT END DEVELOPER IN AUCKLAND, NEW ZEALAND.
                        </h1>
                        <RotateArcText />
                    </main>

                    <LandingParagraph /> */}

                    <SelectedWorks />
                </>
            </Layout>
        </div>
    );
}
