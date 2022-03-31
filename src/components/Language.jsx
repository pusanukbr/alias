import React from "react";
import i18n, { changeLanguage } from 'i18next';
import { Button, Stack } from '@chakra-ui/react'

function GameLanguageBlock() {
  const changLang = (lang) => {
    changeLanguage(lang);
  };
  return (
    <div className="languageBlock">
      <Stack direction='row' m={4} spacing={4} align='center'>
        {/* UA */}
        <Button type="button"
        _focus={{shadow: 'none'}}
        colorScheme={(i18n.language === 'ua' ? 'teal' : null)}
        onClick={() => changLang('ua')}>ua</Button>
        {/* EN */}
        <Button type="button"
        _focus={{shadow: 'none'}}
        colorScheme={(i18n.language === 'en' ? 'teal' : null)}
        onClick={() => changLang('en')}>en</Button>
        {/* RU */}
        <Button type="button"
        _focus={{shadow: 'none'}}
        colorScheme={(i18n.language === 'ru' ? 'teal' : null)}
        onClick={() => changLang('ru')}>ru</Button>
      </Stack>
    </div>
  );
}

export default GameLanguageBlock;