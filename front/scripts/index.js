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

const newContainerBannerHTML = (object) => {

    const {id, poster, title, year, director, duration, rate} = object;
    
    const divFirstCardBanner = document.createElement('div');
    divFirstCardBanner.classList.add('carousel-item');

    const firstCardBanner = `
                    <div class="container-fluid row p-0 m-0 container-card-bg position-relative">
                        <div class="col-4 ps-5 d-flex align-items-center z-1">
                            <div class="card-movie">
                                <div class="card mb-3 mx-auto d-block shadow-lg bg-dark bg-opacity-50">
                                    <div class="row g-0">
                                        <div class="col-4">
                                            <img class="img-fluid rounded-start" src="${poster}" alt="${title}">
                                        </div>
                                        <div class="col-8">
                                            <div class="card-body text-white pb-0">
                                                <h3 class="card-title fw-bold m-0 mb-4">${title}</h3>
                                                <div class="row align-items-center">
                                                    <div class="col-8">
                                                        <h6 class="m-0 fw-bolder">Release date:</h6>
                                                        <p class="card-text">${year}</p>
                                                        <h6 class="m-0 fw-bolder">Duration:</h6>
                                                        <small>${duration}</small>
                                                        <h6 class="card-title mt-3 mb-0 fw-bolder">Director</h6>
                                                        <p class="card-text">${director}</p>
                                                    </div>
        
                                                    <div class="col-4 text-center">
                                                        <h2 class="card-title">Rate</h2>
                                                        <div class="d-inline-flex justify-content-center">
                                                            <div
                                                                class="d-flex justify-content-center align-items-center bg-warning bg-opacity-25 border border-warning rounded-bottom rate">
                                                                <h3 class="card-text">${rate}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-8 p-0 img-carousel z-0 banner-img img-carousel-${id}">
                            <div id="banner-${id}" class="w-100 h-100 img-fluid">
                            </div>
                        </div>
                    </div>
    `;   
            
    divFirstCardBanner.innerHTML = firstCardBanner;
    return divFirstCardBanner;
};

const newContainerMainHTML = (object) =>{

    const {id, poster, title, year, director, duration, rate} = object;

    const colSeisCardMovie = document.createElement('div');
    colSeisCardMovie.classList.add('col-6', 'card-movie');
    colSeisCardMovie.id = `card-${id}`;

    const divCardMain = `
        <div class="card m-2 mx-auto d-block shadow-lg bg-white bg-opacity-75">
            <div class="row g-0">
                <div class="col-4">
                    <img class="img-fluid rounded-start" src="${poster}" alt="${title}">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h3 class="card-title fw-bold m-0 mb-4">${title}</h3>
                        <div class="row align-items-center">
                            <div class="col-8">
                                <h6 class="m-0 fw-bolder">Release date:</h6>
                                <p class="card-text">${year}</p>
                                <h6 class="m-0 fw-bolder">Duration:</h6>
                                <small class="text-body-secondary">${duration}</small>
                                <h6 class="card-title mt-3 mb-0 fw-bolder">Director</h6>
                                <p class="card-text">${director}</p>
                            </div>
                            <div class="col-4 text-center">
                                <h2 class="card-title">Rate</h2>
                                <div class="d-inline-flex justify-content-center">
                                    <div class="d-flex justify-content-center align-items-center bg-warning bg-opacity-25 border border-warning rounded-bottom rate">
                                        <h3 class="card-text">${rate}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    colSeisCardMovie.innerHTML = divCardMain;
    return colSeisCardMovie;
}

const cargarCardBanner = (array) => {
        
    const cardsBanner = document.getElementById('cards-banner');

    cardsBanner.innerHTML = '';

    const moviesMapeados = array.map(newContainerBannerHTML);

    // activo el primer elemento de banner
    for (const indice in moviesMapeados) {
        if (indice == 0) {
            moviesMapeados[indice].classList.add('active');            
        }        
    }

    moviesMapeados.forEach(divCargado => {
        cardsBanner.appendChild(divCargado);
    });

    // videos
    onYouTubeIframeAPIReady();

};

const cargarCardMain = (array) => {
    
    const container = document.getElementById('container-movies');

    container.innerHTML = '';

    // const repository = object.getAllMovies();
    const moviesMapeados = array.map(newContainerMainHTML);

    moviesMapeados.forEach(divCargado => {
        container.appendChild(divCargado);
    });
};

const agregarCard = ()=> {

    $.get("https://students-api.2.us-1.fl0.io/movies", (data) => {

    let id = 1;

        for (let i = 0; i < data.length; i++) {
            data[i].id = id;
            // repository.createMovie(data[i]);
            cargarCardBanner(data);
            cargarCardMain(data);
            id++;
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

function onYouTubeIframeAPIReady() {
    createPlayer('CaLNiC-bKHQ', 'banner-1');
    createPlayer('vZ734NWnAHA', 'banner-2');
    createPlayer('_nZdmwHrcnw', 'banner-3');
};

function createPlayer(videoId, playerId) {
    var player = new YT.Player(playerId, {
        height: '475',
        width: '1268',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'loop': 1,
            'playlist': videoId,
            'fs': 0,
            'iv_load_policy': 3,
            'title': 0,
            'disablekb': 1
        },
        events: {
            'onReady': function(event) {
                event.target.playVideo();
            }
        }
    });
}
  
 // function que se llama cuando el reproductor está listo
function onPlayerReady(event) {
    event.target.playVideo(); // Inicia la reproducción del video automáticamente
}

const navHomeBtns = document.getElementById('nav-home-btns');
// Obtener los elementos de lista (li) dentro de la lista
const navHomeBtnsA = navHomeBtns.getElementsByTagName("a");

// utilizo forEach para iterar sobre los elementos del Array.from
Array.from(navHomeBtnsA).forEach((a) => {

    a.addEventListener('mouseenter', (event)=>{
        event.target.classList.add('active');
    });
    a.addEventListener('click', (event)=>{
        event.target.classList.add('active');
    });
    a.addEventListener('mouseleave', (event)=>{
        event.target.classList.remove('active');
    });
});