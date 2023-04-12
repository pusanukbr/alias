import React from 'react';
import { Container, Stack, Button } from '@chakra-ui/react';
import Form from '../form/Form';
import Input from '../form/Input';
import PasswordField from '../form/PasswordField';
import { Rules } from '../../const/Rules';
import { useTranslation } from 'react-i18next';
import ChangColor from './ChangColor';
import { connect } from 'react-redux';

const SettingUser = (props) => {
  const { t } = useTranslation();

  const onSubmit = (data) => {
    console.log('SUBMIT====>', data);
  };

  return (
    <Container overflow="auto" pt="15px" pb="15px">
      <Form onSubmit={onSubmit}>
        <ChangColor
          name="color"
          rules={Rules.color}
          userColor={props.user.color}
          label={t('create.user.color')}
        />
        <Input
          name="name"
          type="text"
          label={t('create.form.name')}
          rules={{ ...Rules.changeName, ...Rules.required }}
        />
        <PasswordField
          name="password"
          label={t('create.form.password')}
          rules={{ ...Rules.changePassword, ...Rules.required }}
        />
        <PasswordField
          name="passwordRepeat"
          label={t('create.form.passwordRepeat')}
          rules={{ ...Rules.changePassword, ...Rules.required }}
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
};
export default connect(
  ({ user }) => ({ user }),
  (dispatch) => ({ dispatch })
)(SettingUser);
