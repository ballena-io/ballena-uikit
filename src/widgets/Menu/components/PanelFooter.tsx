import React from 'react';
import styled from 'styled-components';

import { MENU_ENTRY_SETTINGS_HEIGHT, MENU_ENTRY_SOCIAL_HEIGHT } from '../config';
import { PanelProps, PushedProps } from '../types';
import LangSelector from './LangSelector';
import SocialLinks from './SocialLinks';
import ThemeSwitcher from './ThemeSwitcher';

interface Props extends PanelProps, PushedProps {}

const Container = styled.div<{ isPushed: boolean }>`
  flex: none;
  background-color: ${({ theme }) => theme.nav.background};
  height: 210px;
  overflow-x: ${({ isPushed }) => (isPushed ? 'visible' : 'hidden')};
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_SETTINGS_HEIGHT}px;
  padding: 0 12px;
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_SOCIAL_HEIGHT}px;
  padding: 0 12px;
`;

const PanelFooter: React.FC<Props> = ({ isPushed, toggleTheme, isDark, currentLang, langs, setLang }) => {
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
    <Container isPushed={isPushed}>
      <SocialSection>
        <SocialLinks />
      </SocialSection>
      <FooterSection>
        <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
      </FooterSection>
    </Container>
  );
};

export default PanelFooter;
