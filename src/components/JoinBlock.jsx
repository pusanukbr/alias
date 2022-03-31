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
import { ColorModeSwitcher } from './ColorModeSwitcher';

function JoinBlock({ onLogin }) {
  const { t } = useTranslation();
  const [roomId, setRoomId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);
  const onEnter = () => {
    if(!roomId || !password) {
      return alert(t('alert.empty'))
    }
    const obj = {
      roomId,
      password
    }
    setLoading(true)
    // await axios.post('/rooms', obj);
    onLogin(obj);
  }
  return (
    <div className="join-block">
      <Stack direction='row' maxW="lg" m={4} spacing={4} align='center' justify='space-between'>
        <Language/>
        <ColorModeSwitcher />
      </Stack>
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
                  <FormLabel htmlFor="login">{t('form.login')}</FormLabel>
                  <Input id="login" type="text" onChange={(e) => setRoomId(e.target.value)} />
                </FormControl>
                <PasswordField onChange={(e) => setPassword(e.target.value)} />
                <Button
                colorScheme='blue'
                isLoading={isLoading}
                loadingText={t('btn.enter.loading')}
                onClick={onEnter}
                >{t('btn.enter')}</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default JoinBlock;