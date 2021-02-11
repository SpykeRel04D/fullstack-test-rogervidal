import styles from './pokemoncard.module.scss';
const PokemonCard = data => {
  const currentPokemon = data.pokemon;
  const loadedEvolution = data.loadedEvolution;

  const getPreviousEvolution = () => {
    if (loadedEvolution !== null && loadedEvolution.prev_evolution == null) return null;
    let previousEvolution =
      loadedEvolution !== null && loadedEvolution.prev_evolution !== null
        ? loadedEvolution.prev_evolution
        : currentPokemon !== null && currentPokemon.prev_evolution;

    return previousEvolution;
  };

  const getNextEvolution = () => {
    if (loadedEvolution !== null && loadedEvolution.next_evolution == null) return null;
    let nextEvolution =
      loadedEvolution !== null && loadedEvolution.next_evolution !== null
        ? loadedEvolution.next_evolution
        : currentPokemon !== null && currentPokemon.next_evolution;

    return nextEvolution;
  };

  return (
    <>
      <div className={styles.card}>
        <img className={styles.miniature} src={currentPokemon.img} alt={currentPokemon.name} />
        <div className={styles.information}>
          <h2>{currentPokemon.name}</h2>
          <div className={styles.typeZone}>
            {currentPokemon.type.map((value, index) => {
              return (
                <div className={styles.type} key={index}>
                  {value}
                </div>
              );
            })}
          </div>
          <p>
            <b>Height: </b>
            {currentPokemon.height}
          </p>
          <p>
            <b>Weight: </b>
            {currentPokemon.weight}
          </p>
          <p>
            <b>Weaknesses: </b>
            {currentPokemon.weaknesses.join(', ')}
          </p>
        </div>
      </div>
      {!data.evolution && (getPreviousEvolution() || getNextEvolution()) && (
        <div className={styles.evoBar}>
          {getPreviousEvolution() && (
            <div
              className={styles.evolution}
              onClick={() =>
                data.setEvolution(getPreviousEvolution()[getPreviousEvolution().length - 1].num)
              }>
              <p>Prev Evolution</p>
              <span>{getPreviousEvolution()[getPreviousEvolution().length - 1].name}</span>
            </div>
          )}
          {getNextEvolution() && (
            <div
              className={styles.evolution}
              onClick={() => data.setEvolution(getNextEvolution()[0].num)}>
              <p>Next Evolution</p>
              <span>{getNextEvolution()[0].name}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PokemonCard;
