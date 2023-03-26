import React, { useState } from 'react';
import {
  Text,
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
import { FaUserPlus, FaLink, FaRegCopy } from 'react-icons/fa';
import { Rules } from '../../const/Validate';
import Form from '../form/Form';
import { useTranslation } from 'react-i18next';
import store from '../../store/index';

let timer;

export default function ConnectRoom() {
  const { t } = useTranslation();

  const {
    user: { roomsHistory }
  } = store.getState();
  const [copyId, setCopyId] = useState(false);

  const onSubmit = () => {
    console.log('start room');
  };
  const History = React.memo(() => {
    return (
      <Box mt="10">
        <Heading fontSize="lg" mb={2}>
          {t('connect.room.history')}
        </Heading>
        <List fontSize="lg">
          {roomsHistory.map(({ id, roomType }) => (
            <ListItem key={id} display="flex" alignItems="center">
              <ListIcon as={roomType === 'user' ? FaUserPlus : FaLink} color="teal.300" />
              <Box
                _hover={{ cursor: 'pointer' }}
                onClick={() => copyToClipboard(id)}
                display="flex"
                alignItems="center">
                {t('connect.room.id', { id })}
                <ListIcon as={FaRegCopy} ml="2" color={copyId === id ? 'teal.100' : 'teal.400'} />
                {copyId === id && (
                  <Text ml="1" opacity="0.5">
                    {t('connect.room.copyed')}
                  </Text>
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  });

  const copyToClipboard = (id) => {
    clearTimeout(timer);
    navigator.clipboard.writeText(id);
    setCopyId(id);
    timer = setTimeout(() => {
      setCopyId(null);
    }, 1000);
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
        <Button colorScheme="teal" type="submit">
          {t('connect.room.start')}
        </Button>
      </Form>
      {roomsHistory && roomsHistory.length ? <History /> : null}
    </Container>
  );
}
