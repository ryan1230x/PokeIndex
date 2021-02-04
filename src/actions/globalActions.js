import * as constant from "./constant";
import axios from "axios";

export const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemon = () => dispatch => {
  axios
    .get(`${POKEMON_URL}/?limit=500`)
    .then((res) =>
      dispatch({
        type: constant.GET_ALL_POKEMON,
        payload: res.data.results
      })
    )
    .catch((error) => console.error(error));
}

/**
 * Get pokemon details
 */
export const getPokemonDetails = (pokemon) => dispatch => {

  // Make sure the pokemon param is type string
  if (typeof(pokemon) !== "string") {
    console.error("Pokemon param must be type string");
    return;
  }
  
  axios
    .get(`${POKEMON_URL}/${pokemon}`)
    .then((res) =>
      dispatch({
        type: constant.GET_POKEMON_DETAILS,
        payload: res.data
      })
    )
    .catch((error) => console.error(error));
}