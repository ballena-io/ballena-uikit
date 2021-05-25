import React from 'react';
import styled from 'styled-components';

import Skeleton from '../../../components/Skeleton/Skeleton';
import { LogoRoundIcon } from '../../../components/Svg';
import Text from '../../../components/Text/Text';

interface Props {
  ballePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 3px 8px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.1);
    }
  }
`;

const BALLEV_2_CONTRACT = '0x9714C04b34E6300964161c3aC37b86451E79152d';
const CHART_URL = `https://charts.bogged.finance/?token=${BALLEV_2_CONTRACT}`;

const BallePrice: React.FC<Props> = ({ ballePriceUsd }) => {
  return ballePriceUsd ? (
    <PriceLink href={CHART_URL} target="_blank">
      <LogoRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${ballePriceUsd.toFixed(2)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(BallePrice);
