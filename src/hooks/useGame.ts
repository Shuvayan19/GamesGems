import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Game {
  id: number;
  title: string; 
  thumbnail: string;
  short_description: string;
  platform: string;
  game_url: string;
  genre: string;
}
interface param {
  sort_order?: string;
}

const useGame = ({ sort_order = "" }: param) => {
  const endpoint = sort_order ? `/games?sort-by=${sort_order}` : "/games";
  const apiClient = new APIClient<Game>(endpoint);
  return useQuery<Game[], Error>({
    queryKey: ["games", sort_order],
    queryFn: apiClient.getAll,
  });

 
};

export default useGame;
