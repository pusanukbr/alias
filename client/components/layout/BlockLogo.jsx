import React from 'react';
import { Container, Avatar, Text } from '@chakra-ui/react';

export default function BlockLogo() {
  return (
    <Container>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold">
        ALIAS
      </Text>
      <Avatar name="Dan Abrahmov" src="./avatar.jpg" size="xl" />
      <span>icon</span>
    </Container>
  );
}
