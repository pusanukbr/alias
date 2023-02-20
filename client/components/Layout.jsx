import { Outlet } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { GameLanguageBlock } from './Language';
import { Stack } from '@chakra-ui/react';

function Layout() {
    return(
        <>
            <Stack direction='row' width='100%' p={4} spacing={4} align='center' position="fixed" zIndex='1' justify='space-between'>
              <ColorModeSwitcher />
              <GameLanguageBlock />
            </Stack>
            <Outlet />
        </>
    );

}
export default Layout;