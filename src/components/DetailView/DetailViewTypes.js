import React from "react";
import { useSelector } from "react-redux"

import { Paper, Typography } from "@material-ui/core";
import SpinnerLoader from "../SpinnerLoader";

function DetailViewTypes() {

  // get all the pokemon types
  const pokemonTypes = useSelector(state => state.pokemon.pokemonDetails.types);

  return (
    <>
    <Paper style={{ padding: 20, marginBottom: 20 }}>
      {pokemonTypes === undefined ? (
        <SpinnerLoader />
      ) : (
      <section>
        <Typography variant="h3">
          Types
        </Typography>
        <ul>
          {pokemonTypes.map((type, index) => (
            <li key={index}>{type.type.name}</li>			      
          ))}
        </ul>
      </section>
      )}
      </Paper>
    </>
  );
}

export default DetailViewTypes;
