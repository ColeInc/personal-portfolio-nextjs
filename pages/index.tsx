import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import RotateArcText from "../components/ui/RotateArcText";
import LandingParagraph from "../components/layout/LandingParagraph";

export default function Home() {
    return (
        <div className="bg-emerald-400">
            <Head>
                <title>Cole McConnell</title>
                <meta name="description" content="Cole McConnell's Personal Web Portfolio 🌱" />
                <link rel="icon" href="/assets/icons/favicon.ico" />
            </Head>

            <Layout>
                <>
                    <main className="h-screen">
                        <h1 className="text-transparent text-20xl text-stroke leading-[.75] px-24">
                            HI I&rsquo;M COLE MCCONNELL.
                            <br />A FRONT END DEVELOPER IN AUCKLAND, NEW ZEALAND.
                        </h1>

                        <RotateArcText />
                    </main>

                    <LandingParagraph />
                </>
            </Layout>
        </div>
    );
}
