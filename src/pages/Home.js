import React from "react";
import { useSelector } from "react-redux";

// Import components
import PokemonDetailCard from "../components/Home/PokemonDetailCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import SpinnerLoader from "../components/SpinnerLoader";


const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"; 

const navigationLinks = [
  { path: "/about", LinkName: "About" },
  { path: "/version", LinkName: "Version" }
];

function Home() {

  /**
   * redux hook to get the pokemon list
   */
  const pokemonList = useSelector(state => state.pokemon.pokemon);
  const pokemonLoading = useSelector(state => state.pokemon.loading);
  
  return(
    <>
    <Typography variant="h5">
      Links
    </Typography>
    <ul>
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.LinkName}</Link>
        </li>
      ))}
    </ul>
    <Grid container spacing={3}>
      {/* If the pokemon are loading display loading spinner */}
      {pokemonLoading && <SpinnerLoader />}
      
      {pokemonList.map((pokemon, index) => {
        return (
          <Grid 
            item 
            xs={12} 
            md={3} 
            lg={3} 
            className="pokemon-card"
            key={index}
          >
            <PokemonDetailCard 
              key={index} 
              pokemon={pokemon} 
              imageUrl={`${imageUrl}/${index + 1}.png`}
            /> 
          </Grid>
        )
      })}
    </Grid>
    </>
  )
}

export default Home;
