import {
    Box,
    Spinner
} from '@chakra-ui/react';
function loading() {

    return (
        <Box
            w='100%'
            h='100vh' 
            display='flex' 
            position='relative' 
            alignItems='center' 
            justifyContent='center'
            >
            <Spinner
            position='absolute'
            w='90px'
            h='90px'
            thickness='8px'
            speed='1s'
            emptyColor='white.100'
            color='blue.500'
            />
        </Box>
    )

}

export default loading;