import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openCart } from "../store/productSlice";

export default function Header() {
  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(openCart());
  };
  return (
    <StyledHeader>
      <h1>Online 🛒 Shop</h1>
      <button onClick={openCartHandler}>Cart🛒</button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: #faae22;
  padding: 5px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  & > h1 {
    color: #f8fafc;
  }
  & > button {
    width: 300px;
    height: 45px;
    font-size: 18px;
    border-radius: 7px;
    border: 1px solid rgb(90, 147, 10);
    cursor: pointer;
    background-color: rgb(140, 216, 33);
    &:hover {
      background-color: #885a06;
      color: #f8fafc;
    }
  }
`;
