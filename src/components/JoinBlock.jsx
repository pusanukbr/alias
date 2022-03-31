import React from "react";
import Language from './Language';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { PasswordField } from './form/PasswordField';

function JoinBlock({ onLogin }) {
  const { t } = useTranslation();
  const [roomId, setRoomId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);
  const erros = {
    id: 'ID error',
    pass: 'Pass error'
  }
  const onEnter = () => {
    if(!roomId || !userName) {
      return alert(t('alert.empty'))
    }
    const obj = {
      roomId,
      userName
    }
    setLoading(true)
    // await axios.post('/rooms', obj);
    onLogin(obj);
  }
  return (
    <div className="join-block">
      <div>
        <Language/>
      </div>
      {/* <Box flex='1'>
        <div className="join-block__left">
          <div className="join-block__img"></div>
        </div>
        <div className="join-block__right">
          <div className="join-block__text">
            <h3>{t('login.title')}</h3>
            <p>{t('login.desc')}</p>
          </div>
          <Box as='form'>
            <FormControl>
              <FormLabel htmlFor="roomId">Room ID</FormLabel>
              <Input
              isRequired
              type='text'
              id="roomId"
              placeholder="Room ID"
              onChange={(e) => setRoomId(e.target.value)}
              value={roomId}/>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="pass">Password</FormLabel>
              <Input
              isRequired
              type='text'
              id="pass"
              placeholder="Password"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}/>
            </FormControl>
            <Button
              isLoading={isLoading}
              loadingText={t('btn.enter.loading')}
              colorScheme='blue'
              onClick={onEnter}
            >
              {t('btn.enter')}
            </Button>
          </Box>
        </div>
      </Box> */}
      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="login">Login/ID</FormLabel>
                  <Input id="login" type="text" />
                </FormControl>
                <PasswordField />
                <Button colorScheme='blue'>Sign in</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default JoinBlock;