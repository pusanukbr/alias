import React, { useState } from 'react';
import i18n, { changeLanguage } from 'i18next';
import { Button, Wrap, WrapItem } from '@chakra-ui/react';

export const GameLanguageBlock = () => {
  const [language, setLanguage] = useState(i18n.language);
  const changLang = (lang) => {
    changeLanguage(lang).then(() => setLanguage(lang));
  };
  return (
    <Wrap direction="row" spacing={4}>
      {/* UA */}
      <WrapItem>
        <Button
          type="button"
          _focus={{ shadow: 'none' }}
          colorScheme={language === 'ua' ? 'teal' : null}
          onClick={() => changLang('ua')}>
          UA
        </Button>
      </WrapItem>

      {/* EN */}
      <WrapItem>
        <Button
          type="button"
          _focus={{ shadow: 'none' }}
          colorScheme={language === 'en' ? 'teal' : null}
          onClick={() => changLang('en')}>
          EN
        </Button>
      </WrapItem>

      {/* RU */}
      <WrapItem>
        <Button
          type="button"
          _focus={{ shadow: 'none' }}
          colorScheme={language === 'ru' ? 'teal' : null}
          onClick={() => changLang('ru')}>
          RU
        </Button>
      </WrapItem>
    </Wrap>
  );
};
