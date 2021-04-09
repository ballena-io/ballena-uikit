import React from 'react';
import styled from 'styled-components';

import IconButton from '../../../components/Button/IconButton';
import { CogIcon } from '../../../components/Svg';
import { MENU_ENTRY_HEIGHT } from '../config';
import { PanelProps, PushedProps } from '../types';
import LangSelector from './LangSelector';
import SocialLinks from './SocialLinks';
import ThemeSwitcher from './ThemeSwitcher';

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  background-color: ${({ theme }) => theme.nav.background};
  height: 180px;
`;

const SettingsEntry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 12px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({ isPushed, pushNav, toggleTheme, isDark, currentLang, langs, setLang }) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        <SocialLinks />
      </SocialEntry>
      <SettingsEntry>
        <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
