const newContainerBannerHTML = (object) => {

    const {id, poster, title, year, director, duration, rate} = object;
    
    const divFirstCardBanner = document.createElement('div');
    divFirstCardBanner.classList.add('movie-preview');

    let firstCardBanner = ``;

    if (id % 2 === 1) {
        firstCardBanner = `
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
                <div class="col-8 p-0 video-banner-l z-0 banner-img img-carousel-${id}">
                    <div id="banner-${id}" class="w-100 h-100 img-fluid">
                    </div>
                </div>
            </div>
    
    `;
    
    } else {
        firstCardBanner = `
    <div class="container-fluid row p-0 m-0 container-card-bg position-relative">
                <div class="col-8 p-0 video-banner-r z-0 banner-img img-carousel-${id}">
                    <div id="banner-${id}" class="w-100 h-100 img-fluid">
                    </div>
                </div>                
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
            </div>
    
    `;
    }
                
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

module.exports = {
    newContainerBannerHTML,
    newContainerMainHTML
}