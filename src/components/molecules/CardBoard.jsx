import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Pagination } from "@mantine/core";

//lolal imports
import Card from "components/atoms/Card";
import CardSkeleton from "components/molecules/skeletons/card-skeleton";


const CardBoard = () => {
  const [page, setPage] = useState(1);

  const GET_CHARACTERS = gql`
    query GET_CHARACTERS {
      characters(page: ${page}) {
        info{
          count
          next
        }
        results {
          name
          id
          status
          gender
          image
          species
          
          origin {
            name             
          }
          location {
            name
          }
          
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  const isDataExist = !loading && !error && !!data;

  return (
    <>
      <CardSkeleton loading={loading} count={20} />
      <div className="flex flex-col items-center justify-center  pt-12 min-h-screen ">
        <div className="w-full flex flex-wrap justify-center gap-y-2">
          {!!isDataExist &&
            data?.characters?.results?.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                status={item.status}
                image={item.image}
                location={item.location.name}
                species={item.species}
                origin={item.origin.name}
              />
            ))}
        </div>
        <div className="my-12">
          <Pagination
            total={Math.ceil(data?.characters?.info?.count / 20)}
            position="center"
            size="lg"
            onChange={setPage}
            styles={(theme) => ({
              item: {
                "&[data-active]": {
                  backgroundImage: theme.fn.gradient({
                    from: "red",
                    to: "yellow",
                  }),
                },
                "&.mantine-Pagination-item": {
                  backgroundColor: "white",
                },
              },
            })}
          />
        </div>
      </div>
    </>
  );
};

export default CardBoard;
