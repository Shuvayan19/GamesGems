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

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<Game[]>("/games", { signal: controller.signal })
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
  }, []);

  return { games, isLoading, error };
};

export default useGame;
