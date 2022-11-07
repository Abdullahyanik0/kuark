import { HeaderMegaMenu } from "components/organism/Headers";

import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderMegaMenu />
      <div className=" text-white">{children}</div>
    </>
  );
};

export default Layout;
