import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import * as React from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export const PasswordField = ((props) => {
  const { t } = useTranslation();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <FormControl isRequired>
      <FormLabel htmlFor="password">{t('form.password')}</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="link"
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={() => onToggle()}
            _focus={{shadow: 'none'}}
            title={!isOpen ? t('form.show.password') : t('form.hide.password')}
          />
        </InputRightElement>
        <Input
          id="password"
          name="password"
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          required
          {...props}
        />
      </InputGroup>
    </FormControl>
  )
})

PasswordField.displayName = 'PasswordField';