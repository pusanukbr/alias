import React from "react";
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from "react-router-dom";
import { signin } from '../../reducer/users';
import { setLoading } from '../../reducer/ui';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { PasswordField } from '../form/PasswordField';
import axios from "axios";
import $api from "../../http";
import { connect } from "react-redux";

function JoinBlock(props) {
  const { t } = useTranslation();
  const [roomId, setRoomId] = React.useState('');
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const onEnter = () => {
    // TODO: Сделать проверку полей!
    if(!roomId || !password || !login) {
      return alert(t('alert.empty'))
    }
    props.dispatch(setLoading(true));
    console.log('join', roomId, password, login);
    props.dispatch(signin({roomId, password, login}, () => navigate(fromPage, { replace: true })));
  }
  return (
    <div className="join-block">
      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="user">{t('form.login')}</FormLabel>
                  <Input id="user" type="text" onChange={(e) => setLogin(e.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="roomId">{t('id.room')}</FormLabel>
                  <Input id="roomId" type="text" onChange={(e) => setRoomId(e.target.value)} />
                </FormControl>
                <PasswordField onChange={(e) => setPassword(e.target.value)} />
                <Button
                colorScheme='blue'
                isLoading={props.isLoading}
                loadingText={t('btn.enter.loading')}
                onClick={onEnter}
                >{t('btn.enter')}</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default connect(({ room, ui }) => ({
  roomsId: room.id,
  isLoading: ui.loading,
}), (dispatch) => ({dispatch}))(JoinBlock);