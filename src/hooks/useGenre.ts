import useGame, { Game } from "./useGame";

interface Genre{
  genre:string;
}
const getGenre = ():string[] => {
  const { games } = useGame();
  const genreSet = new Set<string>();
  games.forEach((g) => genreSet.add(g.genre.trim().toLowerCase()));
  const genreList= Array.from(genreSet).map(g=>g.charAt(0).toUpperCase()+g.slice(1)); 
  return genreList;
};
export default getGenre;
