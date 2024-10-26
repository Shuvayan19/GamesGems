import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
});
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
