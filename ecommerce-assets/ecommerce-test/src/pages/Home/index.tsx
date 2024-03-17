import styled from "styled-components";
import { useEffect, useState } from "react";
import Empty from "../../components/screens/Empty";
import Loader from "../../components/ui/Loader";
import Product from "../../components/shared/Product";
import ProductsController from "../../controllers/ProductsController";
import { ProductType } from "../../types/Product";

const StyledHome = styled.div`
  display: grid;
  gap: 24px 16px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default function Home() {
  const [loading, setLoading] = useState(true as boolean);
  const [products, setProducts] = useState([] as Array<ProductType>);

  const getHome = async () => {
    setLoading(true);

    const fetch = await ProductsController.List();

    setProducts(fetch);

    setLoading(false);
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {!!products.length ? (
            <StyledHome>
              {products.map((product: ProductType) => (
                <Product key={product.id} {...product} />
              ))}
            </StyledHome>
          ) : (
            <Empty onClick={() => getHome()} />
          )}
        </>
      )}
    </>
  );
}
