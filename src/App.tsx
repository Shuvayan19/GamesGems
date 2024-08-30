import { Box, Flex, Grid, GridItem, HStack, Show, Spacer } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import PlatformList from "./Components/PlatformList";
import SortList from "./Components/SortList";
import DynamicName from "./Components/DynamicName";

const App = () => {
  const [currentGenre, setCurrentGenre] = useState<string>("All Games");
  const [currentPlatform, setPlatform] = useState<string>("All Platforms");
  const [currentSortOrder, setSortOrder] = useState<string>();
  const [currentSearch, setCurrentSearch] = useState<string>();
  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area={"nav"}>
          <NavBar onSearch={(s) => setCurrentSearch(s)} />
        </GridItem>
        <Show above="lg">
          {" "}
          <GridItem area={"aside"}>
            <GenreList
              genre={currentGenre}
              onChangeGenre={(genre) => setCurrentGenre(genre)}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Flex paddingLeft={2} marginY={5}>
            <Box marginRight={3}>
              <SortList
                onSortOrderChange={(s) => setSortOrder(s)}
                sortOrder={currentSortOrder}
              />
            </Box>
            <PlatformList
              platform={currentPlatform}
              onPlatformChange={(p) => setPlatform(p)}
            />
            <Spacer/>
            <Box paddingRight={5}>
              <DynamicName genre={currentGenre} platform={currentPlatform}/>
            </Box>
          </Flex>
          <GameGrid
            genre={currentGenre}
            platform={currentPlatform}
            sortOrder={currentSortOrder}
            search={currentSearch}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
