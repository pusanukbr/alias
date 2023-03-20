import React from 'react';
import {
  Container,
  Text,
  Heading,
  Stack,
  Divider,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { FaGamepad, FaBuilding, FaHandSpock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ChangLogo from './ChangLogo';
import { connect } from 'react-redux';

const BlockHeader = React.memo((props) => {
  const { t } = useTranslation();
  const {
    user: { isAuth, name, date, numberGameEnd, createRooms }
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
        <Stack direction="row" width="100%" justifyContent="space-between">
          <ChangLogo />

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
});
export default connect(
  ({ user, ui }) => ({
    user,
    ui
  }),
  (dispatch) => ({ dispatch })
)(BlockHeader);
