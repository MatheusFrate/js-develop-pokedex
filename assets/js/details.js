// Obter os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const number = urlParams.get('number');
const name = urlParams.get('name');
const types = urlParams.get('types').split(', ');
const photo = urlParams.get('photo');

const detailContainer = document.querySelector('.detail-container');

function getDetalhe(number) {
    pokeApi.POkemon(number).then((pokemons) => {
        console.log(pokemons);
        document.getElementById('abilities').innerHTML = pokemons.abilities.map(ability => `<li class="type ${ability}">${ability.ability.name}</li>`).join('');
    })
}
getDetalhe();


// Define a cor de fundo com base no tipo do Pokémon
const typeColors = {
    normal: '#a6a877',
    grass: '#77c850',
    fire: '#ee7f30',
    water: '#678fee',
    electric: '#f7cf2e',
    ice: '#98d5d7',
    ground: '#dfbf69',
    flying: '#a98ff0',
    poison: '#a040a0',
    fighting: '#bf3029',
    psychic: '#f65687',
    dark: '#725847',
    rock: '#b8a137',
    bug: '#a8b720',
    ghost: '#6e5896',
    steel: '#b9b7cf',
    dragon: '#6f38f6',
    fairy: '#f9aec7'
};

// Verifica se o tipo existe no mapeamento
if (types[0] in typeColors) {
    // Define a cor de fundo do elemento
    detailContainer.style.backgroundColor = typeColors[types[0]];
}
// Exibir os detalhes do Pokémon usando os parâmetros recuperados
document.getElementById('number').innerText = `#${number}`;
document.getElementById('name').innerText = name;
document.getElementById('types').innerHTML = types.map(type => `<li class="type ${type}">${type}</li>`).join('');
document.getElementById('photo').src = photo;

