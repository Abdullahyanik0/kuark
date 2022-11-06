import Header from "components/organism/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-bg text-white">{children}</div>
    </>
  );
};

export default Layout;
