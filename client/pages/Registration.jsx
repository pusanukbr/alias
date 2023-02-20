import React from "react";
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from "react-router-dom";
import { signin } from '../store/reducer/users';
import { setLoading } from '../store/reducer/ui';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Button,
  Checkbox
} from '@chakra-ui/react';
import { PasswordField } from '../components/form/PasswordField';
import { connect } from "react-redux";

function JoinBlock(props) {
  const { t } = useTranslation();
  const [name, setName] = React.useState('');
  const [hasRoom, sethasRoom] = React.useState(false);
  const [idRoom, setIdRoom] = React.useState(0);
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const onEnter = () => {
    // TODO: Сделать проверку полей!
    if(!password || !name) {
      return alert(t('alert.empty'))
    }
    props.dispatch(setLoading(true));
    props.dispatch(signin({password, name, idRoom: idRoom || ''}));
    navigate(fromPage, { replace: true });
  }
  return (
    <div>
      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
            boxShadow={{ base: 'none', sm: useColorModeValue('xl') }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <Stack spacing="5">
              <FormControl isRequired>
                <FormLabel htmlFor="user">{t('form.login')}</FormLabel>
                <Input id="user" type="text" onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <PasswordField onChange={(e) => setPassword(e.target.value)} />
              <Box><Checkbox onChange={(e)=> sethasRoom(e.target.checked)}>{t('form.hide.hasRoom')}</Checkbox></Box>
              {hasRoom &&
                <FormControl>
                  <FormLabel htmlFor="idRoom">{t('form.idRoom')}</FormLabel>
                  <Input id="idRoom" type="text" onChange={(e) => setIdRoom(e.target.value)} />
                </FormControl>
              }
              <Button
                colorScheme='blue'
                isLoading={props.isLoading}
                loadingText={t('btn.enter.loading')}
                onClick={onEnter}
              >{t('btn.enter')}</Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default connect(({ ui }) => ({
  isLoading: ui.loading,
}), (dispatch) => ({dispatch}))(JoinBlock);