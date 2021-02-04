import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Container from "@material-ui/core/Container";
import { useDispatch } from 'react-redux';
import { getAllPokemon } from '../actions/globalActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
}));

function Layout(props) {

  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();

  /**
   * get all pokemon in API when component is rendered
   */
  useEffect(() => {
    dispatch(getAllPokemon());    
  }, [getAllPokemon])

  /**
   * filer the pokemon cards by name
   */
  const onSearchSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const filter = value.toUpperCase();
    const pokemonCards = document.querySelectorAll(".pokemon-card");

    pokemonCards.forEach((value) => {
      const card = value.querySelector(".pokemon-card-name");
      if(card) {
        const pokemonName = card.textContent;
        pokemonName.toUpperCase().indexOf(filter) > -1 ?
          value.style.display = "" :
          value.style.display = "none"
      }
    });
  };

  return (
    <div className={classes.root}>
      <AppBar 
        position="static" 
        style={{ marginBottom: 50 }}
      >
        <Container maxWidth="lg">
        <Toolbar>
          <Typography 
            className={classes.title} 
            variant="h6" 
            noWrap
          >
            PokeIndex
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onSearchSubmit}
            />
          </div>
        </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <main>{props.children}</main>
        <footer 
          style={{
            background: "#e9e9e9", 
            marginTop: 50, 
            position: "fixed", 
            bottom: 0, 
            left: 0, 
            right: 0,
            padding: 10
          }}>
          <p style={{ textAlign: "center" }}>
            Created by Ryan 2021 &copy;
          </p>
      </footer>
      </Container>
    </div>
  );
}

export default Layout;
