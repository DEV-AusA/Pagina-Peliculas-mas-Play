class Movie{
    constructor(id, image, title, release, overview){
        this.id = id;
        this.image = image;
        this.title = title;
        this.release = release;
        this.overview = overview;
    }
}

class Repository{
    constructor(){
        this.movies = [];
    }
    getAllMovies(){
        return this.movies;
    }
    createMovie(object){
        const {id, image, title, release, overview} = object;
        const movie = new Movie(id, image, title, release, overview);
        this.movies.push(movie);
    }
    addMovie(){
    }
};
const repository = new Repository();

const newContainerHTML = () => {
    const container = document.getElementById('contenedor-movies');

    const newCard = document.createElement('div');
    const newImage = document.createElement('img');
    const newTitle = document.createElement('h2');
    const newDateRelease = document.createElement('h3');
    const newOverview = document.createElement('p');
};

// $.get("https://api.themoviedb.org/3/movie/550?api_key=223af92cc732da1c02b1cde6cb997b6e", (data) => {
//     console.log(data);
// });

const settings = {
    async: true,
    crossDomain: true,
    url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjNhZjkyY2M3MzJkYTFjMDJiMWNkZTZjYjk5N2I2ZSIsInN1YiI6IjY1YmVmOWE0ZmM2NTM4MDEzMGU4Y2I0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58zVIB4SwGkqW-3ai1oltGNgEnR-Iw7VaglOBsUFnhc'
    }
};
  
$.ajax(settings).done((data) => {
    console.log(data.results);
});