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
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { PasswordField } from '../components/form/PasswordField';
import { connect } from "react-redux";

function JoinBlock(props) {
  const { t } = useTranslation();
  const [name, setName] = React.useState('');
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
    props.dispatch(signin({ password, name }));
    navigate(fromPage, { replace: true });
  }
  return (
    <div>
      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Box
            py={8}
            px={10}
            bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
            boxShadow={{ base: 'none', sm: useColorModeValue('xl') }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="user">{t('form.login')}</FormLabel>
                  <Input id="user" type="text" onChange={(e) => setName(e.target.value)} />
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

export default connect(({ ui }) => ({
  isLoading: ui.loading,
}), (dispatch) => ({dispatch}))(JoinBlock);