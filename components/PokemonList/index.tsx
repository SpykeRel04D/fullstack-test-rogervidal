import styled from 'styled-components';
import { device, BIG_RADIUS, HEADER_HEIGHT, FOOTER_HEIGHT } from '../../ui/settings';

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
    height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
    width: 30%;
    max-width: 350px;
  }
`;

const Frame = styled.div`
  width: 60px;
  height: 60px;
  margin: 5px;
  border-radius: ${BIG_RADIUS};
  padding: 6px;

  &:hover {
    cursor: pointer;
    background-color: black;
  }

  @media ${device.tablet} {
    width: 100px;
    height: 100px;
  }
`;

interface PokemonStructure {
  num: string;
  img: string;
}

const PokemonList = (props: { pokemons: PokemonStructure[]; setUid: (arg0: string) => any }) => {
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
