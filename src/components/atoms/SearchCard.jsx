import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({ name, status, species, image, id }) => {
  const Style = " w-2 h-2 mr-2 gap-x-2 mt-[9px]  rounded-full";
  return (
    <Link to={`/character/${id}`}>
      <div className="w-full flex p-2 gap-x-3 bg-accordion my-2 rounded-lg   ">
        <img className="w-[80px]" src={image} alt="" />
        <div className="flex flex-col">
          <p> {name}</p>
          <div className="flex gap-x-2 font-semibold">
            <div className="flex gap-x-2  text-base">
              {(status === "Alive" && (
                <div className="flex ">
                  <div className={`${Style} bg-green-500`}></div>
                  <p>Alive -</p>
                </div>
              )) ||
                (status === "Dead" && (
                  <div className="flex ">
                    <div className={`${Style} bg-red-500`}></div>
                    <p>Dead -</p>
                  </div>
                )) ||
                (status === "unknown" && (
                  <div className="flex">
                    <div className={`${Style} bg-white`}></div>
                    <p>Unknown -</p>
                  </div>
                ))}
            </div>
            <p className="text-base"> {species}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
