import axios from "axios";
import { ReactNode, useEffect, useState } from "react";

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

interface IPokemonListProps {
  children: ReactNode;
}

interface IPokemonResult {
  name: string;
  url: string;
}

interface IPokemonCard {
    pokemon: IPokemonResult
}

const Header = () => {
  return (
    <header>
      <p>pokeindex</p>
      <form>
        <input type="search" name="" id="" placeholder="Search" />
      </form>
    </header>
  );
};

const Footer = () => {
  return <footer>Pokeindex 2024</footer>;
};

const NavigationLinks = () => {
  return (
    <>
      <h1>Links</h1>
      <ul>
        <li>About</li>
        <li>Version</li>
      </ul>
    </>
  );
};

const PokemonList = ({ children }: IPokemonListProps) => {
  return <section className="grid-container">{children}</section>;
};

const PokemonCard = ({ pokemon }: IPokemonCard) => {
  return (
    <div className="pokemon-card">
      <div>
        <p>{pokemon.name}</p>
      </div>
      <button>view details</button>
    </div>
  );
};


function App() {
  const [pokemon, setPokemon] = useState<IPokemonResult[] | undefined>([]);

  useEffect(() => {
    axios
      .get(`${POKEMON_URL}/?limit=20`)
      .then((data) => setPokemon(data.data.results));
  }, [setPokemon]);


  return (
    <>
      <Header />
      <NavigationLinks />
      <PokemonList>
        {pokemon && pokemon.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </PokemonList>
      <Footer />
    </>
  );
}

export default App;
