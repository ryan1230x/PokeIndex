import React from "react"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Paper, Typography } from "@material-ui/core";
import SpinnerLoader from "../SpinnerLoader";

function DetailViewAbout() {

  // get name from URL
  const { name } = useParams();
  
  // Get all the pokemon images from redux store
  const pokemonSprites = useSelector(state => state.pokemon.pokemonDetails.sprites);

  return (
    <>
    <Paper style={{ padding: 20, marginBottom: 20 }}>
      {pokemonSprites === undefined ? (
        <SpinnerLoader />
      ) : (
      <>
        <section>
          <Typography variant="h2">
            {name}
          </Typography>
          <img
            alt="front"
            src={pokemonSprites.front_default}
          />
          <img
            alt="back" 
            src={pokemonSprites.back_default}
          />
        </section>
      </>
      )}
    </Paper>
    </> 
  )
}

export default DetailViewAbout;
