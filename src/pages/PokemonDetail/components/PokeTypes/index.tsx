import { IPokemon } from '../../../../types/pokemon';
import { background } from '../../../../utils/backgroundByType';

import styles from './styles.module.scss';

interface Props {
  pokemon: IPokemon | null;
}

export function PokeTypes({ pokemon }: Props) {
  return (
    <div className={styles.types}>
      {pokemon?.types.map(({ type: { name } }) => (
        <div
          key={name}
          style={{ background: background[name as keyof typeof background] }}
          className={styles.type}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
