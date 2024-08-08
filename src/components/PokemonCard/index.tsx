import { Link } from 'react-router-dom';
import { background } from '../../utils/backgroundByType';
import { Loader } from '../Loader';

import { useGetPokemon } from '../../hooks/useGetPokemon';
import styles from './styles.module.scss';

interface Props {
  url: string;
}

export function PokemonCard({ url }: Props) {
  const { pokemon } = useGetPokemon(url);

  const backgroundSelected =
    background[pokemon?.types[0].type.name as keyof typeof background];

  return (
    <Link to={`/pokemon/${pokemon?.id}`} className={styles.pokeCard}>
      <div style={{ borderColor: backgroundSelected }} className={styles.top}>
        <span style={{ color: backgroundSelected }}>#{pokemon?.id}</span>
        {pokemon?.sprites?.other?.dream_world?.front_default ||
        pokemon?.sprites?.front_default ? (
          <img
            src={
              pokemon?.sprites?.other?.dream_world?.front_default ||
              pokemon?.sprites?.front_default
            }
            alt={pokemon?.name}
          />
        ) : (
          <div className={styles.loadingContainer}>
            <Loader color={backgroundSelected} />
          </div>
        )}
      </div>
      <div style={{ background: backgroundSelected }} className={styles.bottom}>
        {pokemon?.name}
      </div>
    </Link>
  );
}
