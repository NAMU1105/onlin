// pages/_app.tsx
import "../styles/globals.css";

import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
