import styled from 'styled-components';
import { device } from '../../ui/settings';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

const Main = props => {
  return <MainContainer>{props.children}</MainContainer>;
};

export default Main;