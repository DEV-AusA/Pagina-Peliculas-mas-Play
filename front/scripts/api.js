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
        return dataApi.data.results     
        
    } catch (error) {
        console.log(error);
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
        // retorno la promesa positiva
        //console.log(dataTR.data.results);
        return dataTR.data.results     
        
    } catch (error) {
        console.log(error);
    }
};

const sugeMovies = async () => {
    try {
        const dataSugeMoviesApi = await axios.get('https://students-api.2.us-1.fl0.io/movies');

        return dataSugeMoviesApi.data;
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    fetchMovies,
    topRanked,
    sugeMovies
};