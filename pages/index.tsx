import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import RotateArcText from "../components/ui/RotateArcText";

export default function Home() {
    return (
        <div className="bg-slate-700">
            <Head>
                <title>Cole McConnell</title>
                <meta name="description" content="Cole McConnell's Personal Web Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <main className={styles.main}>
                    <h1 className="text-transparent text-20xl text-stroke leading-[.75] px-24">
                        HI I&rsquo;M COLE MCCONNELL.
                        <br />A FRONT END DEVELOPER IN AUCKLAND, NEW ZEALAND.
                    </h1>
                    <h1 className="text-transparent text-20xl text-stroke leading-[.75] px-24">
                        HI I&rsquo;M COLE MCCONNELL.
                        <br />A FRONT END DEVELOPER IN AUCKLAND, NEW ZEALAND.
                    </h1>

                    <RotateArcText />
                </main>
            </Layout>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
}
