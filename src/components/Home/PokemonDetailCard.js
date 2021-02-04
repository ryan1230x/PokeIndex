import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles"
import { 
  Card, 
  CardActions, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Button, 
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root:{
    minWidth: 275,
    display: "flex"
  },
  title: {
    fontSize: 14
  },
  media: {
    height: 250,
    objectFit: "cover",
  },
  actions: {
    padding: 20
  }
});


function PokemonDetailCard({ pokemon, imageUrl }) {
  const classes = useStyles();
  const { name } = pokemon;
  return(
    <Card>
      <CardActionArea>
        <Link to={`/pokemon/${name}`}>
          <CardMedia
            className={classes.media}
	          image={imageUrl}
	          alt={`image of ${name}`}
	          title={name}
	        />
	      </Link>
        <CardContent>
          <Typography 
            className={classes.title} 
            className="pokemon-card-name"
          >
            { name }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/pokemon/${name}`}>
          <Button size="large" color="primary">
	          Learn More
	       </Button>
	      </Link>
      </CardActions>
    </Card>
  )
}

export default PokemonDetailCard;
