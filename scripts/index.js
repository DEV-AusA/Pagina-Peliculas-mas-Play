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
    /// recieb el objeto completo y solo uso los que necesito declarandolo entre llaves
    createMovie({id, image, title, release, overview}){
        const movie = new Movie(id, image, title, release, overview);
        this.movies.push(movie);
    }
};
const repository = new Repository();

const newContainerHTML = (object) => {

    const {image, title, release, overview} = object;

    //elementos HTML
    const newCard = document.createElement('div');
    const newDivImage = document.createElement('div');
    const newImage = document.createElement('img');
    const newTitle = document.createElement('h2');
    const newDateRelease = document.createElement('h3');
    const newOverview = document.createElement('p');

    const urlImg = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
    // clases
    newCard.classList.add('card-movie');
    newDivImage.classList.add('card-image');
    // cargando contenido
    newImage.src = `${urlImg}${image}`;
    newTitle.textContent = title;
    newDateRelease.textContent = release;
    newOverview.textContent = overview;

    newDivImage.appendChild(newImage);
    newCard.appendChild(newDivImage);
    newCard.appendChild(newTitle);
    newCard.appendChild(newDateRelease);
    newCard.appendChild(newOverview);

    return newCard;
};

// const cardTest = new Movie(1, "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg", "Wonka", "2023-12-06", "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.");

const cargarActividad = (object) => {

    const container = document.getElementById('container-movies');

    container.innerHTML = '';

    const repository = object.getAllMovies();

    const moviesMapeados = repository.map(newContainerHTML);

    moviesMapeados.forEach(divCargado => {
        container.appendChild(divCargado);
    });
};


const agregarCard = ()=> {

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

    // obtengo maximo de 10 peliculas - se puede cambiar
    for (let i = 0; i < 10; i++) {
        $.ajax(settings).done((data) => {

            // destructuro valores de propiedades xq JS tiene problemas con nombres con _ como 'poster_path' y 'release_date'
            const id = data['results'][i]['id'];
            const image = data['results'][i]['poster_path'];
            const title = data['results'][i]['title'];
            const release = data['results'][i]['release_date'];
            const overview = data['results'][i]['overview'];

            const dataPura = {id, image, title, release, overview};

            repository.createMovie(dataPura);
            cargarActividad(repository);
        });        
    }

};
agregarCard();

// $.get("https://api.themoviedb.org/3/movie/550?api_key=223af92cc732da1c02b1cde6cb997b6e", (data) => {
//     console.log(data);
// });
