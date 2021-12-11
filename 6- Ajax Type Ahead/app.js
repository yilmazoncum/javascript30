const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector("input");
const suggestions = document.querySelector(".suggestions");


const cities = [];

fetch(endpoint)
    .then(res => res.json())
    .then(data => cities.push(...data));

input.addEventListener('input',displayMatches);

function search(value) {
    return cities.filter(place => {
        const regex = new RegExp(value,'gi');
        
        if(place.city.match(regex) !=null ||place.state.match(regex) !=null ){
            return place.city + place.state
        }
    })

}

function displayMatches() {
    const matchArr = search(input.value);

    

    const html = matchArr.map(place => {

        const regex = new RegExp(input.value,'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${input.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${input.value}</span>`);

        return `
        <li>
            <span class="name"> ${cityName},${stateName},<span>
            <span class="population"> ${place.population}<span>
        </li>
        `;
    }).join('');

    suggestions.innerHTML = html;
}
