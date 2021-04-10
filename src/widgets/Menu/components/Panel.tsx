import React from 'react';
import styled from 'styled-components';

import { SIDEBAR_WIDTH_FULL } from '../config';
import { PanelProps, PushedProps } from '../types';
import PanelBody from './PanelBody';
import PanelFooter from './PanelFooter';

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean }>`
  position: fixed;
  padding-top: 70px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? '2px solid rgba(133, 133, 133, 0.1)' : 0)};
  z-index: 11;
  transform: translate3d(0, 0, 0);
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed } = props;
  return (
    <StyledPanel isPushed={isPushed}>
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
