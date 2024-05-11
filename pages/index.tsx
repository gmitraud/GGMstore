import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import Carrinho from './Carrinho';
import * as S from '../public/styles';

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

const Index: React.FC = () => {
  const { data: products, isLoading } = useProducts();
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; quantity: number; photo: string }[]>([]);

  const addToCart = (productId: number, productName: string, productPrice: number, productPhoto: string) => {
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems(prevItems => [...prevItems, { id: productId, name: productName, price: productPrice, quantity: 1, photo: productPhoto }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
      )
    );
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <S.Container>
      <S.Header>
        <S.Logo>GGM store</S.Logo>
        <S.CartButton onClick={() => setShowCart(!showCart)}>
          <img src="./cart-icon.svg" alt="Ícone do Carrinho" width="24" height="24"/> {}
          <S.TotalItems>{totalItems}</S.TotalItems> {}
        </S.CartButton>
      </S.Header>
      <Carrinho
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
        isOpen={showCart}
        onClose={() => setShowCart(false)}
      />
      <S.ProductsList>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <>
            {products && products.map((product: Product) => (
              <S.ProductItem key={product.id}>
                <S.ProductImage src={product.photo} alt={product.name} />
                <S.ProductName>{product.name}</S.ProductName>
                <p>{product.brand}</p>
                <S.ProductPrice>R$ {product.price}</S.ProductPrice>
                <p>{product.description}</p>
                <S.AddToCartButton onClick={() => addToCart(product.id, product.name, product.price, product.photo)}>
                  Adicionar ao Carrinho
                </S.AddToCartButton>
              </S.ProductItem>
            ))}
          </>
        )}
      </S.ProductsList>
      <S.Footer>MKS sistemas © Todos os direitos reservados</S.Footer>
    </S.Container>
  );
};

export default Index;
