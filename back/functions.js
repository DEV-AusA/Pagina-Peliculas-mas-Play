const {
    newContainerBannerHTML,
    newContainerMainHTML
} = require("../back/divsHTML");

const {
    onYouTubeIframeAPIReady
} = require("../back/yt");

const cargarCardBanner = (array) => {
        
    const cardsBanner = document.getElementById('cards-movies-banner');

    cardsBanner.innerHTML = '';

    const moviesMapeados = array.map(newContainerBannerHTML);

    // // activo el primer elemento de banner
    // for (const indice in moviesMapeados) {
    //     if (indice == 0) {
    //         moviesMapeados[indice].classList.add('active');            
    //     }        
    // }

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

// declaro las functions a exportar para los test
module.exports = {
    cargarCardBanner,
    cargarCardMain
};