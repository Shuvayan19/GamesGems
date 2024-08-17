
import {  SimpleGrid, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games,  isloading, error } = useGame();
  return (
    <>
      {error && <p>{error}</p>}
      {isloading && <Spinner />}
      <SimpleGrid  columns={{base:1,md:2,lg:3,xl:5}} padding="8px" spacing={12}>
        {games && Array.isArray(games) && games.length > 0 ? (
          games.map((g) => (
            <GameCard
              key={g.id}
              id={g.id}
              thumbnail={g.thumbnail}
              title={g.title}
              short_description={g.short_description}
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
