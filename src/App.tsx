import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import PlatformList from "./Components/PlatformList";

const App = () => {
  const[currentGenre,setCurrentGenre]=useState<string>('');
  const[currentPlatform,setPlatform]=useState<string>('All Platforms');
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
            <GenreList genre={currentGenre} onChangeGenre={(genre)=>setCurrentGenre(genre)}/>
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <PlatformList platform={currentPlatform} onPlatformChange={p=>setPlatform(p)} />
          <GameGrid genre={currentGenre} platform={currentPlatform}/>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
