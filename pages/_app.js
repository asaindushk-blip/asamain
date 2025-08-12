import "../styles/globals.css";
import App, { Container } from "next/app";
import { useState } from "react";
import Loader from "../components/Loader.js";
import Router from "next/router";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);
  Router.onRouteChangeStart = (url) => {
    console.log("lorem");
    setloading(true);
  };

  Router.onRouteChangeComplete = (url) => {
    console.log("ipsum");
    setloading(false);
  };

  return (
    <div>
      {loading && <Loader />}
      <Component {...pageProps} />
      <Head>
        <title>ASA Industries Official Website</title>
      </Head>
    </div>
  );
}

export default MyApp;
