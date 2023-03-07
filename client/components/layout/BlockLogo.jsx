import React from 'react';
import {
  Container,
  Avatar,
  Text,
  Heading,
  Stack,
  Divider,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { FaGamepad, FaBuilding, FaHandSpock } from 'react-icons/fa';
import store from '../../store';
import { t } from 'i18next';

export default function BlockLogo() {
  const {
    user: { isAuth, name, numberGameEnd, createRooms, creatingProfile }
  } = store.getState();
  return (
    <Container
      w="100%"
      p="10px"
      height="auto"
      transition="height .3s"
      display="flex"
      alignItems="center"
      justifyContent="center">
      {!isAuth ? (
        <Stack direction="row">
          <Stack>
            <Avatar name={name} src="./avatar.jpg" size="xl" />
          </Stack>
          <Stack>
            <Heading size="md">{name || 'Lorem ipsum'}</Heading>
            <Divider />
            <List>
              <ListItem fontSize="sm">
                <ListIcon as={FaHandSpock} color="green.500" />
                {t('user.creating.profile', creatingProfile)}
              </ListItem>
              <ListItem fontSize="sm">
                <ListIcon as={FaGamepad} color="green.500" />
                {t('user.rooms.gaming', numberGameEnd)}
              </ListItem>
              <ListItem fontSize="sm">
                <ListIcon as={FaBuilding} color="green.500" />
                {t('user.rooms.create', createRooms)}
              </ListItem>
            </List>
          </Stack>
        </Stack>
      ) : (
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold">
          ALIAS
        </Text>
      )}
    </Container>
  );
}
