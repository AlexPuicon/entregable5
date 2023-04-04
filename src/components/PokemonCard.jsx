import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getPkemonById = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const PokemonCard = ({ pokemonData }) => {
  const [pokemon, setPokemon] = useState(null);

  const loadPokemon = async () => {
    const pokemonInfo = await getPkemonById(pokemonData.url);
    setPokemon(pokemonInfo);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <>
      {pokemon && (
        <article>
          <header>
            <div></div>
            <div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          </header>

          <section>
            <section>
              <h2 className="text-2xl font-semibold">{pokemon.name}</h2>
              <p>{pokemon.types[0].type.name}</p>
              <p>Tipo</p>
            </section>

            <section>
              {pokemon.stats.map((stat) => (
                <section>
                  <h3>{stat.stat.name.toUpperCase()}</h3>
                  <p>{stat.base_stat}</p>
                </section>
              ))}
            </section>
          </section>
        </article>
      )}
    </>
  );
};

export default PokemonCard;