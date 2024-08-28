import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import PlatformList from "./Components/PlatformList";
import SortList from "./Components/SortList";


const App = () => {
  const [currentGenre, setCurrentGenre] = useState<string>("All Games");
  const [currentPlatform, setPlatform] = useState<string>("All Platforms");
  const [currentSortOrder, setSortOrder] = useState<string>();
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
          <NavBar />
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
          <HStack>
            <SortList onSortOrderChange={(s) => setSortOrder(s)} sortOrder={currentSortOrder}/>
            <PlatformList
              platform={currentPlatform}
              onPlatformChange={(p) => setPlatform(p)}
            />
          </HStack>
          <GameGrid
            genre={currentGenre}
            platform={currentPlatform}
            sortOrder={currentSortOrder}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
