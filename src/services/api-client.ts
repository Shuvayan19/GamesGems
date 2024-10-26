import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
  },
});
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
    console.log("API Key:", process.env.NEXT_PUBLIC_RAPIDAPI_KEY);
    console.log("API Host:", process.env.NEXT_PUBLIC_RAPIDAPI_HOST);

  }
  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
