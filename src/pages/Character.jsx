import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
//local imports
import Layout from "Layout/Layout";
import { DetailCard } from "components/atoms";
import UseDetailSkeleton from "components/molecules/skeletons/card-detail-skeleton";

const Character = () => {
  let { id } = useParams();

  const GET_CHARACTER_ID = gql`
    query GET_CHARACTER_ID {
      character(id: ${id}) {
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
  `;
  const { data, loading } = useQuery(GET_CHARACTER_ID, {
    variables: { id: id },
  });
  console.log(data);
  return (
    <Layout>
      {!loading ? (
        <div className="flex justify-center w-full h-screen">
          {" "}
          <DetailCard
            key={data?.character?.id}
            id={data?.character?.id}
            name={data?.character?.name}
            status={data?.character?.status}
            image={data?.character?.image}
            species={data?.character?.species}
            location={data?.character?.location.name}
            origin={data?.character?.origin.name}
          />
        </div>
      ) : (
        <div className="h-screen">
          <UseDetailSkeleton />
        </div>
      )}
    </Layout>
  );
};

export default Character;
