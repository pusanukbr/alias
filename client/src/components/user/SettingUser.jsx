import React from 'react';
import { Container, Box, Text, Stack, Button } from '@chakra-ui/react';
import Form from '../form/Form';
import Input from '../form/Input';
import PasswordField from '../form/PasswordField';
import { Rules } from '../../const/Validate';
import { useTranslation } from 'react-i18next';

export default function SettingUser(props) {
  const { t } = useTranslation();
  const test = (e) => {
    console.log(e.target.value);
  };
  return (
    <Container overflow="auto">
      <Box>
        <Text>Color</Text>
        <input type="color" name="color" onChange={test} />
      </Box>
      <Form onSubmit="">
        <Input name="name" type="text" label={t('form.name')} rules={Rules.name} />
        <PasswordField name="password" label={t('form.password')} rules={Rules.password} />
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
