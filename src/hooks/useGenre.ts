import useGame, { Game } from "./useGame";

interface Genre{
  genre:string;
}
const getGenre = ():string[] => {
  const { games } = useGame("");
  const genreSet = new Set<string>();
  games.forEach((g) => genreSet.add(g.genre));
  const genreList= Array.from(genreSet);
  const genreNewList=['All Games',...genreList]; 
  return genreNewList;
};
export default getGenre;
