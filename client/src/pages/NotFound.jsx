import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import RouterConfig from '../const/RouterConfig';
import { useTranslation } from 'react-i18next';
import { Container, Button, Stack, Text } from '@chakra-ui/react';

export default function NotFound() {
  const { t } = useTranslation();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || RouterConfig.LOBBY.path;
  return (
    <div>
      <Container
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        height="100vh">
        <Stack fontSize="2xl" flexDirection="column" alignItems="center" mb="4">
          <Text>{t('page.notFound.title')}</Text>
          <Text>404</Text>
        </Stack>

        <Link to={fromPage}>
          <Button>{t('page.notFound.backButton')}</Button>
        </Link>
      </Container>
    </div>
  );
}
