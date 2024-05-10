import { useQuery } from 'react-query';

const fetchProducts = async () => {
  console.log('Chamando fetchProducts...');
  const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=name&orderBy=ASC');
  if (!response.ok) {
    console.error('Erro ao buscar produtos.');
    throw new Error('Erro ao buscar produtos.');
  }
  const data = await response.json();
  console.log("Dados retornados:", data);
  console.log("Produtos retornados:", data.products);
  return data.products; // Retorna apenas o array de produtos
};

const useProducts = () => {
  return useQuery('products', fetchProducts);
};

export default useProducts;