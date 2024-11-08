import axios from 'axios';

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGI0MzdhNTQ0YTY1ZGYwNTE4YWIxYTc3NzQ3MzBhMCIsIm5iZiI6MTczMTA3ODQxMS4wMDg4NDUzLCJzdWIiOiI2NzJkZGNkNmQ5OGJiYzM5NzdhZDRjOWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wpqxAv0T7l3stQ7x3aDB-y9z2vElHA02ipLnqu47DKg'
      }
})

export default instance;