const url = "https://restcountries.com/v2/all";
const countries = document.getElementById('countries')
const toggle = document.querySelector('.mode')
const searchInput = document.querySelector('.search')
const filterBtn = document.querySelector('.dropdown-menu')
const filterRegion = filterBtn.querySelectorAll('li')

console.log (url)

countriesArr = [];

const showCountries = (countriesArr) => {
    result = '';
    for (let i = 0; i < countriesArr.length; i++) {
        result += `<div class="col-lg-3 col-md-4 col-12 my-3">
        <div class="card border-0 shadow-sm h-100">
          <img src=${countriesArr[i].flag} class="card-img-top h-100" alt=${countriesArr[i].name}>
          <div class="card-body">
            <h5 class="card-title fw-bold pb-2 country-name">${countriesArr[i].name}</h5>
            <ul class="card-text list-unstyled pb-4">
              <li class="pb-1"><strong>Population: </strong>${countriesArr[i].population}</li>
              <li class="pb-1 country-region"><strong>Region: </strong>${countriesArr[i].region}</li>
              <li><strong>Capital: </strong>${countriesArr[i].capital}</li>
            </ul>
          </div>
        </div>
      </div>`   
    }

    countries.innerHTML = result;
}

// GET COUNTRIES 
async function getCountries() {
//   fetch(url)
// .then(response => response.json())
// .then(data => {
//     console.log(data)
//   countriesArr = data;
//   showCountries(countriesArr);
// });
const response = await fetch(url);
const data = await response.json();
countriesArr = data;
showCountries(countriesArr);
}
getCountries();

// THEME TOGGLE 
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
})

// SEARCH COUNTRY
searchInput.addEventListener('input', e =>{
  let input = e.target.value;

  console.log(input)
  let countryName = document.querySelectorAll('.country-name');

  for (let i = 0; i < countryName.length; i++) {
    if (countryName[i].innerText.toLowerCase().includes(input.toLowerCase())) {

      // COL => CARD => CARD-BODY => COUNTRYNAME
      countryName[i].parentElement.parentElement.parentElement.style.display = 'block';
    }else {
      // COL => CARD => CARD-BODY => COUNTRYNAME
      countryName[i].parentElement.parentElement.parentElement.style.display = 'none';
    }
  }

  // countryName.forEach(name => {
  //   if (name.innerHTML.toLowerCase().includes(input.toLowerCase())) {
  //     name.parentElement.parentElement.parentElement.style.display ='block';
  //   } else {
  //     name.parentElement.parentElement.parentElement.style.display ='none';
  //   }
  // });
})

// FILTER COUNTRY REGIONS

console.log(filterRegion)
console.log('hello')
filterRegion.forEach(filter => {
  filter.addEventListener('click', () => {
    console.log(filter.innerHTML)
    let countryRegion = document.querySelectorAll('.country-region');

    countryRegion.forEach(region => {
      // COL => CARD => CARD-BODY => CARD-TEXT => COUNTRYREGION
      if (region.innerText.includes(filter.innerText) || filter.innerText === 'All') {
        region.parentElement.parentElement.parentElement.parentElement.style.display ='block';
      } else {
        // COL => CARD => CARD-BODY => CARD-TEXT => COUNTRYREGION
        region.parentElement.parentElement.parentElement.parentElement.style.display ='none';
      }
    });
  })
});
// for (let i = 0; i < filterRegion.length; i++) {
//   filterRegion[i].addEventListener('click', () => {
//     console.log(filterRegion[i].innerText)
//     let countryRegion = document.querySelectorAll('.country-region');

//   for (let i = 0; i < countryRegion.length; i++) {
//     if (countryRegion[i].innerText.toLowerCase().includes(filterRegion[i].innerText.toLowerCase())) {

//       // COL => CARD => CARD-BODY => CARD-TEXT => COUNTRYREGION
//       countryRegion[i].parentElement.parentElement.parentElement.parentElement.style.display = 'block';
//     }else {
//       // COL => CARD => CARD-BODY => CARD-TEXT => COUNTRYREGION
//       countryRegion[i].parentElement.parentElement.parentElement.parentElement.style.display = 'none';
//     }
//     }
//   })
// }