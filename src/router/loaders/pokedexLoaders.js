import { getAllPokemon } from '../../services/getAllPokemons';
import { getAllTypes } from '../../services/getAllTypes';

const whichLoadIs = (url) => {
  if (!url.search) return 'all';
  else if (url.searchParams.get('pokemon_type')) return 'type';
  else if (url.searchParams.get('pokemon_name')) return 'name';
};

export const pokedexLoaders = async ({ request }) => {
  // const pokemons = await getAllPokemon();
  const types = await getAllTypes();
  const url = new URL(request.url);
  const loadType = whichLoadIs(url);
  let pokemons;
  if (loadType === 'all') {
    pokemons = await getAllPokemon();
  } else if (loadType === 'type') {
  } else if (loadType === 'name') {
    const name = url.searchParams.get('pokemon_name').toLowerCase;
    pokemons = await getAllPokemon();
    pokemons = pokemons.filter((pokemon) => pokemon.name.includes(name));
  }

  return { pokemons, types };
};
