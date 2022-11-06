import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

//local imports
import Search from "components/atoms/Search";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center md:px-24 bg-[#282C34] h-36 ">
      <Link to="/">
        <h1 className="xl:text-3xl text-2xl font-bold  hover:bg-slate-500 p-4 rounded-lg">
          <img
            className="w-24  "
            src="https://rawcdn.githack.com/kanika4/RickAndMortyClient/ab85fc7050fb4644973094a15432e0ad80c623e9/src/assets/images/favicon.png"
            alt=""
          />
        </h1>
      </Link>

      <div className="flex justify-between gap-x-4 mr-4">
        <Search />
        <Link to="/register">
          <Button variant="light">Register</Button>
        </Link>
        <Link to="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
