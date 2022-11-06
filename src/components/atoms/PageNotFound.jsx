import Layout from "Layout/Layout";
import React from "react";

const PageNotFound = () => {
  return (
    <Layout>
      <div className=" flex justify-center items-center flex-col h-screen -my-24">
        <h3 className="text-4xl mb-12">404 page not found</h3>
        <img
          className="w-[600px]"
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
        <p className="p-2 text-2xl mt-8">
          We are sorry but the page you are looking for does not exist.
        </p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
