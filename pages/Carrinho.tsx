import React from 'react';
import styled from 'styled-components';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
}

const CartTitle = styled.h2`
  color: #fff;
  margin-right: 55px;
`;

const CartContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  bottom: 0;
  width: 350px;
  background-color: #0F52BA;
  border-left: 1px solid #ccc;
  z-index: 999;
  padding-bottom: 70px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CartIconButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const CartIcon = styled.img`
  width: 24px; /* Defina o tamanho do ícone conforme necessário */
  height: auto;
  margin-right: 5px; /* Adapte a margem conforme necessário */
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 15px 10px 0px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  width: fit-content;
`;

const CartButton = styled.button`
  background-color: #dc3545;
  border: none;
  padding: 3px 6px;
  cursor: pointer;
  font-size: 12px;
  border-radius: 0;
`;

const Quantity = styled.span`
  padding: 0 10px;
`;

const ProductPrice = styled.span`
  margin-left: auto;
  margin-right: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
`;

const QuantityButton = styled(CartButton)`
  background-color: #fff;
  color: #000;
  margin-right: 5px;
  margin-left: 5px;
`;

const TotalText = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 20px;
  color: #fff;
  height: 100px;
`;

const FinishButton = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  padding: 15px 0;
  cursor: pointer;
  width: 100%;
  height: 9vh;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

interface Props {
  cartItems: CartItem[];
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  onClose: () => void;
  isOpen: boolean;
}

const Carrinho: React.FC<Props> = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart, onClose, isOpen }) => {
  const calculateTotalCost = () => {
    if (!cartItems || cartItems.length === 0) return 0;
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {isOpen && (
        <CartContainer isOpen={isOpen}>
          <CloseButton onClick={onClose}>X</CloseButton>
          <CartTitle>Carrinho</CartTitle>
          {cartItems.map(item => (
            <CartItemContainer key={item.id}>
              <ProductInfo>
                <ProductImage src={item.photo} alt={item.name} />
                <ProductDetails>
                  <ProductName>{item.name}</ProductName>
                  <QuantityWrapper>
                    <QuantityButton onClick={() => decreaseQuantity(item.id)}>−</QuantityButton>
                    <Quantity>{item.quantity}</Quantity>
                    <QuantityButton onClick={() => increaseQuantity(item.id)}>+</QuantityButton>
                  </QuantityWrapper>
                </ProductDetails>
              </ProductInfo>
              <ProductPrice>R$ {item.price}</ProductPrice>
              <button onClick={() => removeFromCart(item.id)}>X</button>
            </CartItemContainer>
          ))}
          <TotalText>
            <div>Total:</div>
            <div>R$ {calculateTotalCost()}</div>
          </TotalText>
          <FinishButton>FINALIZAR COMPRA</FinishButton>
        </CartContainer>
      )}
    </>
  );
};

export default Carrinho;