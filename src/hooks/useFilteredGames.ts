import { useMemo } from "react";
import useGame, { Game } from "./useGame";


const useFilteredGames = (
  currentGenre: string = "",
  currentPlatform: string = "",
  currentSortOrder:string=""
) => {
  const { games, isLoading, error } = useGame({sort_order:currentSortOrder});
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const genreMatch =
        currentGenre === "All Games" || game.genre === currentGenre;
      const platformMatch =
        currentPlatform === "All Platforms" ||
        game.platform === currentPlatform;

      return genreMatch && platformMatch;
    });
  }, [games, currentGenre, currentPlatform,currentSortOrder]);


  return { filteredGames, isLoading, error };
};

export default useFilteredGames;
