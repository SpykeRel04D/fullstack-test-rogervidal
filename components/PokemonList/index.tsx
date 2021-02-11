import styles from './pokemonlist.module.scss';

const PokemonList = props => {
  return (
    <div className={styles.container}>
      {props.pokemons.map((value, index) => {
        return (
          <div className={styles.frame} key={index} onClick={() => props.setUid(value.id)}>
            <img src={value.img} alt={`Pokemon_${value.id}`} />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
