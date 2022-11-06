import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//local imports
import { items } from "configs";
import ScrollToTop from "components/atoms/ScrollToTop ";

const Routing = () => {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {items?.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
    </BrowserRouter>
  );
};

export default Routing;
