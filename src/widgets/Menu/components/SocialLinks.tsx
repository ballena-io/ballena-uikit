import React from 'react';
import styled from 'styled-components';

import Dropdown from '../../../components/Dropdown/Dropdown';
import Link from '../../../components/Link/Link';
import { SvgProps } from '../../../components/Svg';
import { socials } from '../config';
import * as IconModule from '../icons';

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialLinks: React.FC = () => (
  <SocialSection>
    {socials.map((social) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: '24px', color: 'textSubtle', style: { cursor: 'pointer' } };
      const mr = '4px';

      if (social.items) {
        return (
          <Dropdown key={social.label} position="top-right" target={<Icon {...iconProps} mb={mr} />}>
            {social.items.map((item) => (
              <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                {item.label}
              </Link>
            ))}
          </Dropdown>
        );
      }
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </SocialSection>
);

export default React.memo(SocialLinks, () => true);
