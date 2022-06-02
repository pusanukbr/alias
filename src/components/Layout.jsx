import { Outlet  } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Stack } from '@chakra-ui/react';

function Layout() {
    return(
        <>
            <Stack direction='row' maxW="lg" m={4} spacing={4} align='center' justify='space-between'>
                <ColorModeSwitcher />
            </Stack>
            <Outlet />
        </>
    );

}
export default Layout;