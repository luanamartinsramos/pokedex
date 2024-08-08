import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../types/pokemon";

export const useGetPokemon = (url?: string, id?: string) => {
  const [pokemon, setPokemon] = useState<null | undefined | IPokemon>();

  const fetchPokemon = async () => {
    if (url) {
      const { data } = await axios.get(url);
      setPokemon(data);
    } else if (id) {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(data);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon };
};
