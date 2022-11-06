import { Accordion } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, status, location, species, origin }) => {
  const Style = " w-2 h-2 mr-2 gap-x-2 mt-[10px] rounded-full";

  return (
    <div className=" py-12 lg:w-6/12 ">
      <div className="flex flex-col xl:flex-row  m-3 rounded-xl bg-[#3C3E44] ">
        <div>
          <img
            className="w-full  object-center object-cover  rounded-t-lg"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col w-full justify-between p-4">
          <Link
            to={"/character/" + id}
            className=" leading-6 font-bold hover:text-hovertext cursor-pointer"
          >
            {name}
          </Link>
          <div className="flex gap-x-2  font-semibold">
            <div className="flex gap-x-2  ">
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
            <p className=""> {species}</p>
          </div>
          <div>
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
                    padding: " 6px 14px ",
                  }}
                >
                  <p className="text-subtext">Last known location:</p>
                </Accordion.Control>
                <Accordion.Panel>
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
                    padding: " 6px 14px ",
                    marginTop: "12px",
                  }}
                >
                  {" "}
                  <p className="text-subtext">First seen in:</p>
                </Accordion.Control>
                <Accordion.Panel>
                  <p className="hover:text-hovertext font-bold text-white cursor-pointer">
                    {origin}
                  </p>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
