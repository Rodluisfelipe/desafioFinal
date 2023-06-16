// components/IngresosTotales.js

import React from 'react';

const IngresosTotales = ({ pedidos }) => {
  const ingresosTotales = pedidos.reduce((total, pedido) => total + pedido.total, 0);

  return (
    <div>
      <h2>Ingresos totales generados</h2>
      <p>{ingresosTotales}</p>
    </div>
  );
};

export default IngresosTotales;