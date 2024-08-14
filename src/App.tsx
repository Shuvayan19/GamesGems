import { Grid, GridItem,Show } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}
      >
        <GridItem area={"nav"} bg="blue">
          Navbar
        </GridItem>
        <Show above="lg">
          {" "}
          <GridItem area={"aside"} bg="green">
            Aside
          </GridItem>
        </Show>

        <GridItem area={"main"} bg="red">
          Main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
