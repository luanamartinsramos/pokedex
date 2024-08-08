import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PokemonDetail from '../pages/PokemonDetail';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:pokeId' element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
