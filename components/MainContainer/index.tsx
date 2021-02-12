import styled from 'styled-components';
import { device } from '../../ui/settings';

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

const Main = (props: { children: any }) => {
  return <MainContainer>{props.children}</MainContainer>;
};

export default Main;
