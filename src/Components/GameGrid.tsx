import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useFilteredGames from "../hooks/useFilteredGames";
import GameCard from "./GameCard";
import GameCardSkeletons from "./GameCardSkeletons";

interface Props{
  genre?:string;
  platform?:string;
}

const GameGrid = ({genre,platform}:Props) => {
  const { filteredGames, isLoading, error } =useFilteredGames(genre||"",platform||"")
  console.log("Games fetched...",filteredGames.length);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <Spinner />}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
        padding="8px"
        spacing={3}
      >
        {isLoading && skeletons.map((s) => <GameCardSkeletons key={s} />)}
        {filteredGames && Array.isArray(filteredGames) && filteredGames.length > 0 ? (
          filteredGames.map((g) => <GameCard game={g} key={g.id}/>)
        ) : (
          <p>No filteredGames available.</p>
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

