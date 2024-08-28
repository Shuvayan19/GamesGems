import useGame, { Game } from "./useGame";
import { useMemo } from "react";


// Create a custom hook that returns the list of genres
const useGenreList = (): string[] => {
  const { games } = useGame({}); // Assuming you want all games initially

  // Use `useMemo` to memoize the genre list, preventing recalculation on every render
  return useMemo(() => {
    const genreSet = new Set<string>();
    games.forEach((g) => genreSet.add(g.genre));
    const genreList = Array.from(genreSet);
    const genreNewList = ["All Games", ...genreList];
    return genreNewList;
  }, [games]);
};

export default useGenreList;
