import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";

const App = () => {
  const[currentGenre,setCurrentGenre]=useState<string>('');

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
          <GameGrid genre={currentGenre}/>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
