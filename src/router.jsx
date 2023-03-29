import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Pokedex from './views/Pokedex';
import PokedexLayout from './components/PokedexLayout';
import PokemonDetail from './views/PokemonDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokedex',
    element: <PokedexLayout />,
    children: [
      {
        path: ':id',
        element: <PokemonDetail />,
      },
      {
        index: true,
        element: <Pokedex />,
      },
    ],
  },
]);
