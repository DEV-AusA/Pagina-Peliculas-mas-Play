const {
    cargarCardBanner,
    cargarCardMain
} = require("../../back/functions");

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


