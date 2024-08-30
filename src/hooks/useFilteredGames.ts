import { useMemo } from "react";
import useGame, { Game } from "./useGame";

const useFilteredGames = (
  currentGenre: string = "",
  currentPlatform: string = "",
  currentSortOrder: string = "",
  currentSearch: string = ""
) => {
  const { games, isLoading, error } = useGame({ sort_order: currentSortOrder });
  const filteredGames = useMemo(() => {
    let result = games.filter((game) => {
      const genreMatch =
        currentGenre === "All Games" || game.genre === currentGenre;
      const platformMatch =
        currentPlatform === "All Platforms" ||
        game.platform === currentPlatform;

      return genreMatch && platformMatch;
    });
    
    if (currentSearch) {
      result = result.filter((g) => g.title.toLowerCase().includes(currentSearch.toLowerCase()));
    }
    return result;
  }, [games, currentGenre, currentPlatform, currentSortOrder,currentSearch]);

  return { filteredGames, isLoading, error };
};

export default useFilteredGames;
