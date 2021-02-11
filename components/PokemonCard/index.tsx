import styles from './pokemoncard.module.scss';
const PokemonCard = data => {
  const currentPokemon = data.pokemon;
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
      {!data.evolution && (currentPokemon.prev_evolution || currentPokemon.next_evolution) && (
        <div className={styles.evoBar}>
          {currentPokemon.prev_evolution && (
            <div
              className={styles.evolution}
              onClick={() =>
                data.setEvolution(
                  currentPokemon.prev_evolution[currentPokemon.prev_evolution.length - 1].num
                )
              }>
              <p>Prev Evolution</p>
              <span>
                {currentPokemon.prev_evolution[currentPokemon.prev_evolution.length - 1].name}
              </span>
            </div>
          )}
          {currentPokemon.next_evolution && (
            <div
              className={styles.evolution}
              onClick={() => data.setEvolution(currentPokemon.next_evolution[0].num)}>
              <p>Next Evolution</p>
              <span>{currentPokemon.next_evolution[0].name}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PokemonCard;
