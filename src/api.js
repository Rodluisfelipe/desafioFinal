const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  return data;
};

export const getOrders = async () => {
  const response = await fetch(`${BASE_URL}/orders`);
  const data = await response.json();
  return data;
};