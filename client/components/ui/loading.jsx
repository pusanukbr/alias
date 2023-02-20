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
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Box>
    )

}

export default loading;