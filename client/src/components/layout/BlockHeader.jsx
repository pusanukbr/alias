import React from 'react';
import { Container, Text, Stack, Divider, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaGamepad, FaBuilding, FaHandSpock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ChangLogo from './ChangLogo';
import { connect } from 'react-redux';

const BlockHeader = (props) => {
  const { t } = useTranslation();
  const {
    user: { isAuth, name, date, numberGameEnd = 10, createRooms = 10 }
  } = props;

  return (
    <Container
      w="100%"
      pt="15px"
      pb="15px"
      height="auto"
      transition="height .3s"
      display="flex"
      alignItems="center"
      justifyContent="center">
      {isAuth ? (
        <Stack direction="column" width="100%" alignItems="center">
          <ChangLogo />

          <Stack width="100%">
            <Text fontSize="xl" fontWeight="extrabold" textAlign="center">
              {name.charAt(0).toUpperCase() + name.slice(1) || 'Lorpsum'}
            </Text>
            <Divider />
            <List>
              <ListItem fontSize="sm">
                <ListIcon as={FaHandSpock} color="teal.500" />
                {t('user.creating.profile', { date })}
              </ListItem>
              <ListItem fontSize="sm">
                <ListIcon as={FaGamepad} color="teal.500" />
                {t('user.rooms.gaming', { numberGameEnd })}
              </ListItem>
              <ListItem fontSize="sm">
                <ListIcon as={FaBuilding} color="teal.500" />
                {t('user.rooms.create', { createRooms })}
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
};
export default connect(
  ({ user, ui }) => ({
    user,
    ui
  }),
  (dispatch) => ({ dispatch })
)(BlockHeader);
