// components/PanelControl.js

import React, { useEffect, useState } from 'react';
import TotalProductos from './TotalProductos';
import TotalPedidos from './TotalPedidos';
import IngresosTotales from './IngresosTotales';
import PrecioPromedio from './PrecioPromedio';
import ProductosMasVendidos from './ProductosMasVendidos';
import { fetchProducts, fetchOrders } from '../services/fakeStoreAPI';

const PanelControl = () => {
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    // Obtener productos y pedidos de la API cuando el componente se monte
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productosData = await fetchProducts();
      const pedidosData = await fetchOrders();
      setProductos(productosData);
      setPedidos(pedidosData);
    } catch (error) {
      console.error('Error al obtener los datos de la API', error);
    }
  };

  return (
    <div>
      <h1>Panel de Control</h1>
      <TotalProductos productos={productos} />
      <TotalPedidos pedidos={pedidos} />
      <IngresosTotales pedidos={pedidos} />
      <PrecioPromedio productos={productos} />
      <ProductosMasVendidos productos={productos} pedidos={pedidos} />
    </div>
  );
};

export default PanelControl;