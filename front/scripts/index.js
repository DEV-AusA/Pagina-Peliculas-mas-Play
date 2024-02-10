// const {
//     cargarCardBanner,
//     cargarCardMain
// } = require("../../back/functions");

// cada video con su ID
function onYouTubeIframeAPIReady() {
    createPlayer('CaLNiC-bKHQ', 'banner-1');
    createPlayer('vZ734NWnAHA', 'banner-2');
    createPlayer('_nZdmwHrcnw', 'banner-3');
};

// function que agrega videos al div con id anterior
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

const cargarCardBanner = (items) => {
        
    const cardsBanner = document.getElementById('cards-movies-banner');

    //cardsBanner.innerHTML = '';

    //const moviesMapeados = array.map(newContainerBannerHTML);
    const moviesMapeados = newContainerBannerHTML(items);

    // // activo el primer elemento de banner
    // for (const indice in moviesMapeados) {
    //     if (indice == 0) {
    //         moviesMapeados[indice].classList.add('active');            
    //     }        
    // }
    cardsBanner.appendChild(moviesMapeados);

    // moviesMapeados.forEach(divCargado => {
    //     cardsBanner.appendChild(divCargado);
    // });

    // videos
    //onYouTubeIframeAPIReady();

};

const cargarCardMain = (items) => {
    
    const container = document.getElementById('container-movies');

    //container.innerHTML = '';

    // const repository = object.getAllMovies();

    //const moviesMapeados = array.map(newContainerMainHTML);
    const moviesMapeados = newContainerMainHTML(items);

    // moviesMapeados.forEach(divCargado => {
    //     container.appendChild(divCargado);
    // });
    container.appendChild(moviesMapeados);
};

const newContainerBannerHTML = (object) => {

    const {id, poster, posterBg, title, year, overview, rate} = object;
    
    const divFirstCardBanner = document.createElement('div');
    divFirstCardBanner.classList.add('movie-preview');

    let firstCardBanner = ``;

    if (id % 2 === 1) {
        firstCardBanner = `
        <div class="container-fluid p-0 card text-bg-dark">
            <img class="id="banner-${id} img-fluid" src="${posterBg}" alt="${title}">

            <div class="card-img-overlay ps-5 d-flex justify-content-start align-items-center z-1">
                <div class="col-6 card-movie">
                    <div class="card mb-3 d-block shadow-lg bg-dark bg-opacity-50">
                        <div class="row g-0">
                            <div class="col-4 d-flex">
                                <img class="img-fluid rounded-start" src="${poster}" alt="${title}">
                            </div>                         
                            <div class="col-8">
                                <div class="card-body text-white pb-0">
                                    <h1 class="card-title fw-bold m-0 mb-4 text-start">${title}</h1>
                                    <div class="row align-items-center">
                                        <div class="col-8 text-start pb-4 d-grid">
                                            <h6 class="m-0 fw-bolder">Release date:</h6>
                                            <p class="card-text">${year}</p>
                                            <h6 class="m-0 fw-bolder">Duration:</h6>
                                            <small></small>
                                            <h6 class="card-title mt-3 mb-0 fw-bolder">Overview</h6>
                                            <p class="card-text">${overview}</p>
                                        </div>
                                        <div class="col-4 text-center">
                                            <h1 class="card-title">Rate</h1>
                                            <div class="d-inline-flex justify-content-center">
                                                <div class="d-flex justify-content-center align-items-center rounded-bottom rate">
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
        </div>    
    `;
    
    } else {
        firstCardBanner = `
        <div class="container-fluid p-0 card text-bg-dark">
            <img class="id="banner-${id} img-fluid" src="${posterBg}" alt="${title}">

            <div class="card-img-overlay pe-5 d-flex justify-content-end align-items-center z-1">
                <div class="col-6 card-movie">
                    <div class="card mb-3 d-block shadow-lg bg-dark bg-opacity-50">
                        <div class="row g-0">                            
                            <div class="col-8">
                                <div class="card-body text-white pb-0">
                                    <h1 class="card-title fw-bold m-0 mb-4 text-end">${title}</h1>
                                    <div class="row align-items-center">
                                        <div class="col-4 text-center">
                                            <h1 class="card-title">Rate</h1>
                                            <div class="d-inline-flex justify-content-center">
                                                <div class="d-flex justify-content-center align-items-center rounded-bottom rate">
                                                    <h3 class="card-text">${rate}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-8 text-end pb-4 d-grid">
                                            <h6 class="m-0 fw-bolder">Release date:</h6>
                                            <p class="card-text">${year}</p>
                                            <h6 class="m-0 fw-bolder">Duration:</h6>
                                            <small></small>
                                            <h6 class="card-title mt-3 mb-0 fw-bolder">Overview</h6>
                                            <p class="card-text">${overview}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 d-flex">
                                <img class="img-fluid rounded-start" src="${poster}" alt="${title}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>                     
        </div>
    
    `;
    }
                
    divFirstCardBanner.innerHTML = firstCardBanner;
    return divFirstCardBanner;
};

const newContainerMainHTML = (object) =>{

    const {id, poster, title, year, rate} = object;

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
                                <small class="text-body-secondary"></small>
                                <h6 class="card-title mt-3 mb-0 fw-bolder">Director</h6>
                                <p class="card-text">$</p>
                            </div>
                            <div class="col-4 text-center">
                                <h2 class="card-title">Rate</h2>
                                <div class="d-inline-flex justify-content-center">
                                    <div class="d-flex justify-content-center align-items-center rounded-bottom rate">
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

const rateColor = () => {

    // obtengo todas las clases rate
    const divRates = document.getElementsByClassName('rate');
    // lo convierto a un array con Array.from(), itero sobre cada divH3
    Array.from(divRates).forEach((divH3) => {
        // obtengo el valor de  h3 de cada divH3
        const rateString = divH3.querySelector('h3').innerText;
        // convierto el string en numero
        const rate = parseInt(rateString);

        // aplico valores segun su condicion
        if (rate < 45) {
            divH3.classList.add('rate-low');
        } else if (rate >= 45 && rate < 70) {
            divH3.classList.add('rate-mid');
        } else {
            divH3.classList.add('rate-full');
        }
    });    
}

const bntsNavHoverActive = () => {
    const navHomeBtns = document.getElementById('nav-home-btns');
    // Obtener los elementos de lista (li) dentro de la lista
    const navHomeBtnsA = navHomeBtns.getElementsByTagName("a");

    // utilizo forEach para iterar sobre los elementos del Array.from
    Array.from(navHomeBtnsA).forEach((a) => {

        a.addEventListener('mouseenter', (event)=>{
            event.target.classList.add('active');
        });
        a.addEventListener('mouseleave', (event)=>{
            event.target.classList.remove('active');
        });
    });
};

const agregarCard = ()=> {

    // $.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
            
    //let id = 1;
    //     for (let i = 0; i < data.length; i++) {
    //         data[i].id = id;
    //         // repository.createMovie(data[i]);
    //         cargarCardBanner(data);
    //         cargarCardMain(data);
    //         id++;
    //     }
        
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

    // obtengo maximo de 20 peliculas - se puede cambiar
    for (let i = 0; i < 20; i++) {

        $.ajax(settings).done((data) => {

            let id = i;
            // destructuro valores de propiedades xq JS tiene problemas con nombres con _ como 'poster_path' y 'release_date'
            //const id = data['results'][i]['id'];
            const image = data['results'][i]['poster_path'];
            const imageBg = data['results'][i]['backdrop_path'];
            const title = data['results'][i]['title'];
            const year = data['results'][i]['release_date'];
            const overview = data['results'][i]['overview'];
            const rate = Math.floor(data['results'][i]['vote_average']*10);

            const poster = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+ image;
            const posterBg = 'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces'+ imageBg;
            id++;
            const dataPura = {id, poster, posterBg, title, year, overview, rate};
            
            cargarCardBanner(dataPura);
            cargarCardMain(dataPura);
            rateColor();
        });
             
    }
};

// const axios = require("axios");

// const fetchMovies = async () => {
//     try {
//         //* le paso como primer argumento la URL y como segundo argumento los parametros de la solicitud
//         const dataApi = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',{
//             async: true,
//             crossDomain: true,
//             method: 'GET',
//             headers: {
//               accept: 'application/json',
//               Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjNhZjkyY2M3MzJkYTFjMDJiMWNkZTZjYjk5N2I2ZSIsInN1YiI6IjY1YmVmOWE0ZmM2NTM4MDEzMGU4Y2I0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58zVIB4SwGkqW-3ai1oltGNgEnR-Iw7VaglOBsUFnhc'
//             }
//         });

//         const data = dataApi.data;

//         console.log(data);

//         for (let i = 0; i < data.length; i++) {

//             let id = i;
//             // destructuro valores de propiedades xq JS tiene problemas con nombres con _ como 'poster_path' y 'release_date'
//             //const id = data['results'][i]['id'];
//             const image = data[i]['poster_path'];
//             const imageBg = data[i]['backdrop_path'];
//             const title = data[i]['title'];
//             const year = data[i]['release_date'];
//             const overview = data[i]['overview'];
//             const rate = Math.floor(data[i]['vote_average']*10);

//             const poster = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+ image;
//             const posterBg = 'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces'+ imageBg;
//             id++;
//             const dataPura = {id, poster, posterBg, title, year, overview, rate};
            
//             cargarCardBanner(dataPura);
//             cargarCardMain(dataPura);
//             rateColor();
            
//         }
//         // return dataObject     
//     } catch (error) {
//         return `El motivo de rechazo de la API es: ${error}`;
//     }
// };

agregarCard();
bntsNavHoverActive();
// fetchMovies();
  


