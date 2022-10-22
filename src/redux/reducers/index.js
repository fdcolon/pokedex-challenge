import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import pokedexReduxer from './pokedex'

export default combineReducers({
  form: formReducer,
  pokemonData: pokedexReduxer
})