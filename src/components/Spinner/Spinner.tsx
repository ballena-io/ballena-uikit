import React from 'react';
import styled, { keyframes } from 'styled-components';

import CoinIcon from './CoinIcon';
import { SpinnerProps } from './types';

const float = keyframes`
	0% {
		transform: translatey(10px);
	}
	50% {
		transform: translatey(0px);
	}
	100% {
		transform: translatey(10px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const FloatingCoinIcon = styled(CoinIcon)`
  animation: ${float} 1s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 82 }) => {
  return (
    <Container>
      <FloatingCoinIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
