import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../types/Product";

interface GlobalType {
  cart: Array<ProductType>;
}

interface GlobalContextType {
  globalContext: GlobalType;
  handleGlobalContext: Function;
}

export const GlobalContext = createContext({} as GlobalContextType);

export const ManipulateCart = {
  items: () => {
    return JSON.parse(
      localStorage.getItem("cartItems") ?? "[]"
    ) as Array<ProductType>;
  },
  update: (items: Array<ProductType>) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  },
};

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [globalContext, setGlobalContext] = useState({
    cart: [],
  } as GlobalType);

  const handleGlobalContext = (value: any) => {
    setGlobalContext({ ...globalContext, ...value });
  };

  useEffect(() => {
    handleGlobalContext({
      cart: ManipulateCart.items(),
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ globalContext, handleGlobalContext }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext deve ser usado dentro de um GlobalContextProvider"
    );
  }

  return context;
};
