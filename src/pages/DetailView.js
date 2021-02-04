import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails } from "../actions/globalActions";

import { Grid } from "@material-ui/core";

import DetailViewAbout from "../components/DetailView/DetailViewAbout";
import DetailViewAbilities from "../components/DetailView/DetailViewAbilities";
import DetailViewTypes from "../components/DetailView/DetailViewTypes";
import DetailViewMoves from "../components/DetailView/DetailViewMoves";
import ReturnButton from "../components/ReturnButton";
import SpinnerLoader from "../components/SpinnerLoader";

function DetailView() {
  
  // Get name of Pokemon from URL
  const { name } = useParams();

  const dispatch = useDispatch();
  
  // Get loading state from redux store
  const pokemonLoading = useSelector(state => state.pokemon.loading);

  // Get Pokemon details when rendering page
  useEffect(() => {
    dispatch(getPokemonDetails(name));
  }, [name]);


  return (
    <>
      {pokemonLoading ? (
        <SpinnerLoader />
      ) : (
      <>
        <Grid container>
          <Grid item xs={12}>
            <ReturnButton />
            <DetailViewAbout />
          </Grid>
          <Grid item xs={12}>
            <DetailViewAbilities />
          </Grid>
          <Grid item xs={12}>
            <DetailViewTypes />
            <DetailViewMoves />
          </Grid>
        </Grid>
      </>
      )}

    </>
  )
}

export default DetailView;
