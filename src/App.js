import React from "react";
import { MantineProvider } from "@mantine/core";
import { ApolloProvider } from "@apollo/client";

//local imports
import store, { StoreContext } from "context/store-context";
import Routing from "Routing";
import { client } from "./apollo-client";

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <ApolloProvider client={client}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Routing />;
        </MantineProvider>
      </ApolloProvider>
    </StoreContext.Provider>
  );
};

export default App;
