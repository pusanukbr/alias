import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure
} from '@chakra-ui/react';
import * as React from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export default function PasswordField({
  label,
  register,
  name,
  formState: { errors },
  rules,
  ...rest
}) {
  const { t } = useTranslation();
  const { isOpen, onToggle } = useDisclosure();
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="link"
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={() => onToggle()}
            _focus={{ shadow: 'none' }}
            title={!isOpen ? t('form.show.password') : t('form.hide.password')}
          />
        </InputRightElement>
        <Input
          id={name}
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          {...register(name, rules)}
          {...rest}
        />
      </InputGroup>
      <FormErrorMessage>
        {errors[name] && t(errors[name].message, { number: rules[errors[name].type].value })}
      </FormErrorMessage>
    </FormControl>
  );
}
