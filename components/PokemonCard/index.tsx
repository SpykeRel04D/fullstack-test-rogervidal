import styled from 'styled-components';
import { device, BUTTON, RADIUS, BORDER } from '../../ui/settings';

const Holder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    width: 50%;
  }
`;

const Card = styled.div`
  position: relative;
  width: 90%;
  max-width: 300px;
  height: 360px;
  border-radius: ${RADIUS};
  border: 1px solid white;
  background: rgb(1, 45, 92);
  background: linear-gradient(135deg, rgba(1, 45, 92, 1) 0%, rgba(0, 210, 253, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#012d5c",endColorstr="#00d2fd",GradientType=1);
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 500px;
    height: 540px;
  }
`;

const Miniature = styled.img`
  position: absolute;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 10%;
  z-index: 5;

  @media ${device.tablet} {
    width: 56%;
  }

  @media ${device.desktop} {
    width: 50%;
  }
`;

const Information = styled.div`
  position: absolute;
  width: 86%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 26px;
  text-align: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  color: black;

  h2 {
    margin-top: 18px;
  }

  p {
    font-size: 0.85rem;
    align-self: flex-start;
    line-height: 1.8rem;
  }

  @media ${device.tablet} {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.9rem;
    }
  }
`;

const TypeBar = styled.div`
  height: 30px;
  margin: 5px 0;

  .type {
    display: inline-block;
    padding: 0 8px;
    margin: 0 3px;
    border: 1px solid red;
    border-radius: 3px;
    text-align: center;
    color: red;
    font-size: 0.7rem;
  }

  @media ${device.tablet} {
    margin: 14px 0;
    .type {
      font-size: 1rem;
    }
  }
`;

const EvolutionBar = styled.div`
  width: 90%;
  max-width: 300px;
  margin: 0 auto;
  margin-top: 15px;
  border-top: 1px solid ${BORDER};
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${device.tablet} {
    max-width: 400px;
  }
`;

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  margin: 4px auto;
  font-size: 0.7rem;

  span {
    font-size: 1rem;
  }

  &:hover {
    outline: none;
    cursor: pointer;
    color: ${BUTTON};
  }

  @media ${device.tablet} {
    font-size: 0.8rem;

    span {
      font-size: 1.3rem;
    }
  }
`;

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
    <Holder>
      <Card>
        <Miniature src={currentPokemon.img} alt={currentPokemon.name} />
        <Information>
          <h2>{currentPokemon.name}</h2>
          <TypeBar>
            {currentPokemon.type.map((value, index) => {
              return (
                <div className="type" key={index}>
                  {value}
                </div>
              );
            })}
          </TypeBar>
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
        </Information>
      </Card>
      {!data.evolution && (getPreviousEvolution() || getNextEvolution()) && (
        <EvolutionBar>
          {getPreviousEvolution() && (
            <Button
              onClick={() =>
                data.setEvolution(getPreviousEvolution()[getPreviousEvolution().length - 1].num)
              }>
              Prev Evolution <br />
              <span>{getPreviousEvolution()[getPreviousEvolution().length - 1].name}</span>
            </Button>
          )}
          {getNextEvolution() && (
            <Button onClick={() => data.setEvolution(getNextEvolution()[0].num)}>
              Next Evolution <br />
              <span>{getNextEvolution()[0].name}</span>
            </Button>
          )}
        </EvolutionBar>
      )}
    </Holder>
  );
};

export default PokemonCard;
