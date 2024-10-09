import { PokeballIconSmall } from "../../assets/svg/pokeball";
import { Filters } from "../../components/Filters";
import { Pagination } from "../../components/Pagination";
import { PokemonList } from "../../components/PokemonList";
import { usePokemon } from "../../context/usePokemon";
import { usePagination } from "../../hooks/usePagination";

import styles from "./styles.module.scss";

export default function Home() {
  const { pokemonsFiltered } = usePokemon();
  const { page, nextPage, previousPage, changePage, backToHome } =
    usePagination();

  const perPage = 12;

  return (
    <div className={styles.pageContainer}>
      {" "}
      {}
      <div className={styles.content}>
        {" "}
        {}
        <header>
          <div onClick={backToHome}>
            <PokeballIconSmall />
            <span>Pokédex</span>
          </div>
        </header>
        <Filters />
        <PokemonList
          page={page}
          perPage={perPage}
          pokemonsUrls={pokemonsFiltered}
        />
      </div>
      {}
      <div className={styles.pagination}>
        <Pagination
          page={page}
          perPage={perPage}
          nextPage={nextPage}
          previousPage={previousPage}
          maxItems={pokemonsFiltered?.length ?? 0}
          goToPage={changePage}
        />
      </div>
    </div>
  );
}
