import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  platform: string;
  game_url: string;
  genre: string;
}
interface param{
  sort_order?:string;
}
const useGame = ({sort_order=''}:param) => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const params = new URLSearchParams();
    if (sort_order) {
      params.append('sort-by', sort_order); // Ensure encoding
    }

    const queryString = params.toString() ? `?${params.toString()}` : '';
    const url = `/games${queryString}`;
    apiClient
      .get<Game[]>(url, { signal: controller.signal })
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [sort_order]);

  return { games, isLoading, error };
};

export default useGame;
