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

  const onSubmit = (data) => {
    console.log('SUBMIT====>', data);
  };

  return (
    <Container overflow="auto" pt="15px" pb="15px">
      <Form onSubmit={onSubmit}>
        <ChangColor name="color" rules={Rules.name} />
        <Input name="name" mb="15px" type="text" label={t('create.form.name')} rules={Rules.name} />
        <PasswordField
          name="password"
          mb="15px"
          label={t('create.form.password')}
          rules={Rules.password}
        />
        <PasswordField
          name="passwordRepeat"
          label={t('create.form.passwordRepeat')}
          rules={Rules.password}
        />
        <Stack mt="5">
          <Button
            colorScheme="teal"
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
