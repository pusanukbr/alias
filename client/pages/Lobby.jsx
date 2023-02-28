import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import SettingRoom from '../components/rooms/SettingRoom';
import ConnectRoom from '../components/rooms/ConnectRoom';
import SettingUser from '../components/user/SettingUser';

export default function Lobby() {
  return (
    <Box px={{ base: '0', sm: '8' }}>
      <Flex>
        <SettingUser />
        <SettingRoom />
        <ConnectRoom />
      </Flex>
    </Box>
  );
}
