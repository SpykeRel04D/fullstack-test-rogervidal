import styles from './pokemoncard.module.scss';
const PokemonCard = () => {
  return (
    <div className={styles.card}>
      <img
        className={styles.miniature}
        src={'http://www.serebii.net/pokemongo/pokemon/004.png'}
        alt={'Charmander'}
      />
      <div className={styles.information}>
        <h2>Charmander</h2>
        <div className={styles.typeZone}>
          <div className={styles.type}>FIRE</div>
        </div>
        <p>
          <b>Height: </b>0.61 m
        </p>
        <p>
          <b>Weight: </b>8.5 kg
        </p>
        <p>
          <b>Weaknesses: </b>Water, Ground, Rock
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
