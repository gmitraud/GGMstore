import styled from 'styled-components';

export const TotalItems = styled.span`
  color: black;
  margin-left: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-top: 10vh;
  margin-bottom: 5vh;
`;

export const Header = styled.div`
  background-color: #0F52BA;
  color: #fff;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: absolute;
  top: 0;
  z-index: 999;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: Cascadia Mono;
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
`;

export const CartButton = styled.button`
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 5px 15px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 25px;
`;

export const ProductsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

export const ProductItem = styled.li`
  position: relative;
  width: 15vw;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  height: 60vh;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ProductName = styled.h3`
  font-size: 18px;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
  height: 3000px;
  overflow: hidden;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  background-color: black;
  border-radius: 3px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6vw;
  margin-top: auto; /* Faz o preço ficar na parte inferior */
  margin-left: auto; /* Alinha o preço à direita */
`;

export const BuyButton = styled.button`
  background-color: #0F52BA;
  color: #fff;
  border-radius: 0 0 10px 10px; /* Adicionando borda arredondada apenas na parte inferior */
  padding: 10px 0; /* Reduzindo o padding vertical para ajustar ao conteúdo */
  cursor: pointer;
  width: 100%;
`;

export const Footer = styled.footer`
  background-color: #e3e4e6;
  color: #000;
  width: 100%;
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.h1`
  font-size: 32px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
  margin-left: 35px;
`;

export const AddToCartButton = styled.button`
  background-color: #0F52BA;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  height: 5vh;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0 0 10px 10px;
`;

export const Button = styled.button`
  background-color: #0F52BA;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: #fff;
  border-left: 1px solid #ccc;
  z-index: 999;
`;

export const CartItems = styled.div`
  height: 100%;
  padding: 20px;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`;