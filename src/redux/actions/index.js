import { GET_POKEDEX } from './types'

export const getPokemonData = () => async dispatch => {
  const response = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
  const pokedexData = await response.json()
  const types = {}

  pokedexData.pokemon.forEach(pokemon => {
    pokemon.type.forEach(type => {
      if (!types[type]) {
        types[type] = true
      }
    })
  })

  dispatch({
    type: GET_POKEDEX,
    payload: {
      pokedex: pokedexData.pokemon,
      pokemonTypes: Object.keys(types).sort()
    }
  })
}