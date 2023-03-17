import React, { useState } from 'react';
import {
  Container,
  Avatar,
  Text,
  Heading,
  Stack,
  Divider,
  List,
  ListItem,
  ListIcon,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import { FaGamepad, FaBuilding, FaHandSpock } from 'react-icons/fa';
import store from '../../store';
import { useTranslation } from 'react-i18next';

import ChangLogo from './ChangLogo';

export default function BlockLogo() {
  const {
    user: { isAuth, name, numberGameEnd, createRooms, date, avatar }
  } = store.getState();
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const filterImg = useColorModeValue('invert(0)', 'invert(1)');
  return (
    <Container
      w="100%"
      p="10px"
      height="auto"
      transition="height .3s"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <ChangLogo />
      {isAuth ? (
        <Stack direction="row">
          <Stack onClick={() => setModalIsOpen(true)}>
            <Avatar
              backgroundColor="teal.400"
              borderWidth="2px"
              borderColor="teal.400"
              icon={
                <Image width="60%" filter={!avatar && filterImg} src={avatar || './alias.png'} />
              }
              size="xl"
            />
          </Stack>
          <Stack>
            <Heading size="md">{name || 'Lorem ipsum'}</Heading>
            <Divider />
            <List>
              <ListItem fontSize="sm">
                <ListIcon as={FaHandSpock} color="teal.500" />
                {t('user.creating.profile', date)}
              </ListItem>
              <ListItem fontSize="sm">
                <ListIcon as={FaGamepad} color="teal.500" />
                {t('user.rooms.gaming', numberGameEnd)}
              </ListItem>
              <ListItem fontSize="sm">
                <ListIcon as={FaBuilding} color="teal.500" />
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
