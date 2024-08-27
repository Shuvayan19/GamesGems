import { useMemo } from "react";
import useGame, { Game } from "./useGame";

const useFilteredGames = (
  currentGenre: string = "",
  currentPlatform: string = ""
) => {
  const { games, isLoading, error } = useGame();
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const genreMatch =
        currentGenre === "All Games" || game.genre === currentGenre;
      const platformMatch =
        currentPlatform === "All Platforms" ||
        game.platform === currentPlatform;

      return genreMatch && platformMatch;
    });
  }, [games, currentGenre, currentPlatform]);

  return { filteredGames, isLoading, error };
};

export default useFilteredGames;
