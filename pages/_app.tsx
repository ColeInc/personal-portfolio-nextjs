import "../styles/globals.css";
import Cursor from "../components/ui/Cursor";

function MyApp({ Component, pageProps }) {
    return (
        <Cursor>
            <Component {...pageProps} />
        </Cursor>
    );
}

export default MyApp;
