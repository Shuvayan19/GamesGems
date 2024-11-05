import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
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
  const gridPadding = useBreakpointValue({ base: 4, lg: 1 });
  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area={"nav"} position={"sticky"} top={0}>
          <NavBar onSearch={(s) => setCurrentSearch(s)} />
        </GridItem>
        <Show above="lg">
          {" "}
          <GridItem
            area={"aside"}
            marginTop={2.5}
            position={"sticky"}
            top="60px"
          >
            <GenreList
              genre={currentGenre}
              onChangeGenre={(genre) => setCurrentGenre(genre)}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"} padding={gridPadding}>
          <Box position="sticky" height="60px" zIndex="10" padding="2px">
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
              <Spacer />
              <Show above={"lg"}>
                <Box paddingRight={5}>
                  <DynamicName
                    genre={currentGenre}
                    platform={currentPlatform}
                  />
                </Box>
              </Show>
            </Flex>
          </Box>
          <Box height="calc(100vh - 60px)" overflowY="scroll" marginTop={4}>
            <GameGrid
              genre={currentGenre}
              platform={currentPlatform}
              sortOrder={currentSortOrder}
              search={currentSearch}
            />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
