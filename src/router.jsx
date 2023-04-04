import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Pokedex from './views/Pokedex';
import PokedexLayout from './components/PokedexLayout';
import PokemonDetail from './views/PokemonDetail';
import ProtectedRoute from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokedex',
    element: (
      <ProtectedRoute>
        <PokedexLayout />
      </ProtectedRoute>
    ),
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
