import React from 'react';
import { Container, Box, List, ListItem, ListIcon, Button } from '@chakra-ui/react';
import Input from '../form/Input';
import { FaUserPlus, FaLink } from 'react-icons/fa';
import { Rules } from '../../const/Validate';
import { useTranslation } from 'react-i18next';
import Form from '../form/Form';

export default function ConnectRoom() {
  const { t } = useTranslation();
  return (
    <Container>
      <Form onSubmit="">
        <Input name="connectId" type="text" label={t('room.connect.id')} rules={Rules.connect} />
        <Box>
          <List>
            <ListItem>
              <ListIcon as={FaUserPlus} color="green.500" />
              Id number 1
            </ListItem>
            <ListItem>
              <ListIcon as={FaLink} color="green.500" />
              Id number 2
            </ListItem>
          </List>
        </Box>
        <Button type="submit">Connect</Button>
      </Form>
    </Container>
  );
}
