const axios = require("axios");

const fetchMovies = async () => {
    try {
        //* le paso como primer argumento la URL y como segundo argumento los parametros de la solicitud
        const data = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',{
            async: true,
            crossDomain: true,
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjNhZjkyY2M3MzJkYTFjMDJiMWNkZTZjYjk5N2I2ZSIsInN1YiI6IjY1YmVmOWE0ZmM2NTM4MDEzMGU4Y2I0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58zVIB4SwGkqW-3ai1oltGNgEnR-Iw7VaglOBsUFnhc'
            }
        });

        const dataObject = data.data;
        // console.log(dataObject);
        return dataObject     
    } catch (error) {
        return `El motivo de rechazo de la API es: ${error}`;
        // console.log(error);
    }
};

fetchMovies();