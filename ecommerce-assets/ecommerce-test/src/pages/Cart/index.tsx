import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/form/ButtonUI";
import Box from "../../components/layout/Box";
import { useContext, useEffect, useState } from "react";
import Empty from "../../components/screens/Empty";
import { ProductType } from "../../types/Product";
import { ManipulateCart, GlobalContext } from "../../contexts/GlobalContext";
import { moneyFormat } from "../../helpers/numbers";

const StyledCart = styled.div`
  display: grid;
  gap: 24px;

  @media screen and (max-width: 767px) {
    gap: 32px;
  }

  .header {
    @media screen and (max-width: 767px) {
      display: none !important;
    }
  }

  .label {
    font-size: 14px;
    font-weight: 700;
    color: #999999;
  }

  .row {
    position: relative;
    display: flex;
    gap: 8px;

    @media screen and (max-width: 767px) {
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .cell-product {
      flex-basis: 30%;

      @media screen and (max-width: 767px) {
        flex-basis: 100%;
      }

      .product {
        display: flex;
        align-items: center;
        gap: 16px;

        @media screen and (max-width: 767px) {
          align-items: start;
        }

        .image {
          width: 100%;
          max-width: 90px;
          position: relative;

          @media screen and (max-width: 767px) {
            max-width: 64px;
            height: 40px;
          }

          img {
            aspect-ratio: 3/4;
            width: 100%;
            object-fit: contain;
          }
        }

        .description {
          display: grid;

          @media screen and (max-width: 767px) {
            display: flex;
            gap: 1rem;
            width: 100%;
            justify-content: space-between;
          }

          .title {
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 4px;
          }
        }

        .price {
          @media screen and (max-width: 767px) {
            padding-right: 32px;
          }
        }
      }
    }

    .cell-qtd {
      display: flex;
      align-items: center;
      flex-basis: 35%;

      @media screen and (max-width: 767px) {
        flex-basis: 44%;
      }

      .qtd-input {
        width: 100%;
        display: flex;
        gap: 12px;
        align-items: center;

        .input {
          display: block;
          padding: 4px;
          font-size: 16px;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
          width: 100%;
          max-width: 72px;
          text-align: center;
        }

        button {
          border: none;
          padding: 0;
          cursor: pointer;
          background-color: transparent;
          width: 18px;
          height: 18px;

          img {
            width: 18px;
            height: 18px;
          }
        }
      }
    }

    .cell-subtotal {
      flex-basis: 35%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 767px) {
        flex-basis: 25%;
        justify-content: end;
        text-align: center;
      }

      .label {
        font-size: 12px;

        @media screen and (min-width: 767px) {
          display: none;
        }
      }
    }

    .price {
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      white-space: nowrap;
    }

    .trash {
      padding: 0;
      border: none;
      cursor: pointer;
      background-color: transparent;
      width: 24px;
      height: 24px;

      @media screen and (max-width: 767px) {
        top: 0;
        right: 0;
        position: absolute;
      }

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  .footer {
    gap: 20px;
    border-top: 1px solid #999999;
    display: flex;
    padding-top: 24px;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
    }

    .order-complete {
      @media screen and (min-width: 767px) {
        width: 200px;
      }
    }

    .order-total {
      gap: 32px;
      display: flex;
      font-weight: 700;
      align-items: center;
      justify-content: end;

      @media screen and (max-width: 767px) {
        justify-content: space-between;
      }

      .price {
        font-size: 24px;
        line-height: 1;
      }
    }
  }
`;

export default function Cart() {
  const navigate = useNavigate();

  const { globalContext, handleGlobalContext } = useContext(GlobalContext);

  const [totalCart, setTotalCart] = useState(0 as number);
  const [cartItems, setCartItems] = useState([] as Array<ProductType>);

  const submitCart = () => {
    const cart: Array<ProductType> = ManipulateCart.items();

    console.log("ORDER:", cart);

    ManipulateCart.update([]);
    handleGlobalContext({ cart: [] });

    navigate("/compra-realizada");
  };

  const behaviorCart = () => {
    const cart: Array<ProductType> = ManipulateCart.items();

    let total: number = 0;

    cart.map((item: ProductType) => {
      total += (item.qtd ?? 1) * item.price;
    });

    setTotalCart(total);
    setCartItems(cart);
  };

  const handleQtd = (
    product: ProductType,
    action: "minus" | "sum" | "remove"
  ) => {
    let cart: Array<ProductType> = ManipulateCart.items()
      .map((item: ProductType) => {
        return item.id === product.id
          ? {
              ...item,
              qtd:
                action === "remove"
                  ? 0
                  : action === "minus"
                  ? (item?.qtd ?? 0) - 1
                  : (item?.qtd ?? 0) + 1,
            }
          : item;
      })
      .filter((item: ProductType) => !!item?.qtd);

    ManipulateCart.update(cart);
    handleGlobalContext({ cart: cart });
  };

  useEffect(() => {
    behaviorCart();
  }, [globalContext.cart]);

  return (
    <>
      {!!cartItems.length ? (
        <Box>
          <StyledCart>
            <div className="header row label">
              <div className="cell-product">PRODUTO</div>
              <div className="cell-qtd">QTD</div>
              <div className="cell-subtotal">SUBTOTAL</div>
            </div>

            {cartItems.map((product: ProductType) => (
              <div className="row" key={product.id}>
                <div className="cell-product">
                  <div className="product">
                    <div className="image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="description">
                      <div className="title">{product.title}</div>
                      <div className="price">
                        R$ {moneyFormat(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cell-qtd">
                  <div className="qtd-input">
                    <button onClick={() => handleQtd(product, "minus")}>
                      <img alt="loader" src="/assets/images/icons/minus.svg" />
                    </button>
                    <div className="input">{product.qtd}</div>
                    <button onClick={() => handleQtd(product, "sum")}>
                      <img alt="loader" src="/assets/images/icons/sum.svg" />
                    </button>
                  </div>
                </div>
                <div className="cell-subtotal">
                  <div>
                    <div className="label">SUBTOTAL</div>
                    <div className="price">
                      R$ {moneyFormat((product?.qtd ?? 1) * product.price)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleQtd(product, "remove")}
                    className="trash"
                  >
                    <img alt="loader" src="/assets/images/icons/trash.svg" />
                  </button>
                </div>
              </div>
            ))}

            <div className="footer">
              <div className="order-complete">
                <Button onClick={() => submitCart()}>FINALIZAR PEDIDO</Button>
              </div>
              <div className="order-total">
                <small className="label">TOTAL</small>
                <div className="price">R$ {moneyFormat(totalCart)}</div>
              </div>
            </div>
          </StyledCart>
        </Box>
      ) : (
        <Empty />
      )}
    </>
  );
}
