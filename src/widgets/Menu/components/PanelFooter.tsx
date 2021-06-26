import React from 'react';
import styled from 'styled-components';

import { MENU_FOOTER_HEIGHT } from '../config';
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
  min-height: ${MENU_FOOTER_HEIGHT}px;
  padding-top: 10px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 0 12px;
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 0 12px;
`;

const PanelFooter: React.FC<Props> = ({ isPushed, toggleTheme, isDark, currentLang, langs, setLang }) => (
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

export default PanelFooter;
