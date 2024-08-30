import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY || '',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  },
});

export default apiClient;
