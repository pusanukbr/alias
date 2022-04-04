import React from "react";
import { useTranslation } from 'react-i18next';
import {
  Center,
  Heading,
  Badge,
} from '@chakra-ui/react';

function GameRightBlock() {
  const { t } = useTranslation();
  return (
    <Center p='4'>
      <Heading size='md'>{t('game.scopes')} <Badge boxShadow='xs' colorScheme='purple'>0 - 1</Badge></Heading>
    </Center>
  );
}

export default GameRightBlock;