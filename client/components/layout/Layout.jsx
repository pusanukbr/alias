import { Outlet } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { GameLanguageBlock } from '../Language';
import ListMenu from './ListMenu';
import BlockLogo from './BlockLogo';
import { Stack, Flex, Divider, useColorModeValue } from '@chakra-ui/react';

function Layout() {
  return (
    <>
      <Flex>
        <Flex
          position="fixed"
          height="100vh"
          width="300px"
          backgroundColor={useColorModeValue('white', 'gray.800')}>
          <Stack>
            <BlockLogo />
            <Divider />
            <ListMenu />
          </Stack>
        </Flex>

        <Flex flex="3" position="fixed" backdropFilter="blur(2px)">
          <Stack direction="row" flex="3" p={4} spacing={4} align="center" justify="space-between">
            <ColorModeSwitcher />
            <GameLanguageBlock />
          </Stack>
        </Flex>

        <Flex flex="3">
          <Stack pt="72px" pl="300px" backgroundColor={useColorModeValue('white', 'gray.700')}>
            <Outlet />
            <Outlet />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default Layout;
