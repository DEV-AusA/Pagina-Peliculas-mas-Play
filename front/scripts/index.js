const { 
    fetchMovies,
    topRanked,
    sugeMovies
 } = require("./api");

const {
    cargarCardBanner,
    cargarCardMain,
    cargarCardTr,
    cargarCardBannerSuge,
    bntsNavHoverActive,
    rateColorMain,
    rateColorTr
} = require("./functions");

//creo una function para recibir la promesa del API y poder manipular los datos
estrenos = async () => {
    try {
        // espero la respuesta positiva de la promesa en fetchMovies
        const dataApi = await fetchMovies();
        const dataApiTR = await topRanked();
        const dataApiSuge = await sugeMovies();

        // data API 1
        const dataIndex = [];
        // data API 2
        const dataTopRank = [];
        // data API 3
        //const dataSuge = [];

        for (let i = 0; i < dataApi.length; i++) {

            let id = i;
            // destructuro valores de propiedades xq JS tiene problemas con nombres con _ como 'poster_path' y 'release_date'
            //const id = data[i]['id']; // uso una id propia
            const image = dataApi[i]['poster_path'];
            const imageBg = dataApi[i]['backdrop_path'];
            const title = dataApi[i]['title'];
            const year = dataApi[i]['release_date'];
            const overview = dataApi[i]['overview'];
            const rate = Math.floor(dataApi[i]['vote_average']*10);
    
            const poster = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+ image;
            const posterBg = 'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces'+ imageBg;
            id++;
            const dataPura = {id, poster, posterBg, title, year, overview, rate};

            dataIndex.push(dataPura);                      
        }

        for (let i = 0; i < dataApiTR.length; i++) {

            let id = i;
            //const id = data[i]['id']; // uso una id propia
            const image = dataApiTR[i]['poster_path'];
            const imageBg = dataApiTR[i]['backdrop_path'];
            const title = dataApiTR[i]['title'];
            const year = dataApiTR[i]['release_date'];
            const overview = dataApiTR[i]['overview'];
            const rate = Math.floor(dataApiTR[i]['vote_average']*10);
    
            const poster = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+ image;
            const posterBg = 'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces'+ imageBg;
            id++;
            const dataTR = {id, poster, posterBg, title, year, overview, rate};
            
            dataTopRank.push(dataTR);       
        }

        let id = 0;

        // index
        if (document.getElementById('body-index')) {
            
            dataIndex.forEach((movie) => cargarCardBanner(movie));
            dataIndex.forEach((movie) => cargarCardMain(movie));
            rateColorMain(); 
        }
        // topRank
        else if (document.getElementById('body-top-rank')) {
            dataTopRank.forEach((movie) => cargarCardTr(movie));
            rateColorTr();
            dataIndex.forEach((movie) => cargarCardMain(movie));
            rateColorMain();
        }
        // suge
        else if (document.getElementById('body-suge')) {
            dataApiSuge.forEach((movie) => {
                id++;
                movie.id = id;
                cargarCardBannerSuge(movie);
            });
            dataIndex.forEach((movie) => cargarCardMain(movie));
            rateColorMain();
        }
        
    } catch (error) {
        console.log(error);
        throw error;
        
    }
};
estrenos();
bntsNavHoverActive();


