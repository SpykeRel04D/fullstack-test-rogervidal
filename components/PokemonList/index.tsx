import styled from 'styled-components';
import { device, DARK, RADIUS } from '../../ui/settings';

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 136px;
  overflow-y: scroll;

  @media ${device.tablet} {
    height: 200px;
  }

  @media ${device.desktop} {
    height: calc(100vh - 6.5rem - 1.5rem);
    width: 20%;
    max-width: 350px;
  }
`;

const Frame = styled.div`
  width: 60px;
  height: 60px;
  margin: 5px;
  border-radius: ${RADIUS};
  padding: 6px;

  &:hover {
    cursor: pointer;
    background-color: ${DARK};
  }

  @media ${device.tablet} {
    width: 100px;
    height: 100px;
  }
`;

const PokemonList = props => {
  return (
    <List>
      {props.pokemons.map((value, index) => {
        return (
          <Frame key={index} onClick={() => props.setUid(value.num)}>
            <img src={value.img} alt={`Pokemon_${value.num}`} />
          </Frame>
        );
      })}
    </List>
  );
};

export default PokemonList;
