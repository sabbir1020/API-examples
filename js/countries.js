const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = (countries) =>{
    // const countryElement = document.getElementById('countries')
    const countryElement = document.getElementById('countries')
    
    countries.forEach (country => {
        
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h2>${country.name}</h2>
        <p> ${country.capital}</p>
        <button onclick="loadcountryByName('${country.name}')">Details
        </button>
        `;
        countryElement.appendChild(div)


    });
};
const loadcountryByName = name =>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDatails(data[0]))
        
}
const displayCountryDatails = country =>{
    console.log(country)
    const countrydatails = document.getElementById('country-datails')
    countrydatails.innerHTML= `
    <h5>Name:${country.name}</h5>
    <p>Capital: ${country.capital}</p>
    <p> Population: ${country.population}</p>
     <img width="200px" src="${country.flag}">
    `

}