import React from 'react';
import { Flex } from '@chakra-ui/react';
import SettingRoom from '../components/rooms/SettingRoom';
import ConnectRoom from '../components/rooms/ConnectRoom';

export default function Lobby() {
  return (
    <Flex>
      <SettingRoom />
      <ConnectRoom />
    </Flex>
  );
}
