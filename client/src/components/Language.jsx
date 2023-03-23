import React, { useState } from 'react';
import i18n, { changeLanguage } from 'i18next';
import {
  Button,
  Wrap,
  WrapItem,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const GameLanguageBlock = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [language, setLanguage] = useState(i18n.language);
  const { t } = useTranslation();
  const [shit, setShit] = useState(null);
  const changLang = (lang) => {
    changeLanguage(lang).then(() => setLanguage(lang));
  };

  const pieceOfShit = () => {
    if (shit) return;
    setShit(true);
    onOpen();
  };

  const closeModal = () => {
    changLang('ua');
    onClose();
    setTimeout(() => {
      setShit(false);
    }, 2000);
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
          {t('lang.ua')}
        </Button>
      </WrapItem>

      {/* EN */}
      <WrapItem>
        <Button
          type="button"
          _focus={{ shadow: 'none' }}
          colorScheme={language === 'en' ? 'teal' : null}
          onClick={() => changLang('en')}>
          {t('lang.en')}
        </Button>
      </WrapItem>

      {/* PL */}
      <WrapItem>
        <Button
          type="button"
          _focus={{ shadow: 'none' }}
          colorScheme={language === 'pl' ? 'teal' : null}
          onClick={() => changLang('pl')}>
          {t('lang.pl')}
        </Button>
      </WrapItem>

      {/* RU */}
      <WrapItem>
        <Button
          type="button"
          _focus={{ shadow: 'none' }}
          colorScheme={shit ? 'red' : null}
          onClick={() => pieceOfShit()}>
          {t('lang.ru')}
        </Button>
      </WrapItem>

      <AlertDialog motionPreset="slideInBottom" onClose={closeModal} isOpen={isOpen}>
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Слава Україні!!!🇺🇦</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>Розмовляй нормально, бидло!!!</AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={closeModal}>Героям Слава!</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Wrap>
  );
};
