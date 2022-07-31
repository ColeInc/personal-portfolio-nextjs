import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className="text-green-500 text-xs">Cole McConnell</div>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
