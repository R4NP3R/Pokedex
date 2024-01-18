const pokeApi = {}

function convertPokeApiToPokemon (pokemonDetail) {
  const pokemon = new Pokemon();

  pokemon.number = pokemonDetail.id
  pokemon.name = pokemonDetail.name
  pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default

  const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types
  pokemon.types = types
  pokemon.type = type

  const abilities = pokemonDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
  const [ability] = abilities
  pokemon.abilities = abilities
  pokemon.ability = ability

  pokemon.height = pokemonDetail.height
  pokemon.weight = pokemonDetail.weight
  pokemon.hp = pokemonDetail.stats[0].base_stat
  pokemon.attack = pokemonDetail.stats[1].base_stat
  pokemon.defense = pokemonDetail.stats[2].base_stat
  pokemon.sAtk = pokemonDetail.stats[3].base_stat
  pokemon.sDf = pokemonDetail.stats[4].base_stat
  pokemon.speed = pokemonDetail.stats[5].base_stat

  return pokemon
}

pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url).then((Response) => Response.json().then(convertPokeApiToPokemon))
}

pokeApi.getPokemons = (offset = 0, limit = 4) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
  .then((Response) => Response.json())
  .then((JsonBody) => JsonBody.results)
  .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
  .then((pokemonDetails) => Promise.all(pokemonDetails))
  .catch((error) => console.log(error))
}