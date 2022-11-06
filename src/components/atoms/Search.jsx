import React, { useMemo, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Input } from "@mantine/core";
import debouce from "lodash.debounce";
import { SearchCard } from ".";

const Search = () => {
  const [search, setSearch] = useState("");

  const GET_CHARACTER_SEARCH = gql`
    query {
      characters( filter: { name: "${search}" }) {
        info {
          count
          
        }
        results {
          name
          image
          status
          species
          id
          origin{
            name
            
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery(GET_CHARACTER_SEARCH, {
    variables: { name: search },
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 500);
  }, []);

  return (
    <div className="relative">
      <Input
        sx={{
          width: "300px",
        }}
        onChange={debouncedResults}
        placeholder="Search"
      />
      <div className="absolute top-8 w-full px-2 bg-bg text-white">
        {loading ? (
          <p className="p-2">Loading...</p>
        ) : (
          search &&
          (data.length === 0 ? (
            <p className="p-2">No results found.</p>
          ) : (
            data?.characters?.results
              ?.slice(0, 5)
              .map((item) => (
                <SearchCard
                  key={item?.id}
                  id={item?.id}
                  name={item?.name}
                  status={item?.status}
                  species={item?.species}
                  image={item?.image}
                  loading={loading}
                />
              ))
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
