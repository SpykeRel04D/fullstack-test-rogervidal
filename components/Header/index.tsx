import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../ui/settings';
import Logo from '../../ui/svg/pokemon-logo.svg';

const HeaderBar = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT};
  padding: 0.5rem 0;
`;

const LogoContainer = styled.div`
  height: 100%;
`;

const Header = () => {
  return (
    <HeaderBar>
      <LogoContainer>
        <Logo style={{ height: '100%', width: '100%' }} />
      </LogoContainer>
    </HeaderBar>
  );
};

export default Header;
