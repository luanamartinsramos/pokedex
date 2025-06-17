import ReactDOM from "react-dom/client";

import PokemonProvider from "./context/usePokemon";
import Router from "./routes";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PokemonProvider>
    <Router />
  </PokemonProvider>
);
