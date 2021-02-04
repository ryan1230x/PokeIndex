import * as constant from "../actions/constant";

const initialState = {
  pokemon: [],
  pokemonDetails: [],
  loading: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case constant.GET_ALL_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false
      };
    case constant.GET_POKEMON_DETAILS:
      return {
        ...state,
        pokemonDetails: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
