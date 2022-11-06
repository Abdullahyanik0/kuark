import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

//local imports
import store, { StoreContext } from "context/store-context";
import Routing from "Routing";
import { client } from "./apollo-client";

const App = () => {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (theme = colorScheme) =>
    setColorScheme((theme = colorScheme === "dark" ? "light" : "dark"));

  return (
    <StoreContext.Provider value={store}>
      <ApolloProvider client={client}>
        <MantineProvider
          theme={{ colorScheme: colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <Routing />;
          </ColorSchemeProvider>
        </MantineProvider>
      </ApolloProvider>
    </StoreContext.Provider>
  );
};

export default App;
