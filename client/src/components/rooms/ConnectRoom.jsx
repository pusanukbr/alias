import React from 'react';
import {
  Container,
  Box,
  List,
  ListItem,
  ListIcon,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
import Input from '../form/Input';
import { FaUserPlus, FaLink } from 'react-icons/fa';
import { Rules } from '../../const/Validate';
import { useTranslation } from 'react-i18next';
import Form from '../form/Form';
import store from '../../store';
export default function ConnectRoom() {
  const { t } = useTranslation();
  const {
    user: { roomsHistory }
  } = store.getState();
  console.log(roomsHistory);
  const onSubmit = () => {
    console.log('start room');
  };
  return (
    <Container
      backgroundColor={useColorModeValue('white', 'gray.700')}
      maxW="auto"
      m="0"
      ml="10px"
      p="20px"
      borderRadius="20px">
      <Box mb={10}>
        <Heading>{t('connect.room.title')}</Heading>
      </Box>
      <Form onSubmit={onSubmit}>
        <Input
          name="connectId"
          type="text"
          mb={5}
          label={t('connect.room.input')}
          rules={Rules.connect}
        />
        <Button mb={10} type="submit">
          {t('connect.room.start')}
        </Button>
        <Box>
          <Heading fontSize="lg" mb={2}>
            {t('connect.room.history')}
          </Heading>
          <List fontSize="lg">
            {roomsHistory.map(({ id, roomType }) => (
              <ListItem key={id}>
                <ListIcon as={roomType === 'user' ? FaUserPlus : FaLink} color="teal.300" />
                {t('connect.room.id', id)}
              </ListItem>
            ))}
          </List>
        </Box>
      </Form>
    </Container>
  );
}
