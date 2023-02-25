import React from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Heading, Badge } from '@chakra-ui/react';

function GameRightBlock({ state }) {
  console.log('state', state);
  const { t } = useTranslation();
  return (
    <Center p="4">
      <Heading size="md">
        {t('game.scopes')}
        <Badge boxShadow="xs" colorScheme="purple">
          {state.skip_word.length} - {state.win_word.length}
        </Badge>
      </Heading>
    </Center>
  );
}

export default GameRightBlock;
