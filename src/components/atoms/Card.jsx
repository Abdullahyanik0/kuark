import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "@mantine/core";

const Card = ({ id, name, image, status, location, species, origin }) => {
  const Style = " w-2 h-2 mr-2 gap-x-2 mt-[9px] rounded-full";

  return (
    <div className="flex w-[610px] sm:p-4 p-2 hover:shadow-2xl hover:shadow-button text-lg text-white m-3 rounded-xl bg-[#3C3E44] ">
      <img
        className="md:w-4/12 w-5/12  object-center object-cover  rounded-l-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col w-full  p-3 ml-2">
        <div className="flex flex-col gap-y-2">
          <Link
            to={"/character/" + id}
            className="text-2xl  leading-6 font-bold hover:text-hovertext cursor-pointer"
          >
            {name}
          </Link>
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
        <div className="mt-6">
          <Accordion
            styles={{
              item: {
                // styles added to all items
                backgroundColor: "#3C3E44",

                // styles added to expanded item
                "&[data-active]": {
                  backgroundColor: "#3C3E44",
                },
              },
            }}
            defaultValue="customization"
          >
            <Accordion.Item
              sx={{
                border: "hidden",
              }}
              value="Last"
            >
              <Accordion.Control
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  padding: "0",
                }}
              >
                <p className="text-subtext">Last known location:</p>
              </Accordion.Control>
              <Accordion.Panel
                sx={{
                  ".mantine-Accordion-content": {
                    padding: "6px 0",
                  },
                }}
              >
                <p className="hover:text-hovertext font-bold text-white cursor-pointer">
                  {location}
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              sx={{
                border: "hidden",
              }}
              value="First"
            >
              <Accordion.Control
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  padding: "0",
                  marginTop: "12px",
                }}
              >
                {" "}
                <p className="text-subtext">First seen in:</p>
              </Accordion.Control>
              <Accordion.Panel
                sx={{
                  ".mantine-Accordion-content": {
                    padding: "6px 0",
                  },
                }}
              >
                <p className="hover:text-hovertext font-bold text-white cursor-pointer">
                  {origin}
                </p>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Card;
