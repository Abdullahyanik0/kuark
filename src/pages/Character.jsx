import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
//local imports
import Layout from "Layout/Layout";
import { DetailCard } from "components/atoms";
import CardDetailSkeleton from "components/molecules/skeletons/card-detail-skeleton";

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
        gender
        created
        
        origin {
          name
               
        }
        location {
          name
          
        }
        
      }
    }
  `;
  const { data, loading,error } = useQuery(GET_CHARACTER_ID, {
    variables: { id: id },
  });

  const isDataExist = !loading && !error && !!data;
  return (
    <Layout>
      <CardDetailSkeleton loading={loading} count={1} />
      <div className="flex justify-center w-full h-screen">
        {!!isDataExist && (
          <DetailCard
            key={data?.character?.id}
            id={data?.character?.id}
            name={data?.character?.name}
            status={data?.character?.status}
            image={data?.character?.image}
            species={data?.character?.species}
            location={data?.character?.location.name}
            origin={data?.character?.origin.name}
            gender={data?.character?.gender}
            created={data?.character?.created}
          />
        )}
      </div>
    </Layout>
  );
};

export default Character;
