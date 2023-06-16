// components/TotalPedidos.js

import React from 'react';

const TotalPedidos = ({ pedidos }) => {
  const totalPedidos = pedidos.length;

  return (
    <div>
      <h2>Total de pedidos</h2>
      <p>{totalPedidos}</p>
    </div>
  );
};

export default TotalPedidos;