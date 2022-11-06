import React from "react";
//local imports
import CardBoard from "components/molecules/CardBoard";
import Layout from "Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <h1 className="text-center text-4xl mt-4">Rick and Morty</h1>
      <CardBoard />
    </Layout>
  );
};

export default Home;
