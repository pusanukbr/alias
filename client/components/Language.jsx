import React, { useState, useEffect } from 'react';
import i18n, { changeLanguage } from 'i18next';
import { Button, ButtonGroup } from '@chakra-ui/react';

export const GameLanguageBlock = () => {
  const [language, setLanguage] = useState(i18n.language);
  const changLang = (lang) => {
    changeLanguage(lang).then(() => setLanguage(lang));
  };
  return (
    <ButtonGroup direction='row' key={i18n.language} m={4} spacing={4} align='center'>
      {/* UA */}
      <Button type="button"
      _focus={{shadow: 'none'}}
      colorScheme={(language === 'ua' ? 'teal' : null)}
      onClick={() => changLang('ua')}>UA</Button>
      {/* EN */}
      <Button type="button"
      _focus={{shadow: 'none'}}
      colorScheme={(language === 'en' ? 'teal' : null)}
      onClick={() => changLang('en')}>EN</Button>
      {/* RU */}
      <Button type="button"
      _focus={{shadow: 'none'}}
      colorScheme={(language === 'ru' ? 'teal' : null)}
      onClick={() => changLang('ru')}>RU</Button>
    </ButtonGroup>
  );
}