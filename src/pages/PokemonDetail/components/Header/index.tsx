import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../../../../assets/svg/arrows";
import { PokeballIconBig } from "../../../../assets/svg/pokeball";
import { IPokemon } from "../../../../types/pokemon";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export function Header({ pokemon }: Props) {
  const navigate = useNavigate();

  return (
    <header>
      <PokeballIconBig className={styles.pokeball} />
      <div className={styles.left}>
        <ArrowLeftIcon onClick={() => navigate(-1)} />

        <span>{pokemon?.name}</span>
      </div>
      <p>#{pokemon?.id}</p>
    </header>
  );
}
