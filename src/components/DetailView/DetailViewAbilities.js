import React from "react"
import { useSelector } from "react-redux";

import { Paper, Typography } from "@material-ui/core";
import SpinnerLoader from "../SpinnerLoader";

function DetailViewAbilities() {

  // Get all the pokemon abilities
  const pokemonAbilities = useSelector(state => state.pokemon.pokemonDetails.abilities);

  return (
    <>
      <Paper style={{ padding: 20, marginBottom: 20 }}>
      {pokemonAbilities === undefined ? (
        <SpinnerLoader />
      ) : (
      <section>
        <Typography variant="h3">
          Abilities
        </Typography>
        <ul>
          {pokemonAbilities.map((ability, index) => (
            <li key={index}>{ ability.ability.name }</li>			
          ))}
        </ul>
      </section>
      )}
      </Paper>
    </>
  )	  
}

export default DetailViewAbilities;
