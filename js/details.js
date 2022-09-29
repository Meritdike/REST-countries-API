let details = document.querySelector('#details');

let countriesArr = [];

const showCountries = (countriesArr) => {
    result = '';
    countriesArr.forEach(detail => {
        result += `<div class="col-lg-5">
        <img src=${detail.flag} class="img-fluid" alt=${detail.name}>
    </div>
    <div class="col-lg-6 py-4 py-lg-0">
        <div class="row">
            <div class="col-12">
                <h5 class="card-title fw-bold pb-2">${detail.name}</h5>
            </div>
            <div class="col-lg-6">
                <ul class="list-unstyled pb-4">
                    <li class="pb-1 population"><strong>Population:${detail.population}</strong></li>
                    <li class="pb-1 region"><strong>Region:${detail.region}</strong></li>
                    <li class="pb-1 subregion"><strong>Sub Region:${detail.subregion}</strong></li>
                    <li class="capital"><strong>Capital:${detail.capital}</strong></li>
                </ul>
            </div>
            <div class="col-lg-6">
                <ul class="list-unstyled pb-4">
                    <li class="pb-1"><strong>Population:</strong></li>
                    <li class="pb-1"><strong>Region:</strong></li>
                    <li class="pb-1"><strong>Sub Region:</strong></li>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 fw-bold mb-3 mb-lg-0" style="padding: .375rem .75rem;">Border
                Countries: </div>
            <div class="col-lg-7 d-flex">
                <div><button type="button" class="btn btn-details shadow-sm me-2">Light</button></div>
                <div><button type="button" class="btn btn-details shadow-sm me-2">Light</button></div>
                <div><button type="button" class="btn btn-details shadow-sm">Light</button></div>
            </div>
        </div>
    </div>` 
    });

    details.innerHTML = result;
}
showCountries(countriesArr);


function renderDetail() {
    let detailObj = localStorage.getItem('countryDetail');
    let countryDetail = JSON.parse(detailObj);

    document.querySelector('.card-title').innerHTML += countryDetail.name;
    document.querySelector('.population').innerHTML += countryDetail.population;
    document.querySelector('.region').innerHTML += countryDetail.region;
    document.querySelector('.subregion').innerHTML += countryDetail.subregion;
    document.querySelector('.capital').innerHTML += countryDetail.capital;
}

renderDetail();