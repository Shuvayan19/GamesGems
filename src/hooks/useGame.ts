import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  title: string;
  thumbnail:string;
  short_description:string;
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    console.log("Fetching games...");
    setLoading(true);

    apiClient
      .get<Game[]>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data);
        console.log("game fetched...");
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError)return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, isloading, error };
};

export default useGame;
