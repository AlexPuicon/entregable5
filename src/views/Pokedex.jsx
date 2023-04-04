import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const getAllPokemon = async () => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1300');
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

const Pokedex = () => {
  const { user } = useContext(UserContext);
  const [pokemons, setPokemons] = useState([]);

  const loadAllPokemons = async () => {
    const allPokemons = await getAllPokemon();
    setPokemons(allPokemons);
  };

  useEffect(() => {
    loadAllPokemons();
  }, []);

  return (
    <div className="w-full p-5">
      <p>
        <span className="text-red-500 font semibold">Bienvenido {user}, </span>
        aqui podras encontrar tu pokemon favorito
      </p>
      <section>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonData={pokemon} />
        ))}
      </section>
    </div>
  );
};

export default Pokedex;
