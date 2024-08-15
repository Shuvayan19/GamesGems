import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Spinner } from "@chakra-ui/react";
interface Game {
  id: number;
  title: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    console.log("Fetching games...");
    setLoading(true);
    apiClient
      .get<Game[]>("/xgames")
      .then((res) => {
        setGames(res.data);
        console.log("game fetched...");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      {isloading && <Spinner/>}
      <ul>
      {games && Array.isArray(games) && games.length > 0 ? (
          games.map((g) => <li key={g.id}>{g.title}</li>)
        ) : (
          <p>No games available.</p>
        )}
      </ul>
    </>
  );
};

export default GameGrid;
