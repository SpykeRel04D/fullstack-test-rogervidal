import styles from './pokemoncard.module.scss';
const PokemonCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.information}>Charmander</div>
    </div>
  );
};

export default PokemonCard;
