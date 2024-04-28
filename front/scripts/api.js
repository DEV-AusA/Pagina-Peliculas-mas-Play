const axios = require("axios");

const fetchMovies = async () => {
    try {
        //* le paso como primer argumento la URL y como segundo argumento los parametros de la solicitud
        const dataApi = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',{
            async: true,
            crossDomain: true,
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjNhZjkyY2M3MzJkYTFjMDJiMWNkZTZjYjk5N2I2ZSIsInN1YiI6IjY1YmVmOWE0ZmM2NTM4MDEzMGU4Y2I0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58zVIB4SwGkqW-3ai1oltGNgEnR-Iw7VaglOBsUFnhc'
            }
        });
        // retorno la promesa positiva
        const topView = dataApi.data.results.slice(0, 10);

        return topView;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const topRanked = async () => {
    try {
        //* le paso como primer argumento la URL y como segundo argumento los parametros de la solicitud
        const dataTR = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',{
            async: true,
            crossDomain: true,
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjNhZjkyY2M3MzJkYTFjMDJiMWNkZTZjYjk5N2I2ZSIsInN1YiI6IjY1YmVmOWE0ZmM2NTM4MDEzMGU4Y2I0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58zVIB4SwGkqW-3ai1oltGNgEnR-Iw7VaglOBsUFnhc'
            }
        });
        const topTwenty = dataTR.data.results;
        return topTwenty;   
        
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const sugeMovies = async () => {

    const sugeData = [
        {
            id: 1,
            title: "Avengers: Endgame",
            year: 2019,
            director: "Joe Russo",
            duration: "3h 0m",
            genre: ["Action", "Adventure", "Comedy"],
            rate: 7.7,
            poster:
                "https://image.tmdb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        },
        {
            id: 2,
            title: "Oppenheimer",
            year: 2023,
            director: "Christopher Nolan",
            duration: "2h 1min",
            genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
            rate: 8.1,
            poster:
                "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2y48XTa483LRFIb5fDKOwr8DHWz.jpg",
        },
        {
            id: 3,
            title: "The Marvels",
            year: 2023,
            director: "Nia DaCosta",
            duration: "1h 45min",
            genre: ["Action", "Adventure", "Drama", "Fantasy"],
            rate: 6.3,
            poster:
                "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
        },
      ];

      return sugeData;
}

module.exports = {
    fetchMovies,
    topRanked,
    sugeMovies
};