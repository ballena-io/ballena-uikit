import React from 'react';
import styled from 'styled-components';

import Flex from '../../../components/Box/Flex';
import Button from '../../../components/Button/Button';
import { SvgProps } from '../../../components/Svg';
import Text from '../../../components/Text/Text';
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
    {/* alignItems center is a Safari fix */}
    <Flex>
      <SunIcon color={isDark ? 'textDisabled' : 'text'} width="24px" />
      <Text color="textDisabled" mx="4px">
        /
      </Text>
      <MoonIcon color={isDark ? 'text' : 'textDisabled'} width="24px" />
    </Flex>
  </StyledButton>
);

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
