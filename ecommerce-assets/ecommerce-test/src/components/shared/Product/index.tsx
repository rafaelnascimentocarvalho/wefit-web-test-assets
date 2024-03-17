import styled from "styled-components";
import Button from "../../ui/form/ButtonUI";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../../types/Product";
import { ManipulateCart, GlobalContext } from "../../../contexts/GlobalContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { moneyFormat } from "../../../helpers/numbers";

const StyledProduct = styled.div`
  color: #333333;
  background-color: white;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 4px;

  .image {
    width: 100%;
    aspect-ratio: 16 / 9;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: contain;
    }
  }

  .title {
    font-size: 14px;
    font-weight: 700;
  }

  .price {
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  }

  button {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;

    span {
      font-weight: 400;
      padding-right: 8px;
      display: flex;
      gap: 4px;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

export default function Product({ id, title, price, image }: ProductType) {
  const navigate = useNavigate();

  const { globalContext, handleGlobalContext } = useContext(GlobalContext);

  const handleAddToCart = () => {
    let cart: Array<ProductType> = ManipulateCart.items();

    if (!!cart.filter((item: ProductType) => item.id === id).length) {
      cart = cart.map((item: ProductType) => {
        return item.id === id ? { ...item, qtd: (item?.qtd ?? 0) + 1 } : item;
      });
    } else {
      cart.push({
        id: id,
        title: title,
        price: price,
        image: image,
        qtd: 1,
      });
    }

    ManipulateCart.update(cart);
    handleGlobalContext({ cart: cart });

    navigate("/carrinho");
  };

  const [inCartCount, setInCartCount] = useState(0 as number);
  const handleInCartCount = useCallback(() => {
    let cart: Array<ProductType> = ManipulateCart.items();

    cart.map((item: ProductType) =>
      item.id === id ? setInCartCount(item?.qtd ?? 0) : {}
    );
  }, [id]);

  useEffect(() => {
    handleInCartCount();
  }, [globalContext.cart, handleInCartCount]);

  return (
    <StyledProduct>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="title">{title}</div>
      <div className="price">R$ {moneyFormat(price)}</div>
      <Button onClick={() => handleAddToCart()}>
        <span>
          <img alt="loader" src="/assets/images/icons/add-cart.svg" />
          {inCartCount}
        </span>{" "}
        ADICIONAR AO CARRINHO
      </Button>
    </StyledProduct>
  );
}
