
import {  SimpleGrid, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeletons from "./GameCardSkeletons";

const GameGrid = () => {
  const { games,  isloading, error } = useGame();
  const skeletons=[1,2,3,4,5,6];
  return (
    <>
      {error && <p>{error}</p>}
      {isloading && <Spinner />}
      <SimpleGrid  columns={{base:1,md:2,lg:3,xl:5}} padding="8px" spacing={12}>
      {isloading && skeletons.map(s=><GameCardSkeletons key={s}/>)}
        {games && Array.isArray(games) && games.length > 0 ? (
          games.map((g) => (
            <GameCard
              game={g}
            
            />
          ))
        ) : (
          <p>No games available.</p>
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
