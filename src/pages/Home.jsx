import React from "react";
//local imports
import CardBoard from "components/molecules/CardBoard";
import Layout from "Layout/Layout";
import { useMantineColorScheme } from "@mantine/core";

const Home = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Layout>
      <div className="text-center text-2xl mt-4 font-bold ">
        <h1 className={colorScheme === "dark" ? "text-white" : "text-black"}>
          Rick and Morty
        </h1>
      </div>

      <CardBoard />
    </Layout>
  );
};

export default Home;
