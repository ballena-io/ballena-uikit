import React from 'react';
import styled from 'styled-components';

import { LogoRoundIcon } from '../../../components/Svg';

// import Text from '../../../components/Text/Text';

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = () => {
  return (
    // return cakePriceUsd ? (
    <PriceLink
      href="https://bscscan.com/tx/0xa93afa8423564b93e6ce7e61e0c236e128a9bcf1b1d9e139ccfed5c04e3f82c7"
      target="_blank"
    >
      <LogoRoundIcon width="24px" mr="8px" />
      {/* <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text> */}
    </PriceLink>
    // ) : (
    //   <Skeleton width={80} height={24} />
    // );
  );
};

export default React.memo(CakePrice);
