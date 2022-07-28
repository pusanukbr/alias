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
            w='50px'
            h='90px'
            thickness='8px'
            speed='1s'
            emptyColor='blue.500'
            color='blue.500'
            />
            <Spinner
            position='absolute'
            w='60px'
            h='90px'
            thickness='6px'
            speed='1.25s'
            emptyColor='blue.500'
            color='blue.500'
            />
        </Box>
    )

}

export default loading;