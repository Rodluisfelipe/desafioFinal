// components/ProductosMasVendidos.js

import React from 'react';

const ProductosMasVendidos = ({ productos, pedidos }) => {
  const productosVendidos = productos.map((producto) => {
    const numPedidos = pedidos.filter((pedido) =>
      pedido.products.some((p) => p.id === producto.id)
    ).length;
    return { ...producto, numPedidos };
  });

  productosVendidos.sort((a, b) => b.numPedidos - a.numPedidos);

  return (
    <div>
      <h2>Productos más vendidos</h2>
      <ul>
        {productosVendidos.map((producto) => (
          <li key={producto.id}>
            {producto.title} - Vendidos: {producto.numPedidos}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductosMasVendidos;