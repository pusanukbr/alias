import React from "react";
import { changeLanguage } from 'i18next';
import { Button, Stack } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher';
function GameLanguageBlock() {
  const changLang = (lang) => {
    changeLanguage(lang);
  };
  return (
    <div className="languageBlock">
      <Stack direction='row' spacing={4} align='center'>
        <Button type="button" onClick={() => changLang('ua')}>ua</Button>
        <Button type="button" onClick={() => changLang('en')}>en</Button>
        <Button type="button" onClick={() => changLang('ru')}>ru</Button>
        <ColorModeSwitcher />
      </Stack>
    </div>
  );
}

export default GameLanguageBlock;