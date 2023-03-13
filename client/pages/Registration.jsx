import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { registration } from '../store/reducer/users';
import { setLoading } from '../store/reducer/ui';
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
import { connect } from 'react-redux';
import { Rules } from '../const/Validate';

function JoinBlock(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const onEnter = (data) => {
    console.log(data);
    props.dispatch(setLoading(true));
    props.dispatch(registration({ ...data }));
    navigate(fromPage, { replace: true });
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
            <Input name="name" type="text" label={t('form.name')} rules={Rules.email} />
            <Input name="email" type="email" label={t('form.email')} rules={Rules.email} />
            <PasswordField name="password" label={t('form.password')} rules={Rules.password} />
            <Stack mt="5">
              <Button
                colorScheme="blue"
                type="submit"
                isLoading={props.isLoading}
                loadingText={t('btn.enter.loading')}>
                {t('btn.enter')}
              </Button>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Container>
  );
}

export default connect(
  ({ ui }) => ({
    isLoading: ui.loading
  }),
  (dispatch) => ({ dispatch })
)(JoinBlock);
