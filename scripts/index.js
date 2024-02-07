// class Movie{
//     constructor(id, poster, title, year, director, duration, rate){
//         this.id = id;
//         this.poster = poster;
//         this.title = title;
//         this.year = year;
//         this.director = director;
//         this.duration = duration;
//         this.rate = rate;
//     }
// }

// class Repository{
//     constructor(){
//         this.movies = [];
//     }
//     getAllMovies(){
//         return this.movies;
//     }
//     /// recieb el objeto completo y solo uso los que necesito declarandolo entre llaves
//     createMovie({poster, title, year, director, duration, rate}){
//         let id = this.movies.length + 1; // utilizo la longitud de this.movies para usarlo como id a declarar
//         const movie = new Movie(id, poster, title, year, director, duration, rate);
//         this.movies.push(movie);
//     }
// };
// const repository = new Repository();

const newContainerHTML = (object) => {

    const {poster, title, year, director, duration, rate} = object;

    //elementos HTML
    const colSeisCardMovie = document.createElement('div');
    const card = document.createElement('div');
    const rowGcero = document.createElement('div');
    const colCuatro = document.createElement('div');
    const newImage = document.createElement('img');
    const colOcho = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h2');    
    const rowAlignItemsCenter = document.createElement('div');

    const rowColOcho = document.createElement('div');
    const releaseDate = document.createElement('h6');
    const releaseYear = document.createElement('p');
    const durationMovieTitle = document.createElement('h6');
    const durationMovie = document.createElement('small');
    const directorMovie = document.createElement('h6');
    const directorMovieName = document.createElement('p');

    const rowColCuatro = document.createElement('div');    
    const rateMovieTitle = document.createElement('h2');
    const divRateMovieNumberInline = document.createElement('div');
    const divRateMovieNumberDFlex = document.createElement('div');    
    const newRate = document.createElement('h3');

    // clases
    colSeisCardMovie.classList.add('col-6', 'card-movie');
    card.classList.add('card', 'mb-3', 'mx-auto', 'd-block', 'shadow-lg');
    rowGcero.classList.add('row', 'g-0');
    colCuatro.classList.add('col-4');
    newImage.classList.add('img-fluid', 'rounded-start');
    colOcho.classList.add('col-8');
    cardBody.classList.add('card-body');
    cardTitle.classList.add('card-title', 'fw-bold', 'm-0', 'mb-4');
    rowAlignItemsCenter.classList.add('row', 'align-items-center');
    rowColOcho.classList.add('col-8');
    releaseDate.classList.add('m-0', 'fw-bolder');
    releaseYear.classList.add('card-text');
    durationMovieTitle.classList.add('m-0', 'fw-bolder');
    durationMovie.classList.add('text-body-secondary');
    directorMovie.classList.add('card-title', 'mt-3', 'mb-0', 'fw-bolder');
    directorMovieName.classList.add('card-tex');
    rowColCuatro.classList.add('col-4', 'text-center');
    rateMovieTitle.classList.add('card-title');
    divRateMovieNumberInline.classList.add('d-inline-flex', 'justify-content-center');
    divRateMovieNumberDFlex.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'bg-warning', 'bg-opacity-25', 'border', 'border-warning', 'rounded-bottom', 'rate');
    newRate.classList.add('card-text');
    
    // cargando contenido
    newImage.src = poster;
    cardTitle.textContent = title;
    releaseDate.textContent = 'Release date:';
    releaseYear.textContent = year;
    durationMovieTitle.textContent = 'Duration:';
    durationMovie.textContent = duration;    
    directorMovie.textContent = 'Director';
    directorMovieName.textContent = director;
    rateMovieTitle.textContent = 'Rate';        
    newRate.textContent = rate;

    // cargo contenido a los divs
    colCuatro.appendChild(newImage);
    cardBody.appendChild(cardTitle);
    rowColOcho.appendChild(releaseDate);
    rowColOcho.appendChild(releaseYear);
    rowColOcho.appendChild(durationMovieTitle);
    rowColOcho.appendChild(durationMovie);
    rowColOcho.appendChild(directorMovie);
    rowColOcho.appendChild(directorMovieName);
    rowColCuatro.appendChild(rateMovieTitle);
    divRateMovieNumberDFlex.appendChild(newRate);

    colSeisCardMovie.appendChild(card);
    card.appendChild(rowGcero);
    rowGcero.appendChild(colCuatro);
    rowGcero.appendChild(colOcho);
    colOcho.appendChild(cardBody);
    cardBody.appendChild(rowAlignItemsCenter);
    rowAlignItemsCenter.appendChild(rowColOcho);
    rowAlignItemsCenter.appendChild(rowColCuatro);
    rowColCuatro.appendChild(divRateMovieNumberInline);
    divRateMovieNumberInline.appendChild(divRateMovieNumberDFlex);

    return colSeisCardMovie;
};

const cargarActividad = (object) => {

    
    const container = document.getElementById('container-movies');

    container.innerHTML = '';

    // const repository = object.getAllMovies();
    const moviesMapeados = object.map(newContainerHTML);
    console.log(moviesMapeados);

    moviesMapeados.forEach(divCargado => {
        container.appendChild(divCargado);
    });
};


const agregarCard = ()=> {

    $.get("https://students-api.2.us-1.fl0.io/movies", (data) => {

        for (let i = 0; i < data.length; i++) {
            // repository.createMovie(data[i]);
            cargarActividad(data);
        }
        
    });

    // const settings = {
    //     async: true,
    //     crossDomain: true,
    //     url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjNhZjkyY2M3MzJkYTFjMDJiMWNkZTZjYjk5N2I2ZSIsInN1YiI6IjY1YmVmOWE0ZmM2NTM4MDEzMGU4Y2I0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58zVIB4SwGkqW-3ai1oltGNgEnR-Iw7VaglOBsUFnhc'
    //     }
    // };

    // // obtengo maximo de 10 peliculas - se puede cambiar
    // for (let i = 0; i < 10; i++) {
    //     $.ajax(settings).done((data) => {

    //         // destructuro valores de propiedades xq JS tiene problemas con nombres con _ como 'poster_path' y 'release_date'
    //         const id = data['results'][i]['id'];
    //         const image = data['results'][i]['poster_path'];
    //         const title = data['results'][i]['title'];
    //         const release = data['results'][i]['release_date'];
    //         const overview = data['results'][i]['overview'];

    //         const dataPura = {id, image, title, release, overview};

    //         repository.createMovie(dataPura);
    //         cargarActividad(repository);
    //     });        
    // }
};
agregarCard();