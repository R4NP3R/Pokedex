const PokemonList = document.getElementById('pokemonList')
const pokemonDetailList = document.getElementById('pokemonDetailList')
const PokedexButton = document.getElementById('pokedexButton')
const detailPokedexButton = document.getElementById('detailPokedexButton')
const loadMoreButton = document.getElementById('button2')


function createHtmlContent (offset, limit, typeList, htmlList) {
  return pokeApi.getPokemons(offset, limit).then((pokemons = []) => pokemons.map((pokemon) => {
    typeList.innerHTML += htmlList(pokemon)
  }))
}

createHtmlContent(0, 4, PokemonList, pages.pokemonListHtml)
createHtmlContent(0, 4, pokemonDetailList, pages.pokemonDetailListHtml)

function changeDisplayElement (elementClass, elementID, display) {
  elementClass = document.getElementsByClassName(elementClass)

  for (let i = 0; i < elementClass.length; i++) {
    elementClass[i].style.display = 'none'
  }
  document.getElementById(elementID).style.display = display
}


detailPokedexButton.addEventListener('click', function() {
  changeDisplayElement('pokemons','pokemonDetailList','grid')
})

PokedexButton.addEventListener('click', function() {
  changeDisplayElement('pokemons','pokemonList','grid')
})

let offset = 0
const limit = 4
const maxRecords = 151


loadMoreButton.addEventListener('click', () => {
  offset += limit
  const nextPageValue = offset + limit
  if (nextPageValue >= maxRecords) {
    const newLimit = maxRecords - offset
    createHtmlContent(offset, newLimit, PokemonList, pages.pokemonListHtml)
    createHtmlContent(offset, newLimit, pokemonDetailList, pages.pokemonDetailListHtml)
    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else{
    createHtmlContent(offset, limit, PokemonList, pages.pokemonListHtml)
    createHtmlContent(offset, limit, pokemonDetailList, pages.pokemonDetailListHtml)
  }
})

