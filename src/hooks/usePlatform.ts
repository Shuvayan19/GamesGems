import useGame, { Game } from "./useGame";
import { useMemo } from "react";

// Create a custom hook that returns the list of genres
const usePlatformList = (): string[] => {
  const { games } = useGame(); // Assuming you want all games initially

  // Use `useMemo` to memoize the genre list, preventing recalculation on every render
  return useMemo(() => {
    const platformSet = new Set<string>();
    games.forEach((g) => platformSet.add(g.platform));
    const platformList = Array.from(platformSet);
    const platformNewList = ["All Platforms", ...platformList];
    return platformNewList;
  }, [games]);
};

export default usePlatformList;
