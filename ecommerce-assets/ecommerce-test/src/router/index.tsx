import { Routes, Route } from "react-router-dom";
import Template from "../Template";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import OrderComplete from "../pages/OrderComplete";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="carrinho" element={<Cart />} />
        <Route path="compra-realizada" element={<OrderComplete />} />
        <Route path="*" element={<></>} />
      </Route>
    </Routes>
  );
}
