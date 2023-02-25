import { Outlet } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { GameLanguageBlock } from './Language';
import ListMenu from './ListMenu';
import { Stack, Flex } from '@chakra-ui/react';

function Layout() {
  return (
    <>
      <Flex>
        <Flex flex="1" position="fixed">
          <Stack>
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
          <Stack pt="72px">
            <Outlet />
            <Outlet />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default Layout;
