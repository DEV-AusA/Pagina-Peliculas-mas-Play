const {
    newContainerBannerHTML,
    newContainerMainHTML,
    newCardTrHTML,
    newCardBannerSugeHTML
} = require("./divsHTML");

const {
    onYouTubeIframeAPIReady
} = require("./yt");

const cargarCardBanner = (items) => {
        
    const cardsBanner = document.getElementById('cards-movies-banner');
    const moviesMapeados = newContainerBannerHTML(items);

    cardsBanner.appendChild(moviesMapeados);
};

const cargarCardMain = (items) => {
    
    const container = document.getElementById('container-movies');
    const moviesMapeados = newContainerMainHTML(items);
    container.appendChild(moviesMapeados);
};
const cargarCardTr = (items) => {
    
    const containerMoviesTr = document.getElementById('cards-movies-tr');
    const moviesTrHTML = newCardTrHTML(items);
    containerMoviesTr.appendChild(moviesTrHTML);
};

const cargarCardBannerSuge = (items) => {
        
    const containerBannerSuge = document.getElementById('cards-movies-suge');
    const moviesSugeHTML = newCardBannerSugeHTML(items);
    containerBannerSuge.appendChild(moviesSugeHTML);

    // videos
    onYouTubeIframeAPIReady();
};

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

const rateColorMain = () => {

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

const rateColorTr = () => {

    // obtengo todas las clases rate
    const divRates = document.getElementsByClassName('rate-tr');
    // lo convierto a un array con Array.from(), itero sobre cada divH3
    Array.from(divRates).forEach((divH3) => {
        // obtengo el valor de  h3 de cada divH3
        const rateString = divH3.querySelector('h3').innerText;
        // convierto el string en numero
        const rate = parseInt(rateString);

        // aplico valores segun su condicion
        if (rate < 45) {
            divH3.classList.add('rate-tr-low');
        } else if (rate >= 45 && rate < 70) {
            divH3.classList.add('rate-tr-mid');
        } else {
            divH3.classList.add('rate-tr-full');
        }
    });
}

// declaro las functions a exportar para los test
module.exports = {
    cargarCardBanner,
    cargarCardMain,
    cargarCardTr,
    cargarCardBannerSuge,
    bntsNavHoverActive,
    rateColorMain,
    rateColorTr
};