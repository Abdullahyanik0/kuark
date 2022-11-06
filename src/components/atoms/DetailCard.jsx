import React from "react";
import { Accordion } from "@mantine/core";
import { Link } from "react-router-dom";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { IoMdTransgender } from "react-icons/io";

const Card = ({
  id,
  name,
  image,
  status,
  location,
  species,
  origin,
  gender,
}) => {
  const Style = " w-2 h-2 mr-2 gap-x-2 mt-[10px] rounded-full";

  return (
    <div className=" py-12 w-10/12 sm:w-8/12 sm:text-xl   ">
      <div className="flex flex-col sm:flex-row p-2  m-3 rounded-xl bg-[#3C3E44] ">
        <div className="">
          <img
            className="w-full h-full   object-cover object-center  rounded-l-lg"
            src={image}
            alt=""
          />
        </div>

        <div className="flex flex-col w-full justify-between p-4 sm:pl-8 ">
          <div className="pl-1">
            <Link
              to={"/character/" + id}
              className="sm:text-2xl leading-6 font-bold hover:text-hovertext cursor-pointer"
            >
              {name}
            </Link>

            <div className="flex gap-x-2 md:mt-4 mb-4  font-semibold">
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

            <div className="flex flex-col items-start font-bold  gap-y-2 my-2">
              <div className="bg-hovertext bg-opacity-70 px-2 rounded-lg flex">
                Gender:{" "}
                <p className="font-normal pl-1">
                  {(gender === "Male" && (
                    <div className="flex gap-x-2 items-center">
                      {gender}
                      <BsGenderMale />
                    </div>
                  )) ||
                    (gender === "Female" && (
                      <div className="flex gap-x-2 items-center">
                        {gender}
                        <BsGenderFemale />
                      </div>
                    )) ||
                    (gender === "unknown" && (
                      <div className="flex gap-x-2 items-center">
                        {gender}
                        <IoMdTransgender />
                      </div>
                    ))}
                </p>
              </div>
              <div className="bg-green-500 bg-opacity-70 px-2 rounded-lg flex">
                {" "}
                Location: <p className="font-normal pl-1">{location}</p>
              </div>
            </div>
          </div>

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
                  padding: " 6px  ",
                }}
              >
                <p className="text-subtext">Last known location:</p>
              </Accordion.Control>
              <Accordion.Panel
                sx={{
                  ".mantine-Accordion-content": {
                    padding: "6px ",
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
                  padding: " 6px  ",
                  marginTop: "12px",
                }}
              >
                {" "}
                <p className="text-subtext">First seen in:</p>
              </Accordion.Control>
              <Accordion.Panel
                sx={{
                  ".mantine-Accordion-content": {
                    padding: "6px ",
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
