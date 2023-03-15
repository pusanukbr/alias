import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import RouterConfig from '../const/RouterConfig';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Button
} from '@chakra-ui/react';

export default function NotFound() {
  const { t } = useTranslation();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || RouterConfig.LOBBY.path;
  return (
    <div>
      <Link to={fromPage}>{t('page.notFound.back')}</Link>
    </div>
  );
}
