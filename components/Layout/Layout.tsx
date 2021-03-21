import React from "react";
import Head from "next/head";

import Footer from "../shared/components/UIElements/Footer";
import Header from "../shared/components/Navigation/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Olin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="backdrop-hook"></div>

      <div className="content">
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default Layout;
