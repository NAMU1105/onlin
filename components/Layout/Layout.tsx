import React from "react";
import Footer from "../shared/components/UIElements/Footer";
import Header from "../shared/components/Navigation/Header";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
