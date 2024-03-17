import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../../../contexts/GlobalContext";

const StyledHeader = styled.header`
  padding: 24px 16px;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .brand {
    font-weight: 600;
    font-size: 20px;
  }

  .my-cart {
    text-align: right;
    line-height: 1;
    display: flex;
    gap: 12px;
    align-items: center;

    h4 {
      margin: 0;
      font-weight: 500;
      font-size: 14px;

      @media screen and (max-width: 767px) {
        display: none;
      }
    }

    small {
      opacity: 0.6;
      font-size: 12px;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export default function Header() {
  const { globalContext } = useContext(GlobalContext);

  return (
    <StyledHeader>
      <div className="brand">
        <Link to="/">WeMovies</Link>
      </div>
      <div>
        <Link to="/carrinho">
          <div className="my-cart">
            <div>
              <h4>Meu Carrinho</h4>
              <small>{globalContext.cart.length} itens</small>
            </div>
            <div className="icon-bag">
              <img alt="loader" src="/assets/images/icons/bag.svg" />
            </div>
          </div>
        </Link>
      </div>
    </StyledHeader>
  );
}
