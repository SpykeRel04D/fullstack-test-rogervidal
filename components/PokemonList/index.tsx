import styles from './pokemonlist.module.scss';

const PokemonList = pokemons => {
  return (
    <div className={styles.container}>
      {pokemons.props.map((value, index) => {
        return (
          <div className={styles.frame} key={index}>
            <img src={value.img} alt={`Pokemon_${value.id}`} />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
