// components/TotalProductos.js

import React from 'react';

const TotalProductos = ({ productos }) => {
  const totalProductos = productos.length;

  return (
    <div>
      <h2>Total de productos</h2>
      <p>{totalProductos}</p>
    </div>
  );
};

export default TotalProductos;