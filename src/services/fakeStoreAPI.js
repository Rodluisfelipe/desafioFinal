// services/fakeStoreAPI.js

const API_URL = 'https://fakestoreapi.com';

export async function fetchProducts() {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  return data;
}

export async function fetchOrders() {
  const response = await fetch(`${API_URL}/orders`);
  const data = await response.json();
  return data;
}