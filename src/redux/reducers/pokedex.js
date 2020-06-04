import { GET_POKEDEX } from './../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_POKEDEX:
      return action.payload
    default:
      return state
  }
}