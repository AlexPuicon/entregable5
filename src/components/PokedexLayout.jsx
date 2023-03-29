import React from 'react';
import { Outlet } from 'react-router-dom';

const PokedexLayout = () => {
  return (
    <div>
      <h1>PokedexLayout</h1>
      <Outlet />
    </div>
  );
};

export default PokedexLayout;
