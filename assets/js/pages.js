const pages = {}

function convertDmToCm(dmValue) {
  return dmValue * 10
}

function convertlbsToKg(lbsValue) {
  return lbsValue / 10
}

pages.pokemonListHtml = (pokemon) => {
  return `
  <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detailType">
      <ol class="types">
          ${pokemon.types.map((type) => `<li class="type ${type}"><span>${type}</span></li>`).join('')}
      </ol>
      <img class="pokedexImageLogo" src="./assets/media/pokebolaLogo.png" alt="Logo Pokebola">
      <img class="pokedexImage" src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
  </li>
  `
}

pages.pokemonDetailListHtml = (pokemon) => {
  return `
  <li class="detailPokemon">
    <header class="${pokemon.type}">
      <div class="PokemonIdentification">
        <span class="detailName">${pokemon.name}</span>
        <span class="detailNumber">#${pokemon.number}</span>
      </div>
      <div class="detailAbilities">
        <ol class="abilities">
          ${pokemon.types.map((type) => `<li class="ability ${type}"><span>${type}</span></li>`).join('')}
          
        </ol>
      </div>
      <div class="DetailImages">
        <img class="DetailImageLogo" src="./assets/media/pokebolaLogo.png" alt="Logo Pokebola">
        <img class="DetailImage"src="${pokemon.photo}" alt="${pokemon.name}">
      </div>
    </header>
    <section>
      <h2>Detalhes</h2>
      <div class="detailSection">
        <div>
          <p>Height</p>
          <p>Weight</p>
          <p>Abilities</p>
        </div>
        <div>
          <p>${convertDmToCm(pokemon.height) + ' cm'}</p>
          <p>${convertlbsToKg(pokemon.weight) + ' kg'}</p>
          <p>${pokemon.abilities.join(', ')}</p>
        </div>
      </div>
      <h3>Base Stats</h3>
      <div class="statsSection">
        <div class="resetStatsSection">
          <p>HP</p>
          <p>Attack</p>
          <p>Defense</p>
          <p>Special Atk</p>
          <p>Special Df</p>
          <p>Speed</p>
        </div>
        <div class="resetStatsSection">
          <p>${pokemon.hp}</p>
          <p>${pokemon.attack}</p>
          <p>${pokemon.defense}</p>
          <p>${pokemon.sAtk}</p>
          <p>${pokemon.sDf}</p>
          <p>${pokemon.speed}</p>
        </div>
        <div class="resetStatsSection nivelDiv">
          <div class="nivelbg">
            <span class="nivel bg"></span>
            <span class="nivel hp"></span>
          </div>
          <div class="nivelbg">
            <span class="nivel bg"></span>
            <span class="nivel atk"></span>             
          </div>
          <div class="nivelbg">
            <span class="nivel bg"></span>
            <span class="nivel df"></span>  
          </div>
          <div class="nivelbg">
            <span class="nivel bg"></span>
            <span class="nivel sAtk"></span>  
          </div>
          <div class="nivelbg">
            <span class="nivel bg"></span>
            <span class="nivel sDf"></span>  
          </div>
          <div class="nivelbg">
            <span class="nivel bg"></span>
            <span class="nivel speed"></span> 
          </div>
        </div>
      </div>
    </section>
  </li>
  `
}
