import React from 'react';

import Button from '../../../components/Button/Button';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Text from '../../../components/Text/Text';
import { LangType } from '../types';
import MenuButton from './MenuButton';

interface Props {
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
}

const SPANISH_LANG_CODE = 'es-ES';
const SPANISH_LANG_TEXT = 'ES';

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => {
  const buttonText = currentLang === SPANISH_LANG_CODE ? SPANISH_LANG_TEXT : currentLang;

  return (
    <Dropdown
      position="top-right"
      target={
        <Button scale="xs" variant="text">
          <Text color="icon">{buttonText?.toUpperCase()}</Text>
        </Button>
      }
    >
      {langs.map((lang) => (
        <MenuButton
          key={lang.code}
          fullWidth
          onClick={() => setLang(lang)}
          // Safari fix
          style={{ minHeight: '32px', height: 'auto' }}
        >
          {lang.language}
        </MenuButton>
      ))}
    </Dropdown>
  );
};

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
