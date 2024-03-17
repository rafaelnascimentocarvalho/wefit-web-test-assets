import { GlobalContextProvider } from "./contexts/GlobalContext";
import Router from "./router";

export default function App() {
  return (
    <GlobalContextProvider>
      <Router />
    </GlobalContextProvider>
  );
}
