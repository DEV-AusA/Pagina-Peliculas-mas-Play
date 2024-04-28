const newContainerBannerHTML = (object) => {

    const {id, poster, posterBg, title, year, overview, rate} = object;
    
    const divFirstCardBanner = document.createElement('div');
    divFirstCardBanner.classList.add('movie-preview');

    let firstCardBanner = ``;

    if (id % 2 === 1) {
        firstCardBanner = `
        <div class="container-fluid p-0 card text-bg-dark">
            <img class="img-fluid fixed-height" id="banner-${id}" src="${posterBg}" alt="${title}">

            <div class="card-img-overlay ps-xl-5 d-flex justify-content-xl-start justify-content-center align-items-center align-items-xl-center z-1">
                <div class="col-md-6 card-movie">
                    <div class="mb-3 d-block shadow-lg bg-dark bg-opacity-50">
                        <div class="row g-0">
                            <div class="col-md-4 d-flex justify-content-center">
                                <a href="#card-${id}">
                                    <img class="img-fluid rounded-1" src="${poster}" alt="${title}">
                                </a>
                            </div>                         
                            <div class="col-md-8 description">
                                <div class="card-body text-white pb-0">
                                    <h1 class="card-title fw-bold m-0 mb-4 text-start">${title}</h1>
                                    <div class="row align-items-center align-baseline">
                                        <div class="col-xl-9 text-start pb-4 d-grid">
                                            <h6 class="m-0 fw-bolder">Release date:</h6>
                                            <p class="card-text">${year}</p>
                                            <h6 class="m-0 fw-bolder">Duration:</h6>
                                            <small>1h 30min</small>
                                            <h6 class="card-title mt-3 mb-0 fw-bolder">Overview</h6>
                                            <p class="card-text">${overview}</p>
                                        </div>
                                        <div class="col-xl-3 col-sm text-center">
                                            <h1 class="card-title">Rate</h1>
                                            <div class="d-inline-flex justify-content-center mb-2">
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
            <img class="img-fluid fixed-height" id="banner-${id}" src="${posterBg}" alt="${title}">

            <div class="card-img-overlay ps-xl-5 d-flex justify-content-xl-end justify-content-center align-items-center align-items-xl-center z-1">
                <div class="col-md-6 card-movie">
                    <div class="mb-3 d-block shadow-lg bg-dark bg-opacity-50">
                        <div class="row g-0">                        
                            <div class="col-md-8 description">
                                <div class="card-body text-white pb-0">
                                    <h1 class="card-title fw-bold m-0 mb-4 text-end">${title}</h1>
                                    <div class="row align-items-center align-baseline">
                                        <div class="col-xl-3 col-sm text-center">
                                            <h1 class="card-title">Rate</h1>
                                            <div class="d-inline-flex justify-content-center mb-2">
                                                <div class="d-flex justify-content-center align-items-center rounded-bottom rate">
                                                    <h3 class="card-text">${rate}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-9 text-start pb-4 d-grid">
                                            <h6 class="m-0 fw-bolder">Release date:</h6>
                                            <p class="card-text">${year}</p>
                                            <h6 class="m-0 fw-bolder">Duration:</h6>
                                            <small>1h 30min</small>
                                            <h6 class="card-title mt-3 mb-0 fw-bolder">Overview</h6>
                                            <p class="card-text">${overview}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex justify-content-center">
                                <a href="#card-${id}">
                                <img class="img-fluid rounded-1" src="${poster}" alt="${title}">
                                </a>
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

    const {id, poster, posterBg, title, year, overview, rate} = object;
    // const {id, poster, title, year, rate } = object;

    const colSeisCardMovie = document.createElement('div');
    colSeisCardMovie.classList.add('col-lg-6', 'card-movie');
    colSeisCardMovie.id = `card-${id}`;

    const divCardMain = `
        <div class="card m-2 mx-auto d-block shadow-lg bg-white bg-opacity-75">
            <div class="row g-0">
                <div class="col-lg-4 d-flex justify-content-center">
                    <img class="img-fluid rounded-start" src="${poster}" alt="${title}">
                </div>
                <div class="col-lg-8">
                    <div class="card-body">
                        <h3 class="card-title fw-bold m-0 mb-4">${title}</h3>
                        <div class="row align-items-center">
                            <div class="col-9">
                                <h6 class="m-0 fw-bolder">Release date:</h6>
                                <p class="card-text">${year}</p>
                                <h6 class="card-title mt-3 mb-0 fw-bolder">Descripcion:</h6>
                                <p class="card-text-vw">${overview}</p>
                            </div>
                            <div class="col-3 text-center">
                                <h2 class="card-title">Rate</h2>
                                <div class="d-inline-flex justify-content-center rate-adjust">
                                    <div class="d-flex justify-content-center align-items-center rounded-bottom rate">
                                        <h3 class="card-text card-text">${rate}</h3>
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

const newCardTrHTML = (object) =>{

    const {id, poster, title, year, rate} = object;

    const cardModieTr = document.createElement('div');
    cardModieTr.classList.add('card', 'col-lg-2', 'col-md-3', 'col-sm-4', 'mt-3', 'mx-2', 'p-0', 'pb-2', 'shadow', 'card-movie');
    cardModieTr.id = `card-tr-${id}`;

    const divCarTr = `
                <img src="${poster}" class="card-img-top" alt="...">
                    <div class="p-0 card-txt-tr">                        
                        <div class="col-12 d-flex">
                            <div class="col-4 card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${year}</p>                      
                            </div>
                            <div class="col-4 text-center d-flex justify-content-center align-items-start pt-3">
                                <div class="d-inline-flex">
                                    <div class="d-flex justify-content-center align-items-center rounded-5 rate-tr">
                                        <h3 class="card-text">${rate}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-primary">Miralo en +Play</a>
                    </div>     
    `;
    
    cardModieTr.innerHTML = divCarTr;
    return cardModieTr;
}

const newCardBannerSugeHTML = (object) => {

    const {id, poster, title, year, director, duration, rate} = object;
    
    const divCardBannerSuge = document.createElement('div');
    divCardBannerSuge.classList.add('movie-preview');

    let cardBannerSuge = ``;

    // if (id % 2 === 1) {
        cardBannerSuge = `
        <div class="container-fluid row p-0 m-0 container-card-bg position-relative">                
            <div class="col-lg-4 ps-lg-5 mt-1 d-flex align-items-center z-1">
                <div class="card-movie">
                    <div class="card mb-3 mx-auto d-block shadow-lg bg-light bg-opacity-50">
                        <div class="row g-0">
                            <div class="col-lg-4 col-md-4 d-inline-flex justify-content-center">
                                <img class="img-fluid rounded-2" src="${poster}" alt="${title}">
                            </div>
                            <div class="col-lg-8 col-md-8">
                                <div class="card-body text-white pb-0">
                                    <h3 class="card-title fw-bold m-0 mb-4">${title}</h3>
                                    <div class="row align-items-center">
                                        <div class="col-lg-8">
                                            <h6 class="m-0 fw-bolder">Release date:</h6>
                                            <p class="card-text">${year}</p>
                                            <h6 class="m-0 fw-bolder">Duration:</h6>
                                            <small>${duration}</small>
                                            <h6 class="card-title mt-3 mb-0 fw-bolder">Director</h6>
                                            <p class="card-text">${director}</p>
                                        </div>

                                        <div class="col-lg-4 text-center">
                                            <h2 class="card-title">Rate</h2>
                                            <div class="d-inline-flex justify-content-center rate-adjust">
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
                </div>
            </div>
            <div class="col-lg-8 p-0 z-0 banner-img img-carousel-${id}">
                <div id="banner-${id}" class="w-100 h-100 img-fluid">
                </div>
            </div>
        </div>
    
        `;
    
    // } else {
    //     cardBannerSuge = `
    //     <div class="container-fluid row p-0 m-0 container-card-bg position-relative">
    //         <div class="col-lg-8 p-0 z-0 banner-img img-carousel-${id}">
    //             <div id="banner-${id}" class="w-100 h-100 img-fluid">
    //             </div>
    //         </div>                
    //         <div class="col-lg-4 ps-lg-5 mt-1 d-flex align-items-center z-1">
    //             <div class="card-movie">
    //                 <div class="card mb-3 mx-auto d-block shadow-lg bg-light bg-opacity-50">
    //                     <div class="row g-0">
    //                         <div class="col-lg-4 col-md-4 d-inline-flex justify-content-center">
    //                             <img class="img-fluid rounded-start" src="${poster}" alt="${title}">
    //                         </div>
    //                         <div class="col-lg-8 col-md-8">
    //                             <div class="card-body text-white pb-0">
    //                                 <h3 class="card-title fw-bold m-0 mb-4">${title}</h3>
    //                                 <div class="row align-items-center">
    //                                     <div class="col-lg-8">
    //                                         <h6 class="m-0 fw-bolder">Release date:</h6>
    //                                         <p class="card-text">${year}</p>
    //                                         <h6 class="m-0 fw-bolder">Duration:</h6>
    //                                         <small>${duration}</small>
    //                                         <h6 class="card-title mt-3 mb-0 fw-bolder">Director</h6>
    //                                         <p class="card-text">${director}</p>
    //                                     </div>

    //                                     <div class="col-lg-4 text-center">
    //                                         <h2 class="card-title">Rate</h2>
    //                                         <div class="d-inline-flex justify-content-center rate-adjust">
    //                                             <div class="d-flex justify-content-center align-items-center bg-warning bg-opacity-25 border border-warning rounded-bottom rate">
    //                                                 <h3 class="card-text">${rate}</h3>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>                
    //     </div>
    
    //      `;
    // }
                
    divCardBannerSuge.innerHTML = cardBannerSuge;
    return divCardBannerSuge;
};

module.exports = {
    newContainerBannerHTML,
    newContainerMainHTML,
    newCardTrHTML,
    newCardBannerSugeHTML
}