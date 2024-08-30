import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
  headers: {
    'x-rapidapi-key': 'de65aa4b14msh320427167e02ee7p1075f2jsn1db2396dfdaf',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  },
});

export default apiClient;
