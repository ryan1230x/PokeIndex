import React from "react"
import { useSelector } from "react-redux";

import { Paper, Typography } from "@material-ui/core";
import SpinnerLoader from "../SpinnerLoader";

function DetailViewMoves() {

  // get all pokemon moves
  const pokemonMoves = useSelector(state => state.pokemon.pokemonDetails.moves);

  return(
    <>
      <Paper style={{ padding: 20, marginBottom: 20 }}>
        {pokemonMoves === undefined ? (
          <SpinnerLoader />
        ) : (
        <>
          <section>
            <Typography variant="h3">
              Moves
            </Typography>
            <ul>
              {pokemonMoves.map((move, index) => (
                <li key={index}>{move.move.name}</li>			
              ))}
            </ul>
          </section>
        </>
      )}
      </Paper>
    </>
  )
}

export default DetailViewMoves;
