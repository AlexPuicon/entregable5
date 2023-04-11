import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import PokemonCard from '../components/PokemonCard';
import { usePagination } from '../hooks/usePagination';
import { Form, useLoaderData } from 'react-router-dom';

const Pokedex = () => {
  const { user } = useContext(UserContext);
  const { pokemons, types, name, type } = useLoaderData();
  const [pokemonName, setPokemonName] = useState(name ?? '');
  const [pokemonType, setPokemonType] = useState(type ?? '');
  const pokemonPagination = usePagination(pokemons, 55);

  const handleNameChange = (e) => {
    setPokemonName(e.target.value);
    // setPokemonType('');
  };

  const handleTypeChange = (e) => {
    setPokemonType(e.target.value);
    // setPokemonName('');
  };

  return (
    <div className="w-full p-5">
      <p>
        <span className="text-red-500 font semibold">Bienvenido {user}, </span>
        aqui podras encontrar tu pokemon favorito
      </p>

      <div className="flex flex-row gap-2">
        {pokemonPagination.pages.map((page) => (
          <button
            key={page}
            onClick={() => pokemonPagination.changePageTo(page)}
            className={
              pokemonPagination.currentPage === page ? 'text-red-500 font-semibold' : ''
            }
          >
            {page}
          </button>
        ))}
      </div>

      <div>
        <Form>
          <h3 className="text-red-500">Filter for search</h3>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <input
                type="text"
                name="pokemon_name"
                className="shadow-md border-black"
                value={pokemonName}
                onChange={handleNameChange}
              />
              <select name="pokemon_type" value={pokemonType} onChange={handleTypeChange}>
                <option value="" disabled>
                  --Chose a type--
                </option>
                {types.map((type) => (
                  <option key={type.url} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <button className="bg-red-500 text-white p-2 hover:bg-red-400" type="submit">
              Search
            </button>
          </div>
        </Form>
      </div>

      <section>
        {pokemonPagination.listSlice.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonData={pokemon} />
        ))}
      </section>
    </div>
  );
};

export default Pokedex;
