import styled from 'styled-components';
import { LIGHT, FOOTER_HEIGHT } from '../../ui/settings';

const FooterContainer = styled.footer`
  height: ${FOOTER_HEIGHT};
  color: ${LIGHT};
  margin-left: 8px;
`;

const Footer = () => {
  return <FooterContainer>© 2021 Gotta catch 'em all</FooterContainer>;
};

export default Footer;
