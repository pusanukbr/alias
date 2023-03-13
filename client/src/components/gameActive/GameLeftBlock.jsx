import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Heading, Badge } from '@chakra-ui/react';

function GameLeftBlock({ userName, roomId }) {
  const { t } = useTranslation();
  return (
    <Box p="4" justifyContent="center" flexDirection="column">
      <Heading size="md">
        {t('user')} <Badge colorScheme="purple">({userName})</Badge>
      </Heading>
      <Heading size="md">
        {t('id.room')} <Badge colorScheme="purple">({roomId})</Badge>
      </Heading>
    </Box>
  );
}

export default GameLeftBlock;
