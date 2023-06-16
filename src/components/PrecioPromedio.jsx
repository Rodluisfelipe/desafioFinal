// components/PrecioPromedio.js

import React from 'react';

const PrecioPromedio = ({ productos }) => {
  const precios = productos.map((producto) => producto.price);
  const precioPromedio =
    precios.reduce((total, precio) => total + precio, 0) / productos.length;

  return (
    <div>
      <h2>Precio promedio de los productos</h2>
      <p>{precioPromedio}</p>
    </div>
  );
};

export default PrecioPromedio;