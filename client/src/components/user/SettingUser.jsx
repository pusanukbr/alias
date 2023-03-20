import React from 'react';
import { Container, Stack, Button } from '@chakra-ui/react';
import Form from '../form/Form';
import Input from '../form/Input';
import PasswordField from '../form/PasswordField';
import { Rules } from '../../const/Validate';
import { useTranslation } from 'react-i18next';
import ChangColor from './ChangColor';

export default function SettingUser(props) {
  const { t } = useTranslation();
  return (
    <Container overflow="auto" pt="15px" pb="15px">
      <ChangColor />
      <Form onSubmit="">
        <Input name="name" mb="15px" type="text" label={t('form.name')} rules={Rules.name} />
        <PasswordField
          name="password"
          mb="15px"
          label={t('form.password')}
          rules={Rules.password}
        />
        <PasswordField
          name="passwordRepeat"
          label={t('form.passwordRepeat')}
          rules={Rules.password}
        />
        <Stack mt="5">
          <Button
            colorScheme="blue"
            type="submit"
            isLoading={props.isLoading}
            loadingText={t('btn.enter.loading')}>
            {t('btn.save')}
          </Button>
        </Stack>
      </Form>
    </Container>
  );
}
