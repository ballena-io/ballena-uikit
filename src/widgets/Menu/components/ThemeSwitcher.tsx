import React from 'react';
import styled from 'styled-components';

import Button from '../../../components/Button/Button';
import { SvgProps } from '../../../components/Svg';
import * as IconModule from '../icons';

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const StyledButton = styled(Button)`
  display: flex;
  justify-content: left;
`;

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <StyledButton variant="text" onClick={() => toggleTheme(!isDark)} scale="md0">
    {isDark ? <MoonIcon color="text" width="24px" /> : <SunIcon color="text" width="24px" />}
  </StyledButton>
);

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
