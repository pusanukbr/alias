import { Outlet, useLocation } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { GameLanguageBlock } from '../Language';
import ListMenu from './ListMenu';
import BlockHeader from './BlockHeader';
import { Stack, Flex, Divider, useColorModeValue, Heading } from '@chakra-ui/react';
import SettingUser from '../user/SettingUser';
import { useTranslation } from 'react-i18next';
import LogOut from '../authentication/LogOut';
import { useDispatch } from 'react-redux';
import { selectUser } from '../../store/user/selector';

function Layout() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.replace('/', '');
  const userData = dispatch(selectUser);

  return (
    <>
      <Flex>
        <Flex
          w="calc(100% - 340px)"
          height="75px"
          position="fixed"
          align="center"
          justify="space-between"
          p="8px 10px"
          top="10px"
          right="20px"
          zIndex="2"
          borderRadius="20px"
          backgroundColor="{useColorModeValue('white', 'rgba(26,32,44, .5)')}"
          backdropFilter="blur(20px)">
          <Heading as="h2">{t(`${path || 'notFound'}.page.title`)}</Heading>
          <Flex gap="4">
            <ColorModeSwitcher />
            <GameLanguageBlock />
            {userData.isAuth && <LogOut />}
          </Flex>
        </Flex>

        <Flex
          position="fixed"
          height="100vh"
          width="300px"
          flexDirection="column"
          backgroundColor={useColorModeValue('white', 'gray.700')}>
          <BlockHeader />
          <Divider />
          {userData.isAuth ? <SettingUser /> : <ListMenu />}
        </Flex>

        <Flex w="calc(100% - 340px)" ml="auto" mr="20px" pt="95px">
          <Stack w="100%">
            <Outlet />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default Layout;
