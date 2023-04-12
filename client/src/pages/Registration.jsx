import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { register } from '../store/user/operations';
import {
  Box,
  Container,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import PasswordField from '../components/form/PasswordField';
import Form from '../components/form/Form';
import Input from '../components/form/Input';
import { Rules } from '../const/Rules';
import RouterConfig from '../const/RouterConfig';
import { useDispatch } from 'react-redux';

export default function Registration() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onEnter = async (data) => {
    await dispatch(register({ ...data }));
    navigate(`/${RouterConfig.LOBBY.path}`, { replace: true });
  };
  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Box
          py={8}
          px={10}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('xl') }}
          borderRadius={{ base: 'none', sm: 'xl' }}>
          <Form onSubmit={onEnter}>
            <Input name="name" type="text" label={t('form.name')} rules={Rules.name} />
            <Input name="email" type="email" label={t('form.email')} rules={Rules.email} />
            <PasswordField name="password" label={t('form.password')} rules={Rules.password} />
            <Stack mt="5">
              <Button colorScheme="blue" type="submit" loadingText={t('btn.enter.loading')}>
                {t('btn.enter')}
              </Button>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Container>
  );
}
