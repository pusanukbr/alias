import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import SettingRoom from '../components/rooms/SettingRoom';
import ConnectRoom from '../components/rooms/ConnectRoom';
import SettingUser from '../components/user/SettingUser';

export default function Lobby() {
  return (
    <Box px={{ base: '0', sm: '8' }}>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold">
        Welcome to Alias Games
      </Text>
      <Flex>
        <SettingUser />
        <SettingRoom />
        <ConnectRoom />
      </Flex>
    </Box>
  );
}
