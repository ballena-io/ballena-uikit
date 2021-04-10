import React from 'react';
import styled from 'styled-components';

import { MENU_ENTRY_FOOTER_HEIGHT } from '../config';
import { PanelProps, PushedProps } from '../types';
import LangSelector from './LangSelector';
import SocialLinks from './SocialLinks';
import ThemeSwitcher from './ThemeSwitcher';

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  background-color: ${({ theme }) => theme.nav.background};
  height: 150px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${MENU_ENTRY_FOOTER_HEIGHT}px;
  padding: 0 12px;
`;

const PanelFooter: React.FC<Props> = ({ isPushed, pushNav, toggleTheme, isDark, currentLang, langs, setLang }) => {
  // if (!isPushed) {
  //   return (
  //     <Container>
  //       <IconButton variant="text" onClick={() => pushNav(true)}>
  //         <CogIcon />
  //       </IconButton>
  //     </Container>
  //   );
  // }

  return (
    <Container>
      <FooterSection>
        <SocialLinks />
      </FooterSection>
      <FooterSection>
        <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
      </FooterSection>
    </Container>
  );
};

export default PanelFooter;
