import type { AppProps } from "next/app";
import "../styles/globals.css";
import "windi.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="relative ">
			<Component {...pageProps} />
			<div id="notification-portal"></div>
		</div>
	);
}

export default MyApp;
